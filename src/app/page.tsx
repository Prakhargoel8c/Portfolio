"use client";

import { Rocket } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "~/components/primitives/button";
import { ThemeMenu } from "~/components/ui/ThemeMenu";
import { SparklesCore } from "~/components/ui/sparkles";
import { TypewriterEffectSmooth } from "~/components/ui/typewriter-effect";

const words = [
  {
    text: "Let's",
  },
  {
    text: "Build",
  },
  {
    text: "Awesome",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Apps",
  },
  {
    text: "Together...",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function HomePage() {
  const { theme } = useTheme();
  return (
    <div className="h-dvh w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <ThemeMenu />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden">
        <p className="text-neutral-600 dark:text-neutral-200 text-xxs sm:text-base">Welcome to my Universe</p>
        <TypewriterEffectSmooth words={words} />
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1000}
            className="w-full h-full"
            particleColor={theme === "dark" ? "#FFFFFF" : "#2c2929"}
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <Button as="a" foreground="error" className="rounded-full space-x-2" href="/home">
        <Rocket /> <span>Explore</span>
      </Button>
    </div>
  );
}
