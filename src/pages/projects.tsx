import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import SpotifyClonewithNextJS from "../../public/image/projects/Spotify-Clone-with-Next.JS.gif";
import UICloneTwitter from "../../public/image/projects/UI-Clone-Twitter.gif";
import SimpleFlaskEncryptionCiphers from "../../public/image/projects/Simple-Flask-Encryption-Ciphers.gif";
import SearchMethodsAIFlask from "../../public/image/projects/Search-Methods-AI-Flask.gif";
import QuizImersaoReact from "../../public/image/projects/Quiz-Imersao-React.gif";
import FluxFin from "../../public/image/projects/Flux-Fin.gif";
import Proffy from "../../public/image/projects/Proffy.png";
import ProffyMobile from "../../public/image/projects/ProffyMobile.png";
import MoveIt from "../../public/image/projects/MoveIt.gif";
import Letmeask from "../../public/image/projects/Letmeask.gif";
import IgNews from "../../public/image/projects/Ig.News.gif";
import Happy from "../../public/image/projects/Happy.gif";
import HappyMobile from "../../public/image/projects/HappyMobile.png";
import GoRealtimeChat from "../../public/image/projects/Go-Realtime-Chat.gif";
import GoogleDriveCloneSemanaJavascriptExpert05 from "../../public/image/projects/Google-Drive-Clone-Semana-Javascript-Expert-05.gif";
import GithubExplorer from "../../public/image/projects/Github-Explorer.gif";
import EventPlatformIgniteLab from "../../public/image/projects/Event-Platform-Ignite-Lab.gif";
import DTMoney from "../../public/image/projects/DTMoney.gif";
import DevelopmentCRUDLaravelFramework from "../../public/image/projects/Development-CRUD-Laravel-Framework.gif";
import DevelopmentFrontendBladeLaravelFramework from "../../public/image/projects/Development-Frontend-Blade-Laravel-Framework.gif";
import DevFinaces from "../../public/image/projects/Dev.Finaces.gif";
import BeTheHero from "../../public/image/projects/BeTheHero.png";
import BeTheHeroMobile from "../../public/image/projects/BeTheHeroMobile.jpeg";

const FrameImage = motion(Image);

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
}

interface ProjectProps {
  title: string;
  type: string;
  img: any;
  link: string;
  github: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  type,
  title,
  summary,
  img,
  link,
  github,
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
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  type,
  img,
  link,
  github,
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
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Savio Lopes - Projetos</title>
        <meta name="description" content="Savio Lopes - Projetos" />
        <link
          rel="canonical"
          href="https://savioaugustolopes.netlify.app/projetos"
        />
        <meta property="og:title" content="Savio Lopes - Projetos" />
        <meta property="og:description" content="Savio Lopes - Projetos" />
        <meta
          property="og:url"
          content="https://savioaugustolopes.netlify.app/Projetos"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Savio Lopes - Projetos" />
        <meta name="twitter:description" content="Savio Lopes - Projetos" />
        <meta
          name="twitter:image"
          content="https://example.com/your-image.jpg"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="py-16">
          <AnimatedText
            text="Principais Projetos!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Spotify-Clone-with-Next"
                img={SpotifyClonewithNextJS}
                summary="Clone of the Spotify platform, developed using Next.JS, Tailwind.CSS and the Spotify API, to obtain playlists from the logged in user"
                github="https://github.com/savio-2-lopes/Spotify-Clone-with-Next.JS"
                link="https://spotify-clone-next.netlify.app"
                type="Projetos Recentes"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="UI-Clone-Twitter"
                img={UICloneTwitter}
                github="https://github.com/savio-2-lopes/UI-Clone-Twitter"
                link="https://tsclone-react-twitter.netlify.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Quiz Imersão React"
                img={QuizImersaoReact}
                github="https://github.com/savio-2-lopes/Quiz-Imersao-React"
                link="https://quiz-imersao-react-savio-2-lopes.vercel.app"
                type="Projetos"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Simple Flask Encryption Ciphers"
                img={SimpleFlaskEncryptionCiphers}
                github="https://github.com/savio-2-lopes/Simple-Flask-Encryption-Ciphers"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Search Methods AI Flask"
                img={SearchMethodsAIFlask}
                github="https://github.com/savio-2-lopes/Search-Methods-AI-Flask"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Flux-Fin - Sistema Kanban de Gestão"
                img={FluxFin}
                github="https://github.com/savio-2-lopes/Flux-Fin"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Proffy Web"
                img={Proffy}
                github="https://github.com/savio-2-lopes/Proffy"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Proffy Mobile"
                img={ProffyMobile}
                github="https://github.com/savio-2-lopes/Proffy"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Moveit"
                img={MoveIt}
                github="https://github.com/savio-2-lopes/moveit"
                link="https://move-it-savio-2-lopes.vercel.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Letmeask"
                img={Letmeask}
                github="https://github.com/savio-2-lopes/Letmeask"
                link="https://nlwtogether-813ac.web.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ig News"
                img={IgNews}
                github="https://github.com/savio-2-lopes/Ig.News"
                link="https://ig-news-onx9bvokw-savio-2-lopes.vercel.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Happy Web"
                img={Happy}
                github="https://github.com/savio-2-lopes/Happy"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Happy Mobile"
                img={HappyMobile}
                github="https://github.com/savio-2-lopes/Happy"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Go Realtime Chat"
                img={GoRealtimeChat}
                github="https://github.com/savio-2-lopes/Go-Realtime-Chat"
                link="/"
                type="Projetos"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Google Drive Clone - Semana Javascript Expert"
                img={GoogleDriveCloneSemanaJavascriptExpert05}
                github="https://github.com/savio-2-lopes/Google-Drive-Clone-Semana-Javascript-Expert-05"
                link="https://gdrive-webapp-ew.herokuapp.com"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Github Explorer"
                img={GithubExplorer}
                github="https://github.com/savio-2-lopes/Github-Explorer"
                link="https://github-explorer-rose.vercel.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Event Platform - Ignite-Lab"
                img={EventPlatformIgniteLab}
                github="https://github.com/savio-2-lopes/Github-Explorer"
                link="https://github-explorer-rose.vercel.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="DTMoney"
                img={DTMoney}
                github="https://github.com/savio-2-lopes/DTMoney"
                link="https://dtmonie-frontend.netlify.app"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Development CRUD Laravel Framework"
                img={DevelopmentCRUDLaravelFramework}
                github="https://github.com/savio-2-lopes/Development-CRUD-Laravel-Framework"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Development Frontend Blade"
                img={DevelopmentFrontendBladeLaravelFramework}
                github="https://github.com/savio-2-lopes/Development-Frontend-Blade-Laravel-Framework"
                link="/"
                type="Projetos"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dev Finaces"
                img={DevFinaces}
                github="https://github.com/savio-2-lopes/Dev.Finaces"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Be The Hero Web"
                img={BeTheHero}
                github="https://github.com/savio-2-lopes/bethehero"
                link="/"
                type="Projetos"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Be The Hero Mobile"
                img={BeTheHeroMobile}
                github="https://github.com/savio-2-lopes/bethehero"
                link="/"
                type="Projetos"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
