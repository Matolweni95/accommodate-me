import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  return (
    <>
      <div
        className="
          antialiased
          bg-gradient-to-r
          from-pink-300
          via-purple-300
          to-indigo-400
        "
      >
        <header>
          <nav
            className="
              flex flex-wrap
              items-center
              justify-between
              w-full
              py-4
              md:py-0
              px-4
              text-lg text-gray-700
              bg-white
            "
          >
            <div>
              <h1>Logo</h1>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <div className={`w-full md:flex md:items-center md:w-auto ${isMenuHidden ? 'hidden' : ''}`} id="menu">
            <ul className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0">
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Home</a>
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#">About</a>
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Residence</a>
                </li>
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Contact</a>
                </li>
                
            </ul>
            
            </div>
            <Link to='/login'>
            <button className={`md:flex text-base text-white py-2 px-4 rounded-lg bg-blue md:w-auto ${isMenuHidden ? 'hidden' : ''}`} id="menu">
                Login
            </button>
            </Link>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Nav;
