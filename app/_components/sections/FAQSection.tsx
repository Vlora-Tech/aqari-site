import { FC } from "react";
import { GradientText } from "../ui";
import { ChevronDownIcon } from "../icons";
import { FAQ_DATA, GRADIENTS } from "@/app/_lib/config/constants";

const FAQItem: FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="border border-gray-200 rounded-xl group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
        <summary className="flex items-center justify-between cursor-pointer p-4 list-none">
            <span className="font-medium" itemProp="name" style={{ background: GRADIENTS.text, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{question}</span>
            <ChevronDownIcon size={20} className="text-[#1C5CA3] transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="px-4 pb-4 text-[#252B5C] text-sm leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <span itemProp="text">{answer}</span>
        </div>
    </details>
);

export default function FAQSection() {
    return (
        <section id="faq" className="py-16 bg-white scroll-mt-20" itemScope itemType="https://schema.org/FAQPage">
            <div className="max-w-[1440px] mx-auto px-6">
                <GradientText as="h2" className="text-3xl font-bold text-center mb-12">الاسئلة الشائعة</GradientText>
                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQ_DATA.map((faq) => <FAQItem key={faq.id} question={faq.question.ar} answer={faq.answer.ar} />)}
                </div>
            </div>
        </section>
    );
}
