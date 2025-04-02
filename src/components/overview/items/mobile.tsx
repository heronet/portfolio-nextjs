"use client";
import android from "@/assets/android.png";
import kotlin from "@/assets/kotlin.png";
import flutter from "@/assets/flutter.png";
import dart from "@/assets/dart.png";
import TechItem from "./techitem";

export const MobileStack = () => {
  const techIcons = [
    { src: flutter.src, alt: "Flutter" },
    { src: dart.src, alt: "Dart" },
    { src: android.src, alt: "Android" },
    { src: kotlin.src, alt: "Kotlin" },
  ];

  return (
    <div className="md:grid sm:flex grid grid-cols-2 h-full items-center px-8 mt-2 justify-center gap-8">
      {techIcons.map((icon, index) => (
        <TechItem icon={icon} key={index} />
      ))}
    </div>
  );
};
