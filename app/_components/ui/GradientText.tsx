import { FC, ReactNode, CSSProperties } from 'react';
import { GRADIENTS } from '@/app/_lib/config/constants';

const GradientText: FC<{ children: ReactNode; className?: string; as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'; style?: CSSProperties; id?: string }> = ({
    children, className = '', as: Component = 'span', style = {}, id,
}) => (
    <Component id={id} className={className} style={{ background: GRADIENTS.text, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', ...style }}>
        {children}
    </Component>
);

export default GradientText;
