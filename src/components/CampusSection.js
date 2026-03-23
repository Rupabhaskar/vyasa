"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaExpand, FaBuilding, FaBook, FaDesktop, FaMicrophone, FaLightbulb, FaClock } from "react-icons/fa";

const facilities = [
  { title: "Smart Classrooms", icon: <FaLightbulb />, color: "from-primary-dark to-[#0c1d4a]" },
  { title: "Digital Library", icon: <FaBook />, color: "from-[#0c1d4a] to-primary" },
  { title: "Computer Lab", icon: <FaDesktop />, color: "from-primary to-accent" },
  { title: "Seminar Hall", icon: <FaMicrophone />, color: "from-[#091638] to-primary-dark" },
  { title: "Study Rooms", icon: <FaClock />, color: "from-primary-dark to-[#091638]" },
  { title: "Hostel Facility", icon: <FaBuilding />, color: "from-[#0c1d4a] to-primary-dark" },
];

const dailySchedule = [
  { time: "6:00 AM", activity: "Morning Study" },
  { time: "8:00 AM", activity: "Classes Begin" },
  { time: "1:00 PM", activity: "Lunch Break" },
  { time: "2:00 PM", activity: "Practice Sessions" },
  { time: "5:00 PM", activity: "Doubt Clearing" },
  { time: "7:00 PM", activity: "Supervised Study" },
];

export default function CampusSection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-28 bg-[#f9f8f6] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label text-gold mb-4 inline-block"><FaBuilding className="text-[9px]" /> Campus Life</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">Campus & Facilities</h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">A disciplined environment designed for focused learning and holistic development.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* Facility grid */}
          <div className="grid grid-cols-2 gap-4">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                onClick={() => setLightbox(i)}
                className={`relative h-36 md:h-44 rounded-2xl bg-gradient-to-br ${fac.color} overflow-hidden cursor-pointer group transition-all duration-400`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">{fac.icon}</div>
                  <h3 className="text-sm md:text-base font-heading font-semibold text-center">{fac.title}</h3>
                  <FaExpand className="mt-2 text-[10px] opacity-0 group-hover:opacity-50 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Daily routine */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white rounded-2xl border border-gray-100/80 p-8">
            <h3 className="font-heading font-bold text-primary-dark text-xl mb-2">Daily Routine</h3>
            <p className="text-muted/50 text-xs font-sans mb-6">Classes {"\u2192"} Practice {"\u2192"} Revision</p>
            <div className="space-y-4">
              {dailySchedule.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-4 group">
                  <span className="text-xs font-sans font-bold text-gold/60 w-16 shrink-0">{item.time}</span>
                  <div className="w-2 h-2 rounded-full bg-primary-dark/10 group-hover:bg-gold transition-colors shrink-0" />
                  <span className="text-[14px] font-sans text-primary-dark/60 group-hover:text-primary-dark transition-colors">{item.activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className={`relative w-full max-w-2xl h-80 md:h-[450px] rounded-3xl bg-gradient-to-br ${facilities[lightbox].color} flex flex-col items-center justify-center`} onClick={(e) => e.stopPropagation()}>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl text-white mb-4">{facilities[lightbox].icon}</div>
              <h2 className="text-2xl font-heading font-bold text-white">{facilities[lightbox].title}</h2>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-sm" aria-label="Close"><FaTimes /></button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
