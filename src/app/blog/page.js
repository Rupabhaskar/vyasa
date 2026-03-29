import { blogPosts } from "@/data/blog-posts";
import BlogListingClient from "./BlogListingClient";

export const metadata = {
  title: "Blog | CA & CMA Preparation Tips, Career Guidance & Location Guides – Vyasa Institute",
  description:
    "Expert articles on CA preparation, CMA tips, career guidance, and location guides for Vijayawada, Eluru & Andhra Pradesh. Vyasa Institute blog.",
  keywords: "CA blog, CMA blog, CA preparation tips, CA coaching Vijayawada, CA coaching Eluru, Vyasa Institute blog",
};
 
export default function BlogPage() {
  return <BlogListingClient posts={blogPosts} />;
}
