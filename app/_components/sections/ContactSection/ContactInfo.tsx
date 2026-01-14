import { FC } from "react";
import Image from "next/image";
import { CONTACT_INFO, ABOUT_US } from "@/app/_lib/config/constants";

interface ContactItemProps {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
}

const ContactItem: FC<ContactItemProps> = ({ label, value, href, external }) => (
    <div className="flex items-center gap-3">
        <span className="text-gray-500 text-sm">{label} :</span>
        {href ? (
            <a
                href={href}
                className="text-[#124090] hover:underline"
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
            >
                {value}
            </a>
        ) : (
            <span className="text-[#124090]">{value}</span>
        )}
    </div>
);

const CONTACT_ITEMS: ContactItemProps[] = [
    {
        label: "واتساب",
        value: CONTACT_INFO.whatsapp,
        href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`,
        external: true,
    },
    {
        label: "الايميل",
        value: CONTACT_INFO.email,
        href: `mailto:${CONTACT_INFO.email}`,
    },
    {
        label: "الهاتف",
        value: CONTACT_INFO.phone,
        href: `tel:${CONTACT_INFO.phone}`,
    },
];

const ContactInfo: FC = () => {
    return (
        <div className="space-y-6">
            {/* Company Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Image
                    src="/logo.png"
                    alt="عقاري إكس"
                    width={80}
                    height={80}
                    className="object-contain mb-4"
                    loading="lazy"
                />
                <p className="text-gray-500 text-sm mb-4">{CONTACT_INFO.address}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{ABOUT_US.ar}</p>
            </div>

            {/* Contact Details */}
            <address className="bg-white rounded-2xl p-6 shadow-sm space-y-3 not-italic">
                {CONTACT_ITEMS.map((item) => (
                    <ContactItem key={item.label} {...item} />
                ))}
            </address>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center">
                <span className="text-gray-400">الموقع على الخريطة</span>
            </div>
        </div>
    );
};

export default ContactInfo;
