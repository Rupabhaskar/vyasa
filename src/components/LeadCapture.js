"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "./lib/firebase";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    if (success) setSuccess(false);
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      return "Enter valid 10-digit Indian phone number";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Enter valid email address";
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
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-white to-[#f8f7f4] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 sm:grid-cols-2 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="px-5"
        >
          <span className="text-gold font-semibold tracking-widest text-sm uppercase">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Start Your <span className="text-gold">CA/CMA Journey</span> with Expert Guidance
          </h2>

          <p className="mt-6 text-muted max-w-md">
            Get personalized advice from experts and choose the right path for your success.
          </p>

          {/* Trust Points */}
          <div className="mt-8 space-y-3">
            {[
              "100% Free Expert Guidance",
              "Trusted by 1000+ Students",
              "No Hidden Fees",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <FaCheckCircle className="text-gold text-xs" />
                {item}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-10 space-y-5">
            <ContactItem icon={<FaPhoneAlt />} label="Call" value="+91 9133660500" />
            <ContactItem icon={<FaEnvelope />} label="Email" value="vyasaprofessionals@gmail.com" />
            <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="Vijayawada, AP" />
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8 md:p-10 space-y-6"
        >
          <h3 className="text-xl font-bold">
            Book Your Free Counseling Session
          </h3>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Inputs */}
          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
          <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />

          {/* Select */}
          <div>
            <label className="text-sm font-medium text-primary-dark">Select Course</label>
            <select
              name="course"
              value={form.course}
              onChange={handleChange}
              className="w-full mt-1 bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-gold/30 focus:border-gold/40 outline-none transition"
              required
            >
              <option value="">Choose your course</option>
              <option value="degree">Degree + CA/CMA</option>
              <option value="ca">CA</option>
              <option value="cma">CMA</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium text-primary-dark">Message (Optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-1 bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-gold/30 focus:border-gold/40 outline-none transition min-h-[110px] resize-y"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-gold to-yellow-400 text-black font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-all shadow-lg ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"
            }`}
          >
            {loading ? "Submitting..." : "Book Free Consultation"}
            <FaArrowRight />
          </button>

          {/* Success Animation */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0.6, rotate: -20 }}
                    animate={{ scale: [0.6, 1.15, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0"
                  >
                    <FaCheckCircle className="text-sm" />
                  </motion.div>
                  <div className="text-sm">
                    <p className="font-semibold text-green-700">Form submitted successfully</p>
                    <p className="text-green-600/90">Thank you! Our counselor will contact you shortly.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Privacy */}
          <p className="text-xs text-center flex justify-center items-center gap-2 opacity-60">
            <FaShieldAlt /> 100% Privacy Guaranteed
          </p>
        </motion.form>
      </div>
    </section>
  );
}

/* 🔹 Input Component */
function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full mt-1 bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-gold/30 outline-none transition"
      />
    </div>
  );
}

/* 🔹 Contact Item */
function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs opacity-50">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}