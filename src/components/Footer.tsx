'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-gray-800 font-semibold">Troy Ascher</p>
            <p className="text-sm text-gray-600">Data Engineer</p>
          </div>
          <nav className="flex justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>
          <div className="flex md:justify-end gap-4 text-sm">
            <a href="/TroyAscherDataEngineer.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Resume</a>
            <a href="https://linkedin.com/in/troy-ascher" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
            <a href="https://github.com/leetroyjenkins" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} Troy Ascher. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
