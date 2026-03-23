import { blogPosts } from "@/data/blog-posts";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";
import { landingPages } from "@/data/landing-pages";

const BASE_URL = "https://vyasasstudies.com";

export default function sitemap() {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/courses`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/upcoming-batches`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/our-team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/our-gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/locations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/student-journey`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/campus-life`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/results`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/link-to-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const courseUrls = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locationUrls = locations.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const landingUrls = landingPages.map((lp) => ({
    url: `${BASE_URL}/landing/${lp.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogUrls, ...courseUrls, ...locationUrls, ...landingUrls];
}
