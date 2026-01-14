"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-[#124090] mb-4">
                    حدث خطأ ما!
                </h1>
                <p className="text-gray-600 mb-8 max-w-md">
                    عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.
                </p>
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 bg-[#1C5CA3] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                    حاول مرة أخرى
                </button>
            </div>
        </main>
    );
}
