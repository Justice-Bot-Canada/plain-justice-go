import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/justice-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-background via-trust-light/5 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Legal clarity</span>
                <br />
                <span className="text-primary">without the noise</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Describe your legal situation in plain language and get smart guidance, 
                auto-filled forms, and step-by-step help navigating Ontario's courts and tribunals.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm mt-4">
                "Everyone has the right to life, liberty and security of the person and the right not to be deprived thereof except in accordance with the principles of fundamental justice." — Charter of Rights and Freedoms, Section 7
              </blockquote>
            </div>

            <div className="space-y-3">
              {[
                "Smart triage to the right venue",
                "Auto-filled legal forms",
                "Merit score & reality check",
                "Plain-language explanations"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group">
                Start Your Case Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <p className="text-sm text-foreground">
                <strong>Disclaimer:</strong> Justice-Bot isn't a law firm and doesn't provide legal advice. 
                It's a tool to help you prepare, file, and understand your options.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Modern courthouse representing legal clarity and justice"
              className="relative rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;