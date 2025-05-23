

'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Update document and localStorage when toggled
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const toggleDark = () => setDark(prev => !prev);

  return (
    <header className="flex items-center justify-between py-6 px-4 md:px-16 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Your Name</h1>
      <nav className="space-x-4 hidden md:block">
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Projects</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Newsletter</a>
      </nav>
      <button
        onClick={toggleDark}
        className="ml-4 border p-2 rounded-full transition duration-300 bg-white dark:bg-gray-800"
        aria-label="Toggle dark mode"
      >
        {dark ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-gray-700" />}
      </button>
    </header>
  );
}
