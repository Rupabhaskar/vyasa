"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { courses } from "@/data/courses";

export default function InternalLinks({ currentSlug, relatedSlugs = [] }) {
  const related = relatedSlugs.length
    ? courses.filter((c) => relatedSlugs.includes(c.slug))
    : courses.filter((c) => c.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Explore Related Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/courses/${course.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                  {course.shortTitle}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {course.metaDescription}
                </p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                  Learn More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
