import Link from "next/link";
import {FiMail} from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="text-center flex flex-col pt-10 gap-3 pb-5">
        <p>Este sitio fue construido con ❤️</p>
        <div
          id="contact"
          className="flex flex-row pt-10 lg:pt-5 justify-center gap-2"
        >
	  <FiMail className="text-2xl" width={30} height={30} />
          <Link
            className="underline hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out"
            href="mailto:marc.penar@outlook.cl"
            target="_blank"
          >
            marc.penar@outlook.cl
          </Link>
        </div>
        <Link
          className="underline hover:text-custom_purple hover:transition-colors hover:duration-300 hover:ease-in-out"
          href="https://marcozsh.dev"
          target="_blank"
        >
          Marco Peña 2025
        </Link>
      </footer>
    </>
  );
}
