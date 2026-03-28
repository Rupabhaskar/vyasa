// "use client";
// import { motion } from "framer-motion";
// import { FaFileAlt, FaUserCheck, FaClipboardCheck, FaCheckCircle } from "react-icons/fa";

// const steps = [
//   { icon: <FaFileAlt />, title: "Enquiry", desc: "Fill the enquiry form or visit our campus to learn about available programs." },
//   { icon: <FaUserCheck />, title: "Counseling", desc: "Free one-on-one counseling to understand your goals and recommend the right course." },
//   { icon: <FaClipboardCheck />, title: "Assessment", desc: "Aptitude assessment for scholarship eligibility and batch allocation." },
//   { icon: <FaCheckCircle />, title: "Enrollment", desc: "Complete admission formalities and begin your journey to professional success." },
// ];

// export default function AdmissionSection() {
//   return (
//     <section id="admissions" className="py-28 relative overflow-hidden">
//       <div className="absolute inset-0 bg-primary-dark" />
//       <div className="absolute inset-0 bg-gradient-to-br from-surface-deep/95 via-primary-dark/90 to-surface-deep-2/95" />
//       <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }} />

//       <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-gold/[0.06] rounded-tl-2xl hidden lg:block" />
//       <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-gold/[0.06] rounded-br-2xl hidden lg:block" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
//           <span className="section-label text-gold/60 mb-4 inline-block">Get Started</span>
//           <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight mb-4">Admission Process</h2>
//           <div className="royal-divider mb-6" />
//           <p className="text-emerald-100/35 max-w-xl mx-auto text-[15px] leading-relaxed font-sans">A simple, transparent process to get you started on your path.</p>
//         </motion.div>

//         <div className="grid md:grid-cols-4 gap-8 relative">
//           <div className="hidden md:block absolute top-[42px] left-[14%] right-[14%] h-px bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10" />

//           {steps.map((step, i) => (
//             <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="relative text-center group">
//               <div className="w-[60px] h-[60px] mx-auto rounded-full bg-white/[0.04] border border-gold/15 text-gold/60 flex items-center justify-center text-xl relative z-10 mb-5 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-400">
//                 {step.icon}
//               </div>
//               <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-gold/30 mb-2 inline-block">Step {i + 1}</span>
//               <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors">{step.title}</h3>
//               <p className="text-emerald-100/30 text-[13px] leading-relaxed font-sans max-w-[200px] mx-auto">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaFileAlt,
  FaUserCheck,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Enquiry",
    desc:
      "Fill the enquiry form or visit our campus to learn about available programs.",
  },
  {
    icon: <FaUserCheck />,
    title: "Counseling",
    desc:
      "Free one-on-one counseling to understand your goals and recommend the right course.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Assessment",
    desc:
      "Aptitude assessment for scholarship eligibility and batch allocation.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Enrollment",
    desc:
      "Complete admission formalities and begin your journey to professional success.",
  },
];

export default function AdmissionSection() {
  const canvasRef = useRef(null);
  const itemRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let sections = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 70;
      createSections(); // IMPORTANT
    };

    const quad = (p) => p * p;
    const easeOut = (p) => 1 - quad(1 - p);

    const createSections = () => {
      sections = [];

      const canvasRect = canvas.getBoundingClientRect();

      itemRefs.current.forEach((el) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const centerX =
          rect.left + rect.width / 2 - canvasRect.left;

        const section = {
          x: centerX,
          y: 42,
          hMax: 22,
          hMod: 0,
          progress: 0,
          dot: { x: centerX, y: 42 },
        };

        sections.push(section);
      });
    };

    const bend = (s) => {
      if (s.progress < s.hMax) {
        let delta = easeOut(s.progress / s.hMax);
        s.hMod = s.hMax * delta;
        s.dot.y = s.y - s.hMax * delta;
        s.progress++;
      }
    };

    const reset = (s) => {
      if (s.progress > 0) {
        let delta = easeOut(s.progress / s.hMax);
        s.hMod = s.hMax * delta;
        s.dot.y = s.y - s.hMax * delta;
        s.progress -= 2;
      } else {
        s.hMod = 0;
        s.dot.y = s.y;
        s.progress = 0;
      }
    };

    // const draw = (s, i, prev, next) => {
    //   ctx.beginPath();

    //   if (prev) {
    //     const midX = (prev.x + s.x) / 2;

    //     ctx.moveTo(prev.x, prev.y);

    //     ctx.bezierCurveTo(
    //       midX,
    //       prev.y,
    //       midX,
    //       s.y - s.hMod,
    //       s.x,
    //       s.y - s.hMod
    //     );
    //   }

    //   if (next) {
    //     const midX = (s.x + next.x) / 2;

    //     ctx.bezierCurveTo(
    //       midX,
    //       s.y - s.hMod,
    //       midX,
    //       next.y,
    //       next.x,
    //       next.y
    //     );
    //   }

    //   ctx.lineWidth = 2;
    //   ctx.strokeStyle =
    //     i === currentSection
    //       ? "rgba(212,175,55,0.7)"
    //       : "rgba(212,175,55,0.2)";
    //   ctx.stroke();

    //   // glow
    //   if (i === currentSection) {
    //     ctx.shadowColor = "rgba(212,175,55,0.6)";
    //     ctx.shadowBlur = 10;
    //   } else {
    //     ctx.shadowBlur = 0;
    //   }

    //   // dot
    //   ctx.beginPath();
    //   ctx.arc(s.dot.x, s.dot.y, 6, 0, Math.PI * 2);
    //   ctx.fillStyle = "rgba(212,175,55,0.9)";
    //   ctx.fill();

    //   ctx.shadowBlur = 0;
    // };

    const draw = (s, i, prev, next) => {
      ctx.beginPath();
    
      // ✅ FIRST ITEM (fix: start exactly from icon)
      if (!prev) {
        ctx.moveTo(s.x, s.y);
    
        if (next) {
          const midX = (s.x + next.x) / 2;
    
          ctx.bezierCurveTo(
            midX,
            s.y - s.hMod,
            midX,
            next.y,
            next.x,
            next.y
          );
        }
      }
    
      // ✅ MIDDLE ITEMS
      else if (prev && next) {
        const midPrev = (prev.x + s.x) / 2;
        const midNext = (s.x + next.x) / 2;
    
        ctx.moveTo(prev.x, prev.y);
    
        ctx.bezierCurveTo(
          midPrev,
          prev.y,
          midPrev,
          s.y - s.hMod,
          s.x,
          s.y - s.hMod
        );
    
        ctx.bezierCurveTo(
          midNext,
          s.y - s.hMod,
          midNext,
          next.y,
          next.x,
          next.y
        );
      }
    
      // ✅ LAST ITEM
      else if (prev && !next) {
        const midX = (prev.x + s.x) / 2;
    
        ctx.moveTo(prev.x, prev.y);
    
        ctx.bezierCurveTo(
          midX,
          prev.y,
          midX,
          s.y - s.hMod,
          s.x,
          s.y - s.hMod
        );
    
        ctx.lineTo(s.x, s.y);
      }
    
      ctx.lineWidth = 2;
      ctx.strokeStyle =
        i === currentSection
          ? "rgba(212,175,55,0.7)"
          : "rgba(212,175,55,0.2)";
      ctx.stroke();
    
      // dot
      ctx.beginPath();
      ctx.arc(s.dot.x, s.dot.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(212,175,55,0.9)";
      ctx.fill();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sections.forEach((s, i) => {
        if (i === currentSection) bend(s);
        else reset(s);

        draw(s, i, sections[i - 1], sections[i + 1]);
      });

      requestAnimationFrame(loop);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    loop();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [currentSection]);

  return (
    <section id="admissions" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-dark" />
      <div className="absolute inset-0 bg-gradient-to-br from-surface-deep/95 via-primary-dark/90 to-surface-deep-2/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label text-gold/60 mb-4 inline-block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight mb-4">
            Admission Process
          </h2>
          <div className="royal-divider mb-6" />
          <p className="text-emerald-100/35 max-w-xl mx-auto text-[15px] leading-relaxed font-sans">
            A simple, transparent process to get you started on your path.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* CANVAS */}
          <canvas
            ref={canvasRef}
            className="absolute top-[20px] left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none"
          />


          {steps.map((step, i) => (
            <motion.div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              onMouseEnter={() => setCurrentSection(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative text-center group"
            >
              <div className="w-[60px] h-[60px] mx-auto rounded-full bg-white/[0.04] border border-gold/15 text-gold/60 flex items-center justify-center text-xl relative z-10 mb-5 group-hover:bg-gold/10 group-hover:text-gold transition-all duration-400">
                {step.icon}
              </div>

              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold/30 mb-2 inline-block">
                Step {i + 1}
              </span>

              <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors">
                {step.title}
              </h3>

              <p className="text-emerald-100/30 text-[13px] leading-relaxed font-sans max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}