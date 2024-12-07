import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Yash Tirpude. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;