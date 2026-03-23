"use client";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PageLayout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
