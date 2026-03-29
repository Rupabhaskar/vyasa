"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUsers, FaChartLine, FaTrophy, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import PageLayout from "@/components/shared/PageLayout";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTAForm from "@/components/shared/CTAForm";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/shared/SchemaMarkup";

export default function LocationDetailClient({ location }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Locations", href: "/locations" },
    { label: location.city },
  ];

  return (
    <PageLayout>
      <LocalBusinessSchema location={location} />
      <BreadcrumbSchema items={crumbs} />

      <PageHeader
        tag={`${location.city}, ${location.state}`}
        title={location.heading}
        description={location.subheading}
      />
      <Breadcrumbs items={crumbs} />

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-8">
            <div>
              <FaUsers className="text-2xl text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{location.stats.students}</div>
              <div className="text-muted text-sm">Students</div>
            </div>
            <div>
              <FaChartLine className="text-2xl text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{location.stats.passRate}</div>
              <div className="text-muted text-sm">Pass Rate</div>
            </div>
            <div>
              <FaTrophy className="text-2xl text-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{location.stats.ranks}</div>
              <div className="text-muted text-sm">All India Ranks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-primary mb-8">About Our {location.city} Center</h2>
            <div className="text-muted leading-relaxed text-lg">
              {location.description.split("\n\n").map((para, i) => (
                <p key={i} className="mb-6">{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Courses Available in {location.city}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.coursesOffered.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100"
              >
                <FaCheckCircle className="text-green-500 shrink-0" />
                <span className="text-primary font-medium">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center">
            What Students in {location.city} Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {location.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-gray-100"
              >
                <FaQuoteLeft className="text-2xl text-primary/10 mb-4" />
                <p className="text-muted leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-primary">{t.name}</p>
                  <p className="text-gold text-sm">{t.rank}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Contact */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-primary mb-6">Visit Our {location.city} Campus</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                  <span className="text-muted">{location.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-primary shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-muted hover:text-primary transition-colors">{location.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-muted hover:text-primary transition-colors">{location.email}</a>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 lg:h-full bg-gray-200">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Vyasa Institute ${location.city} Map`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTAForm
        heading={`Enquire About ${location.city} Campus`}
        subheading="Fill in your details and our team will reach out to you shortly."
      />
    </PageLayout>
  );
}
