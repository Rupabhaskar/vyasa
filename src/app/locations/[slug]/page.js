import { getLocationBySlug, getAllLocationSlugs } from "@/data/locations";
import LocationDetailClient from "./LocationDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
    },
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();
  return <LocationDetailClient location={location} />;
}
