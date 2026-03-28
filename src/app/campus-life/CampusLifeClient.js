"use client";
import { motion } from "framer-motion";
import {
  FaChalkboard, FaBookReader, FaLaptop, FaUsers, FaBed, FaCoffee,
  FaWifi, FaShieldAlt, FaClock, FaUtensils, FaDumbbell, FaTv,
} from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";

const facilities = [
  {
    icon: <FaChalkboard />,
    title: "Smart Classrooms",
    desc: "15+ digitally-equipped classrooms with projectors, smart boards, and comfortable seating for 40-60 students each.",
    color: "from-primary to-primary-light",
  },
  {
    icon: <FaBookReader />,
    title: "Digital Library",
    desc: "5,000+ reference books, ICAI publications, journals, and digital access to online databases and study resources.",
    color: "from-primary to-primary-light",
  },
  {
    icon: <FaLaptop />,
    title: "Computer Lab",
    desc: "50+ computers with high-speed internet for online test practice, research, and digital learning activities.",
    color: "from-accent to-primary-light",
  },
  {
    icon: <FaUsers />,
    title: "Seminar Hall",
    desc: "200-seat auditorium for guest lectures, workshops, orientation sessions, and student events.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: <FaCoffee />,
    title: "Study Rooms",
    desc: "Air-conditioned, quiet study rooms open from 6 AM to 10 PM for focused self-study and revision.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: <FaDumbbell />,
    title: "Recreation Zone",
    desc: "Indoor games, meditation room, and outdoor seating area for refreshing breaks between study sessions.",
    color: "from-orange-500 to-orange-600",
  },
];

const hostelFeatures = [
  { icon: <FaBed />, title: "Comfortable Rooms", desc: "Well-furnished double and triple sharing rooms with study desks, wardrobes, and good ventilation." },
  { icon: <FaUtensils />, title: "Nutritious Meals", desc: "Three meals daily plus evening snacks. Hygienic kitchen with varied vegetarian and non-vegetarian menu." },
  { icon: <FaWifi />, title: "Wi-Fi Enabled", desc: "High-speed internet across hostel premises for online learning and research." },
  { icon: <FaShieldAlt />, title: "24/7 Security", desc: "CCTV surveillance, security personnel, and biometric access for complete safety." },
  { icon: <FaClock />, title: "Supervised Study", desc: "Dedicated study hours from 6-8 AM and 7-10 PM under faculty supervision." },
  { icon: <FaTv />, title: "Common Room", desc: "TV room, newspapers, and recreational facilities for healthy breaks." },
];

const dailySchedule = [
  { time: "6:00 AM", activity: "Wake Up & Morning Prep", type: "personal" },
  { time: "6:30 - 8:00 AM", activity: "Morning Self-Study / Supervised Study", type: "study" },
  { time: "8:00 - 8:30 AM", activity: "Breakfast", type: "break" },
  { time: "8:30 - 12:30 PM", activity: "Board Subjects / CA Coaching Classes", type: "class" },
  { time: "12:30 - 1:30 PM", activity: "Lunch Break", type: "break" },
  { time: "1:30 - 4:30 PM", activity: "Afternoon Classes / Lab Sessions", type: "class" },
  { time: "4:30 - 5:00 PM", activity: "Tea Break & Recreation", type: "break" },
  { time: "5:00 - 7:00 PM", activity: "CA Foundation / Practice Sessions", type: "class" },
  { time: "7:00 - 7:30 PM", activity: "Dinner", type: "break" },
  { time: "7:30 - 10:00 PM", activity: "Evening Self-Study / Doubt Clearing", type: "study" },
  { time: "10:00 PM", activity: "Lights Out", type: "personal" },
];

export default function CampusLifeClient() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Campus Life" }];
  const typeColors = {
    class: "bg-primary/10 text-primary border-primary/20",
    study: "bg-gold/10 text-primary-dark border-gold/20",
    break: "bg-green-50 text-green-700 border-green-200",
    personal: "bg-gray-50 text-gray-600 border-gray-200",
  };

  return (
    <PageLayout>
      <PageHeader
        tag="World-Class Infrastructure"
        title="Campus Life at Vyasa Institute"
        description="A purpose-built learning environment designed to help you focus, grow, and succeed."
      />
      <Breadcrumbs items={crumbs} />

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">Our Facilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className={`h-32 bg-gradient-to-br ${fac.color} flex items-center justify-center text-white text-4xl`}>
                  {fac.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{fac.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-gold-light font-semibold text-sm uppercase tracking-widest">Residential Program</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Hostel Facility</h2>
            <p className="text-emerald-100 mt-3 max-w-2xl mx-auto">Safe, comfortable, and disciplined living for outstation students — just minutes from the campus.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostelFeatures.map((hf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold text-xl mb-4">{hf.icon}</div>
                <h3 className="font-bold text-lg mb-2">{hf.title}</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">{hf.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">A Day at Vyasas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">Daily Schedule</h2>
            <p className="text-muted mt-3">A structured day designed for maximum productivity and healthy balance.</p>
          </motion.div>
          <div className="space-y-3">
            {dailySchedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`flex items-center gap-4 rounded-xl border p-4 ${typeColors[item.type]}`}
              >
                <span className="font-mono font-bold text-sm w-32 shrink-0">{item.time}</span>
                <span className="font-medium text-sm">{item.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAForm
        heading="Enquire About Campus & Hostel"
        subheading="Want to visit our campus or learn about hostel availability? Get in touch."
      />
    </PageLayout>
  );
}
