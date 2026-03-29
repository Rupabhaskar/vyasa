// // "use client";
// // import { motion } from "framer-motion";
// // import { FaChalkboardTeacher, FaClipboardCheck, FaUsersCog, FaClock, FaBookReader, FaMedal } from "react-icons/fa";

// // const features = [
// //   { icon: <FaBookReader />, title: "Structured Programs & Study Hours", desc: "CA & CMA coaching with a clear path from Foundation to Final, supported by structured study plans and disciplined study hours." },
// //   { icon: <FaClipboardCheck />, title: "Exams", desc: "Weekend Exams and Consolidated Grand Tests will make the Students confort at all times consistent practice builds confidence."},
// //   { icon: <FaUsersCog />, title: "Personal Mentoring", desc: "Every student is assigned a dedicated mentor who tracks progress, addresses weaknesses, and provides guidance."},
// //   { icon: <FaChalkboardTeacher />, title: "Expert Faculty", desc: "Learn from qualified CAs, CMAs, and professors with decades of experience and a passion for student success." },
// //   { icon: <FaMedal />, title: "Proven Track Record", desc: "Consistent All India Ranks and the highest pass percentages in the region, year after year."  },
// //   { icon: <FaMedal />, title: "Specialized Materials", desc: "Our Materials covers board materials MTP's and RTP's Previous Years Question Papers and Self Prepared Question covering all conceptual information."},

// // ];

// // export default function WhyChooseSection() {
// //   return (
// //     <section id="why-us" className="py-28 relative overflow-hidden">
// //       <div className="absolute inset-0 bg-primary-dark" />
// //       <div className="absolute inset-0 bg-gradient-to-br from-surface-deep/95 via-primary-dark/90 to-surface-deep-2/95" />
// //       <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }} />

// //       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[140px]" />
// //       <div className="absolute top-10 left-10 w-28 h-28 border-t border-l border-gold/[0.08] rounded-tl-2xl hidden lg:block" />
// //       <div className="absolute bottom-10 right-10 w-28 h-28 border-b border-r border-gold/[0.08] rounded-br-2xl hidden lg:block" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
// //         <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-20">
// //           <span className="section-label text-gold/70 mb-4 inline-block">The Vyasas Advantage</span>
// //           <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight mb-4">Why Vyasa ?</h2>
// //           <div className="royal-divider mb-6" />
// //           <p className="text-emerald-100/40 max-w-xl mx-auto text-[15px] leading-relaxed font-sans">What makes Vyasa Institute different from every other coaching institute.</p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
// //           {features.map((f, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 28 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: i * 0.07, duration: 0.6 }}
// //               whileHover={{ y: -3 }}
// //               className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-gold/10 transition-all duration-400"
// //             >
// //               <div className="flex items-start justify-between mb-5">
// //                 <div className="w-11 h-11 rounded-xl bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-[16px] text-gold/80 group-hover:text-gold transition-colors">{f.icon}</div>
// //               </div>
// //               <h3 className="text-[16px] font-heading font-semibold text-white mb-2 group-hover:text-gold transition-colors">{f.title}</h3>
// //               <p className="text-emerald-100/35 text-[13px] leading-relaxed font-sans">{f.desc}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";
// import { motion } from "framer-motion";
// import {
//   FaChalkboardTeacher,
//   FaClipboardCheck,
//   FaUsersCog,
//   FaBookReader
// } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaBookReader />,
//     title: "Structured Programs",
//     desc: "Clear roadmap from Foundation to Final with disciplined study plans.",
//     color: "bg-blue-100 text-blue-600"
//   },
//   {
//     icon: <FaClipboardCheck />,
//     title: "Weekly Exams",
//     desc: "Consistent testing with grand exams to build confidence.",
//     color: "bg-purple-100 text-purple-600"
//   },
//   {
//     icon: <FaUsersCog />,
//     title: "Personal Mentoring",
//     desc: "Dedicated mentors guide and track every student.",
//     color: "bg-red-100 text-red-500"
//   },
//   {
//     icon: <FaChalkboardTeacher />,
//     title: "Expert Faculty",
//     desc: "Learn from experienced CAs, CMAs & professors.",
//     color: "bg-green-100 text-green-600"
//   }
// ];

// export default function WhyChooseSection() {
//   return (
//     <section className="py-24 bg-[#f4f8fb]">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT SIDE */}
//         <div>
//           <h2 className="text-4xl font-bold text-gray-800 mb-10">
//             Why Choose Us?
//           </h2>

//           <div className="space-y-6">
//             {features.map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
//               >
//                 {/* Icon */}
//                 <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${f.color}`}>
//                   {f.icon}
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h3 className="font-semibold text-gray-800">
//                     {f.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1 leading-relaxed">
//                     {f.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="relative"
//         >
//           <div className="rounded-[30px] overflow-hidden border-4 border-blue-200">
//             <img
//               src="/assets/why.png" // replace with your image
//               alt="students"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaUsersCog,
  FaBookReader
} from "react-icons/fa";

const features = [
  {
    icon: <FaBookReader />,
    title: "Structured Programs",
    desc: "Clear roadmap from Foundation to Final with disciplined study plans.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <FaClipboardCheck />,
    title: "Weekly Exams",
    desc: "Consistent testing with grand exams to build confidence.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <FaUsersCog />,
    title: "Personal Mentoring",
    desc: "Dedicated mentors guide and track every student.",
    color: "bg-red-100 text-red-500"
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    desc: "Learn from experienced CAs, CMAs & professors.",
    color: "bg-green-100 text-green-600"
  }
];

export default function WhyChooseSection() {
  return (
    <section className="py-8 bg-[#f4f8fb]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Why Choose Us?
          </h2>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg ${f.color}`}
                >
                  {f.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[420px] h-[380px] md:h-[480px] lg:h-[520px] rounded-[30px] overflow-hidden border-4 border-blue-200 shadow-lg transition duration-500 hover:scale-[1.02]">

            {/* Image */}
            <img
              src="/assets/why.png"
              alt="students"
              className="w-full h-full object-cover"
            />

            {/* Optional soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          </div>
        </motion.div>

      </div>
    </section>
  );
}