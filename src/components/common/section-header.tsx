"use client";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({ title, subtitle }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-3xl text-center mx-auto flex flex-col justify-center items-center pb-20 px-4 md:px-8 lg:px-10"
    >
      <motion.h2
        variants={itemVariants}
        className="text-lg md:text-4xl font-bold mb-4 text-white relative z-10"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-neutral-300 text-sm md:text-base"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
