"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaSpinner,
  FaSitemap,
  FaRobot,
  FaGlobe,
  FaShieldAlt,
  FaLink,
} from "react-icons/fa";

const DEFAULT_BASE = "https://vyasasstudies.com";

const getChecks = (base) => [
  {
    id: "sitemap",
    label: "Sitemap",
    url: `${base}/sitemap.xml`,
    icon: FaSitemap,
    validator: (res) => res.ok,
  },
  {
    id: "robots",
    label: "Robots.txt",
    url: `${base}/robots.txt`,
    icon: FaRobot,
    validator: (res) => res.ok,
  },
  {
    id: "home",
    label: "Homepage",
    url: base,
    icon: FaGlobe,
    validator: (res) => res.ok,
  },
  {
    id: "blog",
    label: "Blog",
    url: `${base}/blog`,
    icon: FaLink,
    validator: (res) => res.ok,
  },
  {
    id: "courses",
    label: "Courses",
    url: `${base}/courses`,
    icon: FaLink,
    validator: (res) => res.ok,
  },
];

export default function TechnicalHealthClient() {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : DEFAULT_BASE;
  const checks = getChecks(baseUrl);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(true);
  const [metaCheck, setMetaCheck] = useState(null);

  useEffect(() => {
    const runChecks = async () => {
      const newResults = {};
      for (const check of checks) {
        try {
          const res = await fetch(check.url, { method: "HEAD", cache: "no-store" });
          newResults[check.id] = check.validator(res);
        } catch {
          newResults[check.id] = false;
        }
      }
      setResults(newResults);

      // Client-side meta check
      setMetaCheck({
        hasTitle: !!document?.title,
        hasViewport: !!document?.querySelector('meta[name="viewport"]'),
      });
      setLoading(false);
    };

    runChecks();
  }, []);

  const passed = Object.values(results).filter(Boolean).length;
  const total = checks.length;
  const score = total > 0 ? Math.round((passed / total) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-primary hover:text-gold text-sm font-medium">
            ← Back to Vyasa Institute
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary-dark to-primary px-8 py-10 text-white">
            <h1 className="text-2xl font-bold font-heading flex items-center gap-2">
              <FaShieldAlt />
              Technical Health Check
            </h1>
            <p className="text-emerald-100 mt-2 text-sm">
              Quick diagnostics for sitemap, robots, and key pages. Run this to verify technical SEO.
            </p>
          </div>

          <div className="p-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <FaSpinner className="text-4xl text-gold animate-spin" />
                <p className="text-muted">Running checks...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8 p-4 bg-slate-50 rounded-xl">
                  <span className="font-medium text-primary-dark">Overall Score</span>
                  <span
                    className={`text-2xl font-bold ${
                      score >= 80 ? "text-green-600" : score >= 50 ? "text-amber-600" : "text-red-600"
                    }`}
                  >
                    {score}%
                  </span>
                </div>

                <div className="space-y-4">
                  {checks.map((check) => (
                    <div
                      key={check.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <check.icon className="text-primary/60" />
                        <div>
                          <p className="font-medium text-primary-dark">{check.label}</p>
                          <p className="text-xs text-muted truncate max-w-[200px]">{check.url}</p>
                        </div>
                      </div>
                      {results[check.id] === true ? (
                        <FaCheckCircle className="text-green-600 text-xl shrink-0" />
                      ) : results[check.id] === false ? (
                        <FaTimesCircle className="text-red-500 text-xl shrink-0" />
                      ) : (
                        <FaExclamationTriangle className="text-amber-500 text-xl shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <h3 className="font-semibold text-primary-dark mb-2">SEO Checklist</h3>
                  <ul className="text-sm text-muted space-y-1.5">
                    <li>✓ Sitemap at /sitemap.xml</li>
                    <li>✓ Robots.txt at /robots.txt</li>
                    <li>✓ Meta tags (title, description) on all pages</li>
                    <li>✓ Canonical URLs</li>
                    <li>✓ Structured data (JSON-LD)</li>
                    <li>✓ Custom 404 page</li>
                    <li>✓ Mobile-responsive</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted mt-6">
          This page is noindexed. For external audits, use Google Search Console or tools like Screaming Frog.
        </p>
      </div>
    </div>
  );
}
