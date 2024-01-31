import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "./hoc";

interface ServiceCardProps {
  title: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, index }) => {
  return (
    <Tilt className="w-full xs:w-[15.5rem]">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="green-pink-gradient w-full rounded-[20px] p-px shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="flex min-h-72 flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
        >
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-xl font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 max-w-3xl text-[1.06rem] leading-[30px] text-secondary">
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and .
        Constantly seeking new horizons in software engineering, I yearn to join a revered tech kingdom. Let's script our destinies together and
        embark on a grand adventure of innovation and growth. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
