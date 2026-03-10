import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useWishlist } from "@/context/WishlistContext";
import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";

export const WishlistSheet = () => {
    const { items, toggleWishlist, totalItems } = useWishlist();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="hidden md:flex items-center gap-1.5 text-foreground hover:text-gold transition-colors duration-300">
                    <Heart size={17} strokeWidth={1.5} className={totalItems > 0 ? "fill-gold text-gold" : ""} />
                    <span className="font-body text-[10px] tracking-[0.15em] uppercase">Wishlist {totalItems > 0 && `(${totalItems})`}</span>
                </button>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border bg-background">
                <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="font-display text-2xl font-light text-foreground text-left">
                        My Wishlist ({totalItems})
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <Heart size={48} strokeWidth={1} className="text-muted-foreground/30" />
                            <p className="font-body text-sm text-muted-foreground">Your wishlist is empty</p>
                            <button
                                onClick={() => setOpen(false)}
                                className="luxury-btn mt-4"
                            >
                                Discover Products
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {items.map((product) => (
                                <div key={product.id} className="flex gap-4">
                                    {/* Image */}
                                    <Link
                                        to={`/product/${product.id}`}
                                        onClick={() => setOpen(false)}
                                        className="block h-28 w-20 bg-muted shrink-0"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-opacity hover:opacity-80"
                                        />
                                    </Link>

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col justify-center py-1">
                                        <div className="flex justify-between items-start gap-2">
                                            <Link
                                                to={`/product/${product.id}`}
                                                onClick={() => setOpen(false)}
                                                className="font-body text-xs font-semibold tracking-wider uppercase text-foreground hover:text-gold transition-colors line-clamp-2"
                                            >
                                                {product.name}
                                            </Link>
                                            <button
                                                onClick={() => toggleWishlist(product)}
                                                className="text-muted-foreground hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>

                                        <p className="font-body text-sm font-semibold text-foreground mt-2">
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </p>

                                        <Link
                                            to={`/product/${product.id}`}
                                            onClick={() => setOpen(false)}
                                            className="mt-3 text-[10px] font-body font-semibold tracking-[0.1em] uppercase text-gold hover:text-foreground transition-colors"
                                        >
                                            View Product
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
