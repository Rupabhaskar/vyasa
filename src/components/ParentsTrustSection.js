"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserShield, FaTrophy, FaHeartbeat } from "react-icons/fa";

const reasons = [
  {
    icon: <FaShieldAlt />,
    title: "Discipline-Focused Environment",
    desc: "Structured daily routines with monitored study hours, attendance tracking, and a culture that builds self-discipline and accountability.",
  },
  {
    icon: <FaUserShield />,
    title: "Safe & Supervised Campus",
    desc: "A secure, well-monitored campus with hostel facilities. Parents receive regular updates on attendance, performance, and progress.",
  },
  {
    icon: <FaTrophy />,
    title: "Proven Results, Year After Year",
    desc: "Consistent of High Pass Percentage and Rank, 98% pass rates, and hundreds of successful CA/CMA professionals. Results parents can trust.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Personal Care & Mentorship",
    desc: "Each student gets a dedicated mentor. We focus on mental well-being, motivation, and holistic development alongside academics.",
  },
];

export default function ParentsTrustSection() {
  return (
    <section className="py-12 bg-[#f9f8f6] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          {/* Left — heading */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold mb-4 inline-block">For Parents</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-4">
              {"Why Parents Trust Vyasa?"}
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-transparent mb-6" />
            <p className="text-black text-[15px] leading-relaxed font-sans mb-8 max-w-md">
              {"We understand that choosing an institute for your child is one of the most important decisions you\u2019ll make. Here\u2019s why thousands of parents have placed their trust in Vyasa Institute."}
            </p>
            <div className="flex items-center gap-4 text-xs text-black/80 font-sans">
              <div className="flex -space-x-2">
                {["R", "S", "M", "A"].map((l, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary-dark/[0.06] border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary-dark/40">{l}</div>
                ))}
              </div>
              <span>Trusted by 3000+ parent families</span>
            </div>
          </motion.div>

          {/* Right — feature cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -3 }}
                className="group bg-white rounded-2xl border border-gray-100/80 p-6 hover:border-gold/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-dark/[0.03] text-primary-dark/40 flex items-center justify-center text-[15px] mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">
                  {r.icon}
                </div>
                <h3 className="font-heading font-semibold text-primary-dark text-[15px] mb-2 group-hover:text-gold transition-colors">{r.title}</h3>
                <p className="text-black text-[13px] leading-relaxed font-sans">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
