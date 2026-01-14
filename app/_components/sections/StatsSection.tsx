import { FC, ReactNode } from "react";
import { MapIcon, ShieldCheckIcon, StarIcon, HeadsetIcon } from "../icons";

const StatCard: FC<{ icon: ReactNode; iconBg: string; iconBorder?: string; value: string; label: string }> = ({ icon, iconBg, iconBorder, value, label }) => (
    <article className="flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-lg" style={{ background: '#FFFFFF80', boxShadow: '1px 1px 3px 0px #021B7940', minWidth: '200px' }}>
        <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center" style={{ backgroundColor: iconBorder ? 'transparent' : iconBg, border: iconBorder ? `3px solid ${iconBorder}` : undefined }} aria-hidden="true">{icon}</div>
        <div className="text-[20px] font-bold text-[#252B5C]" style={{ lineHeight: '130%' }}>{value}</div>
        <div className="text-[14px] font-medium text-[#7D848D]" style={{ lineHeight: '130%' }}>{label}</div>
    </article>
);

const STATS = [
    { icon: <MapIcon size={28} className="text-white" />, iconBg: '#252B5C', value: '+ 50 ألف', label: 'عقار' },
    { icon: <ShieldCheckIcon size={28} className="text-white" />, iconBg: '#E0C56E', value: '% 100', label: 'موثوق' },
    { icon: <StarIcon size={28} className="text-white" />, iconBg: '#252B5C', value: '5.0', label: 'تقيم المستخدمين' },
    { icon: <HeadsetIcon size={24} className="text-[#E0C56E]" />, iconBg: 'transparent', iconBorder: '#E0C56E', value: '24 / 7', label: 'الدعم الفني' },
];

export default function StatsSection() {
    return (
        <section className="py-12" style={{ background: '#F2F2F2B0' }} aria-labelledby="stats-title">
            <div className="max-w-[1440px] mx-auto px-6">
                <h2 id="stats-title" className="sr-only">إحصائيات المنصة</h2>
                <p className="text-center text-[20px] font-medium text-[#252B5C] mb-8" style={{ lineHeight: '48px' }}>موثــــوق بــه من أفضــــل شــــركـــــات العقـــارات بالسعوديــــة</p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-8" role="list">{STATS.map((s) => <StatCard key={s.label} {...s} />)}</div>
            </div>
        </section>
    );
}
