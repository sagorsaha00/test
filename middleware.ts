import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar", "sv"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ar|en|sv)/:path*"],
};
