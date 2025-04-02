"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 20,
            }
      }
      transition={{
        duration: 1,
      }}
      className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center pb-20 px-4 md:px-8 lg:px-10"
    >
      <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
        {title}
      </h2>
      <p className="text-neutral-300  text-sm md:text-base">{subtitle}</p>
    </motion.div>
  );
}
