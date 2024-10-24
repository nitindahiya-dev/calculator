import React from 'react';

const Calculator: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-5xl font-bold mb-10">Calculator</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <input
          type="text"
          className="w-full border-2 border-gray-300 p-2 mb-4 rounded-lg text-right placeholder:text-2xl font-bold"
          placeholder="0"
          readOnly
        />
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">7</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">8</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">9</button>
          <button className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">/</button>

          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">4</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">5</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">6</button>
          <button className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">*</button>

          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">1</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">2</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">3</button>
          <button className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">-</button>

          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">0</button>
          <button className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">.</button>
          <button className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">=</button>
          <button className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
