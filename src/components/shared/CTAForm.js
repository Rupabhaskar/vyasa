"use client";
import { motion } from "framer-motion";

export default function CTAForm({ heading = "Get Expert Guidance", subheading, courseName = "" }) {
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-emerald-100/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
            <select
              defaultValue={courseName}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none"
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
            className="btn-glow w-full bg-gold hover:bg-gold-light text-primary-dark font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            Book Free Counseling
          </button>
        </motion.form>
      </div>
    </section>
  );
}
