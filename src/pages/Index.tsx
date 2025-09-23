import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TriageSection from "@/components/TriageSection";
import FeaturesSection from "@/components/FeaturesSection";
import MeritScoreDemo from "@/components/MeritScoreDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TriageSection />
        <FeaturesSection />
        <MeritScoreDemo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
