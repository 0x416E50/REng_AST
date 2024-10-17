import React, { useState } from 'react';
import axios from 'axios';
import RuleList from '../components/RuleList';
import { toast ,Flip } from 'react-toastify';

const CreateRule = () => {
  const [ruleName, setRuleName] = useState('');
  const [rule, setRule] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    try {
      const res = await axios.post('https://rule-engine-with-ast-1.onrender.com/api/rules/create', {
        rule_name: ruleName,
        rule,
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-start min-h-screen bg-gray-100 rounded shadow-md">
    <h2 className="text-4xl font-bold mb-4">Create Rule</h2>
    <form onSubmit={handleSubmit} className="w-full"> {/* Make the form span the full width */}
      <div className="mb-4">
        <label className="block text-gray-700 text-2xl font-normal">Rule Name:</label>
        <input
          type="text"
          value={ruleName}
          onChange={(e) => setRuleName(e.target.value)}
          className="w-full p-2 border rounded bg-gray-200 text-2xl" // Make the input span full width and add a light gray background
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-2xl font-normal">Rule:</label>
        <textarea
          value={rule}
          onChange={(e) => setRule(e.target.value)}
          className="w-full p-2 border text-2xl rounded bg-gray-200" // Make the textarea span full width and add a light gray background
          rows="4"
        />
      </div>
      <button type="submit"
        className="bg-gray-400 text-white px-3 py-2 rounded-md text-2xl font-bold my-2 hover:bg-gray-800 transition duration-300"
      > 
        Create Rule
      </button>
    </form>
    {response && (
      <div className="mt-4 p-4 bg-green-100 rounded">
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
    )}
    {error && (
      <div className="mt-4 p-4 bg-red-100 rounded text-red-800 text-2xl font-bold">
        {error}
      </div>
    )}
    <RuleList />
  </div>
  );
};

export default CreateRule;