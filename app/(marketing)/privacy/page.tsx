import { Metadata } from "next";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import { Breadcrumb } from "@/app/_components/ui";
import {
    ShieldCheckIcon,
    InboxIcon,
    UserIcon,
    HomeIcon,
    LocationIcon,
    CheckIcon,
    ChatIcon,
    SettingsIcon,
    LockIcon,
} from "@/app/_components/icons";
import { FC, ReactNode } from "react";
import { GRADIENTS } from "@/app/_lib/config/constants";
import { getPageSchema } from "@/app/_lib/schemas";
import { siteConfig } from "@/app/_lib/config/seo";

export const metadata: Metadata = {
    title: "سياسة الخصوصية",
    description: "تعرف على كيفية حماية بياناتك الشخصية في عقار. سياسة الخصوصية توضح كيفية جمع واستخدام وحماية معلوماتك عند استخدام تطبيقنا ومنصتنا العقارية.",
    alternates: {
        canonical: `${siteConfig.url}/privacy`,
    },
    openGraph: {
        title: "سياسة الخصوصية | عقار",
        description: "سياسة الخصوصية وحماية البيانات في منصة عقار",
        url: `${siteConfig.url}/privacy`,
        type: "website",
    },
    twitter: {
        title: "سياسة الخصوصية | عقار",
        description: "سياسة الخصوصية وحماية البيانات في منصة عقار",
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
            <ShieldCheckIcon size={32} className="text-white" />
        </div>
        <h1 id="privacy-title" className="text-3xl font-bold text-[#124090] mb-4">سياسة الخصوصية</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            في عقار، نحن ملتزمون بحماية خصوصيتك ومعلوماتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية بياناتك عند استخدام منصتنا. نحن نجمع فقط المعلومات اللازمة لتقديم خدماتنا ولا نشارك بياناتك الشخصية مع أطراف ثالثة دون موافقتك.
        </p>
    </header>
);

// Info Card Component
interface InfoCardProps {
    icon: ReactNode;
    title: string;
    items: string[];
}

const InfoCard: FC<InfoCardProps> = ({ icon, title, items }) => (
    <article className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#124090]/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                {icon}
            </div>
            <h3 className="font-semibold text-[#124090]">{title}</h3>
        </div>
        {items.length > 1 ? (
            <ul className="space-y-2 text-gray-600 text-sm" role="list">
                {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#124090] rounded-full" aria-hidden="true" />
                        {item}
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-600 text-sm">{items[0]}</p>
        )}
    </article>
);

// Usage Card Component
interface UsageCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const UsageCard: FC<UsageCardProps> = ({ icon, title, description }) => (
    <article className="bg-gray-50 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-[#124090]/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                {icon}
            </div>
            <h3 className="font-semibold text-[#124090]">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
    </article>
);

// Data for Information Collection Section
const INFO_CARDS: InfoCardProps[] = [
    {
        icon: <UserIcon size={16} className="text-[#124090]" />,
        title: 'المعلومات الشخصية',
        items: [
            'الاسم وعنوان البريد الإلكتروني ورقم الهاتف',
            'معلومات الملف الشخصي والصور',
            'التفضيلات والمعايير البحثية',
        ],
    },
    {
        icon: <HomeIcon size={16} className="text-[#124090]" />,
        title: 'بيانات الاستخدام',
        items: [
            'معلومات الجهاز وعنوان IP',
            'سجل التصفح والتفاعل مع المحتوى',
            'عمليات البحث والإعلانات المعروضة والمحفوظة',
        ],
    },
    {
        icon: <LocationIcon size={16} className="text-[#124090]" />,
        title: 'بيانات الموقع',
        items: ['نجمع معلومات الموقع الجغرافي (بإذنك) لتوفير توصيات عقارية محلية دقيقة وتحسين تجربة البحث.'],
    },
];

// Data for Usage Section
const USAGE_CARDS: UsageCardProps[] = [
    {
        icon: <CheckIcon size={16} className="text-[#124090]" />,
        title: 'توفير الخدمات',
        description: 'تشغيل وصيانة وتحسين منصتنا',
    },
    {
        icon: <ChatIcon size={16} className="text-[#124090]" />,
        title: 'التواصل',
        description: 'إرسال التحديثات والإشعارات الهامة',
    },
    {
        icon: <SettingsIcon size={16} className="text-[#124090]" />,
        title: 'التخصيص',
        description: 'توفير توصيات عقارية مخصصة',
    },
    {
        icon: <LockIcon size={16} className="text-[#124090]" />,
        title: 'الأمان',
        description: 'الكشف عن الاحتيال ومنعه',
    },
];

export default function PrivacyPolicy() {
    const pageSchema = getPageSchema("privacy");

    return (
        <div className="min-h-screen bg-white">
            {/* Page-specific Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />

            <Header />

            <main className="py-12" role="main" aria-labelledby="privacy-title">
                <div className="max-w-[1440px] mx-auto px-6">
                    <Breadcrumb
                        items={[
                            { label: 'الرئيسية', href: '/' },
                            { label: 'سياسة الخصوصية' },
                        ]}
                        className="mb-8"
                    />

                    <PageHeader />

                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Section 1: المعلومات التي نجمعها */}
                        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm" aria-labelledby="info-collection">
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: GRADIENTS.primary }}
                                    aria-hidden="true"
                                >
                                    <InboxIcon size={24} className="text-white" />
                                </div>
                                <div>
                                    <h2 id="info-collection" className="text-xl font-bold text-[#124090] mb-2">المعلومات التي نجمعها</h2>
                                    <p className="text-gray-600 text-sm">
                                        نقوم بجمع أنواع مختلفة من المعلومات لتوفير وتحسين خدماتنا لك:
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 pr-16">
                                {INFO_CARDS.map((card) => (
                                    <InfoCard key={card.title} {...card} />
                                ))}
                            </div>
                        </section>

                        {/* Section 2: كيف نستخدم معلوماتك */}
                        <section className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm" aria-labelledby="info-usage">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#E0C56E] rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                                    <ShieldCheckIcon size={24} className="text-white" />
                                </div>
                                <div>
                                    <h2 id="info-usage" className="text-xl font-bold text-[#124090] mb-2">كيف نستخدم معلوماتك</h2>
                                    <p className="text-gray-600 text-sm">
                                        نستخدم المعلومات التي نجمعها للأغراض التالية:
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 pr-16">
                                {USAGE_CARDS.map((card) => (
                                    <UsageCard key={card.title} {...card} />
                                ))}
                            </div>
                        </section>

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
