import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import ccnaIntroductionNetwork from "../../public/image/certifications/CCNA-Introduction-to-Network.png";
import programaCiberEducacao2022 from "../../public/image/certifications/Certificado-Programa-CiberEducação-Cisco-Brasil.png";
import cloudSecurity from "../../public/image/certifications/Cloud-Security.png";
import desenvolvimentoWebAvancado from "../../public/image/certifications/Desenvolvimento-Web-Avançado-2022-com-php-laravel-e-vue.js.png";
import fundamentoDesign from "../../public/image/certifications/Fundamentos-do-design-da-experiência-do-usuário.jpeg";
import igniteReactjs from "../../public/image/certifications/Ignite-Trilha-ReactJS.png";
import networkSecurity from "../../public/image/certifications/Network-Security.png";
import trilhaEspecializarDiscover from "../../public/image/certifications/Trilha-Especializar-do-Discover.png";

const FrameImage = motion(Image);

interface CertificationsProps {
  title: string;
  type: string;
  img: any;
  link: string;
}

interface FeaturedCertificationsProps {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
}

const FeaturedCertifications: React.FC<FeaturedCertificationsProps> = ({
  type,
  title,
  summary,
  img,
  link,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left dark:text-light text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark dark:bg-light text-light dark:text-dark dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            View Certifications
          </Link>
        </div>
      </div>
    </article>
  );
};

const Certifications: React.FC<CertificationsProps> = ({
  title,
  type,
  img,
  link,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl dark:text-light font-bold">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg dark:text-light font-semibold underline md:text-base"
          >
            Visualizar
          </Link>
        </div>
      </div>
    </article>
  );
};

const certifications = () => {
  return (
    <>
      <Head>
        <title>Savio Lopes - Certificações</title>
        <meta name="description" content="Savio Lopes - Certificações" />
        <link
          rel="canonical"
          href="https://savioaugustolopes.netlify.app/portfolio"
        />
        <meta property="og:title" content="Savio Lopes - Certificações" />
        <meta property="og:description" content="Savio Lopes - Certificações" />
        <meta
          property="og:url"
          content="https://savioaugustolopes.netlify.app/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Savio Lopes - Certificações" />
        <meta
          name="twitter:description"
          content="Savio Lopes - Certificações"
        />
        <meta
          name="twitter:image"
          content="https://example.com/your-image.jpg"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="py-16">
          <AnimatedText
            text="Certificações!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedCertifications
                title="CCNA - Introduction to Network"
                img={ccnaIntroductionNetwork}
                summary="CCNA - Introduction to Network"
                link="/"
                type="Certificações"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Certifications
                title="Programa  CiberEducação Cisco Brasil 2022"
                img={programaCiberEducacao2022}
                link="/"
                type="Certificações"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Certifications
                title="Cloud Security"
                img={cloudSecurity}
                link="/"
                type="Certificações"
              />
            </div>

            <div className="col-span-12">
              <FeaturedCertifications
                title="Desenvolvimento Web Avançado 2022 com Laravel e Vue"
                img={desenvolvimentoWebAvancado}
                summary="Desenvolvimento Web Avançado 2022 com Laravel e Vue"
                link="/"
                type="Certificações Recentes"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Certifications
                title="Fundamentos do Design da experiência do usuário"
                img={fundamentoDesign}
                link="/"
                type="Certificações"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Certifications
                title="Ignite Trilha ReactJS"
                img={igniteReactjs}
                link="/"
                type="Certificações"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Certifications
                title="Network Security"
                img={networkSecurity}
                link="/"
                type="Certificações"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Certifications
                title="Trilha Especializar do Discover"
                img={trilhaEspecializarDiscover}
                link="/"
                type="Certificações"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default certifications;
