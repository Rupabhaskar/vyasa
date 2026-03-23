import { courses, getCourseBySlug, getAllCourseSlugs } from "@/data/courses";
import CourseDetailClient from "./CourseDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: course.keywords,
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      type: "website",
    },
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  return <CourseDetailClient course={course} />;
}
