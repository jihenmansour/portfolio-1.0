import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Graiet group",
    position: "Web Developer",
    time: "April 2022 - May 2023",
    location: "Msaken, Sousse, Tunisia",
    description:
      "I have developed dynamic and reusable components for various projects at Graiet Group, while also playing a key role in building backend functionalities. This includes creating a price comparison platform, an intuitive admin dashboard, and a user-friendly client dashboard.",
    tech: ["ReactJS", "Next.js", "Express.js", "Node.js", "Tailwind CSS", "MySQL", "GitLab"],
  },
  {
    title: "Axia solutions.",
    position: "Web Development Intern",
    time: "February 2022 - June 2022",
    location: "Msaken, Sousse, Tunisia",
    description:
      "During this internship, I developed a CRM solution for company employees .This innovative platform provided comprehensive account management, project tracking, and task organization, enhancing efficiency and collaboration across the organization.",
    tech: ["ReactJS", ".Net", "Antd", "Github"],
  }
];
