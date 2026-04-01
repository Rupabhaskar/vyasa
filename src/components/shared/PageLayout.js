"use client";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContentProtection from "@/components/ContentProtection";

export default function PageLayout({ children }) {
  return (
    <>
      <ContentProtection />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 overflow-x-clip protected-content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
