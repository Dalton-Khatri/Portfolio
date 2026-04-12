import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ── Theme Context ──────────────────────────────────────────────────────────
type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

// ── Layout ─────────────────────────────────────────────────────────────────
export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex min-h-screen bg-background text-on-surface">

        {/* Mobile Header */}
        <header className="lg:hidden flex justify-between items-center px-6 py-3 fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/40 shrink-0">
              <img
                src="/assets/ProfilePic.jpg"
                alt="Dalton Khatri"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%', transform: 'scale(1.5)', transformOrigin: 'center 30%' }}
              />
            </div>
            <span className="text-xl font-black text-on-surface tracking-tight font-headline">Dalton Khatri</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary p-2 hover:bg-surface-high rounded-lg transition-transform active:scale-90"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Sidebar drawer */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="fixed top-0 left-0 h-full z-50 lg:hidden w-72"
              >
                <Sidebar onNavClick={() => setIsMobileMenuOpen(false)} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="flex-1 min-w-0 pt-24 lg:pt-16 pb-16 overflow-x-hidden">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-16">
            <Outlet />
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}