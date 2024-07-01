import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Logiteam admin",
    imgSrc: "/projects/logiteam-admin.png",
    projectLink: "https://www.admin.logiteam.tn/auth",
    tech: ["ReactJS", "Laravel"],
    description: "Admin logistic dashboard built for managing logistics efficiently.",
    modalContent: (
      <>
        <p>
          Logiteam Admin is a robust admin logistic dashboard designed to streamline logistics management.
        </p>
        <p>
        Built with ReactJS for a dynamic and responsive front-end and Laravel for a powerful and scalable back-end,
         this platform ensures seamless integration and efficient performance.
        </p>
      </>
    ),
  },
  {
    title: "Logiteam",
    imgSrc: "/projects/logiteam-client.png",
    projectLink: "https://www.logiteam.tn/",
    tech: ["ReactJS", "Tailwind CSS"],
    description:
      "Client interface for Logiteam designed for seamless user interaction.",
    modalContent: (
      <>
        <p>
        Logiteam is the client interface designed to enhance user interaction within the Logiteam ecosystem.
         Developed using ReactJS, this platform allows clients to track their orders in real-time.
        </p>
      </>
    ),
  },
  {
    title: "Price comparison",
    imgSrc: "/projects/price-comparison.png",
    tech: ["Next.js", "Express.js", "Node.js"],
    description:
      "Website for comparing product prices with multiple sources.",
    modalContent: (
      <>
        <p>
        The Price Comparison Website enables users to compare product prices with multiple sources using scraping techniques to gather data.
        </p>

        <p>
        Developed with Next.js for the front-end and Express.js and Node.js for the back-end,
         this platform provides comprehensive price comparisons,  ensuring users find the best deals across various online sources.
        </p>
      </>
    ),
  },
  {
    title: "Ticket website",
    imgSrc: "/projects/store-ticket.png",
    projectLink: "https://www.ticket.gg.tn/",
    tech: ["ReactJS", "Tailwind CSS"],
    description:
      "Website for printing various product tickets used by stores.",
    modalContent: (
      <>
        <p>
        The Ticket Website enables stores to print various product tickets using ReactJS, 
        ensuring efficient management and customization of ticketing processes.
        </p>
      </>
    ),
  },
  {
    title: "Safe-Harbor",
    imgSrc: "/projects/safe-harbor.png",
    projectLink: "https://safe-harbor.vercel.app/sign-in",
    code:"https://github.com/jihenmansour/SafeHarbor",
    tech: ["Next.js", "Versel"],
    description:
      "Banking website for users to view transactions and account information.",
    modalContent: (
      <>
        <p>
        Safe-Harbor is a banking website developed with Next.js and deployed on Vercel, 
        providing users with seamless access to view their transactions and account details, 
        ensuring a reliable and efficient banking experience.
        </p>
      </>
    ),
  },
  {
    title: "e-shopper",
    imgSrc: "/projects/e-shopper.png",
    code:"https://github.com/jihenmansour/e-shopper",
    tech: ["Next.js", "Versel"],
    description:
      "E-commerce shopping admin dashboard.",
    modalContent: (
      <>
        <p>
        e-shopper is an e-commerce admin dashboard built using MongoDB, Express.js, Node.js and Next.js. 
        </p>

        <p>
        It provides comprehensive tools for managing products, processing orders, and handling users.
        </p>
      </>
    ),
  }
];
