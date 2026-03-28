import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import UpcomingBatchesClient from "./UpcomingBatchesClient";

export const metadata = {
  title: "Upcoming Batches | Vyasa Institute",
  description: "View upcoming batch schedules for CA, CMA courses at Vyasa Institute. Enroll in the next batch and start your journey.",
};

export default function UpcomingBatchesPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Batch Schedules"
        title="Upcoming Batches"
        description="Find the next batch for your course. Limited seats available."
      />
      <UpcomingBatchesClient />
    </PageLayout>
  );
}
