"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const batches = [
  { course: "CA Foundation", startDate: "July 2026", duration: "8 Months", href: "/courses/ca-foundation" },
  { course: "CA Intermediate", startDate: "August 2026", duration: "10 Months", href: "/courses/ca-intermediate" },
  { course: "CA Final", startDate: "September 2026", duration: "12 Months", href: "/courses/ca-final" },
  { course: "CMA Foundation", startDate: "July 2026", duration: "8 Months", href: "/courses/cma-course" },
];

export default function UpcomingBatchesClient() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          {batches.map((b, i) => (
            <motion.div
              key={b.course}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-gray-100 hover:border-gold/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                  <FaCalendarAlt />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-dark">{b.course}</h3>
                  <p className="text-sm text-muted">Starts {b.startDate} {"\u2022"} {b.duration}</p>
                </div>
              </div>
              <Link href={b.href} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold transition-colors">
                Enroll Now <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold text-sm">
            Book Free Counseling
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
