
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-200 to-gray-400 p-6 text-black">
      <nav className="flex justify-between items-center">
      <Link to="/" className="hover:underline">
          <h1 className="text-3xl font-normal">Rule Engine</h1>
        </Link>
        <span className="text-2xl font-normal">Made by 0x416E50</span>
        <div className="space-x-6">
          <Link to="/create-rule" className="text-3xl font-normal hover:underline">
            Create Rule
          </Link>
          <Link to="/combine-rules" className="text-3xl font-normal hover:underline">
            Combine Rules
          </Link>
          <Link to="/evaluate-rule" className="text-3xl font-normal hover:underline">
            Evaluate Rule
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;