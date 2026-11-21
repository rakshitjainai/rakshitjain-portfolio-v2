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
          backgroundColor: "#0A0B0D",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid #22262E",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid #22262E",
              backgroundColor: "#111317",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#C8A15A",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#8B8F97",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              PDEU ICT (2023–2027)
            </span>
          </div>

          <span
            style={{
              fontSize: "14px",
              color: "#C8A15A",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Financial Markets · Quant · Software
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "82px",
              fontWeight: 700,
              color: "#F2EFE8",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            RAKSHIT JAIN
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#C8A15A",
              margin: 0,
              letterSpacing: "0.02em",
              fontWeight: 500,
            }}
          >
            Financial Markets, Quantitative Research &amp; Software
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#8B8F97",
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
            borderTop: "1px solid #22262E",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#8B8F97" }}>
            Gandhinagar, Gujarat, India
          </span>
          <span style={{ fontSize: "16px", color: "#F2EFE8", fontWeight: 600 }}>
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
