import Awards from "@/components/awards/awards";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Overview from "@/components/overview/overview";
import WebProjects from "@/components/projects/web/webprojects";
import EmbeddedProjects from "@/components/projects/embedded/embeddedprojects";
import Research from "@/components/research/research";
import OpenSource from "@/components/opensource/opensource";
import Skills from "@/components/skills/skills";
import Recommendations from "@/components/recommendations/recommendations";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Experience />
      <Research />
      <OpenSource />
      <EmbeddedProjects />
      <WebProjects />
      <Skills />
      <Education />
      <Awards />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
}
