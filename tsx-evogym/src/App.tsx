import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CurrentPage } from './shared/types';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.Home,
  );
  return (
    <div className='app bg-gray-50'>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export { App };
