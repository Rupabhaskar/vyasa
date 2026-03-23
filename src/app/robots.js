const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vyasasstudies.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/technical-health"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/technical-health"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/technical-health"],
      },
    ],
    host: BASE_URL,
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
