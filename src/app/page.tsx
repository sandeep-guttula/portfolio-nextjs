import { TracingBeam } from "@/components/beam/tracing-beam";
import Navbar from "@/components/navbar/Navbar";
import Contact from "@/components/pages/Contact";
import Hero from "@/components/pages/Hero";
import MyProjects from "@/components/pages/MyProjects";
import MyWorks from "@/components/pages/MyWorks";
import Skills from "@/components/pages/Skills";

export default function Home() {
  const words = `An enthusiastic designer & developer based in India.`;
  return (
    <>
      <div className="lg:ml-[-10%]">
        <TracingBeam className="">
          <div className="w-[120%] antialiased pt-4 relative">
            <Navbar />
            <Hero />
            <MyWorks />
            <MyProjects />
            <Skills />
            <Contact />
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
