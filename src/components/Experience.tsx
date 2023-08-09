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
        Experiência Profissional
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
            position="Desenvolvedor Fullstack Jr"
            time="2023-2023"
            address="Campinas, SP"
            company="4.Events"
            companyLink="https://www.4.events/pt-br"
            work="Como Desenvolvedor Fullstack Jr, eu contribuo para a manutenção de sistemas web e para o desenvolvimento de novas funcionalidades."
          />
          <Details
            position="Estagiário em AdTech"
            time="2023-2023"
            address="Cruzeiro, SP"
            company="Object1ve"
            companyLink="https://objctv.one/"
            work="Auxílio na manutenção de anúncios utilizando ferramentas do Google e no desenvolvimento de Temas em Wordpress."
          />
          <Details
            position="Desenvolvedor Front-End Júnior"
            time="2022-2023"
            address="São Carlos, SP"
            company="Private Code Soluções Digitais"
            companyLink="https://privatecode.com.br/"
            work="Como Desenvolvedor Front-End Júnior na Software House, tive a responsabilidade de realizar manutenção em sistemas web e desenvolver novas funcionalidades, utilizando tecnologias modernas e avançadas de programação"
          />
          <Details
            position="Estagiário em Desenvolvimento de Software"
            time="2022-2022"
            address="Taubaté, SP"
            company="Slideworks"
            companyLink="https://slideworks.cc/#home"
            work="Na minha posição de Estagiário em Desenvolvimento de Software, trabalhei na desenvolvimento de aplicações internas e na manutenção de projetos existentes em uma Software House. Utilizei tecnologias modernas e avançadas como Node.js, React.js, Next.js e TypeORM, bem como ferramentas como Docker e Git/Github. Atuei em Squads completamente remotos e apliquei práticas de metodologias ágeis em projetos, incluindo o uso do Scrum."
          />
          <Details
            position="Estagiário em Inovação e Tecnologia"
            time="2022-2022"
            address="Cruzeiro, SP"
            company="Mais Top Estética"
            companyLink="https://www.autoestimamaistop.com/"
            work="Durante minha atuação como Estagiário em Inovação e Tecnologia, tive a responsabilidade de realizar a manutenção do sistema Plus, principal sistema da Mais Top Estética, a maior rede de franquias de autoestima das Américas. Para esse fim, utilizei principalmente PHP, HTML/CSS, Bootstrap e Filezilla."
          />
          <Details
            position="Estagiário em Desenvolvimento Web"
            time="2020-2021"
            address="Brasilia, DF"
            company="Cazalab"
            companyLink="https://www.linkedin.com/company/cazalab/"
            work="Na posição de Estagiário em Desenvolvimento Web na CazaLab, fui incumbido de desenvolver e manter o sistema imobiliário da empresa, utilizando principalmente tecnologias como Python (Flask, Scrapy), Docker, Bootstrap e Google Cloud para implantação, bem como Git/Github para versionamento de código."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
