import { MetadataRoute } from "next";
import { siteConfig } from "./_lib/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "daily",
            priority: 1.0,
            alternates: {
                languages: {
                    ar: baseUrl,
                },
            },
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: {
                languages: {
                    ar: `${baseUrl}/privacy`,
                },
            },
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: "monthly",
            priority: 0.5,
            alternates: {
                languages: {
                    ar: `${baseUrl}/terms`,
                },
            },
        },
    ];
}
