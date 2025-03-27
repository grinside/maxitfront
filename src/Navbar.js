
import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between flex-wrap md:flex-nowrap">
      <div className="text-orange-500 text-2xl font-bold">Wi-flix</div>
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden text-2xl focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`md:flex md:items-center md:space-x-6 space-y-2 md:space-y-0 w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
            Sign Up
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-orange-500">
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
    