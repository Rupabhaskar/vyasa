"use client";
import { motion } from "framer-motion";

const faculty = [
  {
    name: "CA Rajesh Kumar",
    role: "Director & Senior Faculty",
    subject: "Financial Reporting & Audit",
    exp: "18+ Years",
    initial: "RK",
    quote: "Every student has the potential to be a ranker. We just help them realize it.",
    results: "50+ Rank Holders",
  },
  {
    name: "CA Priya Menon",
    role: "Senior Faculty",
    subject: "Taxation & Law",
    exp: "14+ Years",
    initial: "PM",
    quote: "Complex laws become simple when taught with the right approach.",
    results: "20+ AIR Holders",
  },
  {
    name: "CMA Suresh Reddy",
    role: "CMA Head",
    subject: "Cost & Management Accounting",
    exp: "12+ Years",
    initial: "SR",
    quote: "CMA is not just an exam, it is a career transformation.",
    results: "CMA AIR 4 Mentor",
  },
  {
    name: "Prof. Lakshmi Devi",
    role: "Faculty",
    subject: "Mathematics & Accounts",
    exp: "15+ Years",
    initial: "LD",
    quote: "Strong fundamentals today create successful professionals tomorrow.",
    results: "98% Pass Rate",
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-dark/[0.015] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label text-gold mb-4 inline-block">Meet The Experts</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">Our Faculty</h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">Industry veterans and academic leaders committed to nurturing the next generation of professionals.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-gray-100/80 hover:border-gold/15 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-400"
            >
              {/* Header */}
              <div className="relative h-44 bg-gradient-to-br from-primary-dark to-[#0c1d4a] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }} />
                <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-gold/20 flex items-center justify-center">
                  <span className="text-xl font-heading font-bold text-gold/80">{f.initial}</span>
                </div>
                <div className="absolute top-3 right-3 bg-gold/[0.12] border border-gold/15 text-gold/80 text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">{f.exp}</div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-primary-dark text-lg mb-0.5 group-hover:text-gold transition-colors">{f.name}</h3>
                <p className="text-gold/70 text-xs font-sans font-semibold mb-0.5">{f.role}</p>
                <p className="text-muted/40 text-[10px] font-sans uppercase tracking-wider mb-4">{f.subject}</p>

                {/* Quote */}
                <p className="text-muted/60 text-[13px] leading-relaxed font-sans italic mb-4">
                  {"\u201C"}{f.quote}{"\u201D"}
                </p>

                <div className="pt-4 border-t border-gray-50">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold/50">{f.results}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
