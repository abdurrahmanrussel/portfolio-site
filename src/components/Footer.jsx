import React from 'react';

const Footer = () => (
  <footer className="py-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
    <p className="text-center text-gray-700 dark:text-gray-300 text-sm select-none">
      &copy; {new Date().getFullYear()} Md. Abdur Rahman. All rights reserved.
    </p>
  </footer>
);

export default Footer;
