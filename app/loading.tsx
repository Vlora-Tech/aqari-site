export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-[#124090] border-t-transparent rounded-full animate-spin" />
                <p className="text-[#252B5C] font-medium">جاري التحميل...</p>
            </div>
        </div>
    );
}
