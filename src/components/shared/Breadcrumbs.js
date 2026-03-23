"use client";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <FaChevronRight className="text-xs text-gray-400" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
