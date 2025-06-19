import { Moon, Sun } from 'lucide-react';
import React, { use } from 'react'
import {useState, useEffect} from 'react';
const Themetoggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark' || !storedTheme) {
    // Default to dark mode if no theme is set
    setIsDarkMode(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Save preference
  } else {
    setIsDarkMode(false);
    document.documentElement.classList.remove('dark');
  }
}, []);

  const toggleTheme = () => {
    if(isDarkMode){
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
    else{
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  }
  return <button onClick={toggleTheme} className='fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300 focus:outlin-hidden'> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className='h-6 w-6 text-blue-900'/>} </button>
}

export default Themetoggle
