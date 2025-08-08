"use client";
import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function GlowingBtn({
  text,
  href,
  download,
  className,
}: {
  text: string;
  href: string;
  download?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0.9,
      }}
      className="relative z-10 flex flex-wrap items-center justify-center gap-4"
    >
      <Link
        href={href}
        download={download}
        className={cn(
          "relative w-fit mx-auto  flex h-10 transition-all overflow-hidden rounded-3xl hover:rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          className
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center transition-all rounded-3xl hover:rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {text}
          {download ? (
            <span className="ml-2 inline-flex items-center justify-center">
              <IconDownload className="w-5 h-5" />
            </span>
          ) : (
            <svg
              fill="none"
              height="22"
              width="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </span>
      </Link>
    </motion.div>
  );
}
