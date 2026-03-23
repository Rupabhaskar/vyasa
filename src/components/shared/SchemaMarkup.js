export function CourseSchema({ course }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Vyasas Studies",
      sameAs: "https://vyasasstudies.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      duration: course.duration,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ post }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vyasasstudies.com/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Vyasas Studies",
      url: "https://vyasasstudies.com",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema({ location }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `Vyasas Studies ${location.city}`,
    description: location.metaDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "IN",
    },
    telephone: location.phone,
    email: location.email,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `https://vyasasstudies.com${item.href}` : undefined,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
