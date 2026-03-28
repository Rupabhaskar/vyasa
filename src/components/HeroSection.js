// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaArrowRight, FaPlay } from "react-icons/fa";

// const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
// };

// export default function HeroSection() {
//   return (
//     <section id="hero" className="relative min-h-[94vh] flex items-center overflow-hidden">
//       {/* Deep navy base */}
//       <div className="absolute inset-0 bg-surface-deep" />
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary-dark/85 to-surface-deep-2/95" />

//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.025]"
//         style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h80v80H0z' fill='none' stroke='white' stroke-width='0.4'/%3E%3C/svg%3E\")" }}
//       />

//       {/* Gold corner ornaments */}
//       <div className="absolute top-12 left-12 w-32 h-32 border-t border-l border-gold/15 rounded-tl-[40px] hidden lg:block" />
//       <div className="absolute bottom-12 right-12 w-32 h-32 border-b border-r border-gold/15 rounded-br-[40px] hidden lg:block" />

//       {/* Ambient glow */}
//       <div className="absolute top-[10%] left-[8%] w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[140px]" />
//       <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-primary-light/[0.06] rounded-full blur-[160px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
//         <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
//           <motion.div variants={stagger} initial="hidden" animate="show">
//             {/* Badge */}
//             <motion.div variants={fadeUp} className="mb-8">
//               <span className="inline-flex items-center gap-2.5 bg-gold/[0.08] border border-gold/15 rounded-full px-5 py-2">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
//                 </span>
//                 <span className="text-gold text-xs font-semibold tracking-wide font-sans">Admissions Open 2026-27</span>
//               </span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.8rem] font-bold text-white leading-[1.12] mb-6 tracking-tight">
//               {"Building India\u2019s Future"}
//               <br />
//               <span className="text-gradient-gold">Chartered Accountants</span>
//             </motion.h1>

//             <motion.p variants={fadeUp} className="text-[17px] md:text-lg text-emerald-100/60 leading-relaxed mb-10 max-w-xl font-sans">
//               A proven path to CA Rank. Expert faculty, disciplined environment, and a legacy of All India Ranks at India\u2019s premier preparatory institute.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
//               <Link
//                 href="/landing/ca-coaching-admissions-2026"
//                 className="group inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold text-[15px] shadow-[0_6px_24px_rgba(158,191,176,0.4)] hover:shadow-[0_10px_36px_rgba(158,191,176,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-sans"
//               >
//                 Apply Now
//                 <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
//               </Link>
//               <Link
//                 href="/courses"
//                 className="inline-flex items-center gap-3 border border-white/15 text-white/80 hover:text-white hover:border-white/25 hover:bg-white/[0.04] px-8 py-4 rounded-full font-semibold text-[15px] transition-all duration-300 font-sans"
//               >
//                 <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
//                   <FaPlay className="text-[8px] ml-0.5" />
//                 </span>
//                 Explore Courses
//               </Link>
//             </motion.div>

//             {/* Trust line */}
//             <motion.div variants={fadeUp} className="mt-14 pt-7 border-t border-white/[0.06] flex flex-wrap items-center gap-5 text-emerald-200/40 text-xs font-sans tracking-wide">
//               <span>Recognized by <strong className="text-emerald-100/60">ICAI</strong></span>
//               <span className="w-1 h-1 bg-gold/30 rounded-full" />
//               <span>Affiliated with <strong className="text-emerald-100/60">ICMAI</strong></span>
//               <span className="w-1 h-1 bg-gold/30 rounded-full hidden sm:block" />
//               <span className="hidden sm:inline">Est. <strong className="text-emerald-100/60">2010</strong></span>
//             </motion.div>
//           </motion.div>

//           {/* Right — floating stat cards */}
//           <div className="hidden lg:flex flex-col items-center justify-center relative h-[480px]">
//             {/* Central emblem */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.6 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.6, duration: 1, type: "spring" }}
//               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//             >
//               <div className="w-40 h-40 rounded-full border border-gold/15 flex items-center justify-center">
//                 <div className="w-32 h-32 rounded-full border border-gold/10 flex items-center justify-center">
//                   <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold/15 to-transparent flex items-center justify-center">
//                     <span className="text-gold text-4xl font-heading font-bold italic">V</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Stat cards */}
//             {[
//               { label: "5000+", sub: "Students Trained", pos: "top-4 left-0", delay: 0.8 },
//               { label: "200+", sub: "CA Selections", pos: "top-1/3 right-0", delay: 1.0 },
//               { label: "98%", sub: "Success Rate", pos: "bottom-8 left-4", delay: 1.2 },
//             ].map((s, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: s.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                 className={`absolute ${s.pos} ${i === 1 ? "animate-float-delay" : "animate-float"}`}
//               >
//                 <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 min-w-[170px] hover:bg-white/[0.08] transition-colors duration-300">
//                   <div className="text-2xl font-heading font-bold text-white tracking-tight">{s.label}</div>
//                   <div className="text-[11px] text-emerald-200/50 font-sans font-medium tracking-wide uppercase">{s.sub}</div>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Decorative dashed ring */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed border-white/[0.04] animate-[spin_40s_linear_infinite]" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom fade to white */}
//       <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
//     </section>
//   );
// }



"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Building India’s Future",
    highlight: "Chartered Accountants",
    desc: "A proven path to CA Rank with expert faculty and consistent results.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Where Discipline Meets",
    highlight: "Top AIR Results",
    desc: "Structured learning designed for serious aspirants.",
  },
  {
    image: "/images/hero3.jpg",
    title: "Transform Your Ambition",
    highlight: "Into Success",
    desc: "Join the institute trusted by thousands of CA achievers.",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[94vh] flex items-center overflow-hidden">

      {/* 🔥 Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: direction * 80, scale: 1.1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -direction * 80 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-dark/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
            >
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
                {slides[index].title}
                <br />
                <span className="text-gradient-gold">
                  {slides[index].highlight}
                </span>
              </h1>

              <p className="text-lg text-white/70 mb-10 max-w-xl">
                {slides[index].desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Link
                  href="/landing/ca-coaching-admissions-2026"
                  className="bg-gold text-primary-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition"
                >
                  Apply Now <FaArrowRight />
                </Link>

                <Link
                  href="/courses"
                  className="border border-white/20 px-8 py-4 rounded-full text-white flex items-center gap-2 hover:bg-white/10 transition"
                >
                  <FaPlay /> Explore
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* 🔥 Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
      >
        <FaChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
      >
        <FaChevronRight className="text-white" />
      </button>

      {/* 🔥 Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-gold scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}