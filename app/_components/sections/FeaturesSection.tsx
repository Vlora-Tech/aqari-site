import { FC, ReactNode } from "react";
import { GradientText, DecorativeEllipse } from "../ui";
import { MegaphoneIcon, PhoneIcon, ChartIcon, BoltIcon, LocationIcon, ShieldCheckIcon } from "../icons";
import { GRADIENTS } from "@/app/_lib/config/constants";

type CardVariant = 'primary' | 'light' | 'gold';
const cardStyles: Record<CardVariant, { bg: string; iconBg: string; textColor: string }> = {
    primary: { bg: GRADIENTS.primary, iconBg: 'rgba(255,255,255,0.2)', textColor: 'white' },
    light: { bg: '#F5F7FA', iconBg: GRADIENTS.primary, textColor: '#252B5C' },
    gold: { bg: '#E7D291', iconBg: '#E3C979', textColor: '#252B5C' },
};

const FeatureCard: FC<{ icon: ReactNode; title: string; description: string; variant?: CardVariant; colSpan?: number; titleSize?: 'sm' | 'lg' }> = ({
    icon, title, description, variant = 'light', colSpan = 1, titleSize = 'lg',
}) => {
    const s = cardStyles[variant];
    const isPrimary = variant === 'primary';
    return (
        <article className={`rounded-2xl ${colSpan === 2 ? 'p-8 md:col-span-2' : 'p-6'}`} style={{ background: s.bg, boxShadow: '0px 4px 4px -1px rgba(0,0,0,0.1), 0px 4px 4px -1px rgba(0,0,0,0.06)' }}>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colSpan === 2 ? 'mb-6' : 'mb-4'}`} style={{ background: s.iconBg }} aria-hidden="true">{icon}</div>
            {isPrimary ? <h3 className={`${titleSize === 'lg' ? 'text-[32px]' : 'text-[24px]'} font-bold text-white mb-4`} style={{ lineHeight: '130%' }}>{title}</h3>
                : <GradientText as="h3" className={`${titleSize === 'lg' ? 'text-[32px] font-black' : 'text-[24px] font-bold'} mb-3`} style={{ lineHeight: titleSize === 'lg' ? '70px' : '130%' }}>{title}</GradientText>}
            <p className={`${colSpan === 2 ? 'text-[24px]' : 'text-[22px]'} leading-[140%] tracking-[0.3px] text-right`} style={{ color: isPrimary ? 'rgba(255,255,255,0.9)' : s.textColor }}>{description}</p>
        </article>
    );
};

const FEATURES = [
    { icon: <MegaphoneIcon size={28} className="text-white" />, title: 'ترويج إعلانات ذكية', description: 'ترفــع مشاهــدات عقــارك وتوصلـــه لأكبـــر عــدد من الباحثين الجاديــن في منطقتـك.', variant: 'primary' as const, colSpan: 2 },
    { icon: <PhoneIcon size={28} className="text-white" />, title: 'المحادثة المباشرة', description: 'نوفر لك ميزة التواصل المباشر بدون أي تعقيدات أو حواجز.', variant: 'light' as const, titleSize: 'sm' as const },
    { icon: <ChartIcon size={28} className="text-white" />, title: 'تقارير وتحليلات', description: 'وفر التطبيق تقارير وتحليلات شاملة للعقارات المروجة', variant: 'light' as const },
    { icon: <BoltIcon size={28} className="text-white" />, title: 'سريع كالبرق', description: 'أداء محسّن يضمن تصفحاً سلساً مع الآف الإعلانات', variant: 'gold' as const },
    { icon: <LocationIcon size={28} className="text-white" />, title: 'البحث بالخريطة', description: 'حدد مكانك على الخريطة واستعرض العقارات المتاحة حولك بدقة.', variant: 'light' as const },
    { icon: <ShieldCheckIcon size={28} className="text-white" />, title: 'إعلانات موثوقة', description: 'كل عقار موثق ومصدق عليه تصفح بثقة وراحة بال', variant: 'light' as const },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 bg-white scroll-mt-20 relative overflow-hidden" aria-labelledby="features-title">
            <DecorativeEllipse color="#FDE598" position="top-left" className="w-[360px] h-[190px] opacity-60" />
            <DecorativeEllipse color="#80ADE2" position="bottom-right" className="w-[360px] h-[190px] opacity-60" />
            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <GradientText as="h2" id="features-title" className="text-3xl font-bold mb-4">كل ما تحتاجه للعثور على المنزل المثالي</GradientText>
                    <p className="text-[#252B5C]">مميزات قويـــة مصممــــة لجعل بحثك عن العقار سلسًا وفعالاً</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{FEATURES.map((f) => <FeatureCard key={f.title} {...f} />)}</div>
            </div>
        </section>
    );
}
