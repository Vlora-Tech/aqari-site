// SVG Icons Library
import { FC, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaultProps: Partial<IconProps> = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
};

export const AppleIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

export const GooglePlayIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
    </svg>
);

export const DownloadIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export const MenuIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export const CloseIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const MapIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
);

export const ShieldCheckIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

export const StarIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

export const HeadsetIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
    </svg>
);

export const MegaphoneIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
);

export const PhoneIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const ChartIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
    </svg>
);

export const BoltIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const LocationIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ChevronDownIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M19 9l-7 7-7-7" />
    </svg>
);

export const ChevronLeftIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M9 5l7 7-7 7" />
    </svg>
);

export const DocumentIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const InboxIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
);

export const CheckIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M5 13l4 4L19 7" />
    </svg>
);

export const ChatIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

export const SettingsIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);

export const LockIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

export const UserIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const HomeIcon: FC<IconProps> = ({ size = 24, className, ...props }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
