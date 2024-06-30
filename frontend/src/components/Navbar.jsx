import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Compiler Platform</div>
        {/* Add navigation links if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
