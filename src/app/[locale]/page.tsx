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
      {/*Background credits to https://bg.ibelick.com/*/}
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div
            className={`absolute bottom-0 left-0 right-0 top-0 
		bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
		bg-[size:14px_24px]`}
          ></div>
        </div>
      </div>
      {/*Background*/}
      <Landing />
      <Projects />
      <Experience />
      <About />
    </main>
  );
}
