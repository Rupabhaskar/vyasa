"use client";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaClipboardCheck, FaUsersCog, FaClock, FaBookReader, FaMedal } from "react-icons/fa";

const features = [
  { icon: <FaBookReader />, title: "Structured Programs & Study Hours", desc: "CA & CMA coaching with a clear path from Foundation to Final, supported by structured study plans and disciplined study hours." },
  { icon: <FaClipboardCheck />, title: "Exams", desc: "Weekend Exams and Consolidated Grand Tests will make the Students confort at all times consistent practice builds confidence."},
  { icon: <FaUsersCog />, title: "Personal Mentoring", desc: "Every student is assigned a dedicated mentor who tracks progress, addresses weaknesses, and provides guidance."},
  { icon: <FaChalkboardTeacher />, title: "Expert Faculty", desc: "Learn from qualified CAs, CMAs, and professors with decades of experience and a passion for student success." },
  { icon: <FaMedal />, title: "Proven Track Record", desc: "Consistent All India Ranks and the highest pass percentages in the region, year after year."  },
  { icon: <FaMedal />, title: "Specialized Materials", desc: "Our Materials covers board materials MTP's and RTP's Previous Years Question Papers and Self Prepared Question covering all conceptual information."},

];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-surface-deep/95 via-primary-dark/90 to-surface-deep-2/95" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }} />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[140px]" />
      <div className="absolute top-10 left-10 w-28 h-28 border-t border-l border-gold/[0.08] rounded-tl-2xl hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-28 h-28 border-b border-r border-gold/[0.08] rounded-br-2xl hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label text-gold/70 mb-4 inline-block">The Vyasas Advantage</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight mb-4">Why Vyasa ?</h2>
          <div className="royal-divider mb-6" />
          <p className="text-emerald-100/40 max-w-xl mx-auto text-[15px] leading-relaxed font-sans">What makes Vyasa Institute different from every other coaching institute.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -3 }}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-gold/10 transition-all duration-400"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-[16px] text-gold/80 group-hover:text-gold transition-colors">{f.icon}</div>
              </div>
              <h3 className="text-[16px] font-heading font-semibold text-white mb-2 group-hover:text-gold transition-colors">{f.title}</h3>
              <p className="text-emerald-100/35 text-[13px] leading-relaxed font-sans">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
