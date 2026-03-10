import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(product.id);

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <Link
                to={`/product/${product.id}`}
                className="group block"
            >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-card mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Wishlist Button */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product);
                        }}
                        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all duration-300 ${isWishlisted
                                ? "bg-white/90 text-gold hover:bg-white"
                                : "bg-white/30 text-foreground hover:bg-white/80 hover:text-gold"
                            }`}
                    >
                        <Heart size={16} strokeWidth={isWishlisted ? 2 : 1.5} className={isWishlisted ? "fill-gold" : ""} />
                    </button>

                    {/* Tags */}
                    {product.tags && product.tags.length > 0 && (
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`inline-block px-2.5 py-1 text-[9px] font-body font-bold tracking-[0.15em] uppercase ${tag.includes("Off")
                                        ? "bg-red-600 text-white"
                                        : tag === "Bestseller"
                                            ? "bg-gold text-accent-foreground"
                                            : tag === "New Arrival" || tag === "Trending"
                                                ? "bg-foreground text-primary-foreground"
                                                : "bg-warm-black/80 text-primary-foreground"
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-warm-black/0 group-hover:bg-warm-black/10 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                        <span className="bg-primary-foreground/90 text-foreground px-6 py-2 text-[10px] font-body font-semibold tracking-[0.2em] uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            View Details
                        </span>
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                    <h3 className="font-body text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-foreground group-hover:text-gold transition-colors duration-300 line-clamp-1">
                        {product.name}
                    </h3>
                    {product.fabric && (
                        <p className="font-body text-[10px] tracking-wider text-muted-foreground">
                            {product.fabric}
                        </p>
                    )}
                    <div className="flex items-center gap-2.5">
                        <span className="font-body text-sm font-bold text-foreground">
                            ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        {product.originalPrice && (
                            <>
                                <span className="font-body text-xs text-muted-foreground line-through">
                                    ₹{product.originalPrice.toLocaleString("en-IN")}
                                </span>
                                <span className="font-body text-[10px] font-bold text-red-600">
                                    {discount}% OFF
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
