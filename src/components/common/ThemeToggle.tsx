import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('feria_theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('feria_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('feria_theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2 rounded-xl text-charcoal-600 dark:text-sand-300 hover:bg-sand-200 dark:hover:bg-charcoal-600 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-terracotta"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo Claro' : 'Modo Oscuro'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
      ) : (
        <Moon className="w-5 h-5 text-terracotta" />
      )}
    </button>
  );
};
