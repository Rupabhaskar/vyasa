"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/results" },
  { label: "Student Journey", href: "/student-journey" },
  { label: "Blog", href: "/blog" },
];

const courseLinks = [
  { label: "CA Foundation", href: "/courses/ca-foundation" },
  { label: "CA Intermediate", href: "/courses/ca-intermediate" },
  { label: "CA Final", href: "/courses/ca-final" },
  { label: "CMA Course", href: "/courses/cma-course" },
];

const socials = [
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaYoutube />, href: "#", label: "YouTube" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
];

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-5" onClick={(e) => scrollToTopIfHome(e, pathname)}>
              <Image
                src="/logo.png"
                alt="Vyasa Institute - Institute for Professional Courses"
                width={280}
                height={74}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="text-emerald-100/30 text-[13px] leading-relaxed mb-6 font-sans">
              {"India\u2019s premier preparatory institute for CA & CMA. Building future leaders since 2010."}
            </p>
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[#1e2b63] border border-[#2f3f97] flex items-center justify-center text-emerald-100/80 hover:bg-gold hover:text-primary-dark hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(255,127,80,0.35)] transition-all duration-300 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[15px] mb-5 text-white/80">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    onClick={(e) => link.href === "/" && scrollToTopIfHome(e, pathname)}
                    className="text-emerald-100/80 hover:text-gold hover:translate-x-0.5 transition-all duration-300 text-[13px] font-sans inline-flex"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/admin/login"
                  className="inline-flex items-center justify-center rounded-md px-3 py-2 bg-gold text-primary-dark font-semibold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,127,80,0.35)] transition-all duration-300 text-[13px] font-sans"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[15px] mb-5 text-white/80">Courses</h3>
            <ul className="space-y-2.5">
              {courseLinks.map((c, i) => (
                <li key={i}>
                  <Link href={c.href} className="text-emerald-100/80 hover:text-gold hover:translate-x-0.5 inline-flex transition-all duration-300 text-[13px] font-sans">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[15px] mb-5 text-white/80">Contact</h3>
            <div className="space-y-2.5 text-emerald-100/70 text-[13px] font-sans mb-6">
              <p>Vijayawada, AP, India</p>
              <p>
                <a
                  href="tel:+919133660500"
                  className="hover:text-gold hover:translate-x-0.5 inline-flex transition-all duration-300"
                >
                  +91 9133660500
                </a>
              </p>
              <p>
                <a
                  href="mailto:vyasaprofessionals@gmail.com"
                  className="hover:text-gold hover:translate-x-0.5 inline-flex transition-all duration-300"
                >
                  vyasaprofessionals@gmail.com
                </a>
              </p>
              <p className="text-emerald-200/20 text-[11px]">Mon - Sat: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-200/20 text-[12px] font-sans">{"\u00A9"} {currentYear} Vyasa Institute. All rights reserved.</p>
          <p className="text-emerald-200/20 text-[12px] font-sans">Building future Chartered Accountants since 2010</p>
        </div>
      </div>
    </footer>
  );
}

function scrollToTopIfHome(e, pathname) {
  if (pathname === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
