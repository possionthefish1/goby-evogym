import { useState } from 'react';
import { Navbar } from './components/Navbar';
function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
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
