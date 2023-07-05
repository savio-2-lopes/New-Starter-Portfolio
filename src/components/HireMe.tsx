import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed dark:hidden left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto ms:right-0 md:absolute sm:right-0">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          href="mailto:savioaugulopes@gmail.com"
          className="flex items-center text-center justify-center absolute text-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark lg:text-xs md:w-14 md:h-14 md:text-[10px]"
        >
          Entre em contato
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
