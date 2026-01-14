"use client";

import { useState, useCallback } from "react";
import { Logo } from "../ui";
import { DownloadIcon, MenuIcon, CloseIcon } from "../icons";
import { NAV_LINKS } from "@/app/_lib/config/constants";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
                <Logo size="lg" />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-[#1C5CA3] font-medium hover:opacity-80 transition-opacity"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button - Desktop */}
                <button className="hidden md:flex items-center gap-2 bg-[#1C5CA3] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    <DownloadIcon size={20} />
                    حمل التطبيق
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <CloseIcon size={24} className="text-[#1C5CA3]" />
                    ) : (
                        <MenuIcon size={24} className="text-[#1C5CA3]" />
                    )}
                </button>
            </div>

            {/* Mobile Menu - Full Screen Overlay */}
            <div
                className={`md:hidden fixed inset-0 top-[88px] bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <nav className="flex flex-col px-6 py-6 gap-4 h-full">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-[#1C5CA3] font-medium hover:opacity-80 py-3 text-lg border-b border-gray-100"
                            onClick={closeMenu}
                        >
                            {label}
                        </a>
                    ))}
                    <button className="flex items-center justify-center gap-2 bg-[#1C5CA3] text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity mt-4 text-lg">
                        <DownloadIcon size={20} />
                        حمل التطبيق
                    </button>
                </nav>
            </div>
        </header>
    );
}
