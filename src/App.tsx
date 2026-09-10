import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';


import Contact from './components/Contact';

type Theme = 'light' | 'dark' | 'system';

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(theme: Theme) {
  const isDark = theme === 'dark' || (theme === 'system' && getSystemDark());
  document.documentElement.classList.toggle('dark', isDark);
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved || 'system';
  });

  const isDark = theme === 'dark' || (theme === 'system' && getSystemDark());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') applyTheme('system');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Particle background (fixed) */}
      <ParticleBackground isDark={isDark} />

      {/* Gradient blobs */}
      <div className="blob-blue" />
      <div className="blob-green" />
      <div className="blob-purple" />

      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main content */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Blog />


        <Contact />
      </main>
    </div>
  );
}
