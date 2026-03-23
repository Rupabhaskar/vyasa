import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import OurGalleryClient from "./OurGalleryClient";

export const metadata = {
  title: "Our Gallery | Vyasas Studies",
  description: "Explore our campus, classrooms, facilities, and student life at Vyasas Studies through our photo gallery.",
};

export default function OurGalleryPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Campus & Life"
        title="Our Gallery"
        description="A glimpse into our campus, facilities, and the vibrant student life at Vyasas Studies."
      />
      <OurGalleryClient />
    </PageLayout>
  );
}
