import { FC } from 'react';

interface DecorativeEllipseProps {
    color: string;
    className?: string;
    position?: 'custom' | 'top-left' | 'bottom-right';
    style?: React.CSSProperties;
}

const positionStyles: Record<string, React.CSSProperties> = {
    'top-left': { top: '40px', left: '-100px' },
    'bottom-right': { bottom: '40px', right: '-100px' },
};

const DecorativeEllipse: FC<DecorativeEllipseProps> = ({
    color,
    className = '',
    position = 'custom',
    style = {}
}) => {
    const baseStyle: React.CSSProperties = {
        backgroundColor: color,
        transform: 'rotate(-39.87deg)',
        filter: 'blur(103px)',
        ...(position !== 'custom' ? positionStyles[position] : {}),
        ...style,
    };

    return (
        <div
            className={`absolute rounded-[50%] opacity-80 hidden md:block ${className}`}
            style={baseStyle}
            aria-hidden="true"
            role="presentation"
        />
    );
};

export default DecorativeEllipse;
