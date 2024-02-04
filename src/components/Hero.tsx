import { motion } from "framer-motion";
import { ComputersCanvas } from ".";
import { styles } from "../styles";
import { cn } from "../utils/tailwind";

const Hero = () => {
  return (
    <section className="relative mx-auto h-dvh w-full">
      <div className={cn(styles.paddingX, "absolute inset-0 top-[7.5rem] mx-auto flex max-w-7xl items-start gap-5")}>
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi I'm <span className="capitalize text-[#915eff]">prakhar</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I'm a <span className="capitalize text-[#915eff]">full stack developer</span> based in India.
            <br className="hidden sm:block" /> I love to build things for the web.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute bottom-24 z-[9999999] flex w-full items-center justify-center xs:bottom-4">
        <a href="#about" className="">
          <div className="flex h-16 w-[2.18rem] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: "1.5",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 size-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
