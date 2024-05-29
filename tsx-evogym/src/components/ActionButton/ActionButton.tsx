import { CurrentPage } from '@/shared/types';
import type React from 'react';
// import styles from './ActionButton.module.css';

import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode;
  setCurrentPage: (value: CurrentPage) => void;
};

function ActionButton({ children, setCurrentPage }: Props) {
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => setCurrentPage(CurrentPage.ContactUs)}
      href={`#${CurrentPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}

export { ActionButton };
