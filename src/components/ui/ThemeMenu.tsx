"use client";

import { Check, Menu as MenuIcon, Monitor, Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "../primitives/button";
import { Popover, PopoverContent, PopoverTrigger } from "../primitives/popover";

const appearances = [
  {
    theme: "System",
    icon: <Monitor className="size-4" />,
  },
  {
    theme: "Light",
    icon: <SunDim className="size-4" />,
  },
  {
    theme: "Dark",
    icon: <Moon className="size-4" />,
  },
];

export const ThemeMenu = () => {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button isGhost type="button" className="group absolute bottom-5 right-5 z-10 rounded-lg sm:bottom-auto sm:top-10 px-3">
          <MenuIcon className="dark:text-white size-4 dark:group-hover:text-stone-600 group-hover:text-neutral-50 text-stone-800" width={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 dark:bg-black bg-white" align="end">
        <div className="p-2">
          <p className="p-2 text-sm font-bold dark:text-white">Appearance</p>
          {appearances.map(({ theme, icon }) => (
            <Button
              isGhost
              type="button"
              key={theme}
              className="w-full justify-between border-none"
              onClick={() => setTheme(theme.toLowerCase())}
              size="small"
            >
              <div className="flex items-center space-x-2">
                <div className="rounded-sm border border-white p-1">{icon}</div>
                <span>{theme}</span>
              </div>
              {currentTheme === theme.toLowerCase() && <Check className="size-4" />}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
