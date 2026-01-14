import { MetadataRoute } from "next";
import { siteConfig } from "./_lib/config/seo";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/admin/",
                    "/_next/",
                    "/private/",
                    "/*.json$",
                    "/*?*", // Prevent indexing of query parameters
                ],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/api/", "/admin/"],
            },
            {
                userAgent: "Googlebot-Image",
                allow: ["/", "/images/", "/public/"],
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/api/", "/admin/"],
            },
            {
                userAgent: "DuckDuckBot",
                allow: "/",
            },
            {
                userAgent: "Yandex",
                allow: "/",
            },
            {
                userAgent: "facebookexternalhit",
                allow: "/",
            },
            {
                userAgent: "Twitterbot",
                allow: "/",
            },
            {
                userAgent: "LinkedInBot",
                allow: "/",
            },
            {
                userAgent: "WhatsApp",
                allow: "/",
            },
            // Block bad bots
            {
                userAgent: "AhrefsBot",
                disallow: "/",
            },
            {
                userAgent: "SemrushBot",
                disallow: "/",
            },
            {
                userAgent: "MJ12bot",
                disallow: "/",
            },
            {
                userAgent: "DotBot",
                disallow: "/",
            },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
