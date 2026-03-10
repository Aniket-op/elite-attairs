import { motion } from "framer-motion";
import womenImg from "@/assets/women-collection.png";
import menImg from "@/assets/men-collection.png";
import newArrivalsImg from "@/assets/new-arrivals.png";

const categories = [
  { title: "Women's Collection", image: womenImg },
  { title: "Men's Collection", image: menImg },
  { title: "New Arrivals", image: newArrivalsImg },
];

const CategorySection = () => (
  <section className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {categories.map((cat, i) => (
        <motion.a
          key={cat.title}
          href="#"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          className="group relative block aspect-[4/3] overflow-hidden"
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="h-full w-full object-cover hover-zoom"
          />
          <div className="card-overlay-hover" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
            <h3 className="font-body text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-primary-foreground">
              {cat.title}
            </h3>
            <div className="mt-2 h-[1.5px] w-0 bg-gold transition-all duration-700 group-hover:w-16" />
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default CategorySection;
