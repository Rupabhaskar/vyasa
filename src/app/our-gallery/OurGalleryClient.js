// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Image from "next/image";
// import { FaBuilding, FaBook, FaDesktop, FaMicrophone, FaLightbulb, FaClock, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const galleryItems = [
//   { title: "Smart Classrooms", icon: <FaLightbulb />, color: "from-primary-dark to-primary", image: "/gallery/cls.JPEG" },
//   { title: "Digital Library", icon: <FaBook />, color: "from-primary to-primary-light", image: null },
//   { title: "Computer Lab", icon: <FaDesktop />, color: "from-accent to-primary-light", image: "/gallery/cp.png" },
//   { title: "Seminar Hall", icon: <FaMicrophone />, color: "from-surface-deep-2 to-primary-dark", image:"/gallery/semi.jpeg" },
//   { title: "Study Rooms", icon: <FaClock />, color: "from-primary-dark to-surface-deep-2", image: "/gallery/classRomm.JPG" },
//   { title: "Campus View", icon: <FaBuilding />, color: "from-surface-deep-2 to-primary-dark", image: null },
// ];

// export default function OurGalleryClient() {
//   const [lightbox, setLightbox] = useState(null);

//   const goPrev = () => setLightbox((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
//   const goNext = () => setLightbox((prev) => (prev + 1) % galleryItems.length);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {galleryItems.map((item, i) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.06 }}
//               onClick={() => setLightbox(i)}
//               className={`relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer group ${!item.image ? `bg-gradient-to-br ${item.color}` : ""}`}
//             >
//               {item.image ? (
//                 <>
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     sizes="(max-width: 768px) 50vw, 33vw"
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
//                     <h3 className="font-heading font-semibold text-white text-sm md:text-base">{item.title}</h3>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
//                   <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//                     <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
//                       {item.icon}
//                     </div>
//                     <h3 className="font-heading font-semibold">{item.title}</h3>
//                   </div>
//                 </>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {lightbox !== null && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-6"
//               onClick={() => setLightbox(null)}
//             >
//               <button
//                 onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
//                 className="absolute top-4 right-4 z-60 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <FaTimes />
//               </button>

//               <button
//                 onClick={(e) => { e.stopPropagation(); goPrev(); }}
//                 className="absolute left-3 sm:left-6 z-60 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <FaChevronLeft />
//               </button>

//               <button
//                 onClick={(e) => { e.stopPropagation(); goNext(); }}
//                 className="absolute right-3 sm:right-6 z-60 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
//               >
//                 <FaChevronRight />
//               </button>

//               <motion.div
//                 key={lightbox}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className={`relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden ${!galleryItems[lightbox].image ? `bg-gradient-to-br ${galleryItems[lightbox].color} flex flex-col items-center justify-center` : ""}`}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {galleryItems[lightbox].image ? (
//                   <>
//                     <Image
//                       src={galleryItems[lightbox].image}
//                       alt={galleryItems[lightbox].title}
//                       fill
//                       sizes="90vw"
//                       className="object-contain bg-black"
//                     />
//                     <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
//                       <h2 className="text-xl md:text-2xl font-heading font-bold text-white">{galleryItems[lightbox].title}</h2>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-4xl text-white mb-4">
//                       {galleryItems[lightbox].icon}
//                     </div>
//                     <h2 className="text-2xl font-heading font-bold text-white">{galleryItems[lightbox].title}</h2>
//                   </>
//                 )}
//               </motion.div>

//               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//                 {galleryItems.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
//                     className={`h-2 rounded-full transition-all duration-300 ${i === lightbox ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"}`}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  FaBuilding,
  FaBook,
  FaDesktop,
  FaMicrophone,
  FaLightbulb,
  FaClock,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const galleryItems = [
  { title: "Smart Classrooms", icon: <FaLightbulb />, color: "from-primary-dark to-primary", image: "/gallery/cls.jpeg" },
  { title: "Digital Library", icon: <FaBook />, color: "from-primary to-primary-light", image: "/gallery/di.jpeg" },
  { title: "Computer Lab", icon: <FaDesktop />, color: "from-accent to-primary-light", image: "/gallery/cp.png" },
  { title: "Seminar Hall", icon: <FaMicrophone />, color: "from-surface-deep-2 to-primary-dark", image: "/gallery/semi.jpeg" },
  { title: "Study Rooms", icon: <FaClock />, color: "from-primary-dark to-surface-deep-2", image: "/gallery/classRomm.JPG" },
  { title: "Campus View", icon: <FaBuilding />, color: "from-surface-deep-2 to-primary-dark", image: "/assets/why.png" },
];

export default function OurGalleryClient() {
  const [lightbox, setLightbox] = useState(null);
  const [direction, setDirection] = useState(0);

  const goPrev = () => {
    setDirection(-1);
    setLightbox((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goNext = () => {
    setDirection(1);
    setLightbox((prev) => (prev + 1) % galleryItems.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setLightbox(i)}
              className={`relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer group ${
                !item.image ? `bg-gradient-to-br ${item.color}` : ""
              }`}
            >
              {item.image ? (
                <>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                    <h3 className="font-heading font-semibold text-white text-sm md:text-base">
                      {item.title}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence custom={direction}>
          {lightbox !== null && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              {/* Close */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(null);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full text-white flex items-center justify-center"
              >
                <FaTimes />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 w-10 h-10 bg-white/10 rounded-full text-white flex items-center justify-center"
              >
                <FaChevronLeft />
              </button>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 w-10 h-10 bg-white/10 rounded-full text-white flex items-center justify-center"
              >
                <FaChevronRight />
              </button>

              {/* Image / Content */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={lightbox}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x > 100) goPrev();
                    else if (info.offset.x < -100) goNext();
                  }}
                  className={`relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden ${
                    !galleryItems[lightbox].image
                      ? `bg-gradient-to-br ${galleryItems[lightbox].color} flex flex-col items-center justify-center`
                      : ""
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {galleryItems[lightbox].image ? (
                    <>
                      <Image
                        src={galleryItems[lightbox].image}
                        alt={galleryItems[lightbox].title}
                        fill
                        className="object-cover bg-black"
                      />
                      <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                        <h2 className="text-white text-xl font-bold">
                          {galleryItems[lightbox].title}
                        </h2>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-5xl text-white mb-4">
                        {galleryItems[lightbox].icon}
                      </div>
                      <h2 className="text-white text-2xl font-bold">
                        {galleryItems[lightbox].title}
                      </h2>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 flex gap-2">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setDirection(i > lightbox ? 1 : -1);
                      setLightbox(i);
                    }}
                    className={`h-2 rounded-full ${
                      i === lightbox ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}