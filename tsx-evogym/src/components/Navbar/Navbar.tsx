import Logo from '@/assets/Logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Links } from './Links';

Bars3Icon;
XMarkIcon;

useState;

type Props = {
  currentPage: string;
  setCurrentPage: (value: string) => void;
};

function Navbar({ currentPage, setCurrentPage }: Props) {
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav className='@container'>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div
          className={`${flexBetween} 
					mx-auto w-5/6
				`}
        >
          <div
            className={`${flexBetween} 
					w-full gap-16
				`}
          >
            {/* Left side */}
            <img
              src={Logo}
              alt='EvoGym logo. Maroon red text in uppercase, with a red circle'
            />
            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              {/* Inner Left */}
              <div className={`${flexBetween} gap-8 text-sm`}>
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
                  page='Contact'
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              {/* Inner Right */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <button type='button'>Become a member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
