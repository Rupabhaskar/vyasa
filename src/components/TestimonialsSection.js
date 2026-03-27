"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sneha Agarwal",
    role: "AIR 2 \u2013 CA Final",
    type: "Student",
    text: "Vyasa Institute transformed my preparation completely. The structured approach, disciplined environment, and personal mentorship helped me secure a top rank. I owe my success to this institution.",
  },
  {
    name: "Mr. Ramesh Agarwal",
    role: "Parent of Sneha Agarwal",
    type: "Parent",
    text: "As a parent, the peace of mind Vyasas gave us was invaluable. Regular updates, disciplined study hours, and genuine care for our daughter. We could see the transformation happening every month.",
  },
  {
    name: "Karthik Rajan",
    role: "AIR 5 \u2013 CA Inter",
    type: "Student",
    text: "The structured coaching model is brilliant. I was thoroughly prepared for every level. The faculty doesn\u2019t just teach \u2013 they mentor, motivate, and push you to your best.",
  },
  {
    name: "Mrs. Sunitha Reddy",
    role: "Parent of Anita Reddy (AIR 7)",
    type: "Parent",
    text: "We chose Vyasas for the discipline and results. Our daughter went from an average student to an All India Rank holder. The hostel facility and supervised study hours made all the difference.",
  },
  {
    name: "Arjun Patel",
    role: "CA Final \u2013 First Attempt",
    type: "Student",
    text: "I cleared CA Final in my first attempt thanks to the rigorous training at Vyasas. The daily tests, mock exams, and personalized feedback system is unmatched anywhere.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <section id="testimonials" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
          <span className="section-label text-gold mb-4 inline-block">Voices of Trust</span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary-dark tracking-tight mb-4">What They Say</h2>
          <div className="royal-divider mb-6" />
          <p className="text-muted max-w-xl mx-auto text-[15px] leading-relaxed font-sans">Real stories from students who achieved their dreams and parents who trusted us with their children.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative bg-[#f9f8f6] rounded-3xl border border-gray-100/80 min-h-[300px] overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-gold/10 rounded-tl-3xl m-4 pointer-events-none" />

            <div className="relative z-10 p-10 md:p-14 flex items-center min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="w-full">
                  <FaQuoteLeft className="text-3xl text-gold/20 mb-6" />
                  <p className="text-[16px] md:text-[17px] text-primary-dark/70 leading-relaxed mb-8 font-sans">
                    {testimonials[current].text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-dark flex items-center justify-center text-gold font-heading font-bold text-lg border border-gold/20">
                      {testimonials[current].name[0]}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary-dark">{testimonials[current].name}</h4>
                      <p className="text-gold/70 text-xs font-sans font-semibold">{testimonials[current].role}</p>
                    </div>
                    <span className={`ml-auto text-[9px] font-sans font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full ${testimonials[current].type === "Parent" ? "bg-gold/[0.08] text-gold" : "bg-primary-dark/[0.04] text-primary-dark/50"}`}>
                      {testimonials[current].type}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-primary-dark/40 hover:text-primary-dark hover:border-primary-dark/20 transition-all text-sm">
              <FaChevronLeft />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }} aria-label={`Testimonial ${i + 1}`} className={`rounded-full transition-all duration-300 ${i === current ? "w-7 h-1.5 bg-gradient-to-r from-gold to-gold-light" : "w-1.5 h-1.5 bg-gray-200 hover:bg-gold/30"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-primary-dark/40 hover:text-primary-dark hover:border-primary-dark/20 transition-all text-sm">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
