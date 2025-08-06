// pages/Easy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Easy() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Easy Projects
      </h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        <Link
          to="/easy/counter"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Counter
          </h2>
          <p className="text-gray-600">
            A basic counter with step control
          </p>
        </Link>


        <Link
          to="/easy/Todo"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Todo
          </h2>
          <p className="text-gray-600">
            A basic counter with step control
          </p>
        </Link>


        

        {/* Add more project cards below as needed */}
      </div>
    </div>
  );
}
