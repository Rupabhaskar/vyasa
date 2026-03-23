import Link from "next/link";
import { FaHome, FaSearch, FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Page Not Found (404)",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Navbar placeholder for consistency */}
      <header className="h-16 border-b border-gray-100 bg-white/80 backdrop-blur-sm" />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-primary/10 font-sans">404</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-4">
            Page Not Found
          </h1>
          <p className="text-muted text-lg mb-10 font-sans">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary-dark px-8 py-4 rounded-full font-bold font-sans shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <FaHome className="text-sm" />
              Back to Home
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary-dark px-8 py-4 rounded-full font-semibold font-sans hover:bg-primary/5 hover:border-primary/40 transition-all"
            >
              <FaSearch className="text-sm" />
              Explore Courses
            </Link>
          </div>
          <p className="mt-10 text-sm text-muted">
            Need help?{" "}
            <Link href="/#contact" className="text-gold hover:underline font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-100 text-center text-sm text-muted font-sans">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
          <FaArrowLeft className="text-xs" /> Vyasas Studies
        </Link>
      </footer>
    </div>
  );
}
