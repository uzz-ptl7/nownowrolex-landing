import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import beersImage from "@/assets/craft-beers.jpg";
import cocktailsImage from "@/assets/cocktails.jpg";

const DrinksSection = () => {
  const beers = [
    "Mutzig", "Primus", "Amstel", "Turbo King", "Skol"
  ];

  const cocktails = [
    "Kigali Sunset", "Street Mule", "Rolex Martini", "Urban Mojito", "Spice Route"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Drinks & Beers
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Local brews meet creative cocktails - all at prices that won't break the bank
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Beers Section */}
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-slide-in-left overflow-hidden">
            <div className="relative h-64">
              <img 
                src={beersImage} 
                alt="Craft Beers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <h3 className="text-3xl font-bold text-primary mb-2">Local & Craft Beers</h3>
                <p className="text-muted-foreground">Fresh, cold, and authentic</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {beers.map((beer, index) => (
                  <div 
                    key={beer} 
                    className="flex items-center gap-2 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{beer}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <span className="text-sm text-muted-foreground mb-4 block">
                  Starting from RWF 2,000
                </span>
                <Button variant="street" className="w-full">
                  See Beer Menu
                </Button>
              </div>
            </div>
          </Card>

          {/* Cocktails Section */}
          <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-slide-in-left overflow-hidden">
            <div className="relative h-64">
              <img 
                src={cocktailsImage} 
                alt="Creative Cocktails"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <h3 className="text-3xl font-bold text-secondary mb-2">Creative Cocktails</h3>
                <p className="text-muted-foreground">Bold flavors, fair prices</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 gap-3 mb-6">
                {cocktails.map((cocktail, index) => (
                  <div 
                    key={cocktail} 
                    className="flex items-center gap-2 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-foreground font-medium">{cocktail}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <span className="text-sm text-muted-foreground mb-4 block">
                  Starting from RWF 4,000
                </span>
                <Button variant="street" className="w-full">
                  See Cocktail Menu
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DrinksSection;