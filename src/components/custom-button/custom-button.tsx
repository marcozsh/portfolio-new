import type React from "react";
import Link from "next/link";
import { ReactNode } from "react";

interface CustomButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  className?: string;
}

export default function CustomButton({ icon, text, href }: CustomButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`
        inline-flex 
        items-center 
        justify-center 
        font-medium 
      text-white 
	border
        rounded-lg
        duration-300 
        ease-in-out
        active:scale-95
        relative
        overflow-hidden
        hover:shadow-[0_0_15px_rgba(255,120,120,0.5)]
	after:z-10 after:w-10 after:h-8 after:relative after:bg-custom_purple
	after:top-6 after:left-10 after:blur-lg hover:after:animate-pulse
	group-hover:before:duration-500 group-hover:after:duration-500
	after:duration-300
	px-4 
	py-2
	text-base
	`}
    >
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
      {icon}
      <span className="text-nowrap">{text}</span>
      <span className="absolute inset-0 border-2 border-white opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
    </Link>
  );
}
