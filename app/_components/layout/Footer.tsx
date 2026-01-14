import Link from "next/link";
import { AppStoreButtons, Logo } from "../ui";
import { FOOTER_LINKS } from "@/app/_lib/config/constants";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-[#143d90] py-8">
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Logo and App Stores */}
                <div className="flex flex-col items-center gap-6 mb-8">
                    <Logo size="sm" linkToHome={false} />
                    <AppStoreButtons size="md" />
                </div>

                {/* Footer Links */}
                <nav className="flex items-center justify-center gap-4 text-sm text-[#1C5CA3]">
                    {FOOTER_LINKS.map(({ href, label }, index) => (
                        <div key={href} className="flex items-center gap-4">
                            <Link href={href} className="hover:opacity-80 transition-opacity">
                                {label}
                            </Link>
                            {index < FOOTER_LINKS.length - 1 && (
                                <span className="text-gray-300">|</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
