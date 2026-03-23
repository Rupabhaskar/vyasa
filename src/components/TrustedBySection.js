"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaCertificate, FaAward, FaGlobeAsia, FaShieldAlt, FaBookReader } from "react-icons/fa";

const affiliations = [
  { icon: <FaUniversity />, name: "ICAI", desc: "Institute of Chartered Accountants of India" },
  { icon: <FaCertificate />, name: "ICMAI", desc: "Institute of Cost Accountants of India" },
  { icon: <FaAward />, name: "ISO 9001:2015", desc: "Quality Management Certified" },
  { icon: <FaGlobeAsia />, name: "ACCA", desc: "Association of Chartered Certified Accountants" },
  { icon: <FaShieldAlt />, name: "NSDC", desc: "National Skill Development Corporation" },
  { icon: <FaBookReader />, name: "UGC", desc: "University Grants Commission" },
];

const doubled = [...affiliations, ...affiliations];

export default function TrustedBySection() {
  return (
    <section className="py-14 bg-white border-b border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-primary-dark/70 mb-8">
          {"Recognized & Affiliated With"}
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-3.5 px-9 py-3 shrink-0 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[16px] text-primary-dark/70 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">{item.icon}</div>
              <div>
                <div className="font-sans font-bold text-primary-dark/80 text-xs group-hover:text-primary-dark transition-colors">{item.name}</div>
                <div className="text-[10px] text-gray-600/80 max-w-[170px] font-sans">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
