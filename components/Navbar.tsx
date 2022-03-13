import React from 'react';
import Link from 'next/link';
import { useAppContext } from '../contexts/appContext';

interface Props {}

const Navbar = (props: Props) => {
  const { setSelectedDate } = useAppContext();
  return (
    <nav className='flex flex-col absolute w-full justify-end items-center min-h-screen z-50 scroll pointer-events-none'>
      <ul className='flex gap-6 md:gap-6 z-50 text-white w-full bg-purple-500 px-12 md:px-16 py-6 max-w-fit rounded-full my-12 pointer-events-auto'>
        <li>
          <Link href={'/'}>
            <a
              className='hover:bg-gray-200 hover:text-black duration-200 h-full w-full rounded-full hover:px-6 hover:py-2'
              onClick={() => setSelectedDate('')}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/today'}>
            <a
              className='hover:bg-gray-200 hover:text-black duration-200 h-full w-full rounded-full hover:px-6 hover:py-2'
              onClick={() => setSelectedDate('')}
            >
              Today
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/all'}>
            <a
              className='hover:bg-gray-200 hover:text-black duration-200 h-full w-full rounded-full hover:px-6 hover:py-2'
              onClick={() => setSelectedDate('')}
            >
              Browse
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
