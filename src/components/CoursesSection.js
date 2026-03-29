"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const courses = [
  {
    title: "CA Foundation",
    desc: "Comprehensive coaching for all 4 papers with conceptual clarity, structured tests, and exam strategy support.",
    duration: "8 Months",
    tag: "",
    href: "/courses/ca-foundation",
  },
  {
    title: "CMA Foundation",
    desc: "Build strong fundamentals with objective exam practice, structured tests, and concept-focused coaching aligned to ICMAI.",
    duration: "8 Months",
    tag: "",
    href: "/courses/cma-foundation",
  },
  {
    title: "CA Intermediate",
    desc: "Group-wise intensive coaching with practical training, full-length mock exams, and targeted revision crash courses.",
    duration: "10 Months",
    tag: "",
    href: "/courses/ca-intermediate",
  },
  {
    title: "CMA Intermediate",
    desc: "Group-wise preparation with answer-writing practice, problem-solving sessions, and mock exams for June/December attempts.",
    duration: "9 Months",
    tag: "",
    href: "/courses/cma-intermediate",
  },
  {
    title: "CA Final",
    desc: "Rank-oriented preparation with advanced coaching, real-world case studies, and one-on-one mentorship by qualified CAs.",
    duration: "12 Months",
    tag: "Rank Course",
    href: "/courses/ca-final",
  },
  {
    title: "CMA Final",
    desc: "Advanced, exam-focused coaching with amendments coverage, case-based learning, rigorous mocks, and revision planning support.",
    duration: "1 Year",
    tag: "Advanced",
    href: "/courses/cma-final",
  },
  {
    title: "CA/CMA + Degree",
    desc: "Pursue your degree alongside CA or CMA preparation. Triple qualification pathway for maximum career advantage.",
    duration: "3 Years",
    tag: "",
    href: "/courses",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-28 bg-[#f9f8f6] relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label text-gold mb-4 inline-block">Programs Offered</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">
            Our Courses
          </h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">
            Structured designed programs that cater to every stage of your professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl border border-gray-100/80 hover:border-gold/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-400 overflow-hidden"
            >
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="p-4 sm:p-6 lg:p-8">
                {course.tag && (
                  <span className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-[0.15em] text-gold bg-gold/[0.06] border border-gold/10 px-2 sm:px-3 py-1 rounded-full">
                    {course.tag}
                  </span>
                )}

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary-dark mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {course.title}
                </h3>
                <p className="text-muted text-xs sm:text-[13px] lg:text-[14px] leading-relaxed mb-4 sm:mb-6 font-sans">
                  {course.desc}
                </p>

                <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-gray-50">
                  <span className="text-[10px] sm:text-xs text-muted/60 font-sans font-medium uppercase tracking-wider">{course.duration}</span>
                  <Link href={course.href} className="inline-flex items-center gap-1.5 text-primary-dark/70 hover:text-gold font-sans font-semibold text-[11px] sm:text-xs transition-colors group/link">
                    Learn More <FaArrowRight className="text-[8px] group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
