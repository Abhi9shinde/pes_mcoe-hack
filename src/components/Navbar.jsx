import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'About', to: 'about', type: 'scroll' },
  { name: 'Problems', to: '/problems', type: 'route' },
  { name: 'Timeline', to: 'timeline', type: 'scroll' },
  { name: 'Tracks', to: 'tracks', type: 'scroll' },
  { name: 'FAQ', to: 'faq', type: 'scroll' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ item }) => {
    if (item.type === 'scroll') {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          className="text-foreground/80 hover:text-foreground text-sm font-medium cursor-pointer transition"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        to={item.to}
        className="text-foreground/80 hover:text-foreground text-sm font-medium transition"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </RouterLink>
    );
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-7xl backdrop-blur-lg bg-background/50 shadow-lg rounded-full border border-border">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <RouterLink to="/" className="flex-shrink-0">
          <span className="text-2xl font-bold gradient-text">PES MCOE Hack</span>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          <ThemeToggle />
          <RouterLink
            to="/register"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Register Now
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground/80 hover:text-foreground transition"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-background/50 backdrop-blur-lg rounded-xl border border-border p-4 shadow-md transition-opacity md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
            <RouterLink
              to="/register"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
}