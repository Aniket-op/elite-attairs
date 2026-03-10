import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-banner.png";
import heroSlide2 from "@/assets/hero-slide2.png";
import heroSlide3 from "@/assets/hero-slide3.png";

const slides = [
  {
    image: heroSlide1,
    alt: "Elegant Indian model in premium ethnic wear",
    headline: <>Elevate<br /><span className="italic font-light">Your Style</span></>,
    subtext: <>Premium Ethnic &amp; Western Wear<br />for Men &amp; Women</>,
    cta: "Shop Now",
  },
  {
    image: heroSlide2,
    alt: "Handsome man in premium sherwani",
    headline: <>Redefine<br /><span className="italic font-light">Elegance</span></>,
    subtext: <>Luxury Sherwanis &amp; Suits<br />Crafted for the Modern Man</>,
    cta: "Shop Men",
  },
  {
    image: heroSlide3,
    alt: "Couple in premium ethnic fashion",
    headline: <>Timeless<br /><span className="italic font-light">Traditions</span></>,
    subtext: <>Bridal &amp; Wedding Collections<br />Designed with Love</>,
    cta: "Shop Collection",
  },
];

const SLIDE_DURATION = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const slide = slides[current];

  return (
    <section className="relative h-[55vh] md:h-[90vh] overflow-hidden bg-warm-black">
      {/* Sliding images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          src={slide.image}
          alt={slide.alt}
          className="absolute inset-0 h-full w-full object-cover object-[75%_top] md:object-top"
        />
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-black/90 via-warm-black/60 via-40% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-warm-black/30 md:from-warm-black/40 md:via-transparent to-transparent pointer-events-none" />

      {/* Text content */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-8 md:px-12 md:max-w-[45%] md:ml-[4%] md:mr-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-light leading-[0.95] text-primary-foreground uppercase">
                {slide.headline}
              </h1>
              <p className="mt-6 max-w-md font-body text-sm md:text-base font-light tracking-wider text-primary-foreground/70 leading-relaxed">
                {slide.subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a href="#" className="luxury-btn-hero">
              {slide.cta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center border border-primary-foreground/30 bg-warm-black/20 backdrop-blur-sm text-primary-foreground/70 hover:bg-warm-black/50 hover:text-primary-foreground transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center border border-primary-foreground/30 bg-warm-black/20 backdrop-blur-sm text-primary-foreground/70 hover:bg-warm-black/50 hover:text-primary-foreground transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative flex items-center justify-center"
          >
            <span
              className={`block h-2 rounded-full transition-all duration-500 ${i === current
                ? "w-8 bg-gold"
                : "w-2 bg-primary-foreground/40 group-hover:bg-primary-foreground/70"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-foreground/10 z-10">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
          className="h-full bg-gold/60"
        />
      </div>
    </section>
  );
};

export default HeroSection;
