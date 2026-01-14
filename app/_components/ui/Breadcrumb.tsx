import { FC } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon } from '../icons';

interface BreadcrumbItem { label: string; href?: string }

const Breadcrumb: FC<{ items: BreadcrumbItem[]; className?: string }> = ({ items, className = '' }) => (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="مسار التنقل">
        <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
            {items.map((item, i) => {
                const isLast = i === items.length - 1;
                return (
                    <li key={item.label} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        {item.href && !isLast ? (
                            <Link href={item.href} className="text-[#124090] hover:opacity-80" itemProp="item"><span itemProp="name">{item.label}</span></Link>
                        ) : (
                            <span className={isLast ? 'text-gray-500' : 'text-[#124090]'} itemProp="name">{item.label}</span>
                        )}
                        <meta itemProp="position" content={String(i + 1)} />
                        {!isLast && <ChevronLeftIcon size={16} className="text-gray-400 rotate-180" aria-hidden="true" />}
                    </li>
                );
            })}
        </ol>
    </nav>
);

export default Breadcrumb;
