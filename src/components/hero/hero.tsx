import { cn } from "@/lib/utils";

import GlowingBtn from "../ui/glowing-btn";
import { Spotlight } from "../ui/spotlight";
import Intro from "./intro";
import Welcome from "./welcome";

export default function Hero() {
  return (
    <div className="relative flex py-50 h-fit w-full overflow-hidden  bg-[#0a0a0a] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <Spotlight />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <Welcome />
        <Intro />
        <div className="h-12"></div>
        <GlowingBtn text="Let's Explore" href="#overview" />
      </div>
    </div>
  );
}
