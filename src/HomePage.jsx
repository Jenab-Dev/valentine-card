import { useState } from "react";

export default function HomePage() {
    const [open, setOpen] = useState(false);
    const [yes, setYes] = useState(false);
    const [noPos, setNoPos] = useState({ x: 0, y: 0 });

    const moveNoButton = () => {
        // محدود کردن حرکت تا داخل کارت باقی بمونه
        const x = Math.random() * 160 - 80;
        const y = Math.random() * 80 - 40;
        setNoPos({ x, y });
    };

    return (
        <div className="px-2 min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-300 via-pink-200 to-red-300 relative overflow-hidden">
            {/* قلب‌های شناور */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-10 left-10 text-3xl animate-bounce">
                    ❤️
                </span>
                <span className="absolute top-1/3 right-16 text-2xl animate-pulse">
                    💖
                </span>
                <span className="absolute bottom-20 left-1/4 text-2xl animate-bounce">
                    💕
                </span>
                <span className="absolute bottom-10 right-10 text-3xl animate-pulse">
                    💘
                </span>
            </div>

            {/* کارت */}
            <div className="text-center p-10 bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 max-w-md relative">
                <h1
                    dir="rtl"
                    className="text-5xl font-bold text-rose-600 mb-4 leading-18"
                >
                    ولنتاین مبارک ❤️
                </h1>

                {!open && (
                    <>
                        <p className="text-gray-700 mb-6">
                            یه چیز کوچیک برات درست کردم...
                        </p>

                        <button
                            onClick={() => setOpen(true)}
                            className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl transition-all duration-300 shadow-lg"
                        >
                            روی من کلیک کن
                        </button>
                    </>
                )}

                {open && (
                    <div className="mt-6 animate-fade">
                        <p dir="rtl" className="text-lg text-gray-800 mb-6">
                            تو فقط با بودن‌ت، دنیای منو بهتر می‌کنی. ممنون که
                            هستی ❤️
                        </p>

                        <p
                            dir="rtl"
                            className="mb-4 font-semibold text-rose-700"
                        >
                            می‌خوای تا همیشه ولنتاین من باشی؟😔
                        </p>

                        <div className="flex justify-center gap-4 relative h-20 items-center">
                            {/* بله */}
                            <button
                                onClick={() => setYes(true)}
                                className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition"
                            >
                                بله ❤️
                            </button>

                            {/* نه (حالا داخل کارت باقی می‌مونه) */}
                            <button
                                onClick={moveNoButton}
                                style={{
                                    transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                                }}
                                className="px-5 py-2 bg-gray-400 text-white rounded-xl absolute transition-all duration-300"
                            >
                                نه 💔
                            </button>
                        </div>

                        {yes && (
                            <p
                                dir="rtl"
                                className="mt-6 text-rose-700 font-semibold text-lg"
                            >
                                می‌دونستم 😌❤️
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
