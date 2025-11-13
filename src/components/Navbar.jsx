import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 sticky top-0 shadow-md z-50 bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500">
        Aaiwa
      </h1>

      {/* Hamburger button for mobile */}
      <button
        className="text-3xl sm:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        =
      </button>

      {/* Navigation menu */}
      <nav
        className={`flex-col sm:flex-row sm:flex space-y-4 sm:space-y-0 sm:space-x-6 text-xl px-10 absolute sm:static bg-white dark:bg-gray-900 top-full left-0 w-full sm:w-auto sm:py-0 py-4 transition-all duration-300 ease-in ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#home" className="hover:text-teal-500 block px-6">
          Home
        </a>
        <a href="#services" className="hover:text-teal-500 block px-6">
          Services
        </a>
        <a href="#about" className="hover:text-teal-500 block px-6">
          Team
        </a>
        <a href="#contact" className="hover:text-teal-500 block px-6">
          Contact
        </a>
      </nav>
    </header>
  );
}
