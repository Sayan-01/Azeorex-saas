import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const { pathname, searchParams, host } = req.nextUrl;
  console.log("hhh",req.nextUrl.pathname);
  
  const searchParamsString = searchParams.toString();
  const pathWithSearchParams = `${pathname}${searchParamsString.length > 0 ? `?${searchParamsString}` : ""}`;

  // Check for subdomain
  const customSubDomain = host.split(`.${process.env.NEXT_PUBLIC_URL_DOMAIN}`).filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url));
  }

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
  }

  if (pathname === "/" || (pathname === "/site" && host === process.env.NEXT_PUBLIC_URL_DOMAIN)) {
    return NextResponse.rewrite(new URL("/site", req.url));
  }

  if (pathname.startsWith("/agency") || pathname.startsWith("/subaccount")) {
    return NextResponse.rewrite(new URL(pathWithSearchParams, req.url));
  }

  return NextResponse.next();
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
