import { Truck, RotateCcw, Shield, Award, Gift } from "lucide-react";

const features = [
  { icon: Award, label: "About Us" },
  { icon: Truck, label: "Free Shipping" },
  { icon: RotateCcw, label: "Easy Returns" },
  { icon: Shield, label: "Secure Payment" },
  { icon: Gift, label: "Premium Quality" },
];

const Footer = () => (
  <footer className="bg-background border-t border-border">
    <div className="mx-auto max-w-7xl px-6 py-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Feature strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0">
          {features.map((f, i) => (
            <span key={f.label} className="flex items-center">
              <a
                href="#"
                className="flex items-center gap-1.5 font-body text-[10px] tracking-[0.15em] uppercase text-foreground/70 hover:text-gold transition-colors duration-300 px-3"
              >
                <f.icon size={13} strokeWidth={1.5} />
                {f.label}
              </a>
              {i < features.length - 1 && (
                <span className="hidden md:inline text-muted-foreground/30 text-xs">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-foreground/50 hover:text-gold transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-foreground/50 hover:text-gold transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-foreground/50 hover:text-gold transition-colors duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
