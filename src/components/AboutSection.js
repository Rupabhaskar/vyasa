// "use client";
// import { motion } from "framer-motion";

// export default function AboutSection() {
//   return (
//     <section id="about" className="relative py-20 md:py-24 bg-gradient-to-b from-white to-[#f8f7f4] overflow-hidden">
//       <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
//       <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//           className="rounded-3xl border border-gray-200/80 bg-white/85 backdrop-blur-sm shadow-[0_16px_44px_rgba(0,0,0,0.08)] overflow-hidden"
//         >
//           <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-7 border-b border-gray-100 bg-gradient-to-r from-primary-dark/[0.03] via-gold/[0.05] to-primary/[0.03]">
//             <p className="section-label text-gold mb-3">About Vyasa Institute</p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
//               Welcome to Vyasa Institute
//             </h2>
//             <p className="mt-2 text-xl sm:text-2xl font-semibold text-gold">
//               NO.1 for CA and CMA
//             </p>
//             <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-primary-dark/90">
//               Where Aspirations Meet Excellence
//             </p>
//           </div>

//           <div className="px-6 sm:px-10 py-8 sm:py-10 space-y-5 text-[15px] sm:text-[16px] leading-8 text-gray-700">
//             <p className="text-primary-dark font-medium italic border-l-4 border-gold/60 pl-4">
//               Join Vyasa Institute — where your journey to professional greatness truly begins.
//             </p>
//             <p>
//               At Vyasa Institute, we don’t just prepare students for exams — we shape professionals for life. As a trusted name in coaching for CA, CMA, and CS aspirants, Vyasa Institute has developed a unique position for itself by delivering top-notch, affordable education that meets and exceeds national benchmarks.
//             </p>
//             <p>
//               Every year, over 300 students walk through our doors with dreams in their eyes — and some of them will leave with All India Ranks to their name and many of them will leave with success on their first attempt. We take pride in nurturing academic brilliance, professional growth, and meaningful contributions to society.
//             </p>
//             <p>
//               Our mission is simple yet powerful: to create, share, and apply knowledge through engaging teaching methods, cutting-edge technology, and a culture of continuous improvement. Rooted in values of integrity, inclusivity, and collaborative leadership, Vyasa is more than an institute — it’s a Socio-Corporate movement powered by seasoned professionals who are passionate about performance, transparency, and student success.
//             </p>
//             <p>
//               We will maintain integrity in all of our actions, respect for individual differences and diverse opinions, a participative decision-making style, and quality as the test of all of our actions. We will value performance and diversity and operate in an environment of open communication and shared commitment.
//             </p>
//             <p>
//               Vyasa Institute is not just an educational institution, it is a Socio – Corporate body. The institute is managed by an expert who has rich industrial experience and social commitment. Zero tolerance is the guideline to which the management commits itself.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-8 bg-gradient-to-b from-white to-[#f8f7f4] overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 -right-20 w-60 sm:w-72 h-60 sm:h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -left-20 w-64 sm:w-80 h-64 sm:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-gray-200/80 bg-white/90 backdrop-blur-md shadow-xl overflow-hidden"
        >
          {/* HEADER */}
          <motion.div
            variants={item}
            className="px-5 sm:px-8 md:px-10 py-8 sm:py-10 text-center border-b border-gray-100 bg-gradient-to-r from-primary-dark/[0.04] via-gold/[0.06] to-primary/[0.04]"
          >
            <p className="section-label text-gold mb-3">
              About Vyasa Institute
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-dark leading-tight">
              Welcome to Vyasa Institute
            </h2>

            <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gold">
              NO.1 for CA and CMA
            </p>

            <p className="mt-2 text-sm sm:text-base md:text-xl font-medium text-primary-dark/90">
              Where Aspirations Meet Excellence
            </p>
          </motion.div>

          {/* CONTENT */}
          <div className="px-5 sm:px-8 md:px-10 py-8 sm:py-10 space-y-6 sm:space-y-8">

            {/* QUOTE */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-gold/5 border-l-4 border-gold/70 p-4 sm:p-5 rounded-xl transition-all duration-300"
            >
              <p className="text-primary-dark font-semibold italic text-sm sm:text-base">
                Join Vyasa Institute — where your journey to professional greatness truly begins.
              </p>
            </motion.div>

            {/* SECTION TEXT */}
            <motion.div variants={item} className="space-y-4">
              <p className="text-black leading-7 sm:leading-8 text-sm sm:text-base">
                At Vyasa Institute, we don’t just prepare students for exams — we shape professionals for life. As a trusted name in coaching for CA, CMA, and CS aspirants, Vyasa Institute has developed a unique position for itself by delivering top-notch, affordable education that meets and exceeds national benchmarks.
              </p>

              <p className="text-black leading-7 sm:leading-8 text-sm sm:text-base">
                Every year, over 300 students walk through our doors with dreams in their eyes — and some of them will leave with All India Ranks to their name and many of them will leave with success on their first attempt. We take pride in nurturing academic brilliance, professional growth, and meaningful contributions to society.
              </p>
            </motion.div>

            {/* GRID FOR CARDS */}
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">

              {/* MISSION */}
              <motion.div
                variants={item}
                whileHover={{ y: -6 }}
                className="bg-[#f4f7ff] border border-[#dbe4ff] shadow-sm rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2">
                  Our Mission
                </h3>
                <p className="text-black leading-7 sm:leading-8 text-sm sm:text-base">
                  Our mission is simple yet powerful: to create, share, and apply knowledge through engaging teaching methods, cutting-edge technology, and a culture of continuous improvement. Rooted in values of integrity, inclusivity, and collaborative leadership, Vyasa is more than an institute — it’s a Socio-Corporate movement powered by seasoned professionals who are passionate about performance, transparency, and student success.
                </p>
              </motion.div>

              {/* VALUES */}
              <motion.div
                variants={item}
                whileHover={{ y: -6 }}
                className="bg-[#fff9ef] border border-[#ffe5b8] shadow-sm rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2">
                  Our Values
                </h3>
                <p className="text-black leading-7 sm:leading-8 text-sm sm:text-base">
                  We will maintain integrity in all of our actions, respect for individual differences and diverse opinions, a participative decision-making style, and quality as the test of all of our actions. We will value performance and diversity and operate in an environment of open communication and shared commitment.
                </p>
              </motion.div>
            </div>

            {/* FINAL BLOCK */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-primary/5 to-gold/5 border border-gray-100 rounded-2xl p-5 sm:p-6 transition-all duration-300"
            >
              <p className="text-black leading-7 sm:leading-8 text-sm sm:text-base">
                Vyasa Institute is not just an educational institution, it is a Socio – Corporate body. The institute is managed by an expert who has rich industrial experience and social commitment. Zero tolerance is the guideline to which the management commits itself.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}