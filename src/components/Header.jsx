import React, { useEffect, useState } from 'react'
import night from '../assets/img/night.svg'

const Header = () => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <header className='py-6 shadow-header dark:bg-lightDark dark:text-white'>
      <div className="flex justify-between items-center w-full max-w-[1320px] px-5 mx-auto">
        <a className='text-textColor text-xl font-bold sm:text-2xl dark:text-white' href="#">
            <h1>Where in the world?</h1>
        </a>

        <button onClick={toggleDarkMode} className='inline-flex items-center tex-base font-semibold text-textColor dark:text-white'>
          <img className='mr-2' src={night} alt="Moon icon" />
          <span className='hidden sm:block'>Dark mode</span>
        </button>
      </div>
    </header>
  )
}

export default Header
