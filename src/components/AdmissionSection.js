"use client";
import { motion } from "framer-motion";
import { FaFileAlt, FaUserCheck, FaClipboardCheck, FaCheckCircle } from "react-icons/fa";

const steps = [
  { icon: <FaFileAlt />, title: "Enquiry", desc: "Fill the enquiry form or visit our campus to learn about available programs." },
  { icon: <FaUserCheck />, title: "Counseling", desc: "Free one-on-one counseling to understand your goals and recommend the right course." },
  { icon: <FaClipboardCheck />, title: "Assessment", desc: "Aptitude assessment for scholarship eligibility and batch allocation." },
  { icon: <FaCheckCircle />, title: "Enrollment", desc: "Complete admission formalities and begin your journey to professional success." },
];

export default function AdmissionSection() {
  return (
    <section id="admissions" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#060e1f]/95 via-primary-dark/90 to-[#091638]/95" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }} />

      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/[0.06] rounded-tl-2xl hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/[0.06] rounded-br-2xl hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label text-gold/60 mb-4 inline-block">Get Started</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight mb-4">Admission Process</h2>
          <div className="royal-divider mb-6" />
          <p className="text-blue-200/35 max-w-xl mx-auto text-[15px] leading-relaxed font-sans">A simple, transparent process to get you started on your path.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[42px] left-[14%] right-[14%] h-px bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10" />

          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="relative text-center group">
              <div className="w-[60px] h-[60px] mx-auto rounded-full bg-white/[0.04] border border-gold/15 text-gold/60 flex items-center justify-center text-xl relative z-10 mb-5 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-400">
                {step.icon}
              </div>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-gold/30 mb-2 inline-block">Step {i + 1}</span>
              <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors">{step.title}</h3>
              <p className="text-blue-200/30 text-[13px] leading-relaxed font-sans max-w-[200px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
