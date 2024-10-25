'use client'
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Calculator: React.FC = () => {
  const [value, setValue] = useState("0");

  const handleButtonClick = (buttonValue: string) => {
    if (value === "0") {
      setValue(buttonValue);
    } else {
      setValue(value + buttonValue);
    }
  };

  

  const handleOperation = (operation: string) => {
    setValue(value + operation);
  };

  const handleCalculate = async () => {
    const response = await fetch("http://localhost:8080/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expression: value }),
    });

    if (response.ok) {
      const result = await response.json();
      setValue(result.toString()); // Update the state with the result
      
    } else {
      toast.error("Error evaluating expression");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <ToastContainer />
      <h1 className="text-5xl font-bold mb-10 text-white">Calculator</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <input
          type="text"
          className="w-full border-2 text-black border-gray-300 p-2 mb-4 rounded-lg text-right placeholder:text-2xl font-bold"
          placeholder="0"
          readOnly
          value={value}
        />
        <div className="grid grid-cols-4 gap-4">
          {/* Buttons for numbers and operations */}
          <button onClick={() => handleButtonClick("7")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">7</button>
          <button onClick={() => handleButtonClick("8")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">8</button>
          <button onClick={() => handleButtonClick("9")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">9</button>
          <button onClick={() => handleOperation("/")} className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">/</button>

          <button onClick={() => handleButtonClick("4")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">4</button>
          <button onClick={() => handleButtonClick("5")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">5</button>
          <button onClick={() => handleButtonClick("6")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">6</button>
          <button onClick={() => handleOperation("*")} className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">*</button>

          <button onClick={() => handleButtonClick("1")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">1</button>
          <button onClick={() => handleButtonClick("2")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">2</button>
          <button onClick={() => handleButtonClick("3")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">3</button>
          <button onClick={() => handleOperation("-")} className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">-</button>

          <button onClick={() => handleButtonClick("0")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">0</button>
          <button onClick={() => handleButtonClick(".")} className="bg-blue-500 text-white p-4 text-2xl font-bold rounded-lg">.</button>
          <button onClick={handleCalculate} className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">=</button>
          <button onClick={() => handleOperation("+")} className="bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">+</button>
        </div>
        <button onClick={() => setValue("0")} className="w-full mt-4 bg-orange-500 text-white p-4 text-2xl font-bold rounded-lg">Reset value</button>
      </div>
    </div>
  );
};

export default Calculator;
