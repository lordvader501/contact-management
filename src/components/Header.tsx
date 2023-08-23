import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='bg-black text-black font-semibold py-4 text-xl whitespace-nowrap'>
      <nav className='flex justify-center'>
        <ul className='flex flex-row list-none w-1/4 md:w-2/4 sm:w-2/4 max-[645px]:w-full justify-evenly'>
          <Link to='/'><li className='border border-yellow-400 rounded-full px-4 py-2 bg-yellow-400'>Contacts</li></Link>
          <Link to='/charts-and-maps'><li className='border border-yellow-400 rounded-full px-4 py-2 bg-yellow-400'>Charts and Maps</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;