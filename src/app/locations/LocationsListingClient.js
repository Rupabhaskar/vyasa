"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaUsers, FaArrowRight } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function LocationsListingClient({ locations }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations" },
  ];

  return (
    <PageLayout>
      <PageHeader
        tag="Find Us Near You"
        title="Our Locations"
        description="Premium coaching centers across Andhra Pradesh and Telangana, bringing quality CA education closer to you."
      />
      <Breadcrumbs items={crumbs} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full"
                >
                  <div className="h-40 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center relative">
                    <FaMapMarkerAlt className="text-white/20 text-8xl absolute" />
                    <div className="relative z-10 text-center text-white">
                      <h2 className="text-2xl font-bold">{loc.city}</h2>
                      <p className="text-emerald-100 text-sm">{loc.state}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-6 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary/60 shrink-0" />
                        <span className="line-clamp-1">{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-primary/60 shrink-0" />
                        {loc.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-primary/60 shrink-0" />
                        {loc.stats.students} Students
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                        {loc.stats.passRate} Pass Rate
                      </span>
                      <span className="bg-gold/10 text-gold text-xs font-medium px-2 py-1 rounded-full">
                        {loc.stats.ranks}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      View Center Details
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
