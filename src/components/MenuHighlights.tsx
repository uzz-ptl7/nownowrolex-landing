import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import rolexImage from "@/assets/rolex-dish.jpg";

const MenuHighlights = () => {
  const menuItems = [
    {
      name: "Original Rolex",
      description: "Fresh chapati rolled with scrambled eggs, tomatoes, and onions",
      price: "UGX 3,000",
      image: rolexImage,
      popular: true
    },
    {
      name: "Deluxe Rolex",
      description: "Premium version with avocado, cheese, and extra vegetables",
      price: "UGX 5,000",
      image: rolexImage,
      popular: false
    },
    {
      name: "Spicy Rolex",
      description: "Heat lovers' choice with jalapeños and special hot sauce",
      price: "UGX 3,500",
      image: rolexImage,
      popular: true
    },
    {
      name: "Veggie Rolex",
      description: "Plant-based delight with mixed vegetables and herbs",
      price: "UGX 2,800",
      image: rolexImage,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Menu Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our signature Rolexes - each one crafted with love and bursting with flavor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <Card 
              key={item.name} 
              className={`group bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-bounce-in overflow-hidden ${
                item.popular ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.popular && (
                <div className="bg-gradient-accent text-background text-sm font-bold px-3 py-1 absolute top-4 right-4 rounded-full z-10">
                  Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{item.price}</span>
                  <Button variant="street" size="sm" className="text-sm">
                    Order
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button variant="hero" size="lg" className="px-12">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;