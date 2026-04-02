// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTimes } from "react-icons/fa";
// import AdmissionSection from "@/components/AdmissionSection";

// export default function HomeEntryFlow({ children }) {
//   const [phase, setPhase] = useState("splash");

//   useEffect(() => {
//     if (phase !== "main") {
//       const prev = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = prev;
//       };
//     }
//     document.body.style.overflow = "";
//   }, [phase]);

//   const goMain = () => setPhase("main");

//   return (
//     <>
//       {phase === "main" ? children : null}

//       <AnimatePresence mode="wait">
//         {phase !== "main" && (
//           <motion.div
//             key={phase}
//             role="dialog"
//             aria-modal="true"
//             className="fixed inset-0 z-[200] flex flex-col bg-black"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.35 }}
//           >
//             {phase === "splash" && (
//               <div className="relative h-full w-full min-h-0">
//                 <Image
//                   src="/assets/image.png"
//                   alt=""
//                   fill
//                   priority
//                   className="object-cover"
//                   sizes="100vw"
//                 />
//                 <div className="absolute inset-0" />
//                 <button
//                   type="button"
//                   onClick={() => setPhase("admission")}
//                   className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
//                   aria-label="Continue to admission"
//                 >
//                   <FaTimes className="h-5 w-5" />
//                 </button>
//               </div>
//             )}

//             {phase === "admission" && (
//               <div className="flex h-full min-h-0 flex-col bg-[var(--surface-deep,#0a1628)] text-white">
            

//                 <footer className="sticky bottom-0 shrink-0 border-t border-white/10 bg-[var(--surface-deep,#0a1628)]/95 px-4 py-4 backdrop-blur-sm sm:px-6">
//                   <button
//                     type="button"
//                     onClick={goMain}
//                     className="w-full rounded-lg bg-gold py-3 text-center text-sm font-semibold text-primary-dark transition hover:bg-gold/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
//                   >
//                     Continue to home
//                   </button>
//                 </footer>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const SKIP_HOME_ENTRY_FLOW_KEY = "vyasa-skip-home-entry-flow";

export default function HomeEntryFlow({ children }) {
  // Keep server and first client render identical to avoid hydration mismatches.
  const [phase, setPhase] = useState("splash");

  useEffect(() => {
    const shouldSkipEntryFlow =
      window.sessionStorage.getItem(SKIP_HOME_ENTRY_FLOW_KEY) === "1" ||
      window.location.hash === "#contact";
    if (!shouldSkipEntryFlow) return;

    const raf = requestAnimationFrame(() => {
      setPhase("main");
    });

    window.sessionStorage.removeItem(SKIP_HOME_ENTRY_FLOW_KEY);

    if (window.location.hash === "#contact") {
      requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase !== "main") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    document.body.style.overflow = "";
  }, [phase]);

  const goMain = () => setPhase("main");

  return (
    <>
      {phase === "main" ? children : null}

      <AnimatePresence mode="wait">
        {phase !== "main" && (
          <motion.div
            key={phase}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[200] flex flex-col bg-white/35 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative h-full w-full min-h-0 bg-white/35 p-2 flex items-center justify-center">
              <div className="inline-flex max-w-full max-h-full overflow-hidden rounded-2xl border border-white/90 bg-white/85 shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
                <Image
                  src="/assets/introwall.png"
                  alt="Vyasa Institute splash banner"
                  width={1600}
                  height={900}
                  priority
                  className="w-auto h-auto max-w-full max-h-[calc(100vh-1rem)] object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                type="button"
                onClick={goMain}
                className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                aria-label="Close splash and go to home"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}