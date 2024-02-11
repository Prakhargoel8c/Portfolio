import { Button, Caption, Heading, MatrixBackground, Paragraph } from "../components";
import { styles } from "../styles";
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
      <div className={cn(styles.padding, "z-0 mx-auto w-11/12 max-w-7xl 2xl:w-4/5")}>
        <div className="flex h-full flex-col items-center justify-center text-center">
          <Caption id="sourcecode-heading">Source code</Caption>
          <Heading>Behind the simulation</Heading>
          <Paragraph>
            You take the <span className="text-neutrals-100">blue pill</span> - you keep scrolling, you leave this site and believe whatever you want
            to believe. You take the <span className="text-neutrals-100">red pill</span> - you stay in wonderland, and I show you how deep the rabbit
            hole goes.
          </Paragraph>
          <Button as="a" href={import.meta.env.VITE_REPO_LINK} rel="noreferrer" target="_blank" foreground="error" className="mt-8">
            Show me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Code;
