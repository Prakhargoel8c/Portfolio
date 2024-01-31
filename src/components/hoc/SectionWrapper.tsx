import React, { FC } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { cn } from "../../utils/tailwind";
import { styles } from "../../styles";

export const SectionWrapper = (Camponent: FC, idName: string) => () => {
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
      <Camponent />
    </motion.section>
  );
};
