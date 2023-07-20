// https://nextjs.org/docs/pages/building-your-application/routing/middleware
// based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const isPublicPage =
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register";

    // get token
    const token = request.cookies.get("token")?.value;
    if (!token && !isPublicPage) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (token && isPublicPage) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    return NextResponse.next();
  } catch (error: any) {
    return NextResponse.error();
  }
}

// See "Matching Paths" below to learn more
// TODO: Modify later to account for Dynamic routes
export const config = {
  matcher: ["/"],
  //matcher: ["/", "/login", "/register", "/profile"],
};
