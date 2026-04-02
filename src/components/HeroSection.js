// // "use client";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useEffect, useRef } from "react";
// // import Image from "next/image";

// // const slides = [
// //   { image: "/hero/vyasa.png" },
// //   { image: "/hero/signature (1).png" },
// //   { image: "/hero/modi1.png" },
// //   { image: "/hero/Ratan Tata.png" },
// //   { image: "/hero/Afraid poster.png" },
// // ];

// // const EASE = [0.22, 1, 0.36, 1];
// // const EASE2 = [0.33, 1, 0.68, 1];

// // function VenetianBlindsOverlay({ seed }) {
// //   const COUNT = 12;
// //   return (
// //     <div className="absolute inset-0 z-30 flex flex-col pointer-events-none">
// //       {Array.from({ length: COUNT }).map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="flex-1 bg-black"
// //           style={{ transformOrigin: (i + seed) % 2 === 0 ? "top" : "bottom" }}
// //           initial={{ scaleY: 1, rotateX: 0 }}
// //           animate={{ scaleY: 0, rotateX: (i + seed) % 2 === 0 ? 90 : -90 }}
// //           transition={{ delay: i * 0.04, duration: 0.45, ease: EASE }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function MosaicDissolveOverlay({ seed }) {
// //   const COLS = 10;
// //   const ROWS = 6;
// //   const total = COLS * ROWS;
// //   const order = Array.from({ length: total }, (_, i) => i);
// //   for (let i = order.length - 1; i > 0; i--) {
// //     const j = (seed * 7 + i * 13) % (i + 1);
// //     [order[i], order[j]] = [order[j], order[i]];
// //   }
// //   return (
// //     <div
// //       className="absolute inset-0 z-30 pointer-events-none grid"
// //       style={{
// //         gridTemplateColumns: `repeat(${COLS}, 1fr)`,
// //         gridTemplateRows: `repeat(${ROWS}, 1fr)`,
// //       }}
// //     >
// //       {Array.from({ length: total }).map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="bg-black"
// //           initial={{ opacity: 1 }}
// //           animate={{ opacity: 0 }}
// //           transition={{ delay: order[i] * 0.012, duration: 0.3, ease: EASE }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function DiamondRevealOverlay() {
// //   return (
// //     <motion.div
// //       className="absolute inset-0 z-30 pointer-events-none bg-black"
// //       initial={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
// //       animate={{ clipPath: "polygon(50% -100%, 200% 50%, 50% 200%, -100% 50%)" }}
// //       transition={{ duration: 0.7, ease: EASE2 }}
// //     />
// //   );
// // }

// // function WaveRippleOverlay({ seed }) {
// //   const STRIPS = 14;
// //   return (
// //     <div className="absolute inset-0 z-30 flex pointer-events-none">
// //       {Array.from({ length: STRIPS }).map((_, i) => {
// //         const wave = Math.sin((i / STRIPS) * Math.PI) * 0.12;
// //         const dir = seed % 2 === 0 ? 1 : -1;
// //         return (
// //           <motion.div
// //             key={i}
// //             className="flex-1 bg-black"
// //             initial={{ y: 0, scaleY: 1 }}
// //             animate={{ y: `${dir * 120}%`, scaleY: 0.6 }}
// //             transition={{ delay: wave + i * 0.03, duration: 0.5, ease: EASE }}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // function CheckerboardOverlay({ seed }) {
// //   const COLS = 8;
// //   const ROWS = 5;
// //   const total = COLS * ROWS;
// //   return (
// //     <div
// //       className="absolute inset-0 z-30 pointer-events-none grid"
// //       style={{
// //         gridTemplateColumns: `repeat(${COLS}, 1fr)`,
// //         gridTemplateRows: `repeat(${ROWS}, 1fr)`,
// //       }}
// //     >
// //       {Array.from({ length: total }).map((_, i) => {
// //         const row = Math.floor(i / COLS);
// //         const col = i % COLS;
// //         const isEven = (row + col) % 2 === 0;
// //         return (
// //           <motion.div
// //             key={i}
// //             className="bg-black"
// //             initial={{ scale: 1, opacity: 1 }}
// //             animate={{ scale: 0, opacity: 0, rotate: seed % 2 === 0 ? 45 : -45 }}
// //             transition={{
// //               delay: isEven ? 0 : 0.2,
// //               duration: 0.5,
// //               ease: EASE,
// //             }}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // function CurtainDropOverlay({ seed }) {
// //   const STRIPS = 10;
// //   const order = [5, 2, 8, 0, 7, 3, 9, 1, 6, 4];
// //   return (
// //     <div className="absolute inset-0 z-30 flex pointer-events-none">
// //       {Array.from({ length: STRIPS }).map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="flex-1 bg-black"
// //           style={{ transformOrigin: "top" }}
// //           initial={{ y: 0, scaleY: 1 }}
// //           animate={{ y: "110%", scaleY: 0.3 }}
// //           transition={{
// //             delay: order[(i + seed) % STRIPS] * 0.045,
// //             duration: 0.5,
// //             ease: EASE2,
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // function PixelScatterOverlay({ seed }) {
// //   const COLS = 12;
// //   const ROWS = 7;
// //   const total = COLS * ROWS;
// //   const cx = COLS / 2;
// //   const cy = ROWS / 2;
// //   return (
// //     <div
// //       className="absolute inset-0 z-30 pointer-events-none grid"
// //       style={{
// //         gridTemplateColumns: `repeat(${COLS}, 1fr)`,
// //         gridTemplateRows: `repeat(${ROWS}, 1fr)`,
// //       }}
// //     >
// //       {Array.from({ length: total }).map((_, i) => {
// //         const row = Math.floor(i / COLS);
// //         const col = i % COLS;
// //         const dx = (col - cx) * 40;
// //         const dy = (row - cy) * 40;
// //         const dist = Math.sqrt((col - cx) ** 2 + (row - cy) ** 2);
// //         return (
// //           <motion.div
// //             key={i}
// //             className="bg-black"
// //             initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
// //             animate={{ x: `${dx}%`, y: `${dy}%`, opacity: 0, scale: 0.2 }}
// //             transition={{ delay: dist * 0.035, duration: 0.5, ease: EASE }}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // function RadialWipeOverlay({ seed }) {
// //   const origins = ["50% 50%", "0% 0%", "100% 0%", "0% 100%", "100% 100%"];
// //   const origin = origins[seed % origins.length];
// //   return (
// //     <motion.div
// //       className="absolute inset-0 z-30 pointer-events-none bg-black"
// //       initial={{ clipPath: `circle(150% at ${origin})` }}
// //       animate={{ clipPath: `circle(0% at ${origin})` }}
// //       transition={{ duration: 0.75, ease: EASE2 }}
// //     />
// //   );
// // }

// // function ZigZagOverlay({ seed }) {
// //   const STRIPS = 8;
// //   return (
// //     <div className="absolute inset-0 z-30 flex flex-col pointer-events-none">
// //       {Array.from({ length: STRIPS }).map((_, i) => {
// //         const dir = i % 2 === 0 ? 1 : -1;
// //         return (
// //           <motion.div
// //             key={i}
// //             className="flex-1 bg-black"
// //             initial={{ x: 0, skewX: 0 }}
// //             animate={{ x: `${dir * 120}%`, skewX: dir * 12 }}
// //             transition={{ delay: i * 0.06, duration: 0.45, ease: EASE }}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // function CrossRevealOverlay() {
// //   return (
// //     <div className="absolute inset-0 z-30 pointer-events-none">
// //       <motion.div
// //         className="absolute bg-black"
// //         style={{ top: 0, left: 0, right: "50%", bottom: "50%" }}
// //         initial={{ x: 0, y: 0 }}
// //         animate={{ x: "-110%", y: "-110%" }}
// //         transition={{ duration: 0.55, ease: EASE2 }}
// //       />
// //       <motion.div
// //         className="absolute bg-black"
// //         style={{ top: 0, left: "50%", right: 0, bottom: "50%" }}
// //         initial={{ x: 0, y: 0 }}
// //         animate={{ x: "110%", y: "-110%" }}
// //         transition={{ duration: 0.55, ease: EASE2 }}
// //       />
// //       <motion.div
// //         className="absolute bg-black"
// //         style={{ top: "50%", left: 0, right: "50%", bottom: 0 }}
// //         initial={{ x: 0, y: 0 }}
// //         animate={{ x: "-110%", y: "110%" }}
// //         transition={{ duration: 0.55, ease: EASE2 }}
// //       />
// //       <motion.div
// //         className="absolute bg-black"
// //         style={{ top: "50%", left: "50%", right: 0, bottom: 0 }}
// //         initial={{ x: 0, y: 0 }}
// //         animate={{ x: "110%", y: "110%" }}
// //         transition={{ duration: 0.55, ease: EASE2 }}
// //       />
// //     </div>
// //   );
// // }

// // const OVERLAY_TYPES = [
// //   "venetian-blinds",
// //   "mosaic-dissolve",
// //   "diamond-reveal",
// //   "wave-ripple",
// //   "checkerboard",
// //   "curtain-drop",
// //   "pixel-scatter",
// //   "radial-wipe",
// //   "zig-zag",
// //   "cross-reveal",
// // ];

// // function TransitionOverlay({ seed }) {
// //   const type = OVERLAY_TYPES[seed % OVERLAY_TYPES.length];
// //   switch (type) {
// //     case "venetian-blinds": return <VenetianBlindsOverlay seed={seed} />;
// //     case "mosaic-dissolve": return <MosaicDissolveOverlay seed={seed} />;
// //     case "diamond-reveal":  return <DiamondRevealOverlay />;
// //     case "wave-ripple":     return <WaveRippleOverlay seed={seed} />;
// //     case "checkerboard":    return <CheckerboardOverlay seed={seed} />;
// //     case "curtain-drop":    return <CurtainDropOverlay seed={seed} />;
// //     case "pixel-scatter":   return <PixelScatterOverlay seed={seed} />;
// //     case "radial-wipe":     return <RadialWipeOverlay seed={seed} />;
// //     case "zig-zag":         return <ZigZagOverlay seed={seed} />;
// //     case "cross-reveal":    return <CrossRevealOverlay />;
// //     default:                return <VenetianBlindsOverlay seed={seed} />;
// //   }
// // }

// // export default function HeroSection() {
// //   const [index, setIndex] = useState(0);
// //   const [showOverlay, setShowOverlay] = useState(false);
// //   const seedRef = useRef(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       seedRef.current += 1;
// //       setShowOverlay(true);
// //       setTimeout(() => {
// //         setIndex((prev) => (prev + 1) % slides.length);
// //         setShowOverlay(false);
// //       }, 700);
// //     }, 6500);
// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section className="relative w-full mt-[-10px] aspect-[96/35] overflow-hidden bg-black">
// //       <Image
// //         src={slides[index].image}
// //         alt={`Hero banner ${index + 1}`}
// //         fill
// //         priority
// //         sizes="100vw"
// //         className="object-cover object-center"
// //       />

// //       <AnimatePresence>
// //         {showOverlay && (
// //           <TransitionOverlay seed={seedRef.current} />
// //         )}
// //       </AnimatePresence>

// //       <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
// //         {slides.map((_, i) => (
// //           <button
// //             key={i}
// //             onClick={() => setIndex(i)}
// //             aria-label={`Go to slide ${i + 1}`}
// //             className={`h-2 w-2 rounded-full transition-all duration-300 ${
// //               i === index ? "bg-white w-5 sm:w-6" : "bg-white/50 hover:bg-white/80"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }



// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// const slides = [
// { image: "/hero/OfferedCourses.png" },
//   { image: "/hero/vyasa.png" },
//   { image: "/hero/signature (1).png" },
//   { image: "/hero/modi1.png" },
//   { image: "/hero/Ratan Tata.png" },
//   { image: "/hero/Afraid poster.png" },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);
//   const [prev, setPrev] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrev(current); // store old image
//       setCurrent((current + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [current]);

//   return (
//     <section className="relative w-full aspect-[96/35] overflow-hidden bg-black">

//       {/* 🔥 NEXT IMAGE (background) */}
//       <div className="absolute inset-0">
//         <Image
//           src={slides[current].image}
//           alt="current"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* 🔥 PREVIOUS IMAGE (fall animation and REMOVE after) */}
//       <AnimatePresence>
//         {prev !== null && (
//           <motion.div
//             key={prev}
//             initial={{ opacity: 1, scale: 1, y: 0 }}
//             animate={{
//               opacity: 0,
//               scale: 1.05,
//               y: 120,
//               filter: "blur(8px)",
//             }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//             onAnimationComplete={() => setPrev(null)} // ✅ REMOVE completely
//             className="absolute inset-0 z-10"
//           >
//             <Image
//               src={slides[prev].image}
//               alt="prev"
//               fill
//               className="object-cover"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* DOTS */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => {
//               setPrev(current);
//               setCurrent(i);
//             }}
//             className={`h-2 rounded-full ${
//               i === current ? "w-6 bg-white" : "w-2 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }




"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const slides = [

  { image: "/hero/n1.png" },
  { image: "/hero/vyasa2.png" },
  { image: "/hero/rt4.png" },
  { image: "/hero/modi1.png" },  
  { image: "/hero/ap1.png" },
  { image: "/hero/co2.png" },

];

const TRANSITIONS = ["fade", "slide", "clip"];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [type, setType] = useState("fade");
  const typeIndex = useRef(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const goToNext = useCallback(() => {
    setPrev(current);
    typeIndex.current = (typeIndex.current + 1) % TRANSITIONS.length;
    setType(TRANSITIONS[typeIndex.current]);
    setCurrent((current + 1) % slides.length);
  }, [current]);

  const goToPrev = useCallback(() => {
    setPrev(current);
    typeIndex.current = (typeIndex.current + 1) % TRANSITIONS.length;
    setType(TRANSITIONS[typeIndex.current]);
    setCurrent((current - 1 + slides.length) % slides.length);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);

  /* ---------- TRANSITIONS ---------- */

  const getAnimation = () => {
    switch (type) {
      case "fade":
        return {
          initial: { opacity: 1 },
          animate: { opacity: 0, filter: "blur(6px)" },
          transition: { duration: 1 },
        };

      case "slide":
        return {
          initial: { x: 0, opacity: 1 },
          animate: { x: "-100%", opacity: 0 },
          transition: { duration: 0.9, ease: "easeInOut" },
        };

      case "clip":
        return {
          initial: { clipPath: "inset(0% 0% 0% 0%)" },
          animate: { clipPath: "inset(0% 100% 0% 0%)" },
          transition: { duration: 1, ease: "easeInOut" },
        };

      default:
        return {};
    }
  };

  const animation = getAnimation();

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    // Only trigger on mostly horizontal swipes; keep vertical page scrolling natural.
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        goToNext(); // swipe left => next image
      } else {
        goToPrev(); // swipe right => previous image
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      className="relative w-full aspect-[96/35] overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* ✅ BACKGROUND IMAGE (FULL FIT, NO ZOOM) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={slides[current].image}
          alt="current"
          fill
          priority
          className="object-contain bg-black"
        />
      </div>

      {/* ✅ PREVIOUS IMAGE (TRANSITION OUT) */}
      <AnimatePresence>
        {prev !== null && (
          <motion.div
            key={prev + type}
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
            onAnimationComplete={() => setPrev(null)}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <Image
              src={slides[prev].image}
              alt="prev"
              fill
              className="object-contain bg-black"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setPrev(current);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}