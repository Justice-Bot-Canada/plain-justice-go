import { Scale, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Justice-Bot</h1>
              <p className="text-xs text-muted-foreground">Legal clarity, simplified</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#triage" className="text-foreground hover:text-primary transition-colors">Smart Triage</a>
            <a href="#locator" className="text-foreground hover:text-primary transition-colors">Court Locator</a>
            <a href="#forms" className="text-foreground hover:text-primary transition-colors">Forms</a>
            <a href="#merit" className="text-foreground hover:text-primary transition-colors">Merit Score</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="cta">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;