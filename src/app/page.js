"use client";
import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsBar from "@/components/StatsBar";
import TrustedBySection from "@/components/TrustedBySection";
import ResultsSection from "@/components/ResultsSection";
import JourneySection from "@/components/JourneySection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FacultySection from "@/components/FacultySection";
import ParentsTrustSection from "@/components/ParentsTrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CampusSection from "@/components/CampusSection";
import DigitalSection from "@/components/DigitalSection";
import AdmissionSection from "@/components/AdmissionSection";
import LeadCapture from "@/components/LeadCapture";
import WelcomeLeadModal from "@/components/WelcomeLeadModal";
import HomeEntryFlow from "@/components/HomeEntryFlow";

export default function Home() {
  return (
    <PageLayout>
      <HomeEntryFlow>
        <WelcomeLeadModal />
        <HeroSection />
        <AboutSection />
        {/* <StatsBar /> */}
        <TrustedBySection />
        {/* <ResultsSection /> */}
        <JourneySection />
        <CoursesSection />
        <WhyChooseSection />
        <FacultySection />
        <ParentsTrustSection />
        <TestimonialsSection />
        <CampusSection />
        <DigitalSection />
        <AdmissionSection />
        <LeadCapture />
      </HomeEntryFlow>
    </PageLayout>
  );
}
