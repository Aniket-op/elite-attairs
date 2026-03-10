import { motion } from "framer-motion";
import trustQualityImg from "@/assets/trust-quality.png";
import trustSatisfactionImg from "@/assets/trust-satisfaction.png";

const trustItems = [
  {
    image: trustQualityImg,
    title: "Unmatched Quality",
    desc: "Top-Notch Fabrics & Craftsmanship",
  },
  {
    image: trustSatisfactionImg,
    title: "100% Satisfaction",
    desc: "Trusted by Thousands of Customers",
  },
];

const TrustSection = () => (
  <section className="py-12">
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex items-center gap-5"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-body text-sm md:text-base font-bold tracking-[0.1em] uppercase text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground mt-0.5">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
