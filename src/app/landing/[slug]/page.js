import { getLandingBySlug, getAllLandingSlugs } from "@/data/landing-pages";
import LandingPageClient from "./LandingPageClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getLandingBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
  };
}

export default async function LandingPage({ params }) {
  const { slug } = await params;
  const page = getLandingBySlug(slug);
  if (!page) notFound();
  return <LandingPageClient page={page} />;
}
