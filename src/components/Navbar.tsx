import { useState } from 'react';
import { cn } from '../utils/tailwind';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={cn('w-full flex items-center fixed z-20 top-0 py-5 bg-primary', styles.paddingX)}>
      <div className="w-full flex max-w-7xl justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white capitalize font-bold cursor-pointer text-lg">Prakhar</p>
        </Link>
        <ul className="hidden sm:flex gap-10 flex-row list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn('hover:text-white text-lg font-medium cursor-pointer', {
                'text-white': active === link.title,
                'text-secondary': active !== link.title,
              })}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-7 h-7 object-contain" onClick={() => setToggle(!toggle)} role="button" />
          <div className={cn(toggle ? 'flex' : 'hidden', 'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-36 z-10 rounded-xl')}>
            <ul className="flex flex-col list-none justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn('font-poppins text-base font-medium cursor-pointer', {
                    'text-white': active === link.title,
                    'text-secondary': active !== link.title,
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
