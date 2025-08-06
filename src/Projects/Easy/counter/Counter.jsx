import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  const reset = () => {
    setCount(0);
  };

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Counter: <span className="text-blue-600">{count}</span></h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Step Size:</label>
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex justify-between gap-2 mb-4">
          <button
            onClick={decrement}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
          >
            -{step}
          </button>
          <button
            onClick={increment}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded"
          >
            +{step}
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
