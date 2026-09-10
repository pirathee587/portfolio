import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor, Menu, X, Code2 } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

interface NavbarProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'My Skills', href: '#skills' },
  { label: 'Medium', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-xl hover:scale-105 transition-transform"
          >
            <Code2 className="w-6 h-6" />
            <span className="hidden sm:inline">Portfolio</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme switcher */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full px-1.5 py-1.5">
            {(['light', 'dark', 'system'] as Theme[]).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`theme-pill flex items-center gap-1.5 ${theme === t ? 'active' : ''}`}
                aria-label={`Switch to ${t} theme`}
              >
                {t === 'light' && <Sun className="w-3.5 h-3.5" />}
                {t === 'dark' && <Moon className="w-3.5 h-3.5" />}
                {t === 'system' && <Monitor className="w-3.5 h-3.5" />}
                <span className="capitalize">{t}</span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-800 mt-2 pt-4 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl rounded-2xl px-4 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left py-2.5 nav-link"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 mt-4 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1.5 w-fit">
              {(['light', 'dark', 'system'] as Theme[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`theme-pill flex items-center gap-1 text-xs ${theme === t ? 'active' : ''}`}
                  aria-label={`Switch to ${t} theme`}
                >
                  {t === 'light' && <Sun className="w-3 h-3" />}
                  {t === 'dark' && <Moon className="w-3 h-3" />}
                  {t === 'system' && <Monitor className="w-3 h-3" />}
                  <span className="capitalize">{t}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
