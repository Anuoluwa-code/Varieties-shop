// DarkModeToggle.jsx
'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useCart } from './CartContext';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const {setColor} = useCart()

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      setColor('bg-black')
    } else {
      root.classList.remove('dark');
      setColor('bg-green-700')
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded focus:outline-none cursor-pointer"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkModeToggle;
