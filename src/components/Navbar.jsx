import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Tracks', to: 'tracks' },
  { name: 'Problems', to: 'problems' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'FAQ', to: 'faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-7xl backdrop-blur-lg bg-white/10 shadow-lg rounded-full border border-white/20 ">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold gradient-text">PES MCOE Hack</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-foreground/80 hover:text-foreground text-sm font-medium cursor-pointer transition"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition">
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground/80 hover:text-foreground transition">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-4 shadow-md transition-opacity">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium transition">
              Register Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
