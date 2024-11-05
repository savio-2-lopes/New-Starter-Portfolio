import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <Link
          href="https://www.linkedin.com/in/savio-lopes"
          className="underline underline-offset-2 dark:text-light"
        >
          Contact
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
