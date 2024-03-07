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
        <title>Savio Lopes - Portfolio</title>
        <meta name="description" content="Savio Lopes - Portfolio" />
        <link
          rel="canonical"
          href="https://savioaugustolopes.netlify.app/portfolio"
        />
        <meta property="og:title" content="Savio Lopes - Portfolio" />
        <meta property="og:description" content="Savio Lopes - Portfolio" />
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
        <meta name="twitter:title" content="Savio Lopes - Portfolio" />
        <meta name="twitter:description" content="Savio Lopes - Portfolio" />
        <meta
          name="twitter:image"
          content="https://example.com/your-image.jpg"
        />
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
                  href="https://github.com/savio-2-lopes/New-Starter-Portfolio/blob/main/public/document/Savio_Lopes-CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
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
