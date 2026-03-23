import { locations } from "@/data/locations";
import LocationsListingClient from "./LocationsListingClient";

export const metadata = {
  title: "Our Locations | CA Coaching Centers – Vyasas Studies",
  description:
    "Find Vyasas Studies CA coaching centers near you. Campuses in Hyderabad, Vijayawada, and Guntur with modern infrastructure and expert faculty.",
  keywords: "Vyasas Studies locations, CA coaching centers, CA coaching Hyderabad, CA coaching Vijayawada, CA coaching Guntur",
};

export default function LocationsPage() {
  return <LocationsListingClient locations={locations} />;
}
