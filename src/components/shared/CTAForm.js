"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/components/lib/firebase";

export default function CTAForm({ heading = "Get Expert Guidance", subheading, courseName = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: courseName || "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
    if (success) setSuccess(false);
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      return "Enter a valid 10-digit Indian phone number";
    }
    if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      return "Enter a valid email address";
    }
    if (!form.course) return "Please select a course";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "contact"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        course: form.course,
        source: "cta_form",
        pagePath: typeof window !== "undefined" ? window.location.pathname : "",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        course: courseName || "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
          {subheading && (
            <p className="text-emerald-100 text-lg">{subheading}</p>
          )}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10"
          onSubmit={handleSubmit}
        >
          {error && (
            <p className="mb-4 rounded-xl border border-red-300/60 bg-red-100/20 px-4 py-2 text-sm text-red-100">
              {error}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              required
            />
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none"
              required
            >
              <option value="" className="text-gray-800">Select Course</option>
              <option value="CA Foundation" className="text-gray-800">CA Foundation</option>
              <option value="CA Intermediate" className="text-gray-800">CA Intermediate</option>
              <option value="CA Final" className="text-gray-800">CA Final</option>
              <option value="CMA Foundation" className="text-gray-800">CMA Foundation</option>
              <option value="CMA Inter" className="text-gray-800">CMA Intermediate</option>
              <option value="CMA Final" className="text-gray-800">CMA Final</option>
              <option value="Online" className="text-gray-800">Online Classes</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-glow w-full bg-gold hover:bg-gold-light text-primary-dark font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            {loading ? "Submitting..." : "Book Free Counseling"}
          </button>
          {success && (
            <p className="mt-4 rounded-xl border border-green-300/60 bg-green-100/20 px-4 py-2 text-sm text-emerald-100">
              Form submitted successfully. Our counselor will contact you shortly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
