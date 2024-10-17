import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RulesLoader from './RulesLoader';

const RuleList = () => {
  const [rules, setRules] = useState([]);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await axios.get('https://rule-engine-with-ast-1.onrender.com/api/rules/getRules');
        setRules(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    };

    fetchRules();
  }, []);

  return isLoading?<div className='text-white flex justify-center'><RulesLoader text={"Loading Rules"}/></div>:(
    <div className="bg-gray-200 shadow-md rounded-lg p-4 mt-6 w-full"> {/* Changed background color to gray-200 */}
    <h2 className="text-3xl text-black font-normal mb-4">Rule List</h2> {/* Changed text color to black for better contrast */}
    <ul className="space-y-4"> {/* Adds space between items */}
      {rules.map((rule) => (
        <li key={rule._id} className="bg-gray-100 p-4 rounded-md shadow-md text-gray-700 w-full"> {/* Keeping item color as gray-100 */}
          <strong className="text-xl">{rule.ruleName}</strong>: {rule.rule}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default RuleList;