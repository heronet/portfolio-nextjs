import { motion } from "motion/react";
import Image from "next/image";

export default function TechItem({
  icon,
}: {
  icon: { src: string; alt: string };
}) {
  return (
    <motion.div className="relative group" whileHover={{ scale: 1.1 }}>
      <motion.div
        className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center p-4"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src={icon.src}
          alt={icon.alt}
          width={64}
          height={64}
          className="object-contain"
        />
      </motion.div>
      <motion.span className="absolute duration-200 -bottom-6 opacity-0 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap">
        {icon.alt}
      </motion.span>
    </motion.div>
  );
}
