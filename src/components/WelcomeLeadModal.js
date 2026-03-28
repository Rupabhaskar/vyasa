"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowRight, FaShieldAlt } from "react-icons/fa";

export default function WelcomeLeadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-primary-dark to-primary px-6 py-5 relative">
                <h3 className="text-xl font-bold text-white font-heading pr-8">Get Free Career Guidance</h3>
                <p className="text-emerald-100 text-sm mt-1">Share your details. Our experts will call you.</p>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark placeholder-muted/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark placeholder-muted/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark placeholder-muted/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans"
                />
                <select
                  name="course"
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans appearance-none"
                >
                  <option value="">Select Course Interest</option>
                  <option value="ca-foundation">CA Foundation</option>
                  <option value="ca-intermediate">CA Intermediate</option>
                  <option value="ca-final">CA Final</option>
                  <option value="cma">CMA Course</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-primary-dark font-bold py-4 rounded-xl text-sm shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  Get Free Counseling
                  <FaArrowRight className="text-xs" />
                </button>
                <p className="text-center text-muted/40 text-[11px] flex items-center justify-center gap-1.5">
                  <FaShieldAlt className="text-[9px]" /> We respect your privacy. No spam.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
