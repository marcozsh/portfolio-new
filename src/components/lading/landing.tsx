import { FaGithub, FaLinkedin, FaFileContract } from "react-icons/fa";
import Link from "next/link";
import CustomTypeWritter from "./typewritter";
export default function Landing() {
  return (
    <section className="flex justify-center h-screen xl:h-auto xl:mt-32 xl:justify-between">
      <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-start">
        <span className="text-2xl">
          <CustomTypeWritter text="¡Hola!" />
        </span>
        <h1 className="text-6xl font-bold flex flex-col gap-3">
          <span>
            soy <span className="text-custom_purple">Marco Peña</span>
          </span>
        </h1>
        <p className="text-custom_gray opacity-[0.6] mt-5">
          Fullstack Developer
        </p>
        <div className="flex flex-row gap-5 mt-5">
          <Link href="https://github.com/marcozsh" target="_blank">
            <FaGithub className="text-4xl hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/marcozsh/" target="_blank">
            <FaLinkedin className="text-4xl hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer" />
          </Link>
          <Link href="/cv-marco.pdf" target="_blank">
            <FaFileContract className="text-4xl hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="xl:flex flex-col gap-3 hidden">
        <img src="/img-1.webp" className="w-[550px]" alt="landing image" />
      </div>
    </section>
  );
}
