"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBookOpen, FaGraduationCap, FaAward, FaCrown, FaBriefcase,
  FaClock, FaCheckCircle, FaLightbulb, FaArrowRight, FaArrowDown,
} from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";

const journey = [
  {
    icon: <FaGraduationCap />,
    title: "CA/CMA Foundation",
    duration: "8 Months",
    age: "18-19 years",
    color: "from-primary to-accent",
    description:
      "The Foundation level tests your grasp of fundamental concepts across accounting, law, mathematics, and economics. Our comprehensive coaching covers all 4 papers with regular testing and doubt clearing sessions to ensure you're thoroughly prepared.",
    whatYouLearn: [
      "Principles and Practices of Accounting",
      "Business Laws and Business Correspondence",
      "Business Mathematics, Logical Reasoning & Statistics",
      "Business Economics and Commercial Knowledge",
    ],
    outcomes: [
      "CA Foundation qualification",
      "Registration for CA Intermediate",
      "Strong base in accounting and law",
      "Analytical thinking and problem-solving skills",
    ],
    tip: "Focus on Accounting and Mathematics — these are the highest-scoring papers if prepared well.",
  },
  {
    icon: <FaAward />,
    title: "CA/CMA Intermediate",
    duration: "10-16 Months",
    age: "19-21 years",
    color: "from-accent to-primary-light",
    description:
      "The Intermediate level takes you deeper into professional subjects across two groups with 8 papers total. This is where specialization begins — you'll study advanced accounting, taxation, auditing, and more. Practical training through articleship begins during this phase.",
    whatYouLearn: [
      "Advanced Accounting and Financial Reporting",
      "Corporate and Other Laws",
      "Cost & Management Accounting",
      "Taxation (Direct & Indirect)",
      "Auditing and Assurance",
      "Enterprise Information Systems & Strategic Management",
      "Financial Management & Economics",
    ],
    outcomes: [
      "CA Intermediate qualification",
      "Articleship commencement (3 years)",
      "Deep expertise in accounting and taxation",
      "Professional work experience begins",
    ],
    tip: "Many students prefer taking one group at a time for better preparation. Plan your strategy based on your strengths.",
  },
  {
    icon: <FaCrown />,
    title: "CA/CMA Final",
    duration: "12 Months",
    age: "21-24 years",
    color: "from-gold to-yellow-500",
    description:
      "The final frontier of your CA journey. This level demands mastery of advanced concepts, strategic thinking, and the ability to solve complex, multi-dimensional problems. Our rank-oriented preparation ensures you don't just pass — you excel.",
    whatYouLearn: [
      "Financial Reporting (Ind AS)",
      "Strategic Financial Management",
      "Advanced Auditing & Professional Ethics",
      "Corporate & Economic Laws",
      "Strategic Cost Management",
      "Direct & Indirect Tax Laws",
      "Elective Paper (specialization)",
    ],
    outcomes: [
      "CA/CMA qualification achieved",
      "Membership of ICAI/ICMAI",
      "Ready for professional practice or employment",
      "Access to top career opportunities",
    ],
    tip: "The key to CA Final is consistent practice and understanding of application. Theory alone won't get you through.",
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Career",
    duration: "Lifetime",
    age: "24+ years",
    color: "from-green-500 to-emerald-600",
    description:
      "You've made it! As a qualified CA/CMA, the world is your oyster. Choose from diverse career paths — Big 4 firms, investment banking, corporate finance, independent practice, government service, or entrepreneurship. Your qualification opens doors worldwide.",
    whatYouLearn: [
      "Continuous professional development",
      "Specialization in chosen domain",
      "Industry-specific knowledge",
      "Leadership and management skills",
    ],
    outcomes: [
      "Prestigious professional qualification",
      "Lucrative career opportunities",
      "Global recognition and mobility",
      "Potential to earn ₹10 LPA to ₹1 Cr+",
    ],
    tip: "Never stop learning. The most successful CAs are those who continuously update their knowledge and skills.",
  },
];

export default function StudentJourneyClient() {
  const [activeStep, setActiveStep] = useState(0);
  const crumbs = [{ label: "Home", href: "/" }, { label: "Student Journey" }];

  return (
    <PageLayout>
      <PageHeader
        tag="Your Path to Success"
        title="The Complete CA Journey"
        description="From Foundation to becoming a qualified Chartered Accountant — every step, explained."
      />
      <Breadcrumbs items={crumbs} />

      {/* Interactive Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop vertical timeline */}
          <div className="relative">
            {journey.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="mb-16 last:mb-0"
              >
                <div
                  className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} items-start gap-8 cursor-pointer`}
                  onClick={() => setActiveStep(i)}
                >
                  {/* Step indicator */}
                  <div className="lg:w-1/2 flex lg:justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`bg-gradient-to-br ${step.color} rounded-2xl p-6 md:p-8 text-white max-w-md w-full shadow-lg ${
                        activeStep === i ? "ring-4 ring-gold/50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-xs text-white/70 uppercase tracking-wider">Step {i + 1}</div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <div className="flex gap-4 mb-4 text-sm text-white/80">
                        <span className="flex items-center gap-1"><FaClock /> {step.duration}</span>
                        <span>Age: {step.age}</span>
                      </div>
                      <p className="text-white/90 leading-relaxed text-sm">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Details panel */}
                  <div className="lg:w-1/2">
                    {activeStep === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-gray-100"
                      >
                        <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                          <FaBookOpen className="text-accent" /> What You&apos;ll Learn
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {step.whatYouLearn.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                              <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                          <FaAward className="text-gold" /> Outcomes
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {step.outcomes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                              <FaCheckCircle className="text-primary mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gold/10 rounded-xl p-4 flex items-start gap-3">
                          <FaLightbulb className="text-gold mt-0.5 shrink-0" />
                          <p className="text-sm text-primary font-medium">{step.tip}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {i < journey.length - 1 && (
                  <div className="flex justify-center my-6">
                    <FaArrowDown className="text-2xl text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration overview */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Total Journey Duration</h2>
          <p className="text-blue-200 mb-8">From Class 11 to becoming a qualified CA — approximately 5-7 years</p>
          <div className="flex flex-wrap justify-center gap-4">
            {journey.slice(0, 4).map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
                  {step.title.split("(")[0].trim()}: {step.duration}
                </span>
                {i < 3 && <FaArrowRight className="text-gold" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAForm
        heading="Ready to Begin Your Journey?"
        subheading="Book a free counseling session and let us plan your path to success."
      />
    </PageLayout>
  );
}
