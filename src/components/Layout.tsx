import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      {/* Mobile Header */}
      <header className="lg:hidden flex justify-between items-center px-6 py-4 fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
        <span className="text-xl font-black text-on-surface tracking-tight font-headline">Dalton Khatri</span>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary p-2 hover:bg-surface-high rounded-lg transition-transform active:scale-90"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-40 lg:hidden bg-background p-6 pt-24"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      <Sidebar />

      <main className="flex-1 min-w-0 pt-24 lg:pt-16 pb-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-16">
          <Outlet />
        </div>
      </main>
    </div>
  );
}