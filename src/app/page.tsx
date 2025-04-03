import Awards from "@/components/awards/awards";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Overview from "@/components/overview/overview";
import Projects from "@/components/projects/projects";
import Recommendations from "@/components/recommendations/recommendations";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Experience />
      <Projects />
      <Education />
      <Awards />
      <Recommendations />
      <Contact />
      <Footer />

      <Analytics />
    </div>
  );
}
