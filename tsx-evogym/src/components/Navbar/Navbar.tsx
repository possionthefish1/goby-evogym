import Logo from '@/assets/Logo.png';
import type { CurrentPage } from '@/shared/types';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { ActionButton } from '../ActionButton';
import { Links } from './Links';

type Props = {
  isAtTop: boolean;
  currentPage: string;
  setCurrentPage: (value: CurrentPage) => void;
};

function Navbar({ isAtTop, currentPage, setCurrentPage }: Props) {
  const navBackground = isAtTop ? '' : 'bg-primary-100 drop-shadow';
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className='@container'>
      <div
        className={`${navBackground} fixed top-0 z-30 flex w-full items-center justify-between py-6`}
      >
        <div
          className={
            'mx-auto flex w-5/6 items-center justify-between'
          }
        >
          <div
            className={
              'flex w-full items-center justify-between gap-16'
            }
          >
            {/* Left side */}
            <img
              src={Logo}
              alt='EvoGym logo. Maroon red text in uppercase, with a red circle'
            />
            {/* Right Side */}
            {/* //@bm - Hamburger container */}
            {/* -del py-10 later if needed */}
            <div
              className={
                '@container hidden w-full items-center justify-between @5xl:flex'
              }
            >
              {/* Inner Left */}
              <div
                className={
                  'flex items-center justify-between gap-8 text-sm'
                }
              >
                <Links
                  page='Home'
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <Links
                  page='Benefits'
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <Links
                  page='Our Classes'
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
                <Links
                  page='Contact Us'
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              {/* Inner Right */}
              <div
                className={
                  'flex items-center justify-between gap-8'
                }
              >
                <p>Sign in</p>
                <ActionButton setCurrentPage={setCurrentPage}>
                  Become a member
                </ActionButton>
              </div>
            </div>
            {/* //@bm-r - End Hamburger container */}
            <button
              type='button'
              className='rounded-full bg-secondary-500 p-2 @5xl:hidden'
              onClick={() => setOpen(!open)}
            >
              <Bars3Icon className='size-6 text-white' />
            </button>
          </div>
        </div>
      </div>
      {/* 
			//@bm-p Mobile menu nav fix h-full later
			*/}
      {open && (
        <nav className='fixed top-0 right-0 z-40 h-dvh w-80 bg-primary-100 drop-shadow-xl @5xl:hidden'>
          {/* X Icon */}
          <div className='flex justify-end p-12'>
            <button
              type='button'
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className='size-6 text-gray-400' />
            </button>
          </div>
          {/* Menu Items */}
          <div className={'ms-[33%] flex flex-col gap-10 text-2xl'}>
            <Links
              page='Home'
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Links
              page='Benefits'
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Links
              page='Our Classes'
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Links
              page='Contact Us'
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </nav>
      )}
    </nav>
  );
}

export { Navbar };
