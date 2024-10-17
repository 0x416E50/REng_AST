import React, { useState } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
import RuleList from './RuleList'
const CombineRules = () => {
    const [ruleName, setRuleName] = useState('');
    const [rules, setRules] = useState(['']);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleAddRule = () => {
        setRules([...rules, '']);
    };

    const handleRemoveRule = (index) => {
        const newRules = [...rules];
        newRules.splice(index, 1);
        setRules(newRules);
    };

    const handleRuleChange = (index, value) => {
        const newRules = [...rules];
        newRules[index] = value;
        setRules(newRules);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://rule-engine-with-ast-1.onrender.com/api/rules/combine_rules', {
                rule_name: ruleName,
                rules
            });
            setMessage(response.data.message);
            setError('');
            // toast.success(response.data.message);
        } catch (error) {
            console.error('Error combining rules:', error);
            setError(error.response?.data?.error || 'Failed to combine rules');
            // toast.error(error.response?.data?.error || 'Failed to combine rules');
        }
    };

    return (
        <>
          <div className="p-4 flex flex-col items-center justify-start min-h-screen bg-gray-100 rounded shadow-md">
          <h2 className="text-4xl font-bold mb-4">Combine Rule</h2>
            <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4 w-full">
            <label className="block text-gray-700 text-2xl font-normal">Rule Name:</label>
            <input
                type="text"
                className="w-full p-2 border rounded bg-gray-200 text-2xl"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
                required
            />
            </div>
            {rules.map((rule, index) => (
            <div key={index} className="mb-4 w-full">
                <label className="block text-gray-700 text-2xl font-normal">Rule {index + 1}:</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded bg-gray-200 text-2xl mb-2"
                    value={rule}
                    onChange={(e) => handleRuleChange(index, e.target.value)}
                    required
                />
            </div>
            ))}
            <div className="flex gap-3"> 
            <button
                type="button"
                className="bg-red-500 text-white px-3 py-2 rounded-md text-2xl font-bold my-2 hover:bg-red-700 transition duration-300"
                onClick={() => handleRemoveRule(rules.length - 1)}
            >
                Remove
            </button>
            <button
                type="button"
                className="bg-gray-400 text-white px-3 py-2 rounded-md text-2xl font-bold my-2 hover:bg-gray-800 transition duration-300"
                onClick={handleAddRule}
            >
                Add Rule
            </button>
            <button
                type="submit"
                className="bg-gray-400 text-white px-3 py-2 rounded-md text-2xl font-bold my-2 hover:bg-gray-800 transition duration-300"
            >
                Combine Rules
            </button>
        </div>
        <RuleList />
    </form>

    {message && <p className="mt-4 text-green-600 text-3xl font-normal">{message}</p>}
    {error && <p className="mt-4 text-red-600 text-3xl font-normal">{error}</p>}
</div>
        </>
    );
};

export default CombineRules;