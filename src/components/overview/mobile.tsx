"use client";
import android from "@/assets/android.png";
import kotlin from "@/assets/kotlin.png";
import flutter from "@/assets/flutter.png";
import dart from "@/assets/dart.png";
import { ItemCanvas } from "./techitem";

export const MobileStack = () => {
  const items = [flutter, dart, android, kotlin];

  return (
    <div className="flex flex-wrap items-center justify-center gap-7 h-fit mx-auto">
      {items.map((item) => (
        <div className="w-18 h-18" key={item.src}>
          <ItemCanvas icon={item.src} />
        </div>
      ))}
    </div>
  );
};
