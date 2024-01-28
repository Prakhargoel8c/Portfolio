import { cn } from "../utils/tailwind";
import { styles } from "../styles";
import { ComputersCanvas } from ".";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative mx-auto h-dvh w-full">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[7.5rem] mx-auto flex max-w-7xl items-start gap-5",
        )}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi I'm <span className="capitalize text-[#915eff]">prakhar</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I'm a{" "}
            <span className="capitalize text-[#915eff]">
              full stack developer
            </span>{" "}
            based in India.
            <br className="hidden sm:block" /> I love to build things for the
            web.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
        <a href="#about" className="">
          <div className="flex h-16 w-[2.18rem] items-start justify-center p-2">
            <motion.div className=""></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
