import { motion } from "framer-motion";
import { MatrixBackground } from "../components";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { cn } from "../utils/tailwind";

const Code = () => {
  return (
    <section
      className={cn(
        "relative z-10 flex min-h-screen w-full flex-col justify-center py-32",
        "before:absolute before:inset-x-0 before:top-0 before:-z-10 before:mx-auto before:h-px before:w-4/5 before:max-w-7xl before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent",
      )}
    >
      <MatrixBackground />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer()}
        className={cn(styles.padding, "z-0 mx-auto w-11/12 max-w-7xl 2xl:w-4/5")}
      ></motion.div>
    </section>
  );
};

export default Code;
