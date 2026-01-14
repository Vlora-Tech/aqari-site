import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const sizes = { sm: 80, lg: 130 } as const;

const Logo: FC<{ size?: 'sm' | 'lg'; linkToHome?: boolean; className?: string }> = ({ size = 'lg', linkToHome = true, className = '' }) => {
    const dimension = sizes[size];
    const img = (
        <Image
            src="/logo.png"
            alt="عقاري إكس"
            width={dimension}
            height={dimension}
            className="object-contain"
            priority={size === 'lg'}
        />
    );
    const cls = `flex items-center ${className}`;
    return linkToHome ? <Link href="/" className={cls} aria-label="الصفحة الرئيسية">{img}</Link> : <div className={cls}>{img}</div>;
};

export default Logo;
