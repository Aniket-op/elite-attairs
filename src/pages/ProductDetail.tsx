import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Ruler, Palette, Shirt, MessageCircle, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, getWhatsAppLink, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import EnquiryForm from "@/components/EnquiryForm";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(id) : undefined;
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const { addItem } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    // Get related products (same category, excluding current)
    const relatedProducts = product
        ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
        : [];

    if (!product) {
        return (
            <div className="min-h-screen bg-background">
                <AnnouncementBar />
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="font-display text-4xl font-light text-foreground mb-4">
                        Product Not Found
                    </h1>
                    <p className="font-body text-sm text-muted-foreground mb-8">
                        The product you're looking for doesn't exist.
                    </p>
                    <Link to="/" className="luxury-btn">
                        Back to Home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const whatsappLink = getWhatsAppLink(product);
    const isWishlisted = isInWishlist(product.id);

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size first");
            return;
        }
        addItem(product, selectedSize, 1);
    };

    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Navbar />

            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-6 py-4">
                <nav className="flex items-center gap-2 font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                    <span>/</span>
                    <Link to={`/category/${product.category}`} className="hover:text-gold transition-colors">
                        {product.category === "new-arrivals" ? "New Arrivals" : product.category === "sale" ? "Sale" : `${product.category}'s`}
                    </Link>
                    <span>/</span>
                    <span className="text-foreground">{product.name}</span>
                </nav>
            </div>

            {/* Product Section */}
            <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[3/4] overflow-hidden bg-card"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                        {product.tags && product.tags.length > 0 && (
                            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`inline-block px-3 py-1.5 text-[9px] font-body font-bold tracking-[0.15em] uppercase ${tag.includes("Off")
                                            ? "bg-red-600 text-white"
                                            : tag === "Bestseller"
                                                ? "bg-gold text-accent-foreground"
                                                : "bg-foreground text-primary-foreground"
                                            }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Back link */}
                        <Link
                            to={`/category/${product.category}`}
                            className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors mb-6 w-fit"
                        >
                            <ArrowLeft size={14} />
                            Back to Collection
                        </Link>

                        {/* Name */}
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground leading-tight">
                            {product.name}
                        </h1>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 mt-5">
                            <span className="font-display text-2xl md:text-3xl font-light text-foreground">
                                ₹{product.price.toLocaleString("en-IN")}
                            </span>
                            {product.originalPrice && (
                                <>
                                    <span className="font-body text-base text-muted-foreground line-through">
                                        ₹{product.originalPrice.toLocaleString("en-IN")}
                                    </span>
                                    <span className="font-body text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5">
                                        {discount}% OFF
                                    </span>
                                </>
                            )}
                        </div>
                        <p className="font-body text-[10px] tracking-wider text-muted-foreground mt-1">
                            (Inclusive of all taxes)
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-border my-6" />

                        {/* Description */}
                        <p className="font-body text-sm leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>

                        {/* Details grid */}
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            {product.fabric && (
                                <div className="flex items-center gap-2.5">
                                    <Shirt size={16} className="text-gold" strokeWidth={1.5} />
                                    <div>
                                        <p className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Fabric</p>
                                        <p className="font-body text-xs font-medium text-foreground">{product.fabric}</p>
                                    </div>
                                </div>
                            )}
                            {product.color && (
                                <div className="flex items-center gap-2.5">
                                    <Palette size={16} className="text-gold" strokeWidth={1.5} />
                                    <div>
                                        <p className="font-body text-[9px] tracking-[0.2em] uppercase text-muted-foreground">Color</p>
                                        <p className="font-body text-xs font-medium text-foreground">{product.color}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-border my-6" />

                        {/* Sizes */}
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Ruler size={16} className="text-gold" strokeWidth={1.5} />
                                <span className="font-body text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground">
                                    Select Size
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[48px] px-4 py-2.5 border text-[11px] font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 ${selectedSize === size
                                            ? "border-gold bg-gold text-accent-foreground"
                                            : "border-border text-foreground hover:border-gold"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 space-y-3">
                            {/* Primary Cart/Checkout Row */}
                            <div className="flex gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 flex items-center justify-center gap-2 bg-foreground text-primary-foreground hover:bg-gold hover:text-accent-foreground px-6 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
                                >
                                    <ShoppingBag size={18} strokeWidth={1.5} />
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product)}
                                    className={`flex items-center justify-center w-14 border transition-all duration-300 ${isWishlisted
                                            ? "border-gold bg-gold/5 text-gold"
                                            : "border-border bg-background text-foreground hover:border-gold hover:text-gold"
                                        }`}
                                    aria-label="Toggle Wishlist"
                                >
                                    <Heart
                                        size={20}
                                        strokeWidth={isWishlisted ? 2 : 1.5}
                                        className={isWishlisted ? "fill-gold" : ""}
                                    />
                                </button>
                            </div>

                            {/* Combined Inquiry Button */}
                            <button
                                onClick={() => {
                                    document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex items-center justify-center gap-3 w-full border border-gold text-gold hover:bg-gold hover:text-accent-foreground px-8 py-3 font-body text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
                            >
                                <MessageCircle size={16} strokeWidth={2} />
                                Inquire / Custom Order
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-8 grid grid-cols-3 gap-3">
                            {[
                                "Free Shipping",
                                "Secure Payments",
                                "Easy Returns",
                            ].map((badge) => (
                                <div
                                    key={badge}
                                    className="text-center py-3 border border-border"
                                >
                                    <span className="font-body text-[9px] tracking-[0.15em] uppercase text-muted-foreground">
                                        {badge}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="mx-auto max-w-7xl px-6 py-16 md:py-20 border-t border-border">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">You May Also Like</h2>
                        <p className="section-subtitle">From the Same Collection</p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
                        {relatedProducts.map((p, i) => (
                            <ProductCard key={p.id} product={p} index={i} />
                        ))}
                    </div>
                </section>
            )}

            {/* Product Enquiry Section */}
            <section id="enquiry-section" className="mx-auto max-w-7xl px-6 py-16 md:py-20 border-t border-border">
                <EnquiryForm prefilledProduct={product} />
            </section>

            <Footer />
        </div>
    );
};

export default ProductDetail;
