import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { meta } from "./_lib/config/seo";
import { jsonLdSchema } from "./_lib/schemas";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-kufi",
  display: "swap",
  preload: true,
});

// Google Analytics ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = meta;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#124090" },
    { media: "(prefers-color-scheme: dark)", color: "#124090" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Google Analytics - Only in production */}
        {process.env.NODE_ENV === "production" && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${notoKufi.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#124090] focus:text-white focus:rounded-lg"
        >
          تخطي إلى المحتوى الرئيسي
        </a>

        <div id="main-content">
          {children}
        </div>

        {/* Noscript fallback */}
        <noscript>
          <div style={{ padding: "20px", textAlign: "center", background: "#f8d7da", color: "#721c24" }}>
            يرجى تفعيل JavaScript لتجربة أفضل على موقعنا
          </div>
        </noscript>
      </body>
    </html>
  );
}
