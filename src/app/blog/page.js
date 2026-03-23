import { blogPosts } from "@/data/blog-posts";
import BlogListingClient from "./BlogListingClient";

export const metadata = {
  title: "Blog | CA & CMA Preparation Tips, Career Guidance & Location Guides – Vyasas Studies",
  description:
    "Expert articles on CA preparation, CMA tips, career guidance, and location guides for Vijayawada, Guntur, Hyderabad, Eluru & Andhra Pradesh. Vyasas Studies blog.",
  keywords: "CA blog, CMA blog, CA preparation tips, CA coaching Vijayawada, CA coaching Guntur, CA coaching Hyderabad, Vyasas Studies blog",
};
 
export default function BlogPage() {
  return <BlogListingClient posts={blogPosts} />;
}
