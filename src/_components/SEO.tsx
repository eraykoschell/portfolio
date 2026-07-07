import { Person, WithContext } from "schema-dts";

const structuredData: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eray Koschell",
  url: "https://eraykoschell.dev",
  image: "https://eraykoschell.dev/pfp.webp",
  jobTitle: "Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "United Kingdom"
  },
  gender: "male",
  knowsAbout: [
    "React",
    "React Native",
    "NextJS",
    "JavaScript",
    "TypeScript",
    "AWS",
    "Terraform",
    "NodeJS",
    "HTML",
    "CSS"
  ],
  sameAs: [
    "https://eraykoschell.dev",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Edge Hill University",
  },
}

export default function SEO() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
  );
}