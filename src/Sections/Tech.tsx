import { BallCanvas } from ".";
import { technologies } from "../constants";
import { SectionWrapper } from "./hoc";

const Tech = () => {
  return (
    <div className="lg:flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="size-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech", "lg:block hidden");
