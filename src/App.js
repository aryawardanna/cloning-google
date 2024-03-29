import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Routes } from './components/Routes';
import { Footer } from './components/Footer';
// import { Search } from './components/Search';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {/* <Search /> */}
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
