import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import profileImage from "../../public/image/profile/profileImg.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FrameImage = motion(Image);

interface AnimatedNumbersProps {
  value: any;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
  const ref = useRef(null) as any;
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }),
    [springValue, value];

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Savio Lopes - Sobre</title>
        <meta name="description" content="Savio Lopes - Sobre" />
        <link
          rel="canonical"
          href="https://savioaugustolopes.netlify.app/portfolio"
        />
        <meta property="og:title" content="Savio Lopes - Sobre" />
        <meta property="og:description" content="Savio Lopes - Sobre" />
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
        <meta name="twitter:title" content="Savio Lopes - Sobre" />
        <meta name="twitter:description" content="Savio Lopes - Sobre" />
        <meta
          name="twitter:image"
          content="https://example.com/your-image.jpg"
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Um pouco sobre mim"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 dark:text-light sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografia
              </h2>

              <p className="font-medium">
                Olá, prazer em conhecê-los! Sou Savio Lopes e tenho mais de 3
                anos de experiência profissional em Desenvolvimento de Software,
                incluindo estágios em empresas como Cazalab, Mais Top Estética,
                Slideworks, Object1ve e atuação como Desenvolvedor Júnior na
                empresa Private Code Soluções Digitais e na empresa 4.Events.
              </p>

              <div className="my-4 font-medium">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Experiência em
                </h2>
                <ul>
                  <li>- JavaScript e TypeScript;</li>
                </ul>
                <ul>
                  <li>- Sass e CSS-In-JS (styled-components);</li>
                </ul>
                <ul>
                  <li>
                    - Gerenciamento de estado (Redux, Context API e custom
                    hooks);
                  </li>
                </ul>
                <ul>
                  <li>
                    - Testes unitários com Jest, React Testing Library, PhpUnit
                    e Mocha;
                  </li>
                </ul>
                <ul>
                  <li>
                    - Desenvolvimento móvel para Android com React Native;
                  </li>
                </ul>
                <ul>
                  <li>- PHP (frameworks Laravel e CodeIgniter);</li>
                </ul>
                <ul>
                  <li>
                    - Criação de componentes reutilizáveis e documentação com
                    Storybook;
                  </li>
                </ul>
                <ul>
                  <li>- Refatoração e depuração (debugging)</li>
                </ul>
              </div>

              <div className="my-4 font-medium">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Outras habilidades:
                </h2>
                <ul>
                  <li>- Experiência em trabalho remoto;</li>
                </ul>
                <ul>
                  <li>- Experiência e práticas com Scrum;</li>
                </ul>
                <ul>
                  <li>
                    - Gosto por escrever código bem projetado, testável e
                    eficiente;
                  </li>
                </ul>
                <ul>
                  <li>
                    - Autodidata, apaixonado por aprender, ensinar e criar.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <FrameImage
                src={profileImage}
                alt="Profile"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
