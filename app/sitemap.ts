import { MetadataRoute } from "next";
import { siteConfig } from "./_lib/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const currentDate = new Date();

    return [
        // Home Page - Highest Priority
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1.0,
            alternates: {
                languages: {
                    "ar-SA": baseUrl,
                    ar: baseUrl,
                },
            },
        },
        // Privacy Policy Page
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: {
                languages: {
                    "ar-SA": `${baseUrl}/privacy`,
                    ar: `${baseUrl}/privacy`,
                },
            },
        },
        // Terms & Conditions Page
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: {
                languages: {
                    "ar-SA": `${baseUrl}/terms`,
                    ar: `${baseUrl}/terms`,
                },
            },
        },
    ];
}
