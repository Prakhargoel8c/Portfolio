import { motion } from "framer-motion";
import { type FC } from "react";
import { styles } from "../../styles";
import { staggerContainer } from "../../utils/motion";
import { cn } from "../../utils/tailwind";

export const SectionWrapper = (Component: FC, idName: string) => () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer()}
      id={idName}
      className={cn(styles.padding, "relative z-0 mx-auto max-w-7xl")}
    >
      <span className="hash-name" id={idName} aria-hidden="true">
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );
};
