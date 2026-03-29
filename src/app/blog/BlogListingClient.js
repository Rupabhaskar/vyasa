"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaClock, FaUser, FaArrowRight, FaTag } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function BlogListingClient({ posts }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  return (
    <PageLayout>
      <PageHeader
        tag="Insights & Tips"
        title="Our Blog"
        description="Expert articles on CA & CMA preparation, career guidance, location guides (Vijayawada, AP, India), and strategies to help you succeed."
      />
      <Breadcrumbs items={crumbs} />

      {/* All posts */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all h-full overflow-hidden"
                >
                  <div className="h-3 bg-gradient-to-r from-primary to-gold" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary/5 text-primary text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                        <FaTag className="text-[10px]" /> {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-black transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
