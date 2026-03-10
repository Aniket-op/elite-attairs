import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        category: "Orders & Shipping",
        questions: [
            {
                q: "How long will my order take to arrive?",
                a: "Domestic orders within India typically take 3-7 business days. International shipping can take 10-15 business days depending on customs and the destination country.",
            },
            {
                q: "Do you offer international shipping?",
                a: "Yes, we ship globally! Shipping charges are calculated at checkout based on your delivery address.",
            },
            {
                q: "Can I track my order?",
                a: "Absolutely. Once your order is dispatched, you will receive an email and WhatsApp message with your tracking details.",
            },
        ]
    },
    {
        category: "Returns & Exchanges",
        questions: [
            {
                q: "What is your return policy?",
                a: "We accept returns on unworn, unwashed items with tags attached within 7 days of delivery. Custom-stitched or altered items, and bridal wear are non-returnable.",
            },
            {
                q: "How do I initiate a return?",
                a: "Please email us at support@eliteattire.com or contact us on WhatsApp with your Order ID and reason for return. We will arrange a pickup.",
            },
            {
                q: "When will I get my refund?",
                a: "Refunds are processed within 5-7 business days after we receive and inspect the returned item.",
            },
        ]
    },
    {
        category: "Product & Sizing",
        questions: [
            {
                q: "How do I choose the right size?",
                a: "Each product page features a detailed size guide. If you need bespoke sizing or have specific measurements, you can select 'Custom' and message us on WhatsApp.",
            },
            {
                q: "Do the products look exactly like the pictures?",
                a: "We aim for 100% accuracy, but due to studio lighting and different screen calibrations, there might be a slight 5-10% variation in color.",
            },
            {
                q: "Do you provide custom tailoring?",
                a: "Yes! Many of our bridal and grooms wear pieces can be custom-tailored to your exact measurements for an additional fee. Reach out via WhatsApp to inquire.",
            },
        ]
    }
];

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <AnnouncementBar />
            <Navbar />

            {/* Header */}
            <section className="bg-warm-black py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide text-primary-foreground">
                            Frequently Asked Questions
                        </h1>
                        <p className="mt-4 font-body text-sm tracking-wider text-primary-foreground/50 max-w-lg mx-auto">
                            Find answers to common questions about our products, shipping, returns, and more.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="mx-auto max-w-3xl px-6 py-20 flex-grow w-full">
                {faqs.map((group, idx) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="mb-12 last:mb-0"
                    >
                        <h2 className="font-body text-base font-semibold tracking-[0.15em] uppercase text-foreground mb-6 pb-2 border-b border-border">
                            {group.category}
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {group.questions.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-border">
                                    <AccordionTrigger className="font-body text-sm hover:no-underline hover:text-gold text-left pe-4 py-5 text-foreground">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                ))}

                <div className="mt-16 text-center p-8 bg-muted/50 border border-border">
                    <h3 className="font-display text-2xl font-light text-foreground mb-3">Still have questions?</h3>
                    <p className="font-body text-sm text-muted-foreground mb-6">
                        We're here to help. Contact our customer support team.
                    </p>
                    <Link to="/contact" className="luxury-btn">
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FAQPage;
