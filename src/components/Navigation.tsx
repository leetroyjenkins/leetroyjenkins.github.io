'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/TroyAscherDataEngineer.pdf', external: true },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Troy Ascher</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const className = `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                isActive ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={className}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const className = `block px-3 py-2 rounded-md text-base font-medium ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={className}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
