import Link from "next/link";
import { ReactNode } from "react";


/*
Button by https://github.com/Javierrocadev
All credits to him
*/

type CustomButtonProps = {
  icon: ReactNode;
  text: string;
  href: string;
};
export default function CustomButton({ icon, text, href }: CustomButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`button-custom group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 
	  	after:duration-300 hover:border-neutral-900 duration-300 
		hover:duration-300 underline underline-offset-2 
		hover:underline hover:underline-offset-4 origin-left 
		hover:decoration-2 hover:text-neutral-300 relative 
		md:px-4 md:py-2 bg-neutral-900 border text-left p-2 md:p-3 text-gray-50 
		text-base rounded-lg overflow-hidden after:absolute 
		after:z-10 after:w-12 after:h-12 after:content[''] after:bg-custom_purple
		after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse`}
    >
      {icon} {text}
    </Link>
  );
}
