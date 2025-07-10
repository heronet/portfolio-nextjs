"use client";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <div>
      {/* <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                  Bringing ideas into reality <br /> with quality code.
                </h1> */}
      <h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold   md:text-7xl text-slate-300">
        {"Bringing ideas into reality with quality code"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(0px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
      </h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
        className="relative z-10 mx-auto max-w-xl  py-4 text-center text-lg font-normal text-neutral-400"
      >
        I&apos;m Sirat, a Software Engineer specializing in full-stack web
        development and Embedded Systems.
      </motion.p>
    </div>
  );
}
