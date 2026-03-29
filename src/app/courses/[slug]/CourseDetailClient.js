"use client";
import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaUserGraduate, FaCheckCircle, FaTrophy, FaChartLine, FaMedal, FaBalanceScale, FaCalculator, FaChartBar, FaBriefcase, FaGraduationCap, FaBookOpen, FaCrown, FaFileAlt } from "react-icons/fa";

const curriculumIcons = {
  FaBalanceScale,
  FaCalculator,
  FaChartBar,
  FaBriefcase,
  FaGraduationCap,
  FaBookOpen,
  FaCrown,
  FaFileAlt,
};
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQSection from "@/components/shared/FAQSection";
import CTAForm from "@/components/shared/CTAForm";
import InternalLinks from "@/components/shared/InternalLinks";
import { CourseSchema, BreadcrumbSchema } from "@/components/shared/SchemaMarkup";

function CMAStagesTable({ stages }) {
  const rows = [
    { label: "Eligibility", key: "eligibility" },
    { label: "Tenure", key: "tenure" },
    { label: "No. of Subjects", key: "subjects" },
    { label: "Passing Criteria", key: "passingCriteria" },
    { label: "Exams Held In", key: "examsHeldIn" },
    { label: "Exam Pattern", key: "examPattern" },
    { label: "Registration", key: "registration" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary text-center mb-4"
        >
          CMA Course — Three Stages
        </motion.h2>
        <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
          Complete comparison of all three stages of the CMA India examination.
        </p>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block overflow-x-auto"
        >
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <thead>
              <tr className="bg-gradient-to-r from-primary to-primary-light text-white">
                <th className="text-left px-6 py-4 font-semibold text-sm" />
                {stages.map((s) => (
                  <th key={s.stage} className="text-left px-6 py-4 font-bold text-base">
                    {s.stage}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.key} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-6 py-4 font-semibold text-primary text-sm whitespace-nowrap border-r border-gray-100">
                    {row.label}
                  </td>
                  {stages.map((s) => (
                    <td key={s.stage + row.key} className="px-6 py-4 text-muted text-sm leading-relaxed">
                      {row.key === "subjects" ? s[row.key] + " papers" : s[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-white">
                <td className="px-6 py-4 font-semibold text-primary text-sm align-top border-r border-gray-100">
                  Subjects
                </td>
                {stages.map((s) => (
                  <td key={s.stage + "names"} className="px-6 py-4 text-sm align-top">
                    <ul className="space-y-1.5">
                      {s.subjectNames.map((name, j) => {
                        const isGroupLabel = name.endsWith(":") || name.startsWith("Group") || name.startsWith("Elective");
                        return (
                          <li
                            key={j}
                            className={isGroupLabel ? "font-bold text-primary mt-3 first:mt-0" : "text-muted"}
                          >
                            {name}
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-8">
          {stages.map((s, idx) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-4">
                <h3 className="text-lg font-bold text-white">{s.stage}</h3>
              </div>
              <div className="p-6 space-y-4">
                {rows.map((row) => (
                  <div key={row.key} className="flex gap-3">
                    <span className="text-sm font-semibold text-primary w-28 shrink-0">{row.label}:</span>
                    <span className="text-sm text-muted">
                      {row.key === "subjects" ? s[row.key] + " papers" : s[row.key]}
                    </span>
                  </div>
                ))}
                <div>
                  <span className="text-sm font-semibold text-primary block mb-2">Subjects:</span>
                  <ul className="space-y-1">
                    {s.subjectNames.map((name, j) => {
                      const isGroupLabel = name.endsWith(":") || name.startsWith("Group") || name.startsWith("Elective");
                      return (
                        <li
                          key={j}
                          className={`text-sm ${isGroupLabel ? "font-bold text-primary mt-2 first:mt-0" : "text-muted"}`}
                        >
                          {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CourseDetailClient({ course }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: course.shortTitle },
  ];

  return (
    <PageLayout>
      <CourseSchema course={course} />
      <BreadcrumbSchema items={crumbs} />

      <PageHeader
        tag={course.heroTag || course.shortTitle}
        title={course.title}
        description={course.metaDescription}
      />
      <Breadcrumbs items={crumbs} />

      {/* Quick info bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-6 md:gap-12 justify-center text-sm">
            <div className="flex items-center gap-2 text-muted">
              <FaClock className="text-primary" /> <strong>Duration:</strong> {course.duration}
            </div>
            <div className="flex items-center gap-2 text-muted">
              <FaCalendarAlt className="text-primary" /> <strong>Next Batch:</strong> {course.nextBatch}
            </div>
            <div className="flex items-center gap-2 text-muted">
              <FaUserGraduate className="text-primary" /> <strong>Eligibility:</strong> {course.eligibility}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8">Course Overview</h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed">
              {course.overview.split("\n\n").map((para, i) => (
                <p key={i} className="mb-6">{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CMA Stages Table — only for CMA course */}
      {course.cmaStages && <CMAStagesTable stages={course.cmaStages} />}

      {/* Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            Course Highlights
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <FaCheckCircle className="text-green-500 text-xl shrink-0 mt-0.5" />
                <span className="text-primary font-medium">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            Curriculum
          </motion.h2>
          <div className="space-y-4">
            {course.curriculum.map((item, i) => {
              const IconComponent = item.icon ? curriculumIcons[item.icon] : null;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary shrink-0">
                      {IconComponent ? (
                        <IconComponent className="text-xl" />
                      ) : (
                        <span className="font-bold text-sm">{item.paper}</span>
                      )}
                    </span>
                    <div className="flex-1">
                      {item.icon && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 block mb-0.5">{item.paper}</span>
                      )}
                      <h3 className="font-bold text-primary text-lg">{item.name}</h3>
                      <p className="text-muted text-sm mt-1">{item.topics}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Strip */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 text-center text-white sm:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <FaChartLine className="text-3xl text-gold mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold">{course.results.passRate}</div>
              <div className="text-emerald-100 text-sm mt-1">Pass Rate</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <FaTrophy className="text-3xl text-gold mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold">{course.results.topRank}</div>
              <div className="text-emerald-100 text-sm mt-1">Best Rank</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <FaMedal className="text-3xl text-gold mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold">{course.results.rankers}</div>
              <div className="text-emerald-100 text-sm mt-1">Rank Holders</div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection faqs={course.faqs} />

      <CTAForm
        heading={`Enroll in ${course.shortTitle}`}
        subheading={`Next batch starts ${course.nextBatch}. Limited seats available.`}
        courseName={course.shortTitle}
      />

      <InternalLinks currentSlug={course.slug} relatedSlugs={course.relatedCourses} />
    </PageLayout>
  );
}
