import { ImageResponse } from "next/og";

export const alt = "Rakshit Jain — Financial Markets, Quantitative Research & Software";
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid #E2E8F0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#F8FAFC",
            }}
          >
            <div
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: "#2563EB",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#475569",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              PDEU ICT (2023–2027)
            </span>
          </div>

          <span
            style={{
              fontSize: "14px",
              color: "#2563EB",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Financial Markets · Quant · Software
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "82px",
              fontWeight: 800,
              color: "#0F172A",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            RAKSHIT JAIN
          </h1>
          <div
            style={{
              width: "140px",
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #2563EB, #0EA5A4, #059669)",
            }}
          />
          <p
            style={{
              fontSize: "26px",
              color: "#1D4ED8",
              margin: 0,
              letterSpacing: "0.01em",
              fontWeight: 600,
            }}
          >
            Financial Markets, Quantitative Research &amp; Software
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#475569",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            GIFT City IIBX Bullion Desk · Python Backtesting · Full-Stack React &amp; Node.js · Systems in C
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2E8F0",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#64748B" }}>
            Gandhinagar, Gujarat, India
          </span>
          <span style={{ fontSize: "16px", color: "#0F172A", fontWeight: 600 }}>
            rakshitindia2019@gmail.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
