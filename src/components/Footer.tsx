import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="dark:text-light">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex-items-center dark:text-light lg:py-2">
          Desenvolvido com
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          por &nbsp;
          <Link
            href="https://github.com/savio-2-lopes"
            className="underline underline-offset-2 dark:text-light"
          >
            Savio Lopes
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/savio-lopes"
          className="underline underline-offset-2 dark:text-light"
        >
          Entre em contato
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
