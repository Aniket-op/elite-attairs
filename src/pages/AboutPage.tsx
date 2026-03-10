import { motion } from "framer-motion";
import { Leaf, Award, Scissors, Heart } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-banner.png";

const values = [
    {
        icon: <Scissors size={24} />,
        title: "Master Craftsmanship",
        description: "Every garment is meticulously crafted by master artisans who have perfected their skills over generations.",
    },
    {
        icon: <Award size={24} />,
        title: "Uncompromising Quality",
        description: "We source only the finest fabrics and materials, ensuring that every piece from Elite Attire stands the test of time.",
    },
    {
        icon: <Heart size={24} />,
        title: "Heritage Meets Modernity",
        description: "Our designs beautifully blend centuries-old Indian traditions with contemporary aesthetics and modern silhouettes.",
    },
    {
        icon: <Leaf size={24} />,
        title: "Sustainable Practices",
        description: "We are committed to ethical fashion, supporting local weaver communities and minimizing our environmental footprint.",
    },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-warm-black flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src={heroImg}
                        alt="Elite Attire Heritage"
                        className="w-full h-full object-cover object-[75%_top] md:object-top opacity-40 grayscale-[0.3]"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-6xl font-light tracking-wide text-primary-foreground">
                            Our Story
                        </h1>
                        <p className="mt-4 font-body text-sm md:text-base tracking-wider text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
                            Weaving dreams into reality, one stitch at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-4xl px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <img src="/favicon.ico" alt="Elite Attire Logo" className="mx-auto w-16 h-16 opacity-80" />
                    <h2 className="font-display text-3xl md:text-4xl text-foreground font-light leading-snug">
                        Redefining Luxury Ethnic & Western Wear
                    </h2>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Founded with a vision to celebrate internal beauty through external elegance, Elite Attire has become a beacon of premium fashion. We believe that what you wear is an extension of who you are. Our journey began in a small boutique over a decade ago, fueled by a passion for rich textiles, intricate embroideries, and impeccable tailoring.
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                        Today, Elite Attire serves a global clientele, offering a curated selection of bridal lehengas, regal sherwanis, classic western suits, and contemporary festive wear. Each piece in our collection tells a story of heritage, passion, and unparalleled artistry. We don't just create clothes; we create heirlooms meant to be cherished for generations.
                    </p>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="bg-muted py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">What drives us every day</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="h-16 w-16 rounded-full bg-background border border-border flex items-center justify-center text-gold mb-2">
                                    {value.icon}
                                </div>
                                <h3 className="font-body text-sm font-semibold tracking-[0.1em] uppercase text-foreground">
                                    {value.title}
                                </h3>
                                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
