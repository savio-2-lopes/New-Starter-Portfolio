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
        <title>Savio Lopes - About</title>
        <meta name="description" content="Savio Lopes - About" />
        <link
          rel="canonical"
          href="https://savioaugulopes.vercel.app/portfolio"
        />
        <meta property="og:title" content="Savio Lopes - About" />
        <meta property="og:description" content="Savio Lopes - About" />
        <meta
          property="og:url"
          content="https://savioaugulopes.vercel.app/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Savio Lopes - About" />
        <meta name="twitter:description" content="Savio Lopes - About" />
        <meta
          name="twitter:image"
          content="https://example.com/your-image.jpg"
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="About me"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-5xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 dark:text-light sm:gap-8">
            <div className="col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Resume
              </h2>

              <p className="font-medium">
                Software developer with over 4 years of experience in Engineering and Information Technology, focusing on web development (JavaScript and PHP) and networking. I work in software development, covering the entire application lifecycle, from conception to deployment. I have expertise in front-end and full-stack development, with a proven track record in building robust and efficient solutions.
              </p>

              <div className="my-4 font-medium">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Technical Skills
                </h2>
                <ul>
                  <li>- JavaScript, ReactJS, PHP: Development of dynamic web applications with in-depth knowledge of these essential technologies.</li>
                </ul>
                <ul>
                  <li>
                    - React.js: Creation of interactive UIs using Redux, Context API, and custom hooks for state management.
                  </li>
                </ul>
                <ul>
                  <li>
                    - Mobile Development: Proficiency in Flutter, React Native, and Kotlin for cross-platform app development.
                  </li>
                </ul>
                <ul>
                  <li>
                    - PHP and Backend: Experience with Laravel and Swoole for creating scalable and secure backends.
                  </li>
                </ul>
                <ul>
                  <li>- Unit Testing: Hands-on experience with Jest, React Testing Library, Mocha, and Chai.</li>
                </ul>
                <ul>
                  <li>
                    - Databases: Knowledge of Firebase, MongoDB, and SQLite.
                  </li>
                </ul>
                <ul>
                  <li>- Version Control: Proficiency in Git (GitHub, Azure DevOps, Bitbucket).</li>
                </ul>
              </div>

              <div className="my-4 font-medium">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Additional Skills:
                </h2>
                <ul>
                  <li>
                    - Remote Collaboration: Effective in agile remote teams, with strong communication and teamwork skills.
                  </li>
                </ul>
                <ul>
                  <li>
                    - Adaptability: Highly flexible and proactive approach to learning in dynamic environments.
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
