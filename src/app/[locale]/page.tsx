import Landing from "@/components/lading/landing";

import Projects from "@/components/projects/projects";

import Experience from "@/components/experience/experience";
import About from "@/components/about/about";

// cuando cree el blog, ahí sí debe ir esto

//import { unstable_setRequestLocale } from "next-intl/server";

//type Props = {
//params: { locale: string };
//};
//export default function Home({ params }: Props) {
//
export default function Home() {
  //const { locale } = params;
  //unstable_setRequestLocale(locale);
  return (
    <main>
      <Landing />
      <Projects />
      <Experience />
      <About />
    </main>
  );
}
