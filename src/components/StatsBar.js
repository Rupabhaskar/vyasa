"use client";
import { motion } from "framer-motion";
import { FaTrophy, FaUserGraduate, FaChalkboardTeacher, FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  { icon: <FaTrophy />, value: "200+", label: "CA Selections" },
  { icon: <FaUserGraduate />, value: "5000+", label: "Students Trained" },
  { icon: <FaChalkboardTeacher />, value: "20+", label: "Expert Faculty" },
  { icon: <FaMapMarkerAlt />, value: "2", label: "Campus Locations" },
];

export default function StatsBar() {
  return (
    <section className="relative -mt-16 z-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.07)] border border-gray-100/80"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-50">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-4 px-7 py-6 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-dark/[0.04] text-primary-dark/60 flex items-center justify-center text-[15px] group-hover:bg-gold/10 group-hover:text-gold transition-all duration-400">
                {stat.icon}
              </div>
              <div>
                <div className="text-xl font-heading font-bold text-primary-dark tracking-tight">{stat.value}</div>
                <div className="text-[10px] text-muted/50 uppercase tracking-[0.15em] font-sans font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
