import { TracingBeam } from "@/components/beam/tracing-beam";
import BackgroundBeams from "@/components/beams/background-beams";
import { TailwindcssButtons } from "@/components/button/TailwindcssButtons";
import { HeroScrollDemo } from "@/components/containerScroll/HeroScrollDemo";
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving/InfiniteMovingCardsDemo";
import { FloatingNavDemo } from "@/components/navbar/FloatingNavDemo";
import MyProjects from "@/components/pages/MyProjects";
import MyWorks from "@/components/pages/MyWorks";
import Skills from "@/components/pages/Skills";
import { SpotlightPreview } from "@/components/spotlight/SpotlightPreview";

export default function Home() {
  const words = `An enthusiastic designer & developer based in India.`;
  return (
    <>
      <div className="lg:ml-[-10%]">
        <TracingBeam className="">
          <div className="w-[120%] antialiased pt-4 relative">
            <FloatingNavDemo />
            <BackgroundBeams />
            <MyWorks />
            <MyProjects />
            <Skills />
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
