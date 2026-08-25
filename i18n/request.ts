import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !["en", "ar", "sv"].includes(locale)) {
    locale = "en";
  }
  return {
    locale,
    messages: (await import(`../public/messages/${locale}.json`)).default
  };
});
