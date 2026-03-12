import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import traditionalImg from "@/assets/traditional-elegance.png";
import westernImg from "@/assets/classic-western.png";
import bridalImg from "@/assets/bridal-couture.png";
import casualImg from "@/assets/smart-casuals.png";

const collections = [
  { title: "Men", slug: "men", image: westernImg },
  { title: "Women", slug: "women", image: traditionalImg },
  { title: "Kids", slug: "kids", image: casualImg }, // Placeholder image
  { title: "Accessories", slug: "accessories", image: bridalImg }, // Placeholder image
];

const FeaturedCollections = () => (
  <section className="mx-auto max-w-7xl px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <h2 className="section-title">Featured Collections</h2>
      <p className="section-subtitle">Shop The Latest Trends</p>
    </motion.div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {collections.map((col, i) => (
        <motion.div
          key={col.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative block aspect-[3/4] overflow-hidden"
        >
          <Link to={`/category/${col.slug}`} className="block w-full h-full">
            <img
              src={col.image}
              alt={col.title}
              className="h-full w-full object-cover hover-zoom"
            />
            <div className="card-overlay-hover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-body text-sm md:text-base font-semibold tracking-[0.1em] uppercase text-primary-foreground mb-3">
                {col.title}
              </h3>
              <span className="inline-block border border-primary-foreground/60 px-5 py-2 text-[9px] font-body font-medium tracking-[0.2em] uppercase text-primary-foreground/90 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:text-accent-foreground">
                Shop Now
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeaturedCollections;
