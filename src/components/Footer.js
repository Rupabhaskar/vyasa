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
  { label: "Campus Life", href: "/campus-life" },
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations" },
  { label: "Link to Us", href: "/link-to-us" },
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
                className="h-24 w-auto object-contain object-left brightness-0 invert"
              />
            </Link>
            <p className="text-emerald-100/30 text-[13px] leading-relaxed mb-6 font-sans">
              {"India\u2019s premier preparatory institute for CA & CMA. Building future leaders since 2010."}
            </p>
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-emerald-100/30 hover:bg-gold/10 hover:text-gold hover:border-gold/15 transition-all duration-300 text-sm">
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
                    className="text-emerald-100/30 hover:text-gold transition-colors text-[13px] font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admin/login" className="text-emerald-100/30 bg-gold/10 rounded-md p-2 hover:text-gold transition-colors text-[13px] font-sans">
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
                  <Link href={c.href} className="text-emerald-100/30 hover:text-gold transition-colors text-[13px] font-sans">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-[15px] mb-5 text-white/80">Contact</h3>
            <div className="space-y-2.5 text-emerald-100/30 text-[13px] font-sans mb-6">
              <p>Vijayawada, AP, India</p>
              <p>+91 9133660500</p>
              <p>vyasaprofessionals@gmail.com</p>
              <p className="text-emerald-200/20 text-[11px]">Mon - Sat: 8:00 AM - 8:00 PM</p>
            </div>
            <h4 className="font-sans font-semibold text-[11px] mb-3 text-white/40 uppercase tracking-wider">Our Centers</h4>
            <ul className="space-y-2">
              <li><Link href="/locations/ca-coaching-in-vijayawada" className="text-emerald-100/30 hover:text-gold transition-colors text-[13px] font-sans">Vijayawada</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-200/20 text-[12px] font-sans">{"\u00A9"} 2026 Vyasa Institute. All rights reserved.</p>
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
