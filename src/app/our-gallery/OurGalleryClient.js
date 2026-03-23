"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBuilding, FaBook, FaDesktop, FaMicrophone, FaLightbulb, FaClock } from "react-icons/fa";

const galleryItems = [
  { title: "Smart Classrooms", icon: <FaLightbulb />, color: "from-primary-dark to-primary" },
  { title: "Digital Library", icon: <FaBook />, color: "from-primary to-accent" },
  { title: "Computer Lab", icon: <FaDesktop />, color: "from-accent to-primary-light" },
  { title: "Seminar Hall", icon: <FaMicrophone />, color: "from-[#091638] to-primary-dark" },
  { title: "Study Rooms", icon: <FaClock />, color: "from-primary-dark to-[#091638]" },
  { title: "Campus View", icon: <FaBuilding />, color: "from-[#0c1d4a] to-primary-dark" },
];

export default function OurGalleryClient() {
  const [lightbox, setLightbox] = useState(null);

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
              className={`relative h-48 md:h-56 rounded-2xl bg-gradient-to-br ${item.color} overflow-hidden cursor-pointer group flex items-center justify-center`}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
              <div className="relative z-10 text-center text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mx-auto mb-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className={`w-full max-w-2xl h-80 rounded-3xl bg-gradient-to-br ${galleryItems[lightbox].color} flex flex-col items-center justify-center`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-4xl text-white mb-4">
                {galleryItems[lightbox].icon}
              </div>
              <h2 className="text-2xl font-heading font-bold text-white">{galleryItems[lightbox].title}</h2>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
