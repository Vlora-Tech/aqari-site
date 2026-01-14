import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "عقاري إكس - منصة العقارات الأولى في السعودية";
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(180deg, #124093 0%, #261769 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Logo Circle */}
                <div
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: "50%",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 30,
                    }}
                >
                    <span style={{ fontSize: 60, color: "#124090" }}>🏠</span>
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontSize: 72,
                        fontWeight: "bold",
                        color: "white",
                        margin: 0,
                        marginBottom: 20,
                    }}
                >
                    عقاري إكس
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontSize: 32,
                        color: "rgba(255,255,255,0.9)",
                        margin: 0,
                        textAlign: "center",
                        maxWidth: 800,
                    }}
                >
                    منصة العقارات الأولى في السعودية
                </p>

                {/* Features */}
                <div
                    style={{
                        display: "flex",
                        gap: 40,
                        marginTop: 40,
                    }}
                >
                    {["شقق", "فلل", "أراضي", "إيجار", "بيع"].map((item) => (
                        <div
                            key={item}
                            style={{
                                background: "rgba(255,255,255,0.2)",
                                padding: "12px 24px",
                                borderRadius: 30,
                                color: "white",
                                fontSize: 24,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
