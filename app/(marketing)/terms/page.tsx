import { Metadata } from "next";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import { Breadcrumb } from "@/app/_components/ui";
import { DocumentIcon } from "@/app/_components/icons";
import { FC, ReactNode } from "react";
import { GRADIENTS } from "@/app/_lib/config/constants";
import { getPageSchema } from "@/app/_lib/schemas";
import { siteConfig } from "@/app/_lib/config/seo";

export const metadata: Metadata = {
    title: "شروط الاستخدام",
    description: "شروط وأحكام استخدام منصة عقار. تعرف على حقوقك ومسؤولياتك عند استخدام تطبيقنا ومنصتنا للبحث عن العقارات في المملكة العربية السعودية.",
    alternates: {
        canonical: `${siteConfig.url}/terms`,
    },
    openGraph: {
        title: "شروط الاستخدام | عقار",
        description: "شروط وأحكام استخدام منصة عقار للعقارات",
        url: `${siteConfig.url}/terms`,
        type: "website",
    },
    twitter: {
        title: "شروط الاستخدام | عقار",
        description: "شروط وأحكام استخدام منصة عقار للعقارات",
    },
    robots: {
        index: true,
        follow: true,
    },
};

// Page Header Component
const PageHeader = () => (
    <header className="text-center mb-12">
        <div
            className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
            style={{ background: GRADIENTS.primary }}
            aria-hidden="true"
        >
            <DocumentIcon size={32} className="text-white" />
        </div>
        <h1 id="terms-title" className="text-3xl font-bold text-[#124090] mb-4">شروط الاستخدام</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            باستخدام عقار، فإنك توافق على شروط الخدمة هذه. يجب أن تكون عمرك 18 عاماً على الأقل لاستخدام منصتنا. أنت مسؤول عن دقة المعلومات التي تقدمها ويجب عليك الامتثال لجميع القوانين واللوائح المعمول بها. نحتفظ بالحق في تعديل هذه الشروط في أي وقت.
        </p>
    </header>
);

// Term Section Component
interface TermSectionProps {
    number: number;
    title: string;
    children: ReactNode;
    variant?: 'primary' | 'gold';
    id: string;
}

const TermSection: FC<TermSectionProps> = ({
    number,
    title,
    children,
    variant = 'primary',
    id,
}) => {
    const bgStyle = variant === 'primary'
        ? { background: GRADIENTS.primary }
        : { backgroundColor: '#E0C56E' };

    return (
        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm" aria-labelledby={id}>
            <div className="flex items-start gap-4">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                    style={bgStyle}
                    aria-hidden="true"
                >
                    {number}
                </div>
                <div>
                    <h2 id={id} className="text-xl font-bold text-[#124090] mb-4">{title}</h2>
                    <div className="text-gray-600 leading-relaxed space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Terms Data
const TERMS_DATA = [
    {
        number: 1,
        title: 'قبول الشروط',
        variant: 'primary' as const,
        id: 'acceptance',
        content: [
            'من خلال الوصول إلى تطبيق عقار أو استخدامه، فإنك توافق على الالتزام بهذه الشروط والأحكام والقوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، يُمنع عليك استخدام هذا الموقع أو الوصول إليه.',
            'نحتفظ بالحق في تحديث أو تعديل هذه الشروط في أي وقت دون إشعار مسبق. استمرارك في استخدام التطبيق بعد أي تغييرات يشكل قبولاً للشروط الجديدة.',
        ],
    },
    {
        number: 2,
        title: 'استخدام الخدمة',
        variant: 'gold' as const,
        id: 'service-usage',
        content: [
            'عقار عبارة عن منصة تربط الباحثين عن العقارات بملاك العقارات في المملكة العربية السعودية. نحن نوفر الأدوات والمعلومات لتسهيل هذه الاتصالات، لكننا لسنا طرفاً في أي معاملة بين المستخدمين.',
        ],
    },
    {
        number: 3,
        title: 'الملكية الفكرية',
        variant: 'primary' as const,
        id: 'intellectual-property',
        content: [
            'جميع محتويات عقار، بما في ذلك النصوص والرسومات والشعارات والأيقونات والصور والبرمجيات، هي ملكية حصرية لعقار ومحمية بموجب قوانين حقوق النشر الدولية.',
            'يحتفظ المستخدمون بملكية المحتوى الذي يرفعونه، لكنهم يمنحون عقار ترخيصاً غير حصري لاستخدام هذا المحتوى وعرضه وتوزيعه على المنصة.',
        ],
    },
    {
        number: 4,
        title: 'إخلاء المسؤولية',
        variant: 'gold' as const,
        id: 'disclaimer',
        content: [
            'يتم توفير الخدمات "كما هي" دون أي ضمانات من أي نوع. لا نضمن دقة أو اكتمال أو موثوقية أي معلومات على المنصة.',
        ],
    },
    {
        number: 5,
        title: 'القانون الحاكم',
        variant: 'primary' as const,
        id: 'governing-law',
        content: [
            'تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاعات تنشأ عن هذه الشروط أو تتعلق بها ستخضع للاختصاص الحصري لمحاكم المملكة العربية السعودية.',
        ],
    },
];

export default function TermsOfUse() {
    const pageSchema = getPageSchema("terms");

    return (
        <div className="min-h-screen bg-white">
            {/* Page-specific Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />

            <Header />

            <main className="py-12" role="main" aria-labelledby="terms-title">
                <div className="max-w-[1440px] mx-auto px-6">
                    <Breadcrumb
                        items={[
                            { label: 'الرئيسية', href: '/' },
                            { label: 'شروط الاستخدام' },
                        ]}
                        className="mb-8"
                    />

                    <PageHeader />

                    <div className="max-w-4xl mx-auto space-y-8">
                        {TERMS_DATA.map((term) => (
                            <TermSection
                                key={term.number}
                                number={term.number}
                                title={term.title}
                                variant={term.variant}
                                id={term.id}
                            >
                                {term.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </TermSection>
                        ))}

                        {/* Last Updated */}
                        <footer className="text-center text-gray-400 text-sm">
                            <time dateTime="2026-01-07">آخر تحديث: 7 يناير 2026</time>
                        </footer>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
