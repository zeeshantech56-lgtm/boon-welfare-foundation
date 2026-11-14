import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { VisionMission } from "@/components/home/VisionMission";
import { FocusAreas } from "@/components/home/FocusAreas";
import { Impact } from "@/components/home/Impact";
import { Voices } from "@/components/home/Voices";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <FocusAreas />
        <Impact />
        <Voices />
      </main>
      <SiteFooter />
    </div>
  );
}
