"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const team = [
  { name: "CA Rajesh Kumar", role: "Director & Senior Faculty", subject: "Financial Reporting & Audit", exp: "18+ Years", initial: "RK" },
  { name: "CA Priya Menon", role: "Senior Faculty", subject: "Taxation & Law", exp: "14+ Years", initial: "PM" },
  { name: "CMA Suresh Reddy", role: "CMA Head", subject: "Cost & Management Accounting", exp: "12+ Years", initial: "SR" },
  { name: "Prof. Lakshmi Devi", role: "Faculty", subject: "Mathematics & Accounts", exp: "15+ Years", initial: "LD" },
];

export default function OurTeamClient() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gold/15 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-gold/60">{member.initial}</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-primary-dark">{member.name}</h3>
                <p className="text-gold text-sm font-semibold">{member.role}</p>
                <p className="text-muted text-xs mt-1">{member.subject}</p>
                <span className="inline-block mt-3 text-[10px] bg-primary/5 text-primary px-2.5 py-1 rounded-full font-semibold">{member.exp}</span>
                <div className="flex gap-2 mt-4">
                  <a href="#" className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors text-xs" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors text-xs" aria-label="Email"><FaEnvelope /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
