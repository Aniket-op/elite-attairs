import { motion } from "framer-motion";

const AnnouncementBar = () => (
  <div className="bg-warm-black py-2.5 overflow-hidden">
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center font-body text-[10px] md:text-xs tracking-[0.25em] text-gold-light/90"
    >
      ✦&nbsp;&nbsp;Free Shipping&nbsp;&nbsp;|&nbsp;&nbsp;Secure Payments&nbsp;&nbsp;|&nbsp;&nbsp;Hassle-Free Returns&nbsp;&nbsp;✦
    </motion.p>
  </div>
);

export default AnnouncementBar;
