"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaShieldAlt, FaBookOpen, FaAward, FaCrown, FaCheck, FaArrowRight, FaChevronRight } from "react-icons/fa";

const BLINK_DURATION = 350; // ms per blink (opacity cycle)
const BLINK_COUNT = 5;
const INTERVAL = BLINK_COUNT * BLINK_DURATION; // advance after 3 blinks
const CIRCLE_R = 26;
const CIRCLE_C = 2 * Math.PI * CIRCLE_R;

const steps = [
  {
    icon: <FaShieldAlt />,
    title: "Foundation of Discipline",
    description: "Building strong fundamentals through structured daily routines, disciplined study hours, and a focused academic environment that shapes character and work ethic.",
    gradient: "from-primary-dark to-[#0c1d4a]",
    features: ["Daily Study Hours", "Structured Routine", "Character Building"],
    duration: "Phase 1",
  },
  {
    icon: <FaBookOpen />,
    title: "Concept Mastery",
    description: "Deep conceptual understanding through expert teaching, regular assessments, and personalized doubt-clearing sessions that build unshakeable confidence.",
    gradient: "from-[#0c1d4a] to-primary",
    features: ["Expert Faculty", "Regular Assessments", "Doubt Clearing"],
    duration: "Phase 2",
  },
  {
    icon: <FaAward />,
    title: "Exam Excellence",
    description: "Strategic exam preparation with mock tests, time management training, and revision techniques that maximize scores and minimize stress.",
    gradient: "from-primary to-accent",
    features: ["Mock Test Series", "Time Management", "Revision Strategy"],
    duration: "Phase 3",
  },
  {
    icon: <FaCrown />,
    title: "Professional Success",
    description: "Final preparation towards becoming a qualified Chartered Accountant with rank-oriented coaching, mentorship, and industry-ready skills.",
    gradient: "from-[#6b5a1f] to-gold",
    features: ["Rank-oriented Prep", "Career Guidance", "Industry Readiness"],
    duration: "Phase 4",
  },
];

const cardVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0, scale: 0.96, transition: { duration: 0.3 } }),
};

export default function JourneySection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [key, setKey] = useState(0);
  const [cycle, setCycle] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
    setKey((k) => k + 1);
    if (idx === 0) setCycle((c) => c + 1);
  }, [active]);

  const advance = useCallback(() => {
    setDirection(1);
    setActive((prev) => {
      const next = (prev + 1) % steps.length;
      if (next === 0) setCycle((c) => c + 1);
      return next;
    });
    setKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [advance, paused, key]);

  return (
    <section
      id="journey"
      className="py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label text-primary-dark/50 mb-4 inline-block">
            The Transformation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">
            Student Journey
          </h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">
            A structured four-phase transformation from student to qualified professional.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center">
            {steps.map((step, i) => {
              const nextIndex = (active + 1) % steps.length;
              const isNextBlinking = i === nextIndex && !paused;
              return (
              <div key={i} className="flex items-center">
                <button onClick={() => goTo(i)} className="relative w-[64px] h-[64px] flex items-center justify-center">
                  {i === active && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" r={CIRCLE_R} fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="2.5" />
                      <motion.circle
                        cx="32" cy="32" r={CIRCLE_R} fill="none" stroke="url(#timer-grad)" strokeWidth="2.5"
                        strokeLinecap="round" strokeDasharray={CIRCLE_C}
                        initial={{ strokeDashoffset: CIRCLE_C }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                        key={key}
                      />
                      <defs>
                        <linearGradient id="timer-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#c9a84c" />
                          <stop offset="100%" stopColor="#e8d48b" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  <motion.div
                    key={`node-${i}-${cycle}`}
                    animate={{
                      background: i === active
                        ? "linear-gradient(135deg, #0c1d4a, #c9a84c)"
                        : i < active
                        ? "linear-gradient(135deg, #1e3a8a, #2563eb)"
                        : "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
                      opacity: isNextBlinking ? [1, 0.35, 1] : 1,
                    }}
                    transition={{
                      background: { type: "spring", stiffness: 400, damping: 25 },
                      opacity: isNextBlinking
                        ? { duration: BLINK_DURATION / 1000, repeat: BLINK_COUNT - 1 }
                        : {},
                    }}
                    whileHover={{ scale: 1.08 }}
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-[15px] ${i <= active ? "text-white" : "text-gray-400"}`}
                    style={{ boxShadow: i === active ? "0 6px 24px rgba(12,29,74,0.3)" : "none" }}
                  >
                    {i < active ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}>
                        <FaCheck className="text-xs text-gold" />
                      </motion.div>
                    ) : step.icon}
                  </motion.div>
                  <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-sans font-semibold whitespace-nowrap tracking-wider uppercase transition-colors ${i === active ? "text-primary-dark" : "text-muted/30"}`}>
                    {step.duration}
                  </span>
                </button>
                {i < steps.length - 1 && (
                  <div className="relative w-8 md:w-14 lg:w-20 h-[3px] rounded-full overflow-visible mx-1 flex items-center justify-center">
                    <div className={`absolute inset-0 overflow-hidden rounded-full transition-colors ${i === active ? "bg-gold/20" : "bg-gray-100"}`}>
                      <motion.div
                        key={`bar-${i}-${cycle}`}
                        className={`h-full rounded-full ${i === active ? "bg-gradient-to-r from-gold via-gold-light to-gold shadow-[0_0_8px_rgba(201,168,76,0.5)]" : "bg-gradient-to-r from-primary-dark via-gold to-gold-light"}`}
                        initial={{ width: "0%" }}
                        animate={{ width: i < active ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <motion.div
                      key={`arrow-${i}-${cycle}`}
                      className="relative z-10 w-6 h-6 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-[0_2px_12px_rgba(201,168,76,0.4)]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: i < active ? 1 : i === active ? 1 : 0.4,
                        scale: i <= active ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <FaChevronRight className="text-[9px] text-gold" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
            })}
          </div>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={active} custom={direction} variants={cardVariants} initial="enter" animate="center" exit="exit">
              <div className={`relative bg-gradient-to-br ${steps[active].gradient} rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]`}>
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }} />
                <motion.div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.04] rounded-full -mr-20 -mt-20 blur-[50px]" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 5, repeat: Infinity }} />

                <div className="relative z-10 p-10 md:p-14 text-white">
                  <div className="flex items-center gap-5 mb-8">
                    <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, type: "spring" }} className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                      {steps[active].icon}
                    </motion.div>
                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-sans font-semibold">{steps[active].duration}</span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{steps[active].title}</h3>
                    </div>
                  </div>
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-2xl font-sans">
                    {steps[active].description}
                  </motion.p>
                  <div className="flex flex-wrap gap-3">
                    {steps[active].features.map((f, i) => (
                      <motion.span key={f} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.08 }} className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.08] rounded-full px-4 py-2 text-sm font-sans font-medium">
                        <FaCheck className="text-[9px] text-gold" /> {f}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.06]">
                    <div className="flex gap-2">
                      {steps.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 ${i === active ? "w-7 h-1.5 bg-gradient-to-r from-gold to-gold-light" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/30"}`} />
                      ))}
                    </div>
                    <button onClick={() => goTo((active + 1) % steps.length)} className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors font-sans">
                      {active < steps.length - 1 ? "Next Phase" : "Start Over"} <FaArrowRight className="text-[9px]" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
