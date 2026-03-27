import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import OurTeamClient from "./OurTeamClient";

export const metadata = {
  title: "Our Team | Vyasa Institute",
  description: "Meet the expert faculty and leadership team at Vyasa Institute. Experienced CAs, CMAs, and educators committed to student success.",
};

export default function OurTeamPage() {
  return (
    <PageLayout>
      <PageHeader
        tag="Meet The Experts"
        title="Our Team"
        description="Industry veterans and academic leaders committed to nurturing the next generation of professionals."
      />
      <OurTeamClient />
    </PageLayout>
  );
}
