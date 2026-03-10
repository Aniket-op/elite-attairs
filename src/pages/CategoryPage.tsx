import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";

const CategoryPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const category = categories.find((c) => c.slug === slug);
    const categoryProducts = slug ? getProductsByCategory(slug) : [];

    if (!category) {
        return (
            <div className="min-h-screen bg-background">
                <AnnouncementBar />
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="font-display text-4xl font-light text-foreground mb-4">
                        Category Not Found
                    </h1>
                    <p className="font-body text-sm text-muted-foreground mb-8">
                        The category you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="luxury-btn">
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Navbar />

            {/* Category Header */}
            <section className="bg-warm-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <nav className="mb-6">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-gold/60 hover:text-gold transition-colors"
                            >
                                <ArrowLeft size={14} />
                                Back to Home
                            </Link>
                        </nav>
                        <h1 className="font-display text-4xl md:text-6xl font-light tracking-wide text-primary-foreground">
                            {category.name}
                        </h1>
                        <p className="mt-4 font-body text-sm tracking-wider text-primary-foreground/50 max-w-lg mx-auto">
                            {category.description}
                        </p>
                        <p className="mt-3 font-body text-[10px] tracking-[0.3em] uppercase text-gold/50">
                            {categoryProducts.length} {categoryProducts.length === 1 ? "Product" : "Products"}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                {categoryProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
                        {categoryProducts.map((product, i) => (
                            <ProductCard key={product.id} product={product} index={i} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="font-body text-sm text-muted-foreground">
                            No products found in this category.
                        </p>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default CategoryPage;
