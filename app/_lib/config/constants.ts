// App Configuration
export const APP_CONFIG = {
    favicon: "/favicon.ico",
} as const;

// Contact Information
export const CONTACT_INFO = {
    email: "info@aqar.com",
    phone: "+966501234567",
    whatsapp: "+966501234567",
    address: "الرياض، المملكة العربية السعودية",
    socialMedia: {
        twitter: "https://twitter.com/aqar",
        facebook: "https://facebook.com/aqar",
        instagram: "https://instagram.com/aqar",
        linkedin: "https://linkedin.com/company/aqar",
    },
} as const;

// About Us Content
export const ABOUT_US = {
    ar: "عقار هي منصة عقارية رائدة في المملكة العربية السعودية، تربط بين الباحثين عن العقارات والفرص السكنية والاستثمارية المثالية. نقدم خدمات شاملة لبيع وشراء وإيجار العقارات في جميع أنحاء المملكة.",
} as const;

// FAQ Data
export const FAQ_DATA = [
    {
        id: "1",
        question: {
            ar: "كيف يمكنني إنشاء حساب؟",
        },
        answer: {
            ar: "لإنشاء حساب، انقر على زر 'إنشاء حساب'، أدخل رقم هاتفك وعنوان بريدك الإلكتروني، تحقق من رقم هاتفك باستخدام رمز OTP المرسل إليك، وأكمل معلومات ملفك الشخصي.",
        },
    },
    {
        id: "2",
        question: {
            ar: "كيف يمكنني إدراج عقاري للبيع أو الإيجار؟",
        },
        answer: {
            ar: "بعد إنشاء حسابك، اذهب إلى 'إضافة إعلان' واملأ جميع تفاصيل العقار المطلوبة بما في ذلك الموقع والسعر ونوع العقار ورفع الصور. سيتم مراجعة إدراجك ونشره خلال 24 ساعة.",
        },
    },
    {
        id: "3",
        question: {
            ar: "ما هي الرسوم لاستخدام عقار؟",
        },
        answer: {
            ar: "إنشاء حساب وتصفح العقارات مجاني تماماً. نحن نطالب بعمولة صغيرة فقط عند اكتمال معاملة ناجحة من خلال منصتنا.",
        },
    },
    {
        id: "4",
        question: {
            ar: "كيف يمكنني التواصل مع أصحاب العقارات؟",
        },
        answer: {
            ar: "يمكنك التواصل مع أصحاب العقارات مباشرة من خلال معلومات الاتصال المتوفرة في كل إدراج، أو استخدام نظام المراسلة المدمج لدينا للتواصل الآمن.",
        },
    },
    {
        id: "5",
        question: {
            ar: "هل معلوماتي الشخصية آمنة؟",
        },
        answer: {
            ar: "نعم، نحن نأخذ أمان البيانات على محمل الجد. جميع معلوماتك الشخصية مشفرة ومخزنة بأمان. نحن لا نشارك بياناتك مع أطراف ثالثة دون موافقتك الصريحة.",
        },
    },
] as const;

// Design Tokens
export const GRADIENTS = {
    primary: "linear-gradient(180deg, #124093 0%, #261769 100%)",
    text: "linear-gradient(263.01deg, #1C2A7D 26.8%, #1C5CA3 94.88%)",
} as const;

// Navigation Links
export const NAV_LINKS = [
    { href: "/#about", label: "من نحن" },
    { href: "/#features", label: "المميزات" },
    { href: "/#contact", label: "تواصل معنا" },
    { href: "/#faq", label: "الاسئلة الشائعة" },
] as const;

// Footer Links
export const FOOTER_LINKS = [
    { href: "/", label: "الرئيسية" },
    { href: "/privacy", label: "سياسة الخصوصية" },
    { href: "/terms", label: "شروط الاستخدام" },
] as const;
