"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function LeadCapture() {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label text-gold mb-4 inline-block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-4">Book Free Counseling</h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-transparent mb-6" />
            <p className="text-muted text-[15px] leading-relaxed font-sans mb-10 max-w-md">
              Take the first step towards your dream career. Our counselors are ready to guide you and your family.
            </p>

            <div className="space-y-5">
              {[
                { icon: <FaPhoneAlt />, label: "Call Us", value: "+91 9133660500" },
                { icon: <FaEnvelope />, label: "Email", value: "vyasaprofessionals@gmail.com" },
                { icon: <FaMapMarkerAlt />, label: "Locations", value: "Vijayawada, AP" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary-dark/[0.03] text-primary-dark/40 flex items-center justify-center text-[14px] group-hover:bg-gold/10 group-hover:text-gold transition-all duration-300">{item.icon}</div>
                  <div>
                    <p className="text-[10px] text-muted/40 uppercase tracking-[0.15em] font-sans">{item.label}</p>
                    <p className="font-sans font-semibold text-primary-dark text-[14px]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <form className="bg-[#f9f8f6] rounded-2xl border border-gray-100/80 p-8 md:p-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-heading font-bold text-primary-dark text-xl mb-4">Quick Enquiry</h3>

              {[
                { name: "name", placeholder: "Full Name", type: "text" },
                { name: "phone", placeholder: "Phone Number", type: "tel" },
                { name: "email", placeholder: "Email Address", type: "email" },
              ].map((field) => (
                <input key={field.name} type={field.type} placeholder={field.placeholder} className="w-full bg-white border border-gray-100 rounded-xl px-5 py-3.5 text-primary-dark placeholder-muted/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all text-[14px] font-sans" />
              ))}

              <select className="w-full bg-white border border-gray-100 rounded-xl px-5 py-3.5 text-muted/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all appearance-none text-[14px] font-sans">
                <option value="">Select Course</option>
                <option value="degree">Degree + CA/CMA</option>
                <option value="ca-found">CA Foundation</option>
                <option value="ca-inter">CA Intermediate</option>
                <option value="ca-final">CA Final</option>
                <option value="cma">CMA Course</option>
              </select>

              <textarea placeholder="Any message (optional)" rows={3} className="w-full bg-white border border-gray-100 rounded-xl px-5 py-3.5 text-primary-dark placeholder-muted/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all resize-none text-[14px] font-sans" />

              <button type="submit" className="w-full bg-gradient-to-r from-gold to-gold-light text-primary-dark font-sans font-bold py-4 rounded-xl text-[15px] shadow-[0_6px_20px_rgba(158,191,176,0.35)] hover:shadow-[0_10px_30px_rgba(158,191,176,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group">
                Book Free Counseling
                <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-center text-muted/40 text-[11px] font-sans flex items-center justify-center gap-1.5">
                <FaShieldAlt className="text-[9px]" /> We respect your privacy. No spam, ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
