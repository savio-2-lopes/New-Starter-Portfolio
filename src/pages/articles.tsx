import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import tgImg from "../../public/image/article/tg.png";

const FrameImage = motion(Image);

interface FeaturedArticleProps {
  img: any;
  title: string;
  time: string;
  summary: string;
  link: string;
}

interface MovingImgProps {
  title: string;
  img: any;
  link: string;
}

const MovingImg: React.FC<MovingImgProps> = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null) as any;

  function handleMouse(event: any) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event: any) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline xs:text-lg">
        {title}
      </h2>
      <FrameImage
        ref={imgRef}
        src={img}
        alt={title}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }: any) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  img,
  title,
  time,
  summary,
  link,
}) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <FrameImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-light">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Savio Lopes - Artigos</title>
        <meta name="description" content="Savio Lopes - Artigos" />
        <link
          rel="canonical"
          href="https://savioaugustolopes.netlify.app/portfolio"
        />
        <meta property="og:title" content="Savio Lopes - Artigos" />
        <meta property="og:description" content="Savio Lopes - Artigos" />
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
        <meta name="twitter:title" content="Savio Lopes - Artigos" />
        <meta name="twitter:description" content="Savio Lopes - Artigos" />
        <meta
          name="twitter:image"
          content="https://example.com/your-image.jpg"
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Meus artigos"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-3 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Artigo Científico do meu Trabalho de Graduação"
              summary="O artigo científico é do meu trabalho de graduação,
              contém os materiais utilizados e como eles foram aplicados no
              desenvolvimento, tem uma fundamentação teórica."
              time="40 min read"
              link="https://www.fateccruzeiro.edu.br/projetos/acervo/68cbd3dc47a91f1333086e0f34777229.pdf"
              img={tgImg}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full dark:text-light text-center my-16 mt-32">
            Todos os Artigos
          </h2>
          <ul>
            <Article
              title="Artigo Científico do meu Trabalho de Graduação"
              date="Dezembro 12, 2022"
              link="https://www.fateccruzeiro.edu.br/projetos/acervo/68cbd3dc47a91f1333086e0f34777229.pdf"
              img={tgImg}
            />
          </ul>
          <HireMe />
        </Layout>
      </main>
    </>
  );
};

export default articles;
