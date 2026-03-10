import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => (
  <section className="relative h-[75vh] md:h-[90vh] overflow-hidden">
    <motion.img
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      src={heroBanner}
      alt="Elegant Indian model in premium ethnic wear"
      className="h-full w-full object-cover object-top"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-warm-black/70 via-warm-black/30 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-warm-black/30 via-transparent to-transparent" />

    <div className="absolute inset-0 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-light leading-[0.95] text-primary-foreground uppercase">
            Elevate<br />
            <span className="italic font-light">Your Style</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-sm md:text-base font-light tracking-wider text-primary-foreground/70 leading-relaxed">
            Premium Ethnic & Western Wear<br />for Men & Women
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10"
        >
          <a href="#" className="luxury-btn-hero">
            Shop Now
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
