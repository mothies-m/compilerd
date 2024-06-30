import React, { useState } from 'react';

const Output = ({ output }) => {
  return (
    <div className="container mx-auto mt-4">
      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="text-lg font-bold mb-2">Output</h2>
        <pre className="bg-gray-100 p-2 rounded-md">{output}</pre>
      </div>
    </div>
  );
};

export default Output;
