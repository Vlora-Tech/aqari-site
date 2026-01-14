# عقاري إكس - AqarX

منصة العقارات الأولى في المملكة العربية السعودية

## 🚀 التقنيات المستخدمة

- **Next.js 16** - React Framework
- **React 19** - UI Library
- **TypeScript 5** - Type Safety
- **Tailwind CSS 4** - Styling

## 📁 هيكل المشروع

```
aqarx-website/
├── app/
│   ├── (marketing)/                    # Route Group - الصفحات التسويقية
│   │   ├── page.tsx                    # الصفحة الرئيسية
│   │   ├── privacy/page.tsx            # سياسة الخصوصية
│   │   └── terms/page.tsx              # شروط الاستخدام
│   │
│   ├── _components/                    # Private Components
│   │   ├── icons/                      # SVG Icons Library
│   │   │   └── index.tsx
│   │   ├── layout/                     # Layout Components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── sections/                   # Page Sections
│   │   │   ├── ContactSection/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── ContactInfo.tsx
│   │   │   │   ├── FormInput.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── index.ts
│   │   └── ui/                         # Reusable UI Components
│   │       ├── AppStoreButtons.tsx
│   │       ├── Breadcrumb.tsx
│   │       ├── DecorativeEllipse.tsx
│   │       ├── GradientText.tsx
│   │       ├── Logo.tsx
│   │       └── index.ts
│   │
│   ├── _lib/                           # Private Library
│   │   ├── config/                     # App Configuration
│   │   │   ├── colors.ts               # Color Palette
│   │   │   ├── constants.ts            # App Constants
│   │   │   ├── seo.ts                  # SEO Configuration
│   │   │   └── index.ts
│   │   ├── contact/                    # Contact Form Logic
│   │   │   ├── api.ts
│   │   │   ├── types.ts
│   │   │   ├── validation.ts
│   │   │   └── index.ts
│   │   └── schemas/                    # JSON-LD Schemas
│   │       └── index.ts
│   │
│   ├── layout.tsx                      # Root Layout
│   ├── globals.css                     # Global Styles
│   ├── error.tsx                       # Error Page
│   ├── loading.tsx                     # Loading State
│   ├── not-found.tsx                   # 404 Page
│   ├── robots.ts                       # Robots.txt
│   ├── sitemap.ts                      # Sitemap
│   └── opengraph-image.tsx             # OG Image Generator
│
├── public/
│   ├── .well-known/security.txt        # Security Policy
│   ├── manifest.json                   # PWA Manifest
│   ├── favicon.ico
│   └── logo.png
│
├── .env.example                        # Environment Variables Template
├── next.config.ts                      # Next.js Configuration
├── tsconfig.json                       # TypeScript Configuration
└── package.json
```

## 🏗️ معمارية المشروع

### Route Groups `(marketing)`
- تنظيم الصفحات بدون تأثير على URL
- الصفحة الرئيسية: `/`
- سياسة الخصوصية: `/privacy`
- شروط الاستخدام: `/terms`

### Private Folders `_components` & `_lib`
- مجلدات خاصة لا يمكن الوصول إليها كـ routes
- تنظيم أفضل للكود
- فصل واضح بين المكونات والمنطق

## 🛠️ التشغيل المحلي

```bash
# تثبيت الحزم
npm install

# نسخ ملف البيئة
cp .env.example .env.local

# تشغيل السيرفر
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## 📦 البناء للإنتاج

```bash
npm run build
npm start
```

## ⚙️ متغيرات البيئة

| المتغير | الوصف |
|---------|-------|
| `NEXT_PUBLIC_CONTACT_API_URL` | رابط API نموذج التواصل |
| `NEXT_PUBLIC_GA_ID` | معرف Google Analytics |

## 🔒 الأمان

- Security Headers (CSP, HSTS, X-Frame-Options)
- Input Sanitization
- XSS Protection
- HTTPS Enforcement

## 📈 SEO

- JSON-LD Structured Data
- Open Graph & Twitter Cards
- Sitemap & Robots.txt
- Semantic HTML

## 📄 الترخيص

جميع الحقوق محفوظة © 2024-2026 عقاري إكس
