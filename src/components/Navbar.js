"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaArrowRight, FaCalculator, FaFileAlt } from "react-icons/fa";

const courseItems = [
  { label: "CA", href: "/courses", icon: <FaCalculator /> },
  { label: "CMA Course", href: "/courses/cma-course", icon: <FaFileAlt /> },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Course", href: "#", mega: "courses" },
  { label: "Upcoming Batches", href: "/upcoming-batches" },
  { label: "Blog", href: "/blog" },
  { label: "Our Team", href: "/#faculty" },
  { label: "Our Gallery", href: "/our-gallery" },
  { label: "Contact", href: "/#contact" },
];

function NavLink({ link, pathname, onHoverStart, onHoverEnd, isOpen, pathnameStartsWithCourses, renderDropdown }) {
  const isActive = link.mega === "courses" ? pathnameStartsWithCourses : (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href) || (link.href === "/#contact" && pathname === "/"));
  const hasMega = !!link.mega;

  return (
    <div
      className="relative"
      onMouseEnter={() => hasMega && onHoverStart(link.mega)}
      onMouseLeave={() => hasMega && onHoverEnd()}
    >
      {hasMega ? (
        <button
          type="button"
          className={`nav-link-item group relative flex items-center gap-1.5 py-3 px-3 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-xl cursor-pointer ${
            isActive ? "text-primary-dark" : "text-gray-600 hover:text-primary-dark hover:bg-primary/[0.05]"
          }`}
        >
          {link.label}
          <FaChevronDown
            className={`text-[8px] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            } ${isActive ? "text-primary-dark" : "text-gray-400 group-hover:text-primary-dark"}`}
          />
          {isActive && (
            <motion.div
              layoutId="nav-active"
              className="absolute -bottom-0.5 left-2 right-2 h-[2px] bg-gradient-to-r from-gold to-gold-light rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ) : (
        <Link
          href={link.href}
          onClick={(e) => {
            if (link.href === "/" && pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={`nav-link-item group relative flex items-center py-3 px-3 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-xl ${
            isActive ? "text-primary-dark" : "text-gray-600 hover:text-primary-dark hover:bg-primary/[0.05]"
          }`}
        >
          {link.label}
          {isActive && (
            <motion.div
              layoutId="nav-active"
              className="absolute -bottom-0.5 left-2 right-2 h-[2px] bg-gradient-to-r from-gold to-gold-light rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </Link>
      )}
      {hasMega && link.mega === "courses" && renderDropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-full pt-2 z-50"
              onMouseEnter={() => onHoverStart(link.mega)}
              onMouseLeave={onHoverEnd}
            >
              {renderDropdown()}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function CourseDropdown({ pathname }) {
  return (
    <div className="relative bg-white rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden w-[240px]">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/40 mb-2 px-1">Our Programs</p>
        <div className="space-y-0.5">
          {courseItems.map((item) => {
            const isActive =
              item.href === "/courses/cma-course"
                ? pathname.startsWith("/courses/cma-course")
                : item.label === "CA"
                ? pathname === "/courses" || pathname.startsWith("/courses/ca-")
                : false;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group/item flex items-center gap-2.5 rounded-lg px-3 py-2.5 transition-all duration-200 ${
                  isActive ? "bg-primary-dark/5 ring-1 ring-primary-dark/10" : "hover:bg-gray-50/90"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs shrink-0 transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-br from-primary-dark to-primary text-white"
                      : "bg-gray-100 text-gray-500 group-hover/item:bg-primary-dark/10 group-hover/item:text-primary-dark"
                  }`}
                >
                  {item.icon}
                </div>
                <span className={`text-[13px] font-semibold flex-1 ${isActive ? "text-primary-dark" : "text-gray-800 group-hover/item:text-primary-dark"}`}>
                  {item.label}
                </span>
                <FaArrowRight className={`text-[9px] transition-all ${isActive ? "text-primary-dark/50" : "text-gray-300 group-hover/item:text-primary-dark group-hover/item:translate-x-0.5"}`} />
              </Link>
            );
          })}
        </div>
        <Link
          href="/#contact"
          className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/15 text-primary-dark text-[12px] font-semibold hover:from-gold/15 hover:to-gold/10 hover:border-gold/25 transition-all duration-200"
        >
          Book Free Counseling
          <FaArrowRight className="text-[8px]" />
        </Link>
      </div>
    </div>
  );
}

const SCROLL_THRESHOLD = 80;
const NAVBAR_HEIGHT = 130;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();
  const closeTimer = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < SCROLL_THRESHOLD) {
        setNavbarVisible(true);
      } else if (y > lastScrollY.current) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
    setMobileExpanded(null);
  }, [pathname]);

  const handleHoverStart = useCallback((mega) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(mega);
  }, []);

  const handleHoverEnd = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  }, []);

  return (
    <>
    <motion.div
      className="fixed top-0 left-0 right-[-100px] z-50"
      initial={{ y: 0 }}
      animate={{ y: navbarVisible ? 0 : -NAVBAR_HEIGHT }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top banner
      <div className="bg-gradient-to-r from-primary-dark via-primary-dark to-primary-dark text-white text-center py-2.5 text-[11px] md:text-xs font-medium tracking-[0.15em] uppercase relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)] animate-shimmer" />
        <div className="relative z-10 flex items-center justify-center gap-3">
          <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,229,222,0.55)]" />
          Admissions Open 2026-27
          <span className="text-white/30">|</span>
          Limited Seats
          <span className="text-white/30">|</span>
          <Link href="/landing/ca-coaching-admissions-2026" className="font-bold text-gold hover:text-gold-light transition-colors underline underline-offset-2 decoration-gold/60 hover:decoration-gold">
            Apply Now
          </Link>
        </div>
      </div> */}

      {/* Top marquee banner */}
<div className="bg-primary-dark text-white text-[12px] md:text-xs font-medium uppercase overflow-hidden">

<div className="marquee">
  <div className="track">

    {/* Item */}
    <div className="item ">
      <span className="new-star">NEW</span>
      <span>Admissions Open</span>

      <span className="divider">|</span>
      <span>Limited Seats</span>

      <span className="divider">|</span>

      <Link
        href="/landing/ca-coaching-admissions-2026"
        className="apply"
      >
        Apply Now
      </Link>

      <span className="new-star ml-[500px]">NEW</span>
      <span>Admissions Open</span>

      <span className="divider">|</span>
      <span>Limited Seats</span>

      <span className="divider">|</span>

      <Link
        href="/landing/ca-coaching-admissions-2026"
        className="apply"
      >
        Apply Now
      </Link>
    </div>

    {/* Duplicate for smooth infinite scroll */}
    <div className="item">
      <span className="new-star">NEW</span>
      <span>Admissions Open</span>

      <span className="divider">|</span>
      <span>Limited Seats</span>

      <span className="divider">|</span>

      <Link
        href="/landing/ca-coaching-admissions-2026"
        className="apply"
      >
        Apply Now
      </Link>
    </div>

  </div>
</div>

</div>

      {/* Main navbar */}
      <motion.nav
        className={`sticky top-0 transition-all duration-500 ${
          scrolled
            ? "navbar-blur shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-gray-200/80"
            : "bg-background/98 backdrop-blur-md border-b border-gray-200/60"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 h-[70px] md:h-[78px]">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center shrink-0 h-full min-h-0"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative flex items-center h-full"
            >
              <Image
                src="/logo.png"
                alt="Vyasa Institute - Institute for Professional Courses"
                width={280}
                height={64}
                className="h-full w-auto object-contain object-left"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                link={link}
                pathname={pathname}
                pathnameStartsWithCourses={pathname.startsWith("/courses")}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                isOpen={openMega === link.mega}
                renderDropdown={() => <CourseDropdown pathname={pathname} />}
              />
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/landing/ca-coaching-admissions-2026"
              className="hidden lg:inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light text-primary-dark pl-6 pr-5 py-3 rounded-full text-[13px] font-bold shadow-[0_4px_16px_rgba(158,191,176,0.45)] hover:shadow-[0_8px_28px_rgba(158,191,176,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              Apply Now
              <span className="w-6 h-6 rounded-full bg-primary-dark/10 flex items-center justify-center group-hover:bg-primary-dark/15 transition-colors">
                <FaArrowRight className="text-[10px]" />
              </span>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-primary-dark transition-colors border border-gray-100"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <HiX className="text-xl" />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <HiMenu className="text-xl" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden bg-background border-t border-gray-200 overflow-hidden"
            >
              <div className="py-4 px-6 max-h-[calc(100vh-140px)] overflow-y-auto">
                {navLinks.map((link, idx) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  const hasMega = !!link.mega;
                  const isExpanded = mobileExpanded === link.mega;

                  return (
                    <motion.div key={link.label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.03, duration: 0.25 }}>
                      <div className="flex items-center">
                        {hasMega ? (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.mega)}
                            className={`flex-1 py-4 text-left text-[15px] font-semibold transition-colors rounded-xl px-4 -mx-4 ${isActive ? "text-primary-dark bg-primary/5" : "text-gray-700"}`}
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={(e) => {
                              if (link.href === "/" && pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }
                            }}
                            className={`flex-1 py-4 text-[15px] font-semibold transition-colors rounded-xl px-4 -mx-4 ${isActive ? "text-primary-dark bg-primary/5" : "text-gray-700"}`}
                          >
                            {link.label}
                          </Link>
                        )}
                        {hasMega && (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.mega)}
                            className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center"
                          >
                            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <FaChevronDown className="text-[10px] text-gray-500" />
                            </motion.span>
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {hasMega && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-5 pb-4 ml-3 border-l-2 border-gold/20 space-y-1">
                              {courseItems.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                                    pathname === item.href ? "bg-primary/5 text-primary-dark" : "text-gray-600 hover:bg-gray-50"
                                  }`}
                                >
                                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm ${
                                    pathname === item.href ? "bg-primary-dark text-white" : "bg-gray-100 text-gray-500"
                                  }`}>
                                    {item.icon}
                                  </div>
                                  <span className="font-medium">{item.label}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="pt-6 mt-4 border-t border-gray-100">
                  <Link href="/landing/ca-coaching-admissions-2026" className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary-dark py-4 rounded-xl text-[14px] font-bold shadow-[0_4px_20px_rgba(158,191,176,0.4)] hover:shadow-[0_6px_24px_rgba(158,191,176,0.5)] transition-all">
                    Apply Now
                    <FaArrowRight className="text-xs" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
    <div style={{ height: NAVBAR_HEIGHT }} aria-hidden="true" />
    </>
  );
}
