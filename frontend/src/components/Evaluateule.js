import React, { useState } from 'react';
import axios from 'axios';
import RuleList from './RuleList';

const EvaluateRule = () => {
  const [ruleName, setRuleName] = useState('');
  const [conditions, setConditions] = useState('');
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reng-rst.onrender.com/api/rules/eval', {
        rule_name: ruleName,
        conditions: JSON.parse(conditions),
      });

      setResult(response.data);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error evaluating rule', error);
      setError(error.response?.data?.error || 'Error Evaluating rules');
    }
  };

  return (
    <>
     <div className="p-4 flex flex-col items-center justify-start min-h-screen bg-gray-100 rounded shadow-md">
    <h2 className="text-4xl font-bold mb-4">Evaluate Rule</h2>
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <label className="block text-2xl font-normal text-gray-700">Rule Name:</label>
        <input
          type="text"
          value={ruleName}
          onChange={(e) => setRuleName(e.target.value)}
          className="w-full p-2 border rounded bg-gray-200 text-2xl"
        />
      </div>
      <div className="mb-4">
        <label className="block text-2xl font-normal text-gray-700">Conditions (JSON format):</label>
        <textarea
          value={conditions}
          onChange={(e) => setConditions(e.target.value)}
          className="w-full p-2 border rounded bg-gray-200 text-2xl"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-400 text-white px-3 py-2 rounded-md text-2xl font-bold my-2 hover:bg-gray-800 transition duration-300"
      >
        Evaluate Rule
      </button>
    </form>

    {result && (
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    )}
      {message && <p className="mt-4 text-green-600 text-3xl font-bold">{message}</p>}
      {error && <p className="mt-4 text-red-600 text-3xl font-bold">{error}</p>}  
    <RuleList />
  </div>
    </>
  );
};

export default EvaluateRule;
