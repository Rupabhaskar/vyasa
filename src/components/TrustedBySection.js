// "use client";
// import { motion } from "framer-motion";
// import { FaUniversity, FaCertificate } from "react-icons/fa";

// const affiliations = [
//   { icon: <FaUniversity />, name: "ICAI", desc: "Institute of Chartered Accountants of India" },
//   { icon: <FaCertificate />, name: "ICMAI", desc: "Institute of Cost Accountants of India" },
// ];

// const doubled = [...affiliations, ...affiliations];

// export default function TrustedBySection() {
//   return (
//     <section className="py-14 bg-white border-b border-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-primary-dark/70 mb-8">
//           {"Recognized & Affiliated With"}
//         </motion.p>
//       </div>

//       <div className="relative">
//         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

//         <div className="flex animate-marquee">
//           {doubled.map((item, i) => (
//             <div key={i} className="flex items-center gap-3.5 px-9 py-3 shrink-0 group">
//               <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[16px] text-primary-dark/70 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">{item.icon}</div>
//               <div>
//                 <div className="font-sans font-bold text-primary-dark/80 text-xs group-hover:text-primary-dark transition-colors">{item.name}</div>
//                 <div className="text-[10px] text-gray-600/80 max-w-[170px] font-sans">{item.desc}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaCertificate } from "react-icons/fa";

const affiliations = [
  {
    icon: <FaUniversity />,
    name: "ICAI",
    desc: "Institute of Chartered Accountants of India",
  },
  {
    icon: <FaCertificate />,
    name: "ICMAI",
    desc: "Institute of Cost Accountants of India",
  },
];

export default function TrustedBySection() {
  return (
    <section className="py-20 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-dark/60 mb-12"
        >
          Recognized & Affiliated With
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">

          {affiliations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-gold/10 to-transparent" />

              <div className="relative z-10 flex items-start gap-4">

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg text-primary-dark group-hover:text-gold group-hover:border-gold/30 group-hover:bg-gold/10 transition-all duration-300">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-primary-dark text-sm mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}