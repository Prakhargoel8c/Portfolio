import { useState } from 'react';
import { cn } from '../utils/tailwind';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  return (
    <nav className={cn('w-full flex items-center fixed z-20 top-0 py-5 bg-primary', styles.paddingX)}>
      <div className="w-full flex max-w-7xl justify-center items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
