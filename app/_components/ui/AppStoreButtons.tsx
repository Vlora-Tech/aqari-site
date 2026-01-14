import { FC } from 'react';
import { AppleIcon, GooglePlayIcon } from '../icons';

type ButtonSize = 'sm' | 'md' | 'lg';

const sizeConfig: Record<ButtonSize, { container: string; icon: number; topText: string; bottomText: string; padding: string; gap: string }> = {
    sm: { container: 'gap-2', icon: 24, topText: 'text-[7px]', bottomText: 'text-[12px] -mt-0.5', padding: 'px-4 py-2.5', gap: 'gap-3' },
    md: { container: 'gap-3', icon: 24, topText: 'text-[10px]', bottomText: 'text-sm -mt-1', padding: 'px-4 py-2', gap: 'gap-4' },
    lg: { container: 'gap-3', icon: 32, topText: 'text-[10px]', bottomText: 'text-lg -mt-1', padding: 'px-6 py-3', gap: 'gap-4' },
};

const STORES = [
    { Icon: AppleIcon, top: 'Download on the', bottom: 'App Store', label: 'تحميل من App Store' },
    { Icon: GooglePlayIcon, top: 'GET IT ON', bottom: 'Google Play', label: 'تحميل من Google Play' },
] as const;

const AppStoreButtons: FC<{ size?: ButtonSize; className?: string }> = ({ size = 'md', className = '' }) => {
    const c = sizeConfig[size];
    return (
        <div className={`flex items-center ${c.gap} ${className}`}>
            {STORES.map(({ Icon, top, bottom, label }) => (
                <div key={bottom} aria-label={label}
                    className={`flex items-center ${c.container} bg-black text-white ${c.padding} rounded-xl cursor-default`}>
                    <Icon size={c.icon} />
                    <div className="text-right">
                        <div className={`${c.topText} opacity-80`} lang="en">{top}</div>
                        <div className={`${c.bottomText} font-semibold`} lang="en">{bottom}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppStoreButtons;
