import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Street Food Culture
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vibe</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Now Now Rolex brings authentic street food culture to life with bold flavors, 
                creative drinks, and a community atmosphere. We're where local meets craft, 
                tradition meets innovation.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-foreground font-medium">Fresh ingredients daily</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-glow-pulse"></div>
                  <span className="text-foreground font-medium">Local craft partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse"></div>
                  <span className="text-foreground font-medium">Fair prices, big flavors</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-bounce-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-lg rounded-lg"></div>
              <Card className="relative p-8 bg-gradient-card border-primary/20 shadow-glow">
                <h3 className="text-3xl font-bold text-primary mb-4">What Makes Us Different</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're not just another food spot. We're a cultural hub where street food 
                  traditions get a modern twist, craft beers flow freely, and creative cocktails 
                  surprise your taste buds. Every visit is an adventure.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;