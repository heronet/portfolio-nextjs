import { Awards } from "@/components/awards/awards";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import { Navbar } from "@/components/navbar";
import Overview from "@/components/overview/overview";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Overview />
      <Awards />
      <Experience />
    </div>
  );
}
