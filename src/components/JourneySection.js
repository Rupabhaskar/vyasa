"use client";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FaShieldAlt, FaBookOpen, FaAward, FaCrown, FaCheck, FaArrowRight, FaChevronRight } from "react-icons/fa";

// const BLINK_DURATION = 350; // ms per blink (opacity cycle)
// const BLINK_COUNT = 5;
// const INTERVAL = BLINK_COUNT * BLINK_DURATION; // advance after 3 blinks
const CIRCLE_R = 26;
const CIRCLE_C = 2 * Math.PI * CIRCLE_R;

const TOTAL_DURATION = 5000; // total per step (5s)
const BLINK_COUNT = 5;
const BLINK_DURATION = TOTAL_DURATION / BLINK_COUNT; // 1000ms
const INTERVAL = TOTAL_DURATION;



const steps = [
  {
    icon: <FaShieldAlt />,
    title: "Foundation of Discipline",
    gradient: "from-primary-dark to-surface-deep-2",
    duration: "Phase 1",
  },
  {
    icon: <FaBookOpen />,
    title: "Concept Mastery",
    gradient: "from-surface-deep-2 to-primary",
    duration: "Phase 2",
  },
  {
    icon: <FaAward />,
    title: "Exam Excellence",
    gradient: "from-primary to-primary-light",
    duration: "Phase 3",
 },
  {
    icon: <FaCrown />,
    title: "Professional Success",
    gradient: "from-primary-dark to-primary",
    duration: "Phase 4",
 },
];

function JourneyTimerRing({ cycleKey, paused }) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (paused) {
      controls.stop();
      return;
    }
    controls.set({ strokeDashoffset: CIRCLE_C });
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: INTERVAL / 1000, ease: "linear" },
    });
  }, [cycleKey, controls, paused]);

  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64" aria-hidden>
      <circle cx="32" cy="32" r={CIRCLE_R} fill="none" stroke="rgba(158,191,176,0.2)" strokeWidth="2.5" />
      <motion.circle
        cx="32"
        cy="32"
        r={CIRCLE_R}
        fill="none"
        stroke="url(#timer-grad-journey)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={CIRCLE_C}
        initial={{ strokeDashoffset: CIRCLE_C }}
        animate={controls}
      />
      <defs>
        <linearGradient id="timer-grad-journey" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ebfb0" />
          <stop offset="100%" stopColor="#d4e5de" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const cardVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0, scale: 0.96, transition: { duration: 0.3 } }),
};

export default function JourneySection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  /** Pauses only the timer ring while pointer is over the section. */
  const [hoverPaused, setHoverPaused] = useState(false);
  const [key, setKey] = useState(0);
  const [cycle, setCycle] = useState(0);

  const timerPaused = hoverPaused;

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
    const id = setInterval(advance, INTERVAL);
    return () => clearInterval(id);
  }, [advance, key]);
  const goPrev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => {
      const next = (prev - 1 + steps.length) % steps.length;
      if (next === steps.length - 1) setCycle((c) => c + 1);
      return next;
    });
    setKey((k) => k + 1);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setHoverPaused(false);
    // Fresh full INTERVAL + ring cycle after hover ends
    setKey((k) => k + 1);
  }, []);

  return (
      <section
        id="journey"
        className="py-8 bg-white relative overflow-hidden"
        onPointerEnter={() => setHoverPaused(true)}
        onPointerLeave={handlePointerLeave}
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
              const isNextBlinking = i === nextIndex;
              return (
              <div key={i} className="flex items-center">
                <button onClick={() => goTo(i)} className="relative w-[64px] h-[64px] flex items-center justify-center">
                  {i === active && <JourneyTimerRing cycleKey={key} paused={timerPaused} />}
                  <motion.div
                    key={`node-${i}-${cycle}`}
                    animate={{
                      background: i === active
                        ? "linear-gradient(135deg, #215143, #9ebfb0)"
                        : i < active
                        ? "linear-gradient(135deg, #2f6b56, #3d7a66)"
                        : "linear-gradient(135deg, #eef1ef, #e2e8e6)",
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
                    style={{ boxShadow: i === active ? "0 6px 24px rgba(33,81,67,0.35)" : "none" }}
                  >
                    {i < active ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}>
                        <FaCheck className="text-xs text-gold-light" />
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
                        className={`h-full rounded-full ${i === active ? "bg-gradient-to-r from-primary-light via-gold-light to-primary-light shadow-[0_0_8px_rgba(158,191,176,0.55)]" : "bg-gradient-to-r from-primary-dark via-primary to-primary-light"}`}
                        initial={{ width: "0%" }}
                        animate={{ width: i < active ? "100%" : "0%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <motion.div
                      key={`arrow-${i}-${cycle}`}
                      className="relative z-10 w-6 h-6 rounded-full bg-white border-2 border-gold flex items-center justify-center shadow-[0_2px_12px_rgba(158,191,176,0.45)]"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: i < active ? 1 : i === active ? 1 : 0.4,
                        scale: i <= active ? 1 : 0.7,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <FaChevronRight className="text-[9px] text-primary" />
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
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-white/[0.04] rounded-full -mr-20 -mt-20 blur-[50px]"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

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
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/[0.06]">
                    <div className="flex gap-2">
                      {steps.map((_, i) => (
                        <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 ${i === active ? "w-7 h-1.5 bg-gradient-to-r from-gold to-gold-light" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/30"}`} />
                      ))}
                    </div>
                    <button
    onClick={goPrev}
    className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors font-sans"
  >
    ← Previous
  </button>
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
