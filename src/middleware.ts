import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const homePath = request.headers.get("referer");
  const path = request.nextUrl.pathname;

  if (homePath?.includes("php") || path?.includes("php")) { //pls stop this, no php for u
    const redirectUrl = process.env.REDIRECT_URL || "";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  const response = await intlMiddleware(request);

  if (!path.startsWith("/api") && !path.match(/\.(jpg|png|gif|css|js|pdf)$/)) {
    try {
      await fetch(`${request.nextUrl.origin}/api/views`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Views-Secret-Key": process.env.VIEWS_SECRET_KEY || "",
        },
      });
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|api/|.*\\.(?:jpg|png|gif|css|js|pdf|webp)$).*)","/", "/(es|en)/:path*",],
};
