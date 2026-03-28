"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUser, FaClock, FaCalendar, FaTag, FaArrowLeft } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";
import { ArticleSchema, BreadcrumbSchema } from "@/components/shared/SchemaMarkup";
import { blogPosts } from "@/data/blog-posts";

function renderMarkdown(content) {
  const lines = content.split("\n");
  const elements = [];
  let inList = false;
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc pl-6 space-y-2 mb-6 text-muted">
          {listItems.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-primary mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={i} className="text-xl font-bold text-primary mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- **") || line.startsWith("1. **")) {
      inList = true;
      const text = line
        .replace(/^[-\d]+\.\s*/, "")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      listItems.push(<span dangerouslySetInnerHTML={{ __html: text }} />);
    } else if (line.startsWith("- ")) {
      inList = true;
      listItems.push(line.replace(/^- /, ""));
    } else if (line.startsWith("|")) {
      flushList();
      // Skip table rows — simplified rendering
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      flushList();
      elements.push(
        <p key={i} className="italic text-muted mb-4">
          {line.replace(/^\*|\*$/g, "")}
        </p>
      );
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      const html = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p key={i} className="text-muted leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
  }
  flushList();
  return elements;
}

export default function BlogDetailClient({ post }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title.length > 40 ? post.title.slice(0, 40) + "…" : post.title },
  ];

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageLayout>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-100 hover:text-white text-sm mb-6 transition-colors">
            <FaArrowLeft /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gold/20 text-gold-light text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            {post.title}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-6 text-emerald-100 text-sm">
            <span className="flex items-center gap-2"><FaUser /> {post.author}</span>
            <span className="flex items-center gap-2"><FaCalendar /> {post.date}</span>
            <span className="flex items-center gap-2"><FaClock /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <Breadcrumbs items={crumbs} />

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-lg">{renderMarkdown(post.content)}</div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-3 flex-wrap">
            <FaTag className="text-muted" />
            {post.tags.map((tag) => (
              <span key={tag} className="bg-primary/5 text-primary text-sm px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((rp, i) => (
                <motion.div key={rp.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/blog/${rp.slug}`} className="group block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all">
                    <span className="text-xs text-muted">{rp.category}</span>
                    <h3 className="font-bold text-primary mt-1 mb-2 group-hover:text-accent transition-colors line-clamp-2">{rp.title}</h3>
                    <p className="text-muted text-sm line-clamp-2">{rp.excerpt}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAForm heading="Have Questions About Your CA Journey?" subheading="Our experts are here to guide you. Book a free counseling session today." />
    </PageLayout>
  );
}
