import { useState, useEffect } from "react";
import { toast } from "sonner";
import { categories, WHATSAPP_NUMBER, Product } from "@/data/products";
import { MessageCircle, Send } from "lucide-react";

interface EnquiryFormProps {
    prefilledProduct?: Product;
}

const EnquiryForm = ({ prefilledProduct }: EnquiryFormProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        category: prefilledProduct ? (prefilledProduct.category === "sale" || prefilledProduct.category === "new-arrivals" ? "other" : prefilledProduct.category) : "",
        contactNumber: "",
        emailAddress: "",
        details: prefilledProduct ? `I am interested in the following product:\n\nName: ${prefilledProduct.name}\nPrice: ₹${prefilledProduct.price.toLocaleString("en-IN")}\n\nAdditional Details:\n` : ""
    });

    useEffect(() => {
        if (prefilledProduct) {
            setFormData(prev => ({
                ...prev,
                category: prefilledProduct.category === "sale" || prefilledProduct.category === "new-arrivals" ? "other" : prefilledProduct.category,
                details: `I am interested in the following product:\n\nName: ${prefilledProduct.name}\nPrice: ₹${prefilledProduct.price.toLocaleString("en-IN")}\n\nAdditional Details:`
            }));
        }
    }, [prefilledProduct]);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required";
        if (!formData.emailAddress) newErrors.emailAddress = "Email Address is required";
        else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "Email Address is invalid";
        if (!formData.contactNumber) newErrors.contactNumber = "Contact Number is required";
        if (!formData.details) newErrors.details = "Please provide details of your enquiry";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            toast.error("Please fill in all required fields correctly.");
            return;
        }

        // Handle successful form submission here
        console.log("Enquiry Form Submitted:", formData);
        toast.success("Enquiry submitted successfully. We will get back to you soon!");
        setFormData({
            fullName: "",
            companyName: "",
            category: "",
            contactNumber: "",
            emailAddress: "",
            details: ""
        });
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            toast.error("Please fill in all required fields correctly.");
            return;
        }

        const message = `*New Context Enquiry*\n\n*Name:* ${formData.fullName}\n*Company:* ${formData.companyName || "N/A"}\n*Category:* ${formData.category}\n*Phone:* ${formData.contactNumber}\n*Email:* ${formData.emailAddress}\n\n*Details:*\n${formData.details}`;
        
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        toast.success("Redirecting to WhatsApp...");
    };

    return (
        <div className="bg-card border border-border p-8 lg:p-12 w-full max-w-4xl mx-auto shadow-sm">
            <div className="mb-10 text-center">
                <h2 className="font-display text-3xl font-light text-foreground mb-3">
                    Bulk & Custom Orders
                </h2>
                <p className="font-body text-sm text-muted-foreground w-full max-w-xl mx-auto">
                    Looking for corporate gifting, wedding trousseau, or bulk orders? Fill out the form below and our styling team will be in touch.
                </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Full Name */}
                    <div>
                        <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full bg-background border ${errors.fullName ? "border-red-500" : "border-border"} px-4 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors`}
                            placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1 font-body">{errors.fullName}</p>}
                    </div>

                    {/* Company / Firm Name */}
                    <div>
                        <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                            Company / Firm Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-background border border-border px-4 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors"
                            placeholder="Optional"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Email Address */}
                    <div>
                        <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            className={`w-full bg-background border ${errors.emailAddress ? "border-red-500" : "border-border"} px-4 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors`}
                            placeholder="you@example.com"
                        />
                        {errors.emailAddress && <p className="text-red-500 text-xs mt-1 font-body">{errors.emailAddress}</p>}
                    </div>

                    {/* Contact Number */}
                    <div>
                        <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                            Contact Number *
                        </label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className={`w-full bg-background border ${errors.contactNumber ? "border-red-500" : "border-border"} px-4 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors`}
                            placeholder="+91 98765 43210"
                        />
                        {errors.contactNumber && <p className="text-red-500 text-xs mt-1 font-body">{errors.contactNumber}</p>}
                    </div>
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                        What are you looking for?
                    </label>
                    <div className="relative">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full appearance-none bg-background border border-border px-4 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                        >
                            <option value="" disabled>Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                            ))}
                            <option value="other">Other / Mixed</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Details Textarea */}
                <div>
                    <label className="block font-body text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                        Details of your enquiry *
                    </label>
                    <textarea
                        rows={5}
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className={`w-full bg-background border ${errors.details ? "border-red-500" : "border-border"} px-4 py-3.5 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none`}
                        placeholder="Please describe your requirements, timeline, quantity, etc."
                    />
                    {errors.details && <p className="text-red-500 text-xs mt-1 font-body">{errors.details}</p>}
                </div>

                <div className="pt-4 flex flex-col md:flex-row gap-4">
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                        className="flex-1 flex items-center justify-center gap-2 bg-foreground text-primary-foreground hover:bg-gold hover:text-accent-foreground px-8 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
                    >
                        <Send size={16} strokeWidth={2} />
                        Submit Enquiry
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={handleWhatsAppSubmit}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1DA851] px-8 py-4 font-body text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
                    >
                        <MessageCircle size={16} strokeWidth={2} />
                        Send via WhatsApp
                    </button>
                </div>
                <p className="text-center text-[10px] text-muted-foreground mt-4 font-body tracking-wider uppercase">
                    All fields marked * are required. We respect your privacy.
                </p>
            </form>
        </div>
    );
};

export default EnquiryForm;
