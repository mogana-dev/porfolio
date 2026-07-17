import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice("/en".length); // "" or "/projects" etc.
    const target = new URL(rest || "/", request.url);
    target.search = search;
    return NextResponse.redirect(target, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en", "/en/:path*"],
};
