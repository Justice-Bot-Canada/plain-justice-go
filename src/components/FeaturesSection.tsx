import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Calendar, 
  FolderOpen,
  Clock,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Court & Tribunal Locator",
    description: "Find the right location by postal code with filing details and contact information.",
    badge: "Location Services",
    color: "text-blue-600"
  },
  {
    icon: FileText,
    title: "Auto-Filled Forms",
    description: "Smart form completion with guided checklists and guardrails to avoid common errors.",
    badge: "Form Automation",
    color: "text-green-600"
  },
  {
    icon: TrendingUp,
    title: "Merit Score (1-100)",
    description: "Reality-check your position based on facts, law, and precedent. Know your chances.",
    badge: "Case Analysis",
    color: "text-purple-600"
  },
  {
    icon: MessageSquare,
    title: "Plain-Language Explanations",
    description: "Legal sections translated into everyday language. No more confusing legalese.",
    badge: "Translation",
    color: "text-orange-600"
  },
  {
    icon: Calendar,
    title: "Step-by-Step Timelines",
    description: "From start to hearing, including serve/file instructions and important deadlines.",
    badge: "Process Guidance",
    color: "text-indigo-600"
  },
  {
    icon: FolderOpen,
    title: "Evidence Management",
    description: "Organize documents and create clean, professional bundles for submission.",
    badge: "Document Tools",
    color: "text-teal-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Navigate the Legal System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial assessment to final submission, Justice-Bot guides you through every step 
            with tools designed to simplify complex legal processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-trust-light/10 border border-trust/20 rounded-xl p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Built for Self-Represented Litigants
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Justice-Bot was designed specifically for people navigating the legal system 
                  without a lawyer. We focus on practical tools and clear guidance, not legal jargon.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Mobile-optimized for use anywhere",
                  "Ontario coverage with more provinces coming",
                  "Free for early testers",
                  "Affordable tiers after beta"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;