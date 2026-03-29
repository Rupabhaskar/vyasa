"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

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

const BAR_COUNT = 14;
const BAR_ORDER = [7, 2, 11, 0, 9, 4, 13, 1, 10, 5, 12, 3, 8, 6];
const BLOCK_COLS = 7;
const BLOCK_ROWS = 4;
const TRANSITION_TYPES = ["vertical-bars", "center-curtain", "diagonal-wipe", "blocks"];

function VerticalBarsReveal({ seed }) {
  return (
    <div className="absolute inset-0 z-20 flex pointer-events-none">
      {Array.from({ length: BAR_COUNT }).map((_, i) => {
        const order = BAR_ORDER[(i + seed) % BAR_COUNT];
        const fromLeft = (i + seed) % 2 === 0;
        return (
          <motion.div
            key={`${seed}-bar-${i}`}
            className="flex-1 bg-white/90"
            initial={{ scaleX: 1, originX: fromLeft ? 0 : 1 }}
            animate={{ scaleX: 0 }}
            transition={{
              delay: order * 0.038,
              duration: 0.42,
              ease: [0.33, 1, 0.68, 1],
            }}
          />
        );
      })}
    </div>
  );
}

function CenterCurtainReveal() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-white/90"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-white/90"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      />
    </div>
  );
}

function DiagonalWipeReveal() {
  return (
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none bg-white/90"
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
      animate={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
      transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
    />
  );
}

function BlocksReveal({ seed }) {
  return (
    <div
      className="absolute inset-0 z-20 pointer-events-none grid"
      style={{ gridTemplateColumns: `repeat(${BLOCK_COLS}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: BLOCK_COLS * BLOCK_ROWS }).map((_, i) => {
        const order = (i * 5 + seed * 3) % (BLOCK_COLS * BLOCK_ROWS);
        return (
          <motion.div
            key={`${seed}-block-${i}`}
            className="bg-white/90"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.88 }}
            transition={{
              delay: order * 0.02,
              duration: 0.3,
              ease: [0.33, 1, 0.68, 1],
            }}
          />
        );
      })}
    </div>
  );
}

function TransitionOverlay({ seed }) {
  const type = TRANSITION_TYPES[seed % TRANSITION_TYPES.length];

  if (type === "center-curtain") return <CenterCurtainReveal />;
  if (type === "diagonal-wipe") return <DiagonalWipeReveal />;
  if (type === "blocks") return <BlocksReveal seed={seed} />;
  return <VerticalBarsReveal seed={seed} />;
}

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[240px] sm:h-[340px] md:h-[460px] lg:h-[560px] overflow-hidden bg-white/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Soft tinted image background */}
          <div className="absolute inset-0">
            <Image
              src={slides[index].image}
              alt=""
              fill
              aria-hidden="true"
              sizes="100vw"
              className="object-cover object-center scale-110 blur-md opacity-45"
            />
            <div className="absolute inset-0 bg-white/30" />
          </div>

          {/* Main banner image (no crop) */}
          <div className="absolute inset-0 p-1 sm:p-2 md:p-3">
            <Image
              src={slides[index].image}
              alt={`Hero banner ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/15" />
          <TransitionOverlay seed={index} />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-5 sm:w-6" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}