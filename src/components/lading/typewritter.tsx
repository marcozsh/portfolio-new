"use client";
import { TypeAnimation } from "react-type-animation";

export default function CustomTypeWritter() {
  return (
    <TypeAnimation
      sequence={[
        "¡Hola!",
        500,
        "",
        1000,
        "¡Hola!",
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "3rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
