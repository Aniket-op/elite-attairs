import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_NUMBER } from "@/data/products";
import { Link } from "react-router-dom";
import { ShoppingBag, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useState } from "react";

export const CartSheet = () => {
    const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
    const [open, setOpen] = useState(false);

    // Generate WhatsApp message for the entire cart
    const handleCheckout = () => {
        let message = "Hi! I'd like to place an order for the following items:\n\n";
        items.forEach((item, index) => {
            message += `${index + 1}. ${item.product.name} (Size: ${item.size}) - Qty: ${item.quantity} x ₹${item.product.price.toLocaleString("en-IN")}\n`;
        });
        message += `\nTotal: ₹${totalPrice.toLocaleString("en-IN")}\n\nPlease let me know the payment and delivery details.`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="relative flex items-center gap-1.5 text-foreground hover:text-gold transition-colors duration-300">
                    <ShoppingBag size={17} strokeWidth={1.5} />
                    {totalItems > 0 && (
                        <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[8px] font-bold text-accent-foreground">
                            {totalItems}
                        </span>
                    )}
                </button>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border bg-background">
                <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="font-display text-2xl font-light text-foreground text-left">
                        Shopping Cart ({totalItems})
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground/30" />
                            <p className="font-body text-sm text-muted-foreground">Your cart is empty</p>
                            <button
                                onClick={() => setOpen(false)}
                                className="luxury-btn mt-4"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                                    {/* Image */}
                                    <div className="h-24 w-20 bg-muted shrink-0">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div className="flex justify-between items-start gap-2">
                                            <div>
                                                <Link
                                                    to={`/product/${item.product.id}`}
                                                    onClick={() => setOpen(false)}
                                                    className="font-body text-xs font-semibold tracking-wider uppercase text-foreground hover:text-gold transition-colors line-clamp-2"
                                                >
                                                    {item.product.name}
                                                </Link>
                                                <p className="font-body text-[10px] tracking-wider text-muted-foreground mt-1">
                                                    Size: {item.size}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.product.id, item.size)}
                                                className="text-muted-foreground hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center border border-border">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                                                    className="px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                                >
                                                    <Minus size={10} />
                                                </button>
                                                <span className="font-body text-xs font-medium w-6 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                                                    className="px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                                >
                                                    <Plus size={10} />
                                                </button>
                                            </div>
                                            <p className="font-body text-sm font-semibold text-foreground">
                                                ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="p-6 border-t border-border bg-background">
                        <div className="flex items-center justify-between mb-6">
                            <span className="font-body text-sm font-semibold tracking-wider uppercase text-foreground">Subtotal</span>
                            <span className="font-display text-xl font-light text-foreground">
                                ₹{totalPrice.toLocaleString("en-IN")}
                            </span>
                        </div>
                        <p className="font-body text-[10px] text-muted-foreground tracking-wider mb-4">
                            Shipping and taxes calculated via WhatsApp connection.
                        </p>
                        <button
                            onClick={handleCheckout}
                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-4 font-body text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300"
                        >
                            <MessageCircle size={16} strokeWidth={2} />
                            Checkout via WhatsApp
                        </button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};
