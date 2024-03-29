import { motion } from "framer-motion";
import { type FC } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { cn } from "../utils/tailwind";
import { SectionWrapper } from "./hoc";

export const ExperienceCard: FC<(typeof experiences)[0]> = ({ date, points, iconBg, icon, company_name, title, iconClassName }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img src={icon} alt={company_name} className={cn("size-4/5 rounded-full object-contain", iconClassName)} />
        </div>
      }
    >
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="!m-0 text-base font-semibold text-secondary">{company_name}</p>
      </div>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, index) => (
          <li key={index} className="pl-1 text-sm tracking-wider text-white-100">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="flex-col-mt-20 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
