import Link from "next/link";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
                <div className="text-center">
                    <h1 className="text-8xl font-bold text-[#124090] mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-[#252B5C] mb-4">
                        الصفحة غير موجودة
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md">
                        عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#1C5CA3] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                    >
                        العودة للرئيسية
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
