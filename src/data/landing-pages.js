const CURRENT_YEAR = new Date().getUTCFullYear();

export const landingPages = [
  {
    slug: "ca-coaching-admissions-2026",
    metaTitle: `CA Coaching Admissions ${CURRENT_YEAR} | Limited Seats – Vyasa Institute`,
    metaDescription:
      "Admissions open for CA Foundation, Inter & Final coaching at Vyasa Institute. Expert faculty, proven results with All India Ranks. Apply now — limited seats.",
    keywords: `CA admissions ${CURRENT_YEAR}, CA coaching admissions, CA Foundation admission, Vyasa Institute admission`,
    headline: `CA Admissions ${CURRENT_YEAR} Are Open`,
    subheadline: "Join the institute that has produced 50+ All India Rank holders. Limited seats available for the upcoming batch.",
    benefits: [
      { title: "Expert Faculty", desc: "Learn from practicing CAs and rank holders with 10-18 years of teaching experience." },
      { title: "Proven Results", desc: "85%+ pass rate and 50+ All India Ranks across CA Foundation, Inter, and Final levels." },
      { title: "Personal Mentorship", desc: "Dedicated mentor for every student to guide your preparation journey from day one." },
      { title: "Digital Learning", desc: "Recorded lectures, online tests, and performance analytics available 24/7." },
      { title: "Scholarship Program", desc: "Merit-based scholarships up to 50% for deserving students." },
      { title: "Placement Support", desc: "Articleship placement assistance with top CA firms across India." },
    ],
    testimonials: [
      { name: "Priya Sharma", rank: "AIR 1 – CA Final", text: "Vyasa Institute transformed my preparation completely. The faculty's approach to teaching helped me secure the top rank." },
      { name: "Karthik Rajan", rank: "AIR 5 – CA Inter", text: "The integrated coaching model is brilliant. Personal mentorship made all the difference in my journey." },
      { name: "Divya Sharma", rank: "AIR 8 – CA Foundation", text: "Starting my CA journey at Vyasas was the best decision. The structured preparation and expert faculty were invaluable." },
    ],
    urgency: `Only 120 seats remaining for July ${CURRENT_YEAR} batch. Applications close June 30.`,
    formHeading: "Apply Now – Limited Seats",
  },
  {
    slug: "free-ca-counseling",
    metaTitle: "Free CA Career Counseling | Book Your Session – Vyasa Institute",
    metaDescription:
      "Book a free one-on-one CA career counseling session with experts at Vyasa Institute. Get personalized guidance on your CA journey.",
    keywords: "free CA counseling, CA career guidance, CA counseling session, Vyasa Institute counseling",
    headline: "Free CA Career Counseling",
    subheadline: "Not sure about your CA journey? Our expert counselors will help you plan the perfect path — completely free of charge.",
    benefits: [
      { title: "Personalized Guidance", desc: "One-on-one session tailored to your academic background and career goals." },
      { title: "Course Recommendations", desc: "Expert advice on which course and batch is right for you." },
      { title: "Career Roadmap", desc: "A clear roadmap from your current stage to becoming a qualified CA/CMA." },
      { title: "Scholarship Info", desc: "Learn about available scholarships and financial assistance options." },
      { title: "No Obligation", desc: "The counseling session is completely free with no enrollment pressure." },
      { title: "Expert Counselors", desc: "Our counselors are experienced CAs who understand the journey inside out." },
    ],
    testimonials: [
      { name: "Rohit Kumar", rank: "Parent", text: "The counseling session was incredibly informative. It helped us understand the CA path clearly and make an informed decision." },
      { name: "Sneha Rao", rank: "Student", text: "I was confused between CA and CMA. The counselor helped me understand both paths and choose what's right for me." },
    ],
    urgency: "Limited counseling slots available this week. Book now to secure your preferred time.",
    formHeading: "Book Your Free Session",
  },
];

export function getLandingBySlug(slug) {
  return landingPages.find((p) => p.slug === slug) || null;
}

export function getAllLandingSlugs() {
  return landingPages.map((p) => p.slug);
}
