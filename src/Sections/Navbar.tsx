import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/tailwind";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={cn("fixed top-0 z-20 flex w-full items-center bg-primary py-5", styles.paddingX)}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="cursor-pointer text-lg font-bold capitalize text-white">Prakhar</p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn("cursor-pointer text-lg font-medium hover:text-white", {
                "text-white": active === link.title,
                "text-secondary": active !== link.title,
              })}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img src={toggle ? close : menu} alt="menu" className="h-7 w-7 object-contain" onClick={() => setToggle(!toggle)} role="button" />
          <div className={cn(toggle ? "flex" : "hidden", "black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-36 rounded-xl p-6")}>
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn("font-poppins cursor-pointer text-base font-medium", {
                    "text-white": active === link.title,
                    "text-secondary": active !== link.title,
                  })}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
