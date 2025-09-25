/* Justice-Bot frontend wiring (no build tools)
   - Reads /config.json
   - Supabase auth (sign up/in/out/reset)
   - Calls your API via /api/* with Bearer token
   - Optional PayPal buttons if PAYPAL_CLIENT_ID + #paypal-container present
*/

(async () => {
  // ---------- small DOM helpers ----------
  const $id = (id) => document.getElementById(id);
  const pick = (...ids) => ids.map($id).find(Boolean) || null; // first existing element
  const setText = (el, val) => { if (el) el.textContent = typeof val === 'string' ? val : JSON.stringify(val, null, 2); };
  const setHtml = (el, html) => { if (el) el.innerHTML = html; };

  // Panels (support both the "dev.html" ids and the newer ids)
  const elEmail     = pick('email', 'authEmail');
  const elPassword  = pick('password', 'authPassword');
  const btnSignUp   = pick('btnSignUp', 'signup');
  const btnSignIn   = pick('btnSignIn', 'signin');
  const btnSignOut  = pick('btnSignOut', 'signout');
  const btnReset    = pick('btnResetPassword', 'reset');
  const btnShowSess = pick('btnShowSession', 'showSession');

  const btnHealth   = pick('btnGetHealth', 'ping');
  const btnWhoami   = pick('btnGetWhoami', 'whoami');
  const btnEnts     = pick('btnGetEntitlements', 'getEnt');

  const panelEnv    = $id('env');          // dev panel (optional)
  const outSession  = pick('session', 'authlog');
  const outApi      = pick('apiResponse', 'apilog');
  const outLog      = $id('log');
  const cfgUrl      = $id('cfg-url');
  const cfgApi      = $id('cfg-api');
  const cfgPp       = $id('cfg-pp');
  const paypalWrap  = $id('paypal-container');
  const paypalNote  = $id('paypal-note');
  const aSupport    = $id('supportEmail');

  const logMsg = (msg) => setText(outLog, msg);

  // ---------- 1) Load config ----------
  let cfg = {};
  try {
    cfg = await fetch('/config.json', { cache: 'no-cache' }).then(r => r.json());
  } catch (e) {
    console.warn('Could not load /config.json', e);
  }
  // expose for the little env box in dev.html
  window.env = cfg;

  const SUPABASE_URL = cfg.SUPABASE_URL || '';
  const ANON_KEY     = cfg.SUPABASE_ANON_KEY || '';
  const PAYPAL_ID    = cfg.PAYPAL_CLIENT_ID || '';
  let   API_BASE     = cfg.API_BASE_URL || '/api';

  // You can force the Worker URL if testing on *.pages.dev:
  // if (location.hostname.endsWith('.pages.dev')) {
  //   API_BASE = 'https://jb-api-proxy.smartdisputecanada.workers.dev';
  // }

  // show env in either style of page
  if (cfgUrl) setText(cfgUrl, SUPABASE_URL || '(missing)');
  if (cfgApi) setText(cfgApi, API_BASE);
  if (cfgPp)  setText(cfgPp, PAYPAL_ID ? '(set)' : '(missing)');

  if (panelEnv) {
    setHtml(panelEnv,
      `SUPABASE_URL: <code>${SUPABASE_URL || '(missing)'}</code><br>` +
      `API_BASE_URL: <code>${API_BASE}</code><br>` +
      `PAYPAL_CLIENT_ID: <code>${PAYPAL_ID ? '(set)' : '(missing)'}</code>`
    );
  }
  if (cfg.SUPPORT_EMAIL && aSupport) {
    aSupport.textContent = cfg.SUPPORT_EMAIL;
    aSupport.href = `mailto:${cfg.SUPPORT_EMAIL}`;
  }

  if (!SUPABASE_URL || !ANON_KEY) {
    logMsg('Missing Supabase config in /config.json');
  }

  // ---------- 2) Supabase client (UMD from CDN adds window.supabase) ----------
  if (!window.supabase) {
    console.error('Supabase CDN not loaded. Add <script src="https://unpkg.com/@supabase/supabase-js@2"></script> before this script.');
    return;
  }
  const sb = window.supabase.createClient(SUPABASE_URL, ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });

  // keep session panel updated
  const refreshSessionPanel = async () => {
    try {
      const { data } = await sb.auth.getSession();
      setText(outSession, data?.session || '(no session)');
    } catch (e) {
      setText(outSession, String(e));
    }
  };
  sb.auth.onAuthStateChange((_evt, _session) => refreshSessionPanel());
  await refreshSessionPanel();

  // ---------- 3) Auth actions ----------
  const getCreds = () => ({
    email: (elEmail && elEmail.value || '').trim(),
    password: (elPassword && elPassword.value || '')
  });

  btnSignUp && (btnSignUp.onclick = async () => {
    const { email, password } = getCreds();
    if (!email || !password) return logMsg('Enter email and password first.');
    const { data, error } = await sb.auth.signUp({ email, password });
    logMsg(error ? error.message : 'Sign-up email sent (check inbox).');
    await refreshSessionPanel();
  });

  btnSignIn && (btnSignIn.onclick = async () => {
    const { email, password } = getCreds();
    if (!email || !password) return logMsg('Enter email and password first.');
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    logMsg(error ? error.message : 'Signed in.');
    await refreshSessionPanel();
  });

  btnSignOut && (btnSignOut.onclick = async () => {
    const { error } = await sb.auth.signOut();
    logMsg(error ? error.message : 'Signed out.');
    await refreshSessionPanel();
  });

  btnReset && (btnReset.onclick = async () => {
    const email = elEmail && elEmail.value.trim();
    if (!email) return logMsg('Enter your email first.');
    const redirectTo = location.origin; // adjust if you want a different return URL
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo });
    logMsg(error ? error.message : 'Reset email sent (check inbox).');
  });

  btnShowSess && (btnShowSess.onclick = refreshSessionPanel);

  // ---------- 4) Helper to call API through Worker with Bearer token ----------
  async function callApi(path, { method = 'GET', body, headers } = {}) {
    const token = (await sb.auth.getSession()).data.session?.access_token;
    const h = new Headers(headers || {});
    if (token) h.set('Authorization', `Bearer ${token}`);
    if (body && !h.has('Content-Type')) h.set('Content-Type', 'application/json');

    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: h,
      body: body ? JSON.stringify(body) : undefined
    });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }
    return { status: res.status, body: data };
  }

  // ---------- 5) API test buttons ----------
  btnHealth && (btnHealth.onclick = async () => {
    try { setText(outApi, await callApi('/health')); }
    catch (e) { setText(outApi, String(e)); }
  });

  btnWhoami && (btnWhoami.onclick = async () => {
    try { setText(outApi, await callApi('/whoami')); }
    catch (e) { setText(outApi, String(e)); }
  });

  btnEnts && (btnEnts.onclick = async () => {
    try { setText(outApi, await callApi('/entitlements')); }
    catch (e) { setText(outApi, String(e)); }
  });

  // ---------- 6) Optional: PayPal buttons ----------
  if (paypalWrap) {
    if (!PAYPAL_ID) {
      paypalNote && (paypalNote.textContent = 'No PAYPAL_CLIENT_ID in config.json — PayPal disabled.');
    } else {
      const sdk = document.createElement('script');
      sdk.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(PAYPAL_ID)}&currency=CAD&intent=capture&components=buttons`;
      sdk.onload = renderPayPalButtons;
      sdk.onerror = () => { paypalNote && (paypalNote.textContent = 'Failed to load PayPal SDK.'); };
      document.head.appendChild(sdk);
    }
  }

  function renderPayPalButtons() {
    // global paypal from SDK
    // eslint-disable-next-line no-undef
    paypal.Buttons({
      async createOrder() {
        const r = await callApi('/payments/create-order', {
          method: 'POST',
          body: { productId: 'doc_small' }
        });
        if (r.status !== 200 || !r.body?.id) {
          throw new Error('Create order failed: ' + JSON.stringify(r.body));
        }
        return r.body.id;
      },
      async onApprove(data) {
        const r = await callApi('/payments/capture-order', {
          method: 'POST',
          body: { orderId: data.orderID, productId: 'doc_small' }
        });
        if (r.status !== 200) {
          alert('Payment error: ' + JSON.stringify(r.body));
          return;
        }
        alert('Payment captured! Entitlement granted.');
        btnEnts && btnEnts.click();
      },
      onError(err) {
        alert('Payment error: ' + err);
      }
    }).render('#paypal-container');
  }
})();
