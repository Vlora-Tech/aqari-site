// JSON-LD Schema - Structured Data for SEO
import { siteConfig } from "../config/seo";
import { FAQ_DATA, CONTACT_INFO } from "../config/constants";

// Transform FAQ data for schema
const faqSchemaData = FAQ_DATA.map((faq) => ({
    question: faq.question.ar,
    answer: faq.answer.ar,
}));

export const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        // WebSite Schema
        {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            name: siteConfig.name,
            alternateName: siteConfig.nameEn,
            url: siteConfig.url,
            description: siteConfig.description,
            inLanguage: "ar-SA",
            publisher: {
                "@id": `${siteConfig.url}/#organization`,
            },
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        },

        // Organization Schema
        {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            alternateName: siteConfig.nameEn,
            url: siteConfig.url,
            logo: {
                "@type": "ImageObject",
                "@id": `${siteConfig.url}/#logo`,
                url: `${siteConfig.url}/logo.png`,
                contentUrl: `${siteConfig.url}/logo.png`,
                width: 512,
                height: 512,
                caption: siteConfig.name,
            },
            image: {
                "@id": `${siteConfig.url}/#logo`,
            },
            foundingDate: siteConfig.foundingDate,
            foundingLocation: {
                "@type": "Place",
                name: "المملكة العربية السعودية",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "SA",
                },
            },
            areaServed: {
                "@type": "Country",
                name: "Saudi Arabia",
                sameAs: "https://en.wikipedia.org/wiki/Saudi_Arabia",
            },
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: CONTACT_INFO.phone,
                    email: CONTACT_INFO.email,
                    availableLanguage: ["Arabic", "English"],
                    areaServed: "SA",
                    hoursAvailable: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                        opens: "09:00",
                        closes: "18:00",
                    },
                },
                {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    telephone: CONTACT_INFO.whatsapp,
                    contactOption: "TollFree",
                    availableLanguage: ["Arabic", "English"],
                },
            ],
            sameAs: Object.values(CONTACT_INFO.socialMedia),
            slogan: "عقارك المثالي.. أقرب مما تتخيل",
        },

        // MobileApplication Schema
        {
            "@type": "MobileApplication",
            "@id": `${siteConfig.url}/#app`,
            name: siteConfig.name,
            alternateName: siteConfig.nameEn,
            operatingSystem: "iOS, Android",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Real Estate",
            description: siteConfig.description,
            inLanguage: ["ar", "en"],
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "SAR",
                availability: "https://schema.org/InStock",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "5000",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "3500",
            },
            featureList: [
                "البحث بالخريطة التفاعلية",
                "تصفية حسب السعر والموقع والمساحة",
                "التواصل المباشر مع الملاك",
                "حفظ العقارات المفضلة",
                "إشعارات العقارات الجديدة",
                "تقارير وتحليلات السوق",
                "مقارنة العقارات",
                "جولات افتراضية",
            ],
            screenshot: [
                {
                    "@type": "ImageObject",
                    url: `${siteConfig.url}/screenshots/home.png`,
                },
            ],
            downloadUrl: [
                siteConfig.appStore.ios,
                siteConfig.appStore.android,
            ],
            installUrl: [
                siteConfig.appStore.ios,
                siteConfig.appStore.android,
            ],
            author: {
                "@id": `${siteConfig.url}/#organization`,
            },
        },

        // LocalBusiness / RealEstateAgent Schema
        {
            "@type": "RealEstateAgent",
            "@id": `${siteConfig.url}/#business`,
            name: siteConfig.name,
            alternateName: siteConfig.nameEn,
            image: `${siteConfig.url}/logo.png`,
            url: siteConfig.url,
            telephone: CONTACT_INFO.phone,
            email: CONTACT_INFO.email,
            priceRange: "$",
            currenciesAccepted: "SAR",
            paymentAccepted: "Cash, Credit Card, Bank Transfer",
            address: {
                "@type": "PostalAddress",
                streetAddress: CONTACT_INFO.address,
                addressLocality: "الرياض",
                addressRegion: "الرياض",
                postalCode: "12345",
                addressCountry: "SA",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 24.7136,
                longitude: 46.6753,
            },
            areaServed: [
                { "@type": "City", name: "الرياض" },
                { "@type": "City", name: "جدة" },
                { "@type": "City", name: "مكة المكرمة" },
                { "@type": "City", name: "المدينة المنورة" },
                { "@type": "City", name: "الدمام" },
                { "@type": "City", name: "الخبر" },
            ],
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                    opens: "09:00",
                    closes: "18:00",
                },
            ],
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2500",
                bestRating: "5",
                worstRating: "1",
            },
        },

        // FAQPage Schema
        {
            "@type": "FAQPage",
            "@id": `${siteConfig.url}/#faq`,
            mainEntity: faqSchemaData.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        },

        // BreadcrumbList Schema for Home
        {
            "@type": "BreadcrumbList",
            "@id": `${siteConfig.url}/#breadcrumb`,
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "الرئيسية",
                    item: siteConfig.url,
                },
            ],
        },

        // WebPage Schema
        {
            "@type": "WebPage",
            "@id": `${siteConfig.url}/#webpage`,
            url: siteConfig.url,
            name: `${siteConfig.name} | منصة العقارات الأولى في السعودية`,
            description: siteConfig.description,
            isPartOf: {
                "@id": `${siteConfig.url}/#website`,
            },
            about: {
                "@id": `${siteConfig.url}/#organization`,
            },
            breadcrumb: {
                "@id": `${siteConfig.url}/#breadcrumb`,
            },
            inLanguage: "ar-SA",
            potentialAction: [
                {
                    "@type": "ReadAction",
                    target: [siteConfig.url],
                },
            ],
        },
    ],
};

// Page-specific schemas
export const getPageSchema = (page: string) => {
    const schemas: Record<string, object> = {
        privacy: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${siteConfig.url}/privacy/#webpage`,
            name: "سياسة الخصوصية - عقار",
            description: "سياسة الخصوصية وحماية البيانات في عقار",
            url: `${siteConfig.url}/privacy`,
            isPartOf: {
                "@id": `${siteConfig.url}/#website`,
            },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "الرئيسية",
                        item: siteConfig.url,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "سياسة الخصوصية",
                        item: `${siteConfig.url}/privacy`,
                    },
                ],
            },
            inLanguage: "ar-SA",
        },
        terms: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${siteConfig.url}/terms/#webpage`,
            name: "شروط الاستخدام - عقار",
            description: "شروط وأحكام استخدام منصة عقار",
            url: `${siteConfig.url}/terms`,
            isPartOf: {
                "@id": `${siteConfig.url}/#website`,
            },
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "الرئيسية",
                        item: siteConfig.url,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "شروط الاستخدام",
                        item: `${siteConfig.url}/terms`,
                    },
                ],
            },
            inLanguage: "ar-SA",
        },
    };
    return schemas[page] || null;
};
