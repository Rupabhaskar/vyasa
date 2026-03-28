"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./lib/firebase";

export default function WelcomeLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setError("");
    setSuccess(false);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Name is required.");
    if (!/^[6-9]\d{9}$/.test(form.phone)) return setError("Enter valid 10-digit phone number.");
    if (!/\S+@\S+\.\S+/.test(form.email)) return setError("Enter valid email address.");
    if (!form.course) return setError("Please select course.");

    setLoading(true);
    try {
      await addDoc(collection(db, "contact"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        course: form.course,
        message: "",
        source: "welcome-modal",
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setForm({ name: "", phone: "", email: "", course: "" });
      setTimeout(() => handleClose(), 900);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
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
                {error && <p className="text-red-600 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">Submitted successfully.</p>}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark placeholder-muted/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark placeholder-muted/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-primary-dark placeholder-muted/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all text-sm font-sans"
                />
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
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
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-primary-dark font-bold py-4 rounded-xl text-sm shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : "Get Free Counseling"}
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
