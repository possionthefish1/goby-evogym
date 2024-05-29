import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { CurrentPage } from './shared/types';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.Home,
  );

  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setCurrentPage(CurrentPage.Home);
      } else {
        setIsAtTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='app bg-gray-50'>
      <Navbar
        isAtTop={isAtTop}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export { App };
