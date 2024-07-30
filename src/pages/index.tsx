import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";
import profileImage from "../../public/image/profile/profileHome.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Savio Lopes - Desenvolvedor Web | Portfolio</title>
        <meta name="description" content="Conheça o portfólio de Savio Lopes, desenvolvedor web especializado em tecnologias modernas como Next.js, React e Node.js." />
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Savio Lopes" />
        <meta name="publisher" content="Savio Lopes" />
        <meta property="og:title" content="Savio Lopes - Desenvolvedor Web | Portfolio" />
        <meta property="og:description" content="Conheça o portfólio de Savio Lopes, desenvolvedor web especializado em tecnologias modernas como Next.js, React e Node.js." />
        <meta property="og:url" content="https://savioaugulopes.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://savioaugulopes.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofileImg.8c67d284.png&w=640&q=75" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Savio Lopes - Desenvolvedor Web | Portfolio" />
        <meta name="twitter:description" content="Conheça o portfólio de Savio Lopes, desenvolvedor web especializado em tecnologias modernas como Next.js, React e Node.js." />
        <meta name="twitter:image" content="https://savioaugulopes.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FprofileImg.8c67d284.png&w=640&q=75" />
        <meta name="robots" content="index, follow" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full" style={{marginRight: 50}}>
              <Image
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src={profileImage}
                alt="Profile"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Desenvolvedor Fullstack | Mobile & Web"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                Meu nome é Savio Lopes, formado em Análise e Desenvolvimento de
                Sistemas e possuo mais de 3 anos de experiência profissional na
                área de Desenvolvimento de Software. Durante esse período, atuei
                como estagiário em diferentes empresas e também possuo
                experiências como Desenvolvedor Fullstack.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="document/Savio_Lopes-CV.pdf"
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download="Savio_Lopes-CV.pdf"
                >
                  Currículo <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <Link
                  href="mailto:savioagulopes@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>

      </main>
    </>
  );
}
