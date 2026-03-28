"use client";
import { motion } from "framer-motion";

export default function PageHeader({ tag, title, description, align = "center" }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delay" />
      </div>
      <div className={`relative z-10 max-w-5xl mx-auto px-6 ${align === "center" ? "text-center" : "text-left"}`}>
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold-light font-semibold text-sm uppercase tracking-widest mb-4"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
