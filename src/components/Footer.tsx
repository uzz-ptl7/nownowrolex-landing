import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">
            Come Grab a Bite
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the best street food culture Kigali has to offer. 
            Fresh ingredients, bold flavors, and fair prices await you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
            <Button variant="hero" size="lg" className="px-12">
              Let's Eat Now Now
            </Button>
            <Button variant="street" size="lg" className="px-12">
              Follow Us
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="animate-slide-in-left">
            <img 
              src="/lovable-uploads/b33e4142-daa8-40b6-bbe0-d01d88f6948d.png" 
              alt="Now Now Rolex Logo" 
              className="w-16 h-16 mb-4 hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold text-foreground mb-4">Now Now Rolex</h3>
            <p className="text-muted-foreground leading-relaxed">
              Where street food meets culture. Every bite tells a story.
            </p>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#location" className="text-muted-foreground hover:text-primary transition-colors">Location</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Street Food Avenue</li>
              <li>Kigali Central, Rwanda</li>
              <li>+250 123 456 789</li>
              <li>hello@nownowrolex.rw</li>
            </ul>
          </div>

          <div className="animate-fade-in">
            <h4 className="text-lg font-semibold text-primary mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <span className="sr-only">Facebook</span>
                F
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <span className="sr-only">Instagram</span>
                I
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <span className="sr-only">TikTok</span>
                T
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 Now Now Rolex. All rights reserved. Made with ❤️ in Kigali.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;