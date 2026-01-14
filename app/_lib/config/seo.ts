// SEO Configuration - Aqar Real Estate Platform
import { APP_CONFIG, ABOUT_US } from "./constants";

export const siteConfig = {
    name: "عقار",
    nameEn: "Aqar",
    author: "عقار",
    url: "https://aqar.com",
    locale: "ar_SA",
    description: ABOUT_US.ar,
    shortDescription: "منصة العقارات الأولى في السعودية - شقق، فلل، أراضي للبيع والإيجار",
    keywords: [
        // Arabic Keywords - Primary
        "عقارات السعودية",
        "شقق للإيجار",
        "شقق للبيع",
        "فلل للبيع",
        "فلل للإيجار",
        "أراضي للبيع",
        // Arabic Keywords - Cities
        "عقارات الرياض",
        "عقارات جدة",
        "عقارات مكة",
        "عقارات المدينة",
        "عقارات الدمام",
        "عقارات الخبر",
        // Arabic Keywords - Types
        "شقق تمليك",
        "دوبلكس للبيع",
        "استراحات للبيع",
        "مزارع للبيع",
        "عمارات للبيع",
        "محلات تجارية",
        // Arabic Keywords - Actions
        "تطبيق عقارات",
        "منصة عقارية",
        "بيع عقارات",
        "إيجار عقارات",
        "استثمار عقاري",
        "تقييم عقاري",
        "عقار",
        // English Keywords
        "aqar",
        "real estate saudi arabia",
        "apartments for rent riyadh",
        "villas for sale jeddah",
        "property saudi arabia",
        "real estate app ksa",
        "buy property riyadh",
        "rent apartment jeddah",
    ].join(", "),
    foundingDate: "2024",
    appStore: {
        ios: "https://apps.apple.com/app/aqar/id123456789",
        android: "https://play.google.com/store/apps/details?id=com.aqar.app",
    },
};

export const meta = {
    title: {
        default: `${siteConfig.name} | منصة العقارات الأولى في السعودية - شقق وفلل وأراضي`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    applicationName: siteConfig.name,
    generator: "Next.js",
    metadataBase: new URL(siteConfig.url),

    // Open Graph - Facebook, LinkedIn, WhatsApp
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: siteConfig.url,
        siteName: siteConfig.name,
        title: `${siteConfig.name} | منصة العقارات الأولى في السعودية`,
        description: siteConfig.shortDescription,
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} - منصة العقارات`,
                type: "image/png",
            },
        ],
        countryName: "Saudi Arabia",
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        site: "@aqar",
        creator: "@aqar",
        title: `${siteConfig.name} | منصة العقارات الأولى`,
        description: siteConfig.shortDescription,
        images: {
            url: "/opengraph-image.png",
            alt: `${siteConfig.name} - منصة العقارات`,
        },
    },

    // Robots & Indexing
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large" as const,
            "max-snippet": -1,
        },
    },

    // Canonical & Alternates
    alternates: {
        canonical: siteConfig.url,
        languages: {
            "ar-SA": siteConfig.url,
            "ar": siteConfig.url,
        },
    },

    // Icons
    icons: {
        icon: [
            { url: APP_CONFIG.favicon, sizes: "any" },
            { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
            { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: APP_CONFIG.favicon,
    },

    // Manifest for PWA
    manifest: "/manifest.json",

    // Verification
    verification: {
        google: "YOUR_GOOGLE_VERIFICATION_CODE",
        yandex: "YOUR_YANDEX_VERIFICATION_CODE",
        other: {
            "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
        },
    },

    // App Links
    appLinks: {
        ios: {
            url: siteConfig.appStore.ios,
            app_store_id: "123456789",
        },
        android: {
            package: "com.aqar.app",
            url: siteConfig.appStore.android,
        },
        web: {
            url: siteConfig.url,
            should_fallback: true,
        },
    },

    // Category
    category: "real estate",

    // Other meta tags
    other: {
        "msapplication-TileColor": "#124090",
        "theme-color": "#124090",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": siteConfig.name,
        "format-detection": "telephone=no",
        "mobile-web-app-capable": "yes",
        // Geo tags for local SEO
        "geo.region": "SA",
        "geo.placename": "Saudi Arabia",
        "geo.position": "24.7136;46.6753",
        "ICBM": "24.7136, 46.6753",
    },
};
