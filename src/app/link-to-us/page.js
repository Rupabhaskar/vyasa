import PageLayout from "@/components/shared/PageLayout";
import LinkToUsClient from "./LinkToUsClient";

export const metadata = {
  title: "Link to Us | Media Kit & Partnership – Vyasas Studies",
  description:
    "Link to Vyasas Studies. Get logos, suggested anchor text, and HTML snippets for your website. India's premier CA & CMA preparatory institute.",
  robots: { index: true, follow: true },
};

export default function LinkToUsPage() {
  return <LinkToUsClient />;
}
