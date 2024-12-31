import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">⚡ SpeedVitals</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-900">Home</a>
            <a href="#" className="text-gray-900">Performance Test</a>
            <a href="#" className="text-gray-900">About</a>
            <a href="#" className="text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;