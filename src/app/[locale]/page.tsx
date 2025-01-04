import Landing from "@/components/lading/landing";

import Projects from "@/components/projects/projects";

import Experience from "@/components/experience/experience";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main className="">
    	<Landing/>
	<Projects/>
	<Experience/>
	<About/>
    </main>
  );
}
