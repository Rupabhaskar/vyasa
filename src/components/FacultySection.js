"use client";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const points = [
  "Highly Qualified Chartered Accountants & Subject Experts",
  "Strong Focus on Conceptual Clarity & Fundamentals",
  "Consistent Results with Proven Track Record",
  "Student-Friendly Teaching & Personal Mentorship",
  "Regular Doubt Solving & Performance Tracking",
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-28 bg-white relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-dark/[0.02] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-gold mb-4 inline-block">
              Our Strength
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight mb-6">
              Faculty That Builds <br /> Real Success
            </h2>

            <p className="text-muted text-[15px] leading-relaxed max-w-md">
              Our faculty is carefully selected to maintain the highest academic
              standards while ensuring a supportive and student-friendly learning environment.
            </p>
          </motion.div>

          {/* RIGHT SIDE LIST */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="mt-1 w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center">
                  <FaCheck className="text-[10px] text-gold" />
                </div>

                {/* Text */}
                <p className="text-primary-dark text-[15px] leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-primary-dark font-medium">
            Carefully Selected. Consistently Maintained. Student Focused.
          </p>
        </motion.div>

      </div>
    </section>
  );
}