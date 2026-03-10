import { Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = ["Women", "Men", "New Arrivals", "Sale"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_2px_20px_-4px_hsl(var(--gold)/0.15)] border-b border-gold/10"
          : "bg-background border-b border-border"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="font-display text-2xl md:text-3xl font-semibold tracking-[0.15em] text-foreground leading-none">
            ELITE ATTIRE
          </span>
        </a>

        {/* Desktop Nav with dividers */}
        <ul className="hidden lg:flex items-center gap-0">
          {navLinks.map((link, i) => (
            <li key={link} className="flex items-center">
              <a
                href="#"
                className="relative font-body text-[11px] font-medium tracking-[0.2em] uppercase text-foreground transition-colors hover:text-gold group px-5"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
              {i < navLinks.length - 1 && (
                <span className="text-muted-foreground/40 text-xs">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="hidden md:flex items-center gap-1.5 text-foreground hover:text-gold transition-colors duration-300">
            <User size={17} strokeWidth={1.5} />
            <span className="font-body text-[10px] tracking-[0.15em] uppercase">Login</span>
          </a>
          <a href="#" className="hidden md:flex items-center gap-1.5 text-foreground hover:text-gold transition-colors duration-300">
            <Heart size={17} strokeWidth={1.5} />
            <span className="font-body text-[10px] tracking-[0.15em] uppercase">Wishlist</span>
          </a>
          <a href="#" className="relative flex items-center gap-1.5 text-foreground hover:text-gold transition-colors duration-300">
            <ShoppingBag size={17} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[8px] font-bold text-accent-foreground">
              0
            </span>
          </a>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 pb-6 animate-fade-in">
          <ul className="flex flex-col gap-5 pt-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors">
                  {link}
                </a>
              </li>
            ))}
            <li className="border-t border-border pt-4">
              <a href="#" className="flex items-center gap-2 font-body text-sm tracking-wider uppercase text-foreground">
                <User size={16} /> Login
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 font-body text-sm tracking-wider uppercase text-foreground">
                <Heart size={16} /> Wishlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
