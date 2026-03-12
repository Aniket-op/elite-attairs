// Product data store for Elite Attire
// All products with name, description, sizes, cost, category, and images

import productWomen1 from "@/assets/product-women-1.png";
import womenImg from "@/assets/women-collection.png";
import menImg from "@/assets/men-collection.png";
import traditionalImg from "@/assets/traditional-elegance.png";
import westernImg from "@/assets/classic-western.png";
import bridalImg from "@/assets/bridal-couture.png";
import casualImg from "@/assets/smart-casuals.png";
import newArrivalsImg from "@/assets/new-arrivals.png";
import heroImg from "@/assets/hero-banner.png";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    sizes: string[];
    category: "women" | "men" | "kids" | "accessories" | "new-arrivals" | "sale";
    image: string;
    tags?: string[];
    fabric?: string;
    color?: string;
}

export const WHATSAPP_NUMBER = "918307473499";

export const getWhatsAppLink = (product: Product) => {
    const message = encodeURIComponent(
        `Hi! I'm interested in "${product.name}" (₹${product.price.toLocaleString("en-IN")}).\nSize: \nCould you share more details?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const products: Product[] = [
    // ─── Women's Collection ───
    {
        id: "w1",
        name: "Royal Red Bridal Lehenga",
        description:
            "A breathtaking red and gold bridal lehenga set featuring intricate zari work, heavy embellishments, and a matching dupatta. Perfect for the modern bride who believes in timeless elegance.",
        price: 45999,
        originalPrice: 59999,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "women",
        image: productWomen1,
        tags: ["Bridal", "Bestseller"],
        fabric: "Pure Silk with Zari Work",
        color: "Red & Gold",
    },
    {
        id: "w2",
        name: "Golden Embroidered Saree",
        description:
            "An exquisite golden silk saree with delicate thread embroidery and mirror work border. Comes with a matching embroidered blouse piece. Ideal for weddings and festive occasions.",
        price: 18999,
        sizes: ["Free Size"],
        category: "women",
        image: womenImg,
        tags: ["Festive"],
        fabric: "Banarasi Silk",
        color: "Gold",
    },
    {
        id: "w3",
        name: "Pastel Pink Anarkali Suit",
        description:
            "A graceful pastel pink floor-length anarkali suit with silver threadwork and a flowy net dupatta. Lightweight yet regal, perfect for engagements and celebrations.",
        price: 12499,
        originalPrice: 16999,
        sizes: ["S", "M", "L", "XL"],
        category: "women",
        image: newArrivalsImg,
        tags: ["New Arrival"],
        fabric: "Georgette with Net Dupatta",
        color: "Pastel Pink",
    },
    {
        id: "w4",
        name: "Champagne Sequin Gown",
        description:
            "A stunning champagne-gold sequin evening gown with a flattering A-line silhouette and subtle shimmer. Perfect for receptions, cocktail parties, and special evenings.",
        price: 22999,
        sizes: ["S", "M", "L", "XL"],
        category: "women",
        image: heroImg,
        tags: ["Party Wear"],
        fabric: "Sequin Georgette",
        color: "Champagne Gold",
    },

    // ─── Men's Collection ───
    {
        id: "m1",
        name: "Royal Navy Sherwani",
        description:
            "A premium midnight navy sherwani with intricate gold threadwork embroidery. Features a mandarin collar, front buttons, and comes with matching churidar. Perfect for weddings and celebrations.",
        price: 28999,
        originalPrice: 38999,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "men",
        image: menImg,
        tags: ["Bestseller", "Wedding"],
        fabric: "Jacquard Silk",
        color: "Navy Blue & Gold",
    },
    {
        id: "m2",
        name: "Classic Western Suit",
        description:
            "A perfectly tailored classic western suit in premium fabric. Features a slim-fit blazer with notch lapel, flat-front trousers, and a subtle sheen. Ideal for business and formal events.",
        price: 19999,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "men",
        image: westernImg,
        tags: ["Formal"],
        fabric: "Premium Wool Blend",
        color: "Charcoal Grey",
    },
    {
        id: "m3",
        name: "Ivory Gold Sherwani",
        description:
            "An elegant ivory sherwani with gold zardozi embroidery and a regal collar. Comes with matching pajama and stole. The perfect groom attire for a traditional wedding.",
        price: 34999,
        sizes: ["M", "L", "XL", "XXL"],
        category: "men",
        image: bridalImg,
        tags: ["Groom Special"],
        fabric: "Raw Silk with Zardozi",
        color: "Ivory & Gold",
    },
    {
        id: "m4",
        name: "Smart Casual Navy Shirt",
        description:
            "A sophisticated navy blue casual shirt in premium cotton with a tailored fit. Features a clean collar design and subtle texture. Perfect for smart-casual occasions.",
        price: 3499,
        originalPrice: 4999,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "men",
        image: casualImg,
        tags: ["Casual"],
        fabric: "Premium Cotton",
        color: "Navy Blue",
    },

    // ─── New Arrivals ───
    {
        id: "n1",
        name: "Pearl White Lehenga",
        description:
            "A stunning pearl white lehenga with delicate silver embroidery and sequin detailing. The contemporary design blends tradition with modernity. Perfect for engagement ceremonies.",
        price: 32999,
        sizes: ["S", "M", "L", "XL"],
        category: "new-arrivals",
        image: traditionalImg,
        tags: ["New Arrival", "Trending"],
        fabric: "Organza with Sequin",
        color: "Pearl White & Silver",
    },
    {
        id: "n2",
        name: "Emerald Green Kurta Set",
        description:
            "An elegant emerald green kurta with golden dori embroidery, paired with matching trousers and a sheer dupatta. A fresh take on festive ethnic wear.",
        price: 8999,
        sizes: ["S", "M", "L", "XL"],
        category: "new-arrivals",
        image: womenImg,
        tags: ["New Arrival"],
        fabric: "Chanderi Silk",
        color: "Emerald Green",
    },
    {
        id: "n3",
        name: "Black Bandhgala Suit",
        description:
            "A sleek black bandhgala suit with subtle tone-on-tone patterns. Features a structured fit and high collar that exudes sophistication. Perfect for formal Indian events.",
        price: 15999,
        originalPrice: 21999,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "new-arrivals",
        image: casualImg,
        tags: ["New Arrival", "Formal"],
        fabric: "Premium Polyester Blend",
        color: "Black",
    },
    {
        id: "n4",
        name: "Rose Gold Saree",
        description:
            "A mesmerizing rose gold saree with intricate cutwork border and pearl embellishments. Lightweight and elegant, perfect for daytime celebrations and festive gatherings.",
        price: 14999,
        sizes: ["Free Size"],
        category: "new-arrivals",
        image: newArrivalsImg,
        tags: ["New Arrival"],
        fabric: "Tissue Silk",
        color: "Rose Gold",
    },

    // ─── Sale Items ───
    {
        id: "s1",
        name: "Maroon Velvet Sherwani",
        description:
            "A rich maroon velvet sherwani with antique gold embroidery. Features a classic cut with modern detailing. An exceptional piece at an unbeatable price.",
        price: 16999,
        originalPrice: 32999,
        sizes: ["M", "L", "XL"],
        category: "sale",
        image: menImg,
        tags: ["50% Off"],
        fabric: "Velvet with Gold Thread",
        color: "Maroon",
    },
    {
        id: "s2",
        name: "Teal Silk Saree",
        description:
            "A gorgeous teal silk saree with contrast copper border and traditional motifs. Comes with an unstitched blouse piece. A wardrobe essential at a great value.",
        price: 7999,
        originalPrice: 14999,
        sizes: ["Free Size"],
        category: "sale",
        image: womenImg,
        tags: ["40% Off"],
        fabric: "Art Silk",
        color: "Teal & Copper",
    },
    {
        id: "s3",
        name: "Blush Pink Lehenga Set",
        description:
            "A dreamy blush pink lehenga with pearl and sequin embroidery. Includes a matching crop-top blouse and dupatta. Perfect for bridesmaids and sangeet.",
        price: 19999,
        originalPrice: 35999,
        sizes: ["S", "M", "L"],
        category: "sale",
        image: heroImg,
        tags: ["45% Off", "Limited"],
        fabric: "Net with Satin Lining",
        color: "Blush Pink",
    },
    // ─── Kids' Collection ───
    {
        id: "k1",
        name: "Boys Kurta Pajama Set",
        description:
            "A comfortable and stylish mustard yellow kurta pajama set for boys. Features soft cotton blend fabric and subtle thread embroidery.",
        price: 3499,
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        category: "kids",
        image: menImg, // Reusing image as placeholder
        tags: ["Festive", "Kids"],
        fabric: "Cotton Blend",
        color: "Mustard Yellow",
    },
    {
        id: "k2",
        name: "Girls Pink Silk Lehenga",
        description:
            "A cute and vibrant pink silk lehenga choli for little girls. Lightweight with elegant mirror work detailing.",
        price: 4599,
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        category: "kids",
        image: womenImg, // Reusing image as placeholder
        tags: ["Kids", "Bestseller"],
        fabric: "Art Silk",
        color: "Pink",
    },
    
    // ─── Accessories ───
    {
        id: "a1",
        name: "Premium Winter Beanie",
        description:
            "A soft and warm premium winter beanie hat. Perfect accessory to keep you cozy during cold months.",
        price: 999,
        sizes: ["Free Size"],
        category: "accessories",
        image: casualImg, // Reusing image as placeholder
        tags: ["Winter", "Unisex"],
        fabric: "Wool Merino Blend",
        color: "Charcoal Grey",
    },
    {
        id: "a2",
        name: "Cashmere Muffler",
        description:
            "A luxurious cashmere blend muffler scarf. Elegant and incredibly soft, perfect for both men and women.",
        price: 2499,
        sizes: ["Free Size"],
        category: "accessories",
        image: traditionalImg, // Reusing image as placeholder
        tags: ["Luxury", "Winter"],
        fabric: "Cashmere Blend",
        color: "Beige",
    },
    {
        id: "s4",
        name: "Beige Formal Blazer",
        description:
            "A sophisticated beige blazer in premium fabric with a structured shoulder silhouette. Versatile enough for both traditional and western styling.",
        price: 5999,
        originalPrice: 11999,
        sizes: ["S", "M", "L", "XL"],
        category: "sale",
        image: westernImg,
        tags: ["50% Off"],
        fabric: "Cotton Linen Blend",
        color: "Beige",
    },
];

export const getProductsByCategory = (category: string): Product[] => {
    return products.filter((p) => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
    return products.find((p) => p.id === id);
};

export const categories = [
    { slug: "men", name: "Men", description: "Premium sherwanis, suits, jackets, coats & smart casuals" },
    { slug: "women", name: "Women", description: "Exquisite ethnic wear, jackets, coats, sweatshirts & cardigans" },
    { slug: "kids", name: "Kids", description: "Adorable and comfortable jackets, coats, and sweaters for little ones" },
    { slug: "accessories", name: "Accessories", description: "Comfortable thermals, socks, caps, mufflers & hand gloves for all" },
];
