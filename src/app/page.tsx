import { Awards } from "@/components/awards/awards";
import Hero from "@/components/hero/hero";
import Overview from "@/components/overview/overview";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Overview />
      <Awards />
    </div>
  );
}
