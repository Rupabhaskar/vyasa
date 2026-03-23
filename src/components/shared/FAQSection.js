"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className="font-semibold text-primary pr-4">{faq.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-xs">
                  {openIndex === i ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
