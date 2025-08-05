import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import DrinksSection from "@/components/DrinksSection";
import LocationHours from "@/components/LocationHours";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <MenuHighlights />
      <DrinksSection />
      <LocationHours />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
