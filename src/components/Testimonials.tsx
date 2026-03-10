import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "The quality of their lehengas is absolutely stunning. I wore their bridal collection on my wedding and received so many compliments!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    location: "Delhi",
    text: "Best sherwanis I've ever purchased. The fabric quality is premium and the fit is impeccable. Elite Attire is now my go-to brand.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "Fast shipping, beautiful packaging, and the saree was even more gorgeous in person. Truly a luxury shopping experience!",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 bg-warm-black">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-6 mb-3">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold/30" />
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-gold/60">✦</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold/30" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-light tracking-wide text-primary-foreground">
          What Our Customers Say
        </h2>
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-gold/50 mt-3">
          Trusted by Thousands Across India
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="border border-gold/10 bg-charcoal/50 p-8 transition-all duration-500 hover:border-gold/25"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="font-body text-sm leading-relaxed text-primary-foreground/70 italic mb-6">
              "{t.text}"
            </p>
            <div>
              <p className="font-body text-xs font-semibold tracking-wider uppercase text-primary-foreground/90">
                {t.name}
              </p>
              <p className="font-body text-[10px] tracking-wider text-gold/50 mt-0.5">
                {t.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
