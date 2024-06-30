import React, { useState } from 'react';

const Editor = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="container mx-auto mt-4">
      <textarea
        className="w-full h-60 border border-gray-300 rounded-md p-2 outline-none"
        value={value}
        onChange={handleChange}
        placeholder="Enter your code here..."
      ></textarea>
    </div>
  );
};

export default Editor;

