import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import {
    HeroSection,
    StatsSection,
    FeaturesSection,
    ContactSection,
    FAQSection,
} from "@/app/_components/sections";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <ContactSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
