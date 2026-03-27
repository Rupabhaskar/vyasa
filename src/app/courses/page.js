import { courses } from "@/data/courses";
import CoursesListingClient from "./CoursesListingClient";

export const metadata = {
  title: "Courses | CA, CMA & ACCA Coaching – Vyasa Institute",
  description:
    "Explore all courses at Vyasa Institute — CA Foundation, CA Intermediate, CA Final, CMA, ACCA (Applied Knowledge, Applied Skills, Strategic Professional), and Online Classes. India\u2019s premier preparatory institute.",
  keywords:
    "Vyasa Institute courses, CA coaching, CMA courses, ACCA course, Applied Knowledge ACCA, Applied Skills ACCA, Strategic Professional ACCA, CA Foundation, CA Inter, preparatory institute",
};

export default function CoursesPage() {
  return <CoursesListingClient courses={courses} />;
}
