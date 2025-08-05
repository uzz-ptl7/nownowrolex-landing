import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-street-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">{/* Added pt-16 for header space */}
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="text-secondary animate-bounce-in">Now Now</span>
          <br />
          <span className="text-primary bg-gradient-accent bg-clip-text text-transparent animate-slide-in-left">
            ROLEX
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium max-w-2xl mx-auto animate-fade-in">
          Street food, unique beers, and creative cocktails at fair prices
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
          <Button variant="hero" size="lg" className="px-8 py-6">
            See Menu
          </Button>
          <Button variant="street" size="lg" className="px-8 py-6">
            Visit Us
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default Hero;