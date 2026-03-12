import { Heart, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartSheet } from "./CartSheet";
import { WishlistSheet } from "./WishlistSheet";

const navLinks = [
  { 
    label: "Men", 
    slug: "men",
    subcategories: ["Jacket", "Coats", "Sweatshirts", "Hoodies", "T-Shirts", "Lowers"]
  },
  { 
    label: "Women", 
    slug: "women",
    subcategories: ["Jacket", "Coats", "Sweatshirts", "Hoodies", "Cardigans"]
  },
  { 
    label: "Kids", 
    slug: "kids",
    subcategories: ["Jacket", "Coats", "Sweaters"]
  },
  { 
    label: "Accessories", 
    slug: "accessories",
    subcategories: ["Thermal", "Socks", "Caps", "Mufflers", "Hand Gloves"]
  },
];

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
        <Link to="/" className="flex items-center">
          <span className="font-display text-2xl md:text-3xl font-semibold tracking-[0.15em] text-foreground leading-none">
            ELITE ATTIRE
          </span>
        </Link>

        {/* Desktop Nav with dividers */}
        <ul className="hidden lg:flex items-center gap-0">
          {navLinks.map((link, i) => (
            <li key={link.slug} className="relative flex items-center group">
              <div className="py-4">
                  <Link
                    to={`/category/${link.slug}`}
                    className="relative font-body text-[11px] font-medium tracking-[0.2em] uppercase text-foreground transition-colors hover:text-gold group-hover:text-gold px-5"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.subcategories && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 bg-background border border-border shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        {link.subcategories.map((sub, j) => (
                          <Link
                            key={j}
                            to={`/category/${link.slug}?sub=${sub.toLowerCase()}`}
                            className="block px-6 py-2.5 font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-gold hover:bg-muted/50 transition-colors"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
              {i < navLinks.length - 1 && (
                <span className="text-muted-foreground/40 text-xs py-4">|</span>
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
          <WishlistSheet />
          <CartSheet />
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
        <div className="lg:hidden border-t border-border bg-background px-6 pb-6 animate-fade-in max-h-[70vh] overflow-y-auto">
          <ul className="flex flex-col gap-5 pt-6">
            {navLinks.map((link) => (
              <li key={link.slug} className="flex flex-col gap-3">
                <Link
                  to={`/category/${link.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm tracking-[0.2em] uppercase text-foreground hover:text-gold transition-colors font-semibold"
                >
                  {link.label}
                </Link>
                {link.subcategories && (
                  <div className="flex flex-col gap-2 pl-4 border-l border-border">
                    {link.subcategories.map((sub, j) => (
                      <Link
                        key={j}
                        to={`/category/${link.slug}?sub=${sub.toLowerCase()}`}
                        onClick={() => setMobileOpen(false)}
                        className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="border-t border-border pt-4 mt-2">
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
