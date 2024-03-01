import { ElementRef, HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/tailwind";

interface HeadingProps extends HTMLAttributes<ElementRef<"h2">> {
  children: ReactNode;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h2 className={cn("mb-4 text-3xl/tight font-bold text-neutrals-50 md:text-5xl/tight", className)} {...props}>
      {children}
    </h2>
  );
};

interface CaptionProps extends HTMLAttributes<ElementRef<"p">> {
  children: ReactNode;
}

export const Caption = ({ children, className, ...props }: CaptionProps) => {
  return (
    <p
      className={cn(
        "relative mb-4 inline-block overflow-hidden rounded-full border-0.5 border-accent/30 bg-accent/10 px-4 py-1 font-medium uppercase text-accent backdrop-blur-sm after:absolute after:inset-0 after:animate-shiny-badge-slide after:bg-accent/10 max-md:text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

interface ParagraphProps extends HTMLAttributes<ElementRef<"p">> {
  children: ReactNode;
}

export const Paragraph = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p className={cn("max-w-prose text-base/relaxed text-neutrals-300", className)} {...props}>
      {children}
    </p>
  );
};
