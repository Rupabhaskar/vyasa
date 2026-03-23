"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCopy, FaCheck, FaLink, FaImage } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const suggestedAnchors = [
  "Vyasas Studies",
  "CA coaching Vijayawada",
  "best CA institute India",
  "CA & CMA preparatory institute",
  "Vyasas Studies – CA coaching",
];

const htmlSnippets = [
  {
    name: "Text link",
    code: '<a href="https://vyasasstudies.com" target="_blank" rel="noopener">Vyasas Studies</a>',
  },
  {
    name: "Text link with title",
    code: '<a href="https://vyasasstudies.com" title="CA & CMA Coaching - Vyasas Studies" target="_blank" rel="noopener">Vyasas Studies</a>',
  },
  {
    name: "Image + link",
    code: '<a href="https://vyasasstudies.com" target="_blank" rel="noopener"><img src="https://vyasasstudies.com/logo.png" alt="Vyasas Studies - CA & CMA Coaching" width="200" /></a>',
  },
];

export default function LinkToUsClient() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const crumbs = [{ label: "Home", href: "/" }, { label: "Link to Us" }];

  return (
    <PageLayout>
      <PageHeader
        tag="Partnership & Media"
        title="Link to Us"
        description="Add a link to Vyasas Studies on your website. Get logos, suggested anchor text, and ready-to-use HTML snippets."
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted mb-8">
              We welcome links from education websites, career guides, and partners. Linking helps students discover quality CA & CMA coaching. Use any of the resources below.
            </p>

            <div className="space-y-12">
              {/* Suggested anchor text */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaLink className="text-gold" />
                  Suggested Anchor Text
                </h2>
                <ul className="space-y-2 text-muted">
                  {suggestedAnchors.map((anchor) => (
                    <li key={anchor} className="flex items-center justify-between gap-4 p-3 bg-slate-50 rounded-xl">
                      <code className="text-sm text-primary-dark">{anchor}</code>
                      <button
                        onClick={() => copyToClipboard(anchor, `anchor-${anchor}`)}
                        className="p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors"
                        title="Copy"
                      >
                        {copied === `anchor-${anchor}` ? <FaCheck className="text-green-600" /> : <FaCopy />}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* HTML snippets */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaCopy className="text-gold" />
                  HTML Snippets
                </h2>
                <div className="space-y-4">
                  {htmlSnippets.map((snippet) => (
                    <div key={snippet.name} className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-slate-50 px-4 py-2 text-sm font-medium text-primary-dark border-b border-gray-200">
                        {snippet.name}
                      </div>
                      <div className="p-4 flex items-center justify-between gap-4 bg-white">
                        <code className="text-sm text-muted break-all flex-1">{snippet.code}</code>
                        <button
                          onClick={() => copyToClipboard(snippet.code, `snippet-${snippet.name}`)}
                          className="shrink-0 p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors"
                          title="Copy"
                        >
                          {copied === `snippet-${snippet.name}` ? <FaCheck className="text-green-600" /> : <FaCopy />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Logo */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FaImage className="text-gold" />
                  Logo
                </h2>
                <div className="flex flex-wrap gap-6 items-center p-6 bg-slate-50 rounded-2xl">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <Image src="/logo.png" alt="Vyasas Studies" width={200} height={50} className="h-12 w-auto" />
                    <p className="text-xs text-muted mt-2">Light background</p>
                  </div>
                  <p className="text-sm text-muted">
                    Direct URL: <code className="bg-white px-2 py-1 rounded">https://vyasasstudies.com/logo.png</code>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-primary-dark font-medium mb-2">Partnership or media inquiry?</p>
              <Link href="/#contact" className="text-gold hover:underline font-sans">
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
