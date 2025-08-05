import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Drinks", href: "#drinks" },
    { label: "Location", href: "#location" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Now Now Rolex Logo" 
              className="w-10 h-10 hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-primary">Now Now Rolex</span>
          </div>

          {/* Desktop Navigation - Large screens only */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - Large screens only */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Call Us
            </Button>
            <Button variant="street" size="sm">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button - Small and Medium screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Small and Medium screens */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md animate-fade-in">
            <nav className="py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 font-medium rounded-lg"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="px-4 pt-4 space-y-2">
                <Button variant="ghost" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Call Us
                </Button>
                <Button variant="street" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;