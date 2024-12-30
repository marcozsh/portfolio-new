"use client";
import { TypeAnimation } from "react-type-animation";


type TypeAnimationProps = {
	text: string;
};

export default function CustomTypeWritter({ text }: TypeAnimationProps) {
  return (
    <TypeAnimation
      sequence={[
        text,
        500,
        "",
        1000,
	text,
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
