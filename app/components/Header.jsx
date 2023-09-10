import Link from 'next/link';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

import NavLink from './NavLink';

const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <Logo />
      </Link>
      <div className='links'>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} href={item.href} className='links'>
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
