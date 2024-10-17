
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-200 to-gray-400 p-3 text-black">
      <nav className="flex flex-wrap justify-between items-center gap-2">
        <Link to="/" className="group">
        <h1 className="text-xl italic text-blue-800 font-normal group-hover:font-bold group-hover:scale-110 transition-all duration-100 ease-out inline-block origin-left">
            Rule Engine
          </h1>
        </Link>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/create-rule"
            className="text-base font-normal hover:scale-110 border border-black rounded px-1.5 py-0.5 inline-block transition-all duration-300 ease-out hover:bg-gray-100"
          >
            Create Rule
          </Link>
          <Link
            to="/combine-rules"
            className="text-base font-normal hover:scale-110 border border-black rounded px-1.5 py-0.5 inline-block transition-all duration-300 ease-out hover:bg-gray-100"
          >
            Combine Rules
          </Link>
          <Link
            to="/evaluate-rule"
            className="text-base font-normal hover:scale-110 border border-black rounded px-1.5 py-0.5 inline-block transition-all duration-300 ease-out hover:bg-gray-100"
          >
            Evaluate Rule
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;