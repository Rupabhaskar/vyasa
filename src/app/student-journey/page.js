import StudentJourneyClient from "./StudentJourneyClient";

export const metadata = {
  title: "Student Journey | CA Path from Foundation to Final – Vyasa Institute",
  description:
    "Understand the complete CA journey from Foundation to CA Final. Interactive timeline showing each step, duration, and what to expect at every level.",
  keywords: "CA student journey, CA path, how to become CA, CA levels, CA Foundation to Final, CA career path",
};

export default function StudentJourneyPage() {
  return <StudentJourneyClient />;
}
