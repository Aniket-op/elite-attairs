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
import womensCardiganImg from "@/assets/womens-cardigan.png";
import mensHoodieImg from "@/assets/mens-hoodie.png";
import kidsSweaterImg from "@/assets/kids-sweater.png";
import winterSocksImg from "@/assets/winter-socks.png";

// --- New User Uploaded Images ---
import tshirtMen2 from "@/assets/Tshirt men 2.jpg";
import tshirtMen1 from "@/assets/Tshirt men.jpg";
import leatherJacketMen from "@/assets/leather Jackets men.jpg";
import lowerMen2 from "@/assets/lower men 2.jpg";
import lowerMen1 from "@/assets/lower men.jpg";
import tradJacketMen from "@/assets/traditional jacket men.jpg";
import sweatshirtsMen2 from "@/assets/sweat shirts2.jpg";
import sweatshirtsMen1 from "@/assets/sweatshirts.jpg";

import womenLongCoat from "@/assets/Women long Coat.jpg";
import cardigansWomen1 from "@/assets/cardigans - Women 1.jpg";
import hoodiesWomen1 from "@/assets/hoodies - Women 1.jpg";
import hoodiesWomen2 from "@/assets/hoodies - Women 2.jpg";
import leatherJacketWomen from "@/assets/leather jacket women.jpg";
import sweatshirtsWomen1 from "@/assets/sweatshirts - Women 1.jpg";
import sweatshirtsWomen2 from "@/assets/sweatshirts - Women 2.jpg";
import womenJacket from "@/assets/women jacket.jpg";

import coatsKids from "@/assets/coats - Kids.jpg";
import jacketKids1 from "@/assets/jacket - Kids 1.jpg";
import jacketKids2 from "@/assets/jacket - Kids 2.jpg";
import sweatersKids1 from "@/assets/sweaters - Kids 1.jpg";

import cap2 from "@/assets/cap 2.jpg";
import cap1 from "@/assets/cap1.jpg";
import handGloves from "@/assets/hand gloves - Accessories 1.jpg";
import mufflers1 from "@/assets/mufflers - Accessories 1.jpg";
import mufflers2 from "@/assets/mufflers - Accessories 2.jpg";
import thermal1 from "@/assets/thermal 1.jpg";
import thermal2 from "@/assets/thermal 2.jpg";

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


    {
        id: "w6",
        name: "Cozy Wool Cardigan",
        description:
            "A delicate knitted cardigan with soft wool blend. A versatile layering piece for breezy evenings.",
        price: 2999,
        sizes: ["S", "M", "L"],
        category: "women",
        image: womensCardiganImg,
        tags: ["Winter", "Cardigans"],
        fabric: "Wool Blend",
        color: "Cream White",
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


    {
        id: "m6",
        name: "Heavy Duty Winter Coat",
        description:
            "A sophisticated single-breasted overcoat. Perfect to wear over formal suits or casual outfits during harsh winters.",
        price: 8999,
        sizes: ["M", "L", "XL", "XXL"],
        category: "men",
        image: westernImg,
        tags: ["Winter", "Coats"],
        fabric: "Wool Mix",
        color: "Charcoal Grey",
    },
    {
        id: "m7",
        name: "Premium Navy Blue Hoodie",
        description:
            "A premium thick cotton hoodie in dark navy blue. Perfect for everyday casual wear and layering.",
        price: 3499,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "men",
        image: mensHoodieImg,
        tags: ["Winter", "Hoodies"],
        fabric: "Heavy Cotton Blended",
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
    {
        id: "n5",
        name: "Women's Faux Leather Moto Jacket",
        description:
            "A striking faux leather moto jacket with asymmetrical zips. The contemporary design blends edgy style with modernity.",
        price: 4599,
        sizes: ["S", "M", "L", "XL"],
        category: "new-arrivals",
        image: leatherJacketWomen,
        tags: ["New Arrival", "Trending"],
        fabric: "PU Leather",
        color: "Black",
    },
    {
        id: "n6",
        name: "Men's Ethnic Nehru Jacket",
        description:
            "An elegant traditional Nehru jacket with intricate motifs. A fresh take on festive ethnic wear.",
        price: 3499,
        sizes: ["M", "L", "XL", "XXL"],
        category: "new-arrivals",
        image: tradJacketMen,
        tags: ["New Arrival"],
        fabric: "Silk Blend",
        color: "Mustard",
    },
    {
        id: "n7",
        name: "Elegant Woolen Trench Coat",
        description:
            "A sophisticated long woolen trench coat to elevate your winter wardrobe. Perfect for formal and smart-casual outings.",
        price: 6999,
        originalPrice: 8999,
        sizes: ["S", "M", "L", "XL"],
        category: "new-arrivals",
        image: womenLongCoat,
        tags: ["New Arrival", "Formal"],
        fabric: "Wool Blend",
        color: "Tan",
    },
    {
        id: "n8",
        name: "Premium Biker Leather Jacket",
        description:
            "A classic biker leather jacket featuring a rugged finish and modern styling. Rugged and elegant, perfect for winter statements.",
        price: 7999,
        sizes: ["M", "L", "XL", "XXL"],
        category: "new-arrivals",
        image: leatherJacketMen,
        tags: ["New Arrival"],
        fabric: "Genuine Leather",
        color: "Brown",
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
        category: "sale",
        image: menImg, // Reusing image as placeholder
        tags: ["Festive", "Men"],
        fabric: "Cotton Blend",
        color: "Mustard Yellow",
    },
    {
        id: "k4",
        name: "Knitted Winter Sweater",
        description:
            "A charming cable-knit sweater suitable for family events and casual winter days. Extremely soft and gentle on the skin.",
        price: 1499,
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        category: "kids",
        image: kidsSweaterImg,
        tags: ["Winter", "Sweaters"],
        fabric: "Soft Acrylic",
        color: "Red",
    },

    // ─── Accessories ───

    {
        id: "a3",
        name: "Winter Thermal Socks",
        description:
            "A pair of premium thick winter thermal socks in grey marl color. Keep your feet warm during extreme cold.",
        price: 499,
        sizes: ["Free Size"],
        category: "accessories",
        image: winterSocksImg,
        tags: ["Winter", "Socks"],
        fabric: "Thermal Wool Blend",
        color: "Grey Marl",
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
    // --- New Men's Products ---
    {
        id: "m8", name: "Casual Cotton T-Shirt", description: "A comfortable, breathable casual t-shirt perfect for everyday wear.",
        price: 999, sizes: ["S", "M", "L", "XL"], category: "men", image: tshirtMen1, tags: ["T-Shirts", "Casual"], fabric: "100% Cotton", color: "White"
    },
    {
        id: "m9", name: "Graphic Print T-Shirt", description: "A trendy graphic print t-shirt for a modern casual look.",
        price: 1199, sizes: ["M", "L", "XL"], category: "men", image: tshirtMen2, tags: ["T-Shirts", "Trendy"], fabric: "Cotton Blend", color: "Grey"
    },
    {
        id: "m10", name: "Premium Biker Leather Jacket", description: "A classic biker leather jacket featuring a rugged finish and modern styling.",
        price: 7999, sizes: ["M", "L", "XL", "XXL"], category: "men", image: leatherJacketMen, tags: ["Jacket", "Winter"], fabric: "Genuine Leather", color: "Brown"
    },
    {
        id: "m11", name: "Comfort Fit Joggers", description: "Versatile track lower joggers for your daily athletic routines or lounging.",
        price: 1499, sizes: ["M", "L", "XL"], category: "men", image: lowerMen1, tags: ["Lowers", "Athletic"], fabric: "Poly Cotton", color: "Black"
    },
    {
        id: "m12", name: "Athletic Track Pants", description: "Premium athletic track pants with zipper pockets and a slim fit design.",
        price: 1699, sizes: ["S", "M", "L", "XL"], category: "men", image: lowerMen2, tags: ["Lowers", "Sportswear"], fabric: "Polyester", color: "Navy"
    },
    {
        id: "m13", name: "Ethnic Nehru Jacket", description: "A traditional Nehru jacket with intricate motifs, ideal for festive layering.",
        price: 3499, sizes: ["M", "L", "XL", "XXL"], category: "men", image: tradJacketMen, tags: ["Jacket", "Traditional"], fabric: "Silk Blend", color: "Mustard"
    },
    {
        id: "m14", name: "Classic Crewneck Sweatshirt", description: "A soft and warm classic crewneck sweatshirt.",
        price: 2199, sizes: ["M", "L", "XL"], category: "men", image: sweatshirtsMen1, tags: ["Sweatshirts", "Winter"], fabric: "Fleece", color: "Olive"
    },
    {
        id: "m15", name: "Vintage Wash Sweatshirt", description: "A stylish vintage wash sweatshirt for relaxed outings.",
        price: 2499, sizes: ["S", "M", "L", "XL"], category: "men", image: sweatshirtsMen2, tags: ["Sweatshirts", "Casual"], fabric: "Cotton Blended Fleece", color: "Charcoal"
    },

    // --- New Women's Products ---
    {
        id: "w7", name: "Elegant Woolen Trench Coat", description: "A sophisticated long woolen trench coat to elevate your winter wardrobe.",
        price: 6999, sizes: ["S", "M", "L", "XL"], category: "women", image: womenLongCoat, tags: ["Coats", "Winter"], fabric: "Wool Blend", color: "Tan"
    },
    {
        id: "w8", name: "Chunky Knit Cardigan", description: "A beautifully crafted chunky knit cardigan with a relaxed fit.",
        price: 2599, sizes: ["Free Size"], category: "women", image: cardigansWomen1, tags: ["Cardigans", "Winter"], fabric: "Acrylic Wool", color: "Blush Pink"
    },
    {
        id: "w9", name: "Oversized Cozy Hoodie", description: "An ultra-soft oversized hoodie perfect for laid-back days.",
        price: 1999, sizes: ["S", "M", "L"], category: "women", image: hoodiesWomen1, tags: ["Hoodies", "Lounge"], fabric: "Fleece", color: "Beige"
    },
    {
        id: "w10", name: "Cropped Pullover Hoodie", description: "A trendy cropped pullover hoodie in vibrant colors.",
        price: 1799, sizes: ["XS", "S", "M", "L"], category: "women", image: hoodiesWomen2, tags: ["Hoodies", "Trendy"], fabric: "Cotton Blend", color: "Red"
    },
    {
        id: "w11", name: "Faux Leather Moto Jacket", description: "A striking faux leather moto jacket with asymmetrical zips.",
        price: 4599, sizes: ["S", "M", "L", "XL"], category: "women", image: leatherJacketWomen, tags: ["Jacket", "Bestseller"], fabric: "PU Leather", color: "Black"
    },
    {
        id: "w12", name: "Relaxed Fit Sweatshirt", description: "A comfortable, everyday relaxed fit sweatshirt.",
        price: 1599, sizes: ["S", "M", "L", "XL"], category: "women", image: sweatshirtsWomen1, tags: ["Sweatshirts", "Casual"], fabric: "Cotton Terry", color: "Grey Melange"
    },
    {
        id: "w13", name: "Pastel Terry Sweatshirt", description: "A lovely pastel-toned sweatshirt with a smooth finish.",
        price: 1899, sizes: ["S", "M", "L"], category: "women", image: sweatshirtsWomen2, tags: ["Sweatshirts", "Soft"], fabric: "French Terry", color: "Lavender"
    },
    {
        id: "w14", name: "Quilted Puffer Jacket", description: "A lightweight yet warm quilted puffer jacket for chilly evenings.",
        price: 3299, sizes: ["S", "M", "L", "XL"], category: "women", image: womenJacket, tags: ["Jacket", "Winter"], fabric: "Polyester", color: "Navy"
    },

    // --- New Kids' Products ---
    {
        id: "k5", name: "Double Breasted Winter Coat", description: "A cute double breasted winter coat for kids.",
        price: 2299, sizes: ["4-5Y", "6-7Y", "8-9Y"], category: "kids", image: coatsKids, tags: ["Coats", "Winter"], fabric: "Felt Wool", color: "Maroon"
    },
    {
        id: "k6", name: "Kids Denim Jacket", description: "A classic rugged denim jacket tailored for kids.",
        price: 1299, sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], category: "kids", image: jacketKids1, tags: ["Jacket", "Denim"], fabric: "Denim", color: "Blue"
    },
    {
        id: "k7", name: "Hooded Puffer Jacket", description: "A warm and durable hooded puffer jacket to keep the little ones snug.",
        price: 1899, sizes: ["4-5Y", "6-7Y", "8-9Y"], category: "kids", image: jacketKids2, tags: ["Jacket", "Winter"], fabric: "Polyester", color: "Yellow"
    },
    {
        id: "k8", name: "Crewneck Wool Sweater", description: "A lovely crewneck wool sweater perfect for family gatherings.",
        price: 1199, sizes: ["2-3Y", "4-5Y", "6-7Y"], category: "kids", image: sweatersKids1, tags: ["Sweaters", "Warm"], fabric: "Wool Blended", color: "Green"
    },

    // --- New Accessories ---
    {
        id: "a4", name: "Classic Baseball Cap", description: "A timeless adjustable baseball cap for sunny days.",
        price: 499, sizes: ["Free Size"], category: "accessories", image: cap1, tags: ["Caps", "Everyday"], fabric: "Cotton", color: "Black"
    },
    {
        id: "a5", name: "Ribbed Beanie Cap", description: "A stretchable, soft ribbed beanie to protect from winter chills.",
        price: 699, sizes: ["Free Size"], category: "accessories", image: cap2, tags: ["Caps", "Winter"], fabric: "Acrylic", color: "Grey"
    },
    {
        id: "a6", name: "Thermal Touchscreen Gloves", description: "Warm hand gloves designed to let you use your smartphone.",
        price: 899, sizes: ["M", "L"], category: "accessories", image: handGloves, tags: ["Hand Gloves", "Winter"], fabric: "Wool / Spandex", color: "Charcoal"
    },
    {
        id: "a7", name: "Checked Wool Muffler", description: "A classic checked pattern woolen muffler.",
        price: 1199, sizes: ["Free Size"], category: "accessories", image: mufflers1, tags: ["Mufflers", "Winter"], fabric: "Wool Blend", color: "Red/Black"
    },
    {
        id: "a8", name: "Fringed Cashmere Muffler", description: "An ultra-soft premium cashmere muffler with elegant fringes.",
        price: 2499, sizes: ["Free Size"], category: "accessories", image: mufflers2, tags: ["Mufflers", "Luxury"], fabric: "Cashmere", color: "Beige"
    },
    {
        id: "a9", name: "Men's Base Layer Thermal Set", description: "A full thermal base layer set designed to trap body heat effectively.",
        price: 1499, sizes: ["M", "L", "XL", "XXL"], category: "accessories", image: thermal1, tags: ["Thermal", "Winter"], fabric: "Thermal Knit", color: "Dark Grey"
    },
    {
        id: "a10", name: "Women's Seamless Thermal Set", description: "A form-fitting seamless thermal set for women, perfect for layering.",
        price: 1599, sizes: ["S", "M", "L", "XL"], category: "accessories", image: thermal2, tags: ["Thermal", "Winter"], fabric: "Stretch Fleece", color: "Light Grey"
    }
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
    { slug: "new-arrivals", name: "New Arrivals", description: "The latest additions to our premium collections, fresh for this season." },
    { slug: "sale", name: "Sale", description: "Amazing discounts on premium ethnic and western wear." },
];
