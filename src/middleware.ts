import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = await intlMiddleware(request);
  if (
    !request.nextUrl.pathname.startsWith("/api") &&
    !request.nextUrl.pathname.match(/\.(jpg|png|gif|css|js|pdf)$/)
  ) {
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
  matcher: ["/", "/(es|en)/:path*"],
};
