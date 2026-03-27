import TechnicalHealthClient from "./TechnicalHealthClient";

export const metadata = {
  title: "Technical Health Check",
  description: "Technical SEO and site health diagnostics for Vyasa Institute.",
  robots: { index: false, follow: false },
};

export default function TechnicalHealthPage() {
  return <TechnicalHealthClient />;
}
