import React from 'react';
import { Link } from 'react-router-dom';
// import Header from './Header';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100" style={{ paddingTop: '50px' }}> {/* Adjust padding-top to move heading up */}
        <h1 className="text-4xl font-bold mb-4">Rule Engine Using AST</h1> {/* Reduced margin-bottom for closer positioning */}
        <div className="flex flex-col gap-1"> {/* Add gap between buttons */}
          <Link to="/create-rule">
            <button className="w-48 px-4 py-2 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 transition duration-300">
              Create Rule
            </button>
          </Link>
          <Link to="/combine-rules">
            <button className="w-48 px-4 py-2 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 transition duration-300">
              Combine Rules
            </button>
          </Link>
          <Link to="/evaluate-rule">
            <button className="w-48 px-4 py-2 bg-gray-400 text-white rounded-md shadow-md hover:bg-gray-500 transition duration-300">
              Evaluate Rule
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
