import React, { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-nu-purple">NU</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-nu-purple'
                    : 'text-white hover:text-nu-purple-light'
                }`}
              >
                Home
              </a>
              <a
                href="#ta-reports"
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-nu-purple'
                    : 'text-white hover:text-nu-purple-light'
                }`}
              >
                TA Reports
              </a>
              <a
                href="#positions-collocation"
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-nu-purple'
                    : 'text-white hover:text-nu-purple-light'
                }`}
              >
                Positions Collocation
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-800 hover:text-nu-purple'
                  : 'text-white hover:text-nu-purple-light'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

