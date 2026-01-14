import { GradientText } from "../../ui";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="py-16 bg-[#F2F2F2] scroll-mt-20"
            aria-labelledby="contact-title"
        >
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <GradientText as="h2" id="contact-title" className="text-3xl font-bold mb-4">
                        تواصل معنا
                    </GradientText>
                    <p className="text-[#252B5C]">
                        كونوا بالقرب لنصل إلى أفضل خدمة للمهتمين بالعقارات
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
