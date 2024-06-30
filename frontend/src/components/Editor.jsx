import React, { useState } from 'react';

const Editor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    // Handle code submission logic
    console.log('Submitted code:', code);
  };

  return (
    <div className="container mx-auto mt-4">
      <textarea
        className="w-full h-60 border border-gray-300 rounded-md p-2 outline-none"
        value={code}
        onChange={handleChange}
        placeholder="Enter your code here..."
      ></textarea>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleSubmit}
      >
        Run Code
      </button>
    </div>
  );
};

export default Editor;
