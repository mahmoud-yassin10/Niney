import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-sticky ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20 px-4 md:px-5">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Niney Yassin"
          title="Niney Yassin"
          className="font-display text-xl md:text-2xl text-primary hover:text-gold transition-colors"
        >
          {siteConfig.mark}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-2.5 py-2 text-sm font-body whitespace-nowrap transition-colors rounded-lg hover:bg-secondary/50 ${
                location.pathname === item.href
                  ? "text-gold"
                  : "text-primary/80 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden text-primary"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-background/98 backdrop-blur-lg border-t border-border mobile-menu">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-3 text-base font-body transition-colors rounded-lg hover:bg-secondary/50 ${
                  location.pathname === item.href
                    ? "text-gold bg-secondary/30"
                    : "text-primary/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
