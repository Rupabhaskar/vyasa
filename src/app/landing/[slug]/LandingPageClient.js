"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle, FaQuoteLeft, FaExclamationTriangle, FaWhatsapp } from "react-icons/fa";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import PageLayout from "@/components/shared/PageLayout";
import { db } from "@/components/lib/firebase";

export default function LandingPageClient({ page }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
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
    if (!form.name.trim()) return "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) return "Enter a valid 10-digit Indian phone number";
    if (!/\S+@\S+\.\S+/.test(form.email.trim())) return "Enter a valid email address";
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
        message: `Landing page lead: ${page.slug}`,
        source: "landing-page",
        landingSlug: page.slug,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setError("");
      setForm({
        name: "",
        phone: "",
        email: "",
        course: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delay" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold-light text-sm font-medium">Vyasa Institute</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {page.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto mb-8"
          >
            {page.subheadline}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            href="#landing-form"
            className="btn-glow inline-block bg-gold hover:bg-gold-light text-primary-dark px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            {page.formHeading}
          </motion.a>
        </div>
      </section>

      {/* Urgency */}
      <div className="bg-gold/10 border-y border-gold/20 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-2.5 text-center text-sm md:text-base">
          <FaExclamationTriangle className="text-gold shrink-0" />
          <span className="text-primary font-semibold">{page.urgency}</span>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">Why Choose Vyasa Institute?</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">Everything you need for a successful CA journey, all under one roof.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <FaCheckCircle className="text-green-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-primary mb-1">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <FaQuoteLeft className="text-2xl text-primary/10 mb-4" />
                <p className="text-muted leading-relaxed mb-4 italic text-sm">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-gold text-sm">{t.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="landing-form" className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">{page.formHeading}</h2>
          <form className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10 space-y-5" onSubmit={handleSubmit}>
            {error && (
              <p className="rounded-xl border border-red-200/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p>
            )}
            {success && (
              <p className="rounded-xl border border-green-200/40 bg-green-500/10 px-4 py-3 text-sm text-green-100">
                Submitted successfully. We will contact you soon.
              </p>
            )}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none"
            >
              <option value="" className="text-gray-800">Select Course</option>
              <option value="CA Foundation" className="text-gray-800">CA Foundation</option>
              <option value="CA Intermediate" className="text-gray-800">CA Intermediate</option>
              <option value="CA Final" className="text-gray-800">CA Final</option>
              <option value="CMA Foundation" className="text-gray-800">CMA Foundation</option>
              <option value="CMA Inter" className="text-gray-800">CMA Intermediate</option>
              <option value="CMA Final" className="text-gray-800">CMA Final</option>
            </select>
            <button
              type="submit"
              disabled={loading}
              className="btn-glow w-full bg-gold hover:bg-gold-light text-primary-dark font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            <p className="text-center text-emerald-100 text-sm">We&apos;ll contact you within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <div className="py-6 bg-green-500 text-white text-center">
        <a href="https://wa.me/9133660500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg font-bold hover:underline">
          <FaWhatsapp className="text-2xl" /> Chat with us on WhatsApp for instant queries
        </a>
      </div>
    </PageLayout>
  );
}
