import { cn } from '../utils/tailwind';
import { styles } from '../styles';
import { ComputersCanvas } from '.';

const Hero = () => {
  return (
    <section className="relative w-full h-dvh mx-auto">
      <div className={cn(styles.paddingX, 'absolute inset-0 top-[7.5rem] max-w-7xl mx-auto flex items-start gap-5')}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={cn(styles.heroHeadText, 'text-white')}>
            Hi I'm <span className="text-[#915eff] capitalize">prakhar</span>
          </h1>
          <p className={cn(styles.heroSubText, 'mt-2 text-white-100')}>
            I'm a <span className="text-[#915eff] capitalize">full stack developer</span> based in India.
            <br className="sm:block hidden" /> I love to build things for the web.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
