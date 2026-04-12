import { Home, Folder, User, Briefcase, Image as ImageIcon, Mail, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Github, Instagram } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useTheme } from './Layout';

const navItems = [
  { icon: Home,      label: 'Home',       path: '/' },
  { icon: User,      label: 'About',      path: '/about' },
  { icon: Folder,    label: 'Projects',   path: '/projects' },
  { icon: Briefcase, label: 'Experience', path: '/experience' },
  { icon: ImageIcon, label: 'Gallery',    path: '/gallery' },
  { icon: Mail,      label: 'Contact',    path: '/contact' },
];

const socialLinks = [
  { icon: Github,     href: 'https://github.com/Dalton-Khatri',                        label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dalton-khatri-856259342/',    label: 'LinkedIn' },
  { icon: Instagram,  href: 'https://www.instagram.com/dalton_khatri/',                label: 'Instagram' },
];

interface SidebarProps {
  onNavClick?: () => void;
}

export default function Sidebar({ onNavClick }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="flex flex-col h-screen sticky top-0 p-6 bg-surface-low w-72 shrink-0 border-r border-outline-variant">

      {/* Profile section */}
      <div className="mt-1 mb-4 flex flex-col items-center text-center">
        <div className="relative w-40 h-40 mb-4 group overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-container rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
          <img
            src="/assets/ProfilePic.jpg"
            alt="Dalton Khatri"
            className="w-full h-full rounded-full object-cover border-2 border-surface-high relative z-10"
            style={{ objectPosition: 'center 40%', transform: 'scale(1.5)', transformOrigin: 'center' }}
          />
        </div>

        <h2 className="text-base font-bold text-on-surface font-headline">Dalton Khatri</h2>
        <p className="text-xs text-on-surface-variant font-medium mt-1 leading-snug px-2">
          Computer Engineering Student @ Kathmandu University
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 space-y-1 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            onClick={onNavClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-3 rounded-full transition-all duration-300 group text-sm",
                isActive
                  ? "bg-surface-high text-primary border-l-2 border-primary"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-high"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom — Theme toggle */}
      <div className="mt-auto pt-4 border-t border-outline-variant">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 text-on-surface-variant px-3 py-2.5 mt-3 hover:text-primary transition-colors w-full rounded-full hover:bg-surface-high"
        >
          {theme === 'dark'
            ? <Sun className="w-4 h-4" />
            : <Moon className="w-4 h-4" />
          }
          <span className="text-xs font-medium">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </aside>
  );
}