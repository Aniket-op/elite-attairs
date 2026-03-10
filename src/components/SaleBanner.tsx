import { motion } from "framer-motion";
import saleBg from "@/assets/sale-banner.png";

const SaleBanner = () => (
  <section className="relative h-48 md:h-56 overflow-hidden">
    <img src={saleBg} alt="Mid-season sale" className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-warm-black/60" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex items-baseline justify-center gap-3 md:gap-4 mb-5">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-primary-foreground uppercase">
            Mid-Season Sale
          </h2>
          <span className="bg-primary-foreground/90 text-warm-black px-3 py-1 font-body text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">
            Up to 50% Off
          </span>
        </div>
        <a
          href="#"
          className="inline-block border-2 border-primary-foreground/80 bg-transparent text-primary-foreground px-8 py-2.5 text-[10px] font-body font-semibold tracking-[0.25em] uppercase transition-all duration-500 hover:bg-primary-foreground hover:text-warm-black"
        >
          Shop Sale
        </a>
      </motion.div>
    </div>
  </section>
);

export default SaleBanner;
