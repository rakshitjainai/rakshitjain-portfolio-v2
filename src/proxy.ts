import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  // 1. Permanent redirect (308) from apex rakshitjain.in and vercel staging host to primary domain
  if (
    host === "rakshitjain.in" ||
    host === "rakshitjain-portfolio-v2.vercel.app"
  ) {
    const url = new URL(`https://www.rakshitjain.in${pathname}${search}`);
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // 2. Set X-Robots-Tag: noindex, nofollow on preview deployments
  const isVercelPreview =
    process.env.VERCEL_ENV === "preview" ||
    (host.endsWith(".vercel.app") && host !== "rakshitjain-portfolio-v2.vercel.app");

  if (isVercelPreview) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
