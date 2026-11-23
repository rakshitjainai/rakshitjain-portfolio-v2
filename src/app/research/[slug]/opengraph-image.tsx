import { ImageResponse } from "next/og";
import { articlesData } from "@/data/articles";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  const title = article ? article.title : "Research Article";
  const category = article ? article.category : "Research";
  const readTime = article ? article.readTime : "";

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
              {category} · {readTime}
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
            Rakshit Jain · Research
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: title.length > 55 ? "44px" : "54px",
              fontWeight: 800,
              color: "#0F172A",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {title}
          </h1>
          <div
            style={{
              width: "120px",
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #2563EB, #0EA5A4, #059669)",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              color: "#475569",
              margin: 0,
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            {article?.subtitle || "Analytical paper on market mechanics and computational modeling."}
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
            Rakshit Jain · PDEU B.Tech ICT (2023–2027)
          </span>
          <span style={{ fontSize: "16px", color: "#0F172A", fontWeight: 600 }}>
            rakshitjain.in/research/{slug}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
