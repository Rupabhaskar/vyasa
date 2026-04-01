"use client";
import { motion } from "framer-motion";
import { FaMobileAlt, FaClipboardList, FaChartPie, FaVideo, FaUserShield, FaCloud } from "react-icons/fa";

const features = [
  { icon: <FaClipboardList />, title: "Online Test Series", desc: "Chapter-wise and full-length Exams with instant results, analytics, and performance ranking." },
  { icon: <FaChartPie />, title: "Performance Tracking", desc: "Detailed dashboards tracking progress, strengths, and improvement areas over time." },
  { icon: <FaUserShield />, title: "Parent Monitoring", desc: "Parents can track attendance, test scores, and progress through a dedicated portal." },
  { icon: <FaMobileAlt />, title: "Mobile App Support", desc: "Access lectures, study material, and test results on the go with our student app." },
  { icon: <FaVideo />, title: "Live & Recorded Classes", desc: "Never miss a class. Watch live sessions or recorded lectures anytime, anywhere." },
  { icon: <FaCloud />, title: "Cloud Study Material", desc: "All study materials available digitally, accessible from any device, always updated." },
];

export default function DigitalSection() {
  return (
    <section className="py-18 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary-dark/[0.015] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label text-primary-dark/50 mb-4 inline-block"><FaMobileAlt className="text-[9px]" /> Tech-Enabled</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">Digital Learning</h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">Modern technology integrated into every aspect of the learning experience.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ y: -3 }} className="group bg-[#f9f8f6] rounded-2xl border border-gray-100/80 p-6 hover:bg-white hover:border-gold/10 hover:shadow-[0_10px_36px_rgba(0,0,0,0.04)] transition-all duration-400">
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-dark/[0.04] text-primary-dark/40 flex items-center justify-center text-[16px] group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">{f.icon}</div>
                <div>
                  <h3 className="font-heading font-semibold text-primary-dark text-[15px] mb-1.5 group-hover:text-gold transition-colors">{f.title}</h3>
                  <p className="text-black text-[13px] leading-relaxed font-sans">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
