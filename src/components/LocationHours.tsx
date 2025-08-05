import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LocationHours = () => {
  const hours = [
    { day: "Monday - Thursday", time: "11:00 AM - 11:00 PM" },
    { day: "Friday - Saturday", time: "11:00 AM - 1:00 AM" },
    { day: "Sunday", time: "12:00 PM - 10:00 PM" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the city - come hungry, leave happy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="animate-slide-in-left">
            <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden">
              <div className="h-80 bg-muted relative">
                {/* Placeholder for Google Maps */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-background" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-foreground font-semibold">Kigali Central</p>
                    <p className="text-muted-foreground">Click to view on Google Maps</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Location</h3>
                <p className="text-muted-foreground mb-4">
                  123 Street Food Avenue<br />
                  Kigali Central, Rwanda<br />
                  Near Kimisagara Market
                </p>
                
                <Button variant="street" className="w-full">
                  Get Directions
                </Button>
              </div>
            </Card>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-6 animate-bounce-in">
            <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 p-6">
              <h3 className="text-2xl font-bold text-primary mb-6">Opening Hours</h3>
              
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div 
                    key={schedule.day} 
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-primary font-semibold">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-500 p-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">Contact Info</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">+250 123 456 789</p>
                    <p className="text-sm text-muted-foreground">Call for reservations</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">hello@nownowrolex.rw</p>
                    <p className="text-sm text-muted-foreground">Drop us a line</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="flex-1">
                    Facebook
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    Instagram
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    TikTok
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;