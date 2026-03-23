"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaTrophy, FaUsers, FaChartLine, FaStar, FaMedal, FaQuoteLeft, FaFilter } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";
import { rankHolders, successStories, overallStats } from "@/data/results";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 125;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function ResultsPageClient() {
  const [filter, setFilter] = useState("All");
  const crumbs = [{ label: "Home", href: "/" }, { label: "Results" }];

  const exams = ["All", ...new Set(rankHolders.map((r) => r.exam.split(" ")[0] + " " + r.exam.split(" ")[1]))];
  const filtered = filter === "All" ? rankHolders : rankHolders.filter((r) => r.exam.startsWith(filter));

  return (
    <PageLayout>
      <PageHeader
        tag="Our Track Record"
        title="Results & Achievements"
        description="Consistently producing All India Rank holders and exceptional pass rates across CA and CMA examinations."
      />
      <Breadcrumbs items={crumbs} />

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaUsers />, value: overallStats.totalStudents, suffix: "+", label: "Students Trained", color: "text-primary" },
              { icon: <FaTrophy />, value: overallStats.totalRankers, suffix: "+", label: "AIR Rank Holders", color: "text-gold" },
              { icon: <FaChartLine />, value: overallStats.avgPassRate, suffix: "%", label: "Avg Pass Rate", color: "text-green-500" },
              { icon: <FaStar />, value: overallStats.yearsOfExcellence, suffix: "+", label: "Years of Excellence", color: "text-primary" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl ${stat.color} mb-3 flex justify-center`}>{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted mt-1 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rank Holders */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">All India Rank Holders</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Our students who have made us proud by securing top positions in national examinations.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {exams.map((e) => (
              <button
                key={e}
                onClick={() => setFilter(e)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === e
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-muted border border-gray-200 hover:border-primary/30"
                }`}
              >
                {e}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((holder, i) => (
              <motion.div
                key={holder.name + holder.attempt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/20 rounded-full -mr-6 -mt-6 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold text-gold border-2 border-gold/40 mb-3">
                      {holder.rank.split(" ")[1]}
                    </div>
                    <div className="text-gold-light font-bold text-lg">{holder.rank}</div>
                    <div className="text-blue-200 text-sm">{holder.exam} – {holder.attempt}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-primary text-lg mb-1">{holder.name}</h3>
                  <p className="text-gold text-sm font-medium mb-3">Score: {holder.score}</p>
                  <FaQuoteLeft className="text-primary/10 text-xl mb-2" />
                  <p className="text-muted text-sm leading-relaxed italic">&ldquo;{holder.quote}&rdquo;</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">Success Stories</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Real stories of transformation, perseverance, and achievement from our students.
          </p>
          <div className="space-y-8">
            {successStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {story.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">{story.title}</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="text-gold font-semibold">{story.exam}</span>
                      <span className="text-muted">{story.duration}</span>
                    </div>
                    <p className="text-muted leading-relaxed">{story.story}</p>
                    <p className="text-primary font-semibold mt-4">— {story.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAForm
        heading="Write Your Own Success Story"
        subheading="Join Vyasas Studies and become the next rank holder."
      />
    </PageLayout>
  );
}
