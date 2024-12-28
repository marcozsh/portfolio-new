import { ts, nextjs, tailwind, postgres } from "@/data/links";
export const projects = [
  {
    name: "Convertir Imagen a Texto",
    description:
      "App para convertir imagenes a texto, soporta multiples tipo de imágenes y está potenciado por Tesseract y su capacidad de detectar más de 100 idiomas. También cuenta con la funcionalidad de login, para que puedas guardar el log de las transformaciones a texto que se realizan.",
    pageImg: "/imgtotext.webp",
    links: [
      {
        link: "https://github.com/marcozsh/img-to-text",
        type: 1,
      },
      {
        link: "https://img-to-text-eta.vercel.app/home",
        type: 2,
      },
    ],
    techs: [{ img: ts }, { img: nextjs }, { img: tailwind }, { img: postgres}],
  },
  {
    name: "Computectnicos",
    description:
      "Lading page para un servicio técnico de computadoras, donde se muestran las calificaciones de los clientes, con formulario de contacto y sistema de ranking de servicios.",
    pageImg: "/computecnicos.webp",
    links: [
      {
        link: "https://github.com/marcozsh/computecnicos",
        type: 1,
      },
      {
        link: "https://computecnicos.vercel.app/home",
        type: 2,
      },
    ],
    techs: [{ img: ts }, { img: nextjs }, { img: tailwind }, { img: postgres}],
  },
];
