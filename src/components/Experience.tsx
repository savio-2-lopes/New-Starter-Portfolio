import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null) as any;

  return (
    <li
      ref={ref}
      className="my-8 first:my-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>

        <p className="font-medium dark:text-light w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null) as any;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div id="experience-section" className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full dark:text-light text-center 
        md:text-6xl xs:text-4xl md:mb-16
      "
      >
        Professional Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Fullstack Developer"
            time="2023-Current"
            address="Campinas, SP"
            company="4.Events"
            companyLink="https://www.4.events/pt-br"
            work="Assisted in the maintenance of web systems and APIs and developed new features, ensuring efficiency with agile methodologies (Scrum) and tools such as Git, Jira, and Docker. Worked on creating scalable solutions with a focus on performance and efficiency."
          />
          <Details
            position="Ad Tech Analyst"
            time="2023-2023"
            address="Cruzeiro, SP"
            company="Object1ve"
            companyLink="https://objctv.one/"
            work="Provided technical support in Google Tag Manager and Google Ad Manager to optimize advertising campaigns, and maintained ad and creative code. Assisted in developing customized ad codes and creating WordPress themes, ensuring effective solutions."
          />
          <Details
            position="Junior Fullstack Developer"
            time="2022-2023"
            address="São Carlos, SP"
            company="Private Code Soluções Digitais"
            companyLink="https://privatecode.com.br/"
            work="Developed and maintained web systems, implementing new features and fixing bugs using agile methodologies (Scrum). Collaborated with remote teams to ensure high-quality deliveries."
          />
          <Details
            position="Software Development Intern"
            time="2022-2022"
            address="Taubaté, SP"
            company="Slideworks"
            companyLink="https://slideworks.cc/#home"
            work="Contributed to the development of various applications, primarily using Node.js, React.js, and Next.js, applying agile methodologies. Conducted code review, bug fixing, and testing, ensuring software quality."
          />
          <Details
            position="Innovation and Technology Intern"
            time="2022-2022"
            address="Cruzeiro, SP"
            company="Mais Top Estética"
            companyLink="https://www.autoestimamaistop.com/"
            work="Assisted in maintaining the Plus system and developing features for the finance department, fixing bugs and performing tests. Worked with agile teams to streamline development processes."
          />
          <Details
            position="Software Development Intern"
            time="2020-2021"
            address="Brasilia, DF"
            company="Cazalab"
            companyLink="https://www.linkedin.com/company/cazalab/"
            work="Developed and helped maintain a real estate system with Python (Flask) and created machine learning systems for recommendations, web scraping, and web applications. Implemented new features and fixed bugs, ensuring high-quality deliveries with Scrum."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
