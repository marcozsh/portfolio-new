import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { createServerLogger } from "./lib/logger";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  const homePath = request.headers.get("referer");
  const path = request.nextUrl.pathname;

  if (homePath?.includes("php") || path?.includes("php")) {
    //pls stop this, no php for u
    const redirectUrl = process.env.REDIRECT_URL || "";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  const response = await intlMiddleware(request);

  const logger = createServerLogger("proxy.ts");

  logger.info("Proxy middleware hit", { path, homePath });

  if (!path.startsWith("/api") && !path.match(/\.(jpg|png|gif|css|js|pdf)$/)) {
    try {
	    logger.info("fetching view count increment from path and origin", { path, origin: request.nextUrl.origin });
      await fetch(`${request.nextUrl.origin}/api/views`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Views-Secret-Key": process.env.VIEWS_SECRET_KEY || "",
        },
      });
    } catch (error) {
      logger.error("Error incrementing view count", { error: error instanceof Error ? error.message : String(error) });
    }
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|api/|.*\\.(?:jpg|png|gif|css|js|pdf|webp)$).*)",
    "/",
    "/(es|en)/:path*",
  ],
};
