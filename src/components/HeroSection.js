"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/hero/tata.png",
      },
  {
    image: "/hero/modi.png",
 },
  {
    image: "/hero/image.png",
 },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden bg-black">

      {/* 🔥 IMAGE TRANSITION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            willChange: "clip-path, transform, opacity",
          }}
          initial={{
            clipPath: "inset(0 100% 0 0)",
            scale: 1.05,
            opacity: 0,
          }}
          animate={{
            clipPath: "inset(0 0% 0 0)",
            scale: 1,
            opacity: 1,
          }}
          exit={{
            clipPath: "inset(0 0 0 100%)",
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
          }}
        />
      </AnimatePresence>

      {/* 🔥 KEN BURNS ZOOM */}
      <AnimatePresence mode="wait">
        <motion.div
          key={"zoom-" + index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            willChange: "transform",
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>
      {/* 🔥 DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-white w-5" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}