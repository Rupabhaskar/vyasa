"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaCalendarAlt } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";

export default function CoursesListingClient({ courses }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Courses" },
  ];

  return (
    <PageLayout>
      <PageHeader
        tag="Programs Offered"
        title="Our Courses"
        description="Carefully designed programs — CA Foundation to CA Final, CMA, ACCA (Applied Knowledge, Applied Skills, Strategic Professional), and Online Classes."
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(30,58,138,0.12)" }}
              >
                <Link
                  href={`/courses/${course.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-primary/20 transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="h-3 bg-gradient-to-r from-primary to-gold" />
                  <div className="p-8">
                    {course.heroTag && (
                      <span className="inline-block bg-gold/10 text-gold text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
                        {course.heroTag}
                      </span>
                    )}
                    <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                      {course.metaDescription}
                    </p>
                    <div className="space-y-2 mb-6 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-primary/60" /> Duration: {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primary/60" /> Next Batch: {course.nextBatch}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      View Details
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAForm
        heading="Not Sure Which Course Is Right for You?"
        subheading="Book a free counseling session and let our experts guide you to the best path."
      />
    </PageLayout>
  );
}
