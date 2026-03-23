import { courses } from "@/data/courses";
import CoursesListingClient from "./CoursesListingClient";

export const metadata = {
  title: "Courses | CA, CMA & ACCA Coaching – Vyasas Studies",
  description:
    "Explore all courses at Vyasas Studies — CA Foundation, CA Intermediate, CA Final, CMA, ACCA (Applied Knowledge, Applied Skills, Strategic Professional), and Online Classes. India\u2019s premier preparatory institute.",
  keywords:
    "Vyasas Studies courses, CA coaching, CMA courses, ACCA course, Applied Knowledge ACCA, Applied Skills ACCA, Strategic Professional ACCA, CA Foundation, CA Inter, preparatory institute",
};

export default function CoursesPage() {
  return <CoursesListingClient courses={courses} />;
}
