import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedCollections from "@/components/FeaturedCollections";
import SaleBanner from "@/components/SaleBanner";
import TrustSection from "@/components/TrustSection";
import EnquiryForm from "@/components/EnquiryForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <AnnouncementBar />
    <Navbar />
    <HeroSection />
    <CategorySection />
    <FeaturedCollections />
    <SaleBanner />
    <TrustSection />
    <section className="py-20 bg-background">
      <EnquiryForm />
    </section>
    <Newsletter />
    <Footer />
  </div>
);

export default Index;
