import { Awards } from "@/components/awards/awards";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Overview from "@/components/overview/overview";
import Projects from "@/components/projects/projects";
import Recommendations from "@/components/recommendations/recommendations";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Overview />
      <Experience />
      <Awards />
      <Projects />
      <Education />
      <Recommendations />
      <Footer />
    </div>
  );
}
