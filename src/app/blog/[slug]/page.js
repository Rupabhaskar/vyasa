import { getBlogBySlug, getAllBlogSlugs } from "@/data/blog-posts";
import BlogDetailClient from "./BlogDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

const BASE_URL = "https://vyasasstudies.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      url,
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Vyasa Institute",
      locale: "en_IN",
      images: [
        {
          url: "/logo.png",
          width: 280,
          height: 64,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();
  return <BlogDetailClient post={post} />;
}
