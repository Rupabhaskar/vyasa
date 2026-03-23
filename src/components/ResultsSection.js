"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { FaTrophy, FaMedal, FaUsers, FaChartLine, FaArrowRight, FaCrown } from "react-icons/fa";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { icon: <FaCrown />, value: 15, suffix: "+", label: "All India Ranks" },
  { icon: <FaUsers />, value: 5000, suffix: "+", label: "Students Trained" },
  { icon: <FaChartLine />, value: 98, suffix: "%", label: "Success Rate" },
  { icon: <FaMedal />, value: 200, suffix: "+", label: "CA Selections" },
];

const rankHolders = [
  { rank: "AIR 1", name: "Priya Sharma", exam: "CA Final May 2025" },
  { rank: "AIR 3", name: "Rahul Verma", exam: "CA Inter Nov 2025" },
  { rank: "AIR 7", name: "Anita Reddy", exam: "CMA Final Dec 2025" },
  { rank: "AIR 12", name: "Karthik Rajan", exam: "CA Foundation Jun 2025" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="section-label text-gold mb-4 inline-block">
            <FaTrophy className="text-[9px]" /> Our Track Record
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">
            Wall of Success
          </h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">
            A legacy of excellence. Consistently producing top ranks and exceptional pass rates across CA and CMA examinations.
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="text-center py-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-dark/[0.03] text-primary-dark/40 flex items-center justify-center text-lg mx-auto mb-4 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-400">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-dark tracking-tight mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted/60 text-xs uppercase tracking-[0.15em] font-sans font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Rank holder cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rankHolders.map((holder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-primary-dark rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(12,29,74,0.2)] transition-all duration-400"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light opacity-60" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/[0.06] rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 p-7 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.06] border border-gold/20 flex items-center justify-center mb-4">
                  <span className="text-gold font-heading font-bold text-lg">{holder.rank}</span>
                </div>
                <h3 className="text-white font-heading font-semibold text-lg mb-1">{holder.name}</h3>
                <p className="text-blue-300/40 text-xs font-sans">{holder.exam}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/results" className="inline-flex items-center gap-2 text-primary-dark/70 hover:text-primary-dark font-sans font-semibold text-sm transition-colors group">
            View All Results & Success Stories
            <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
