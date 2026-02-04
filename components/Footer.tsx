import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-neutral-800">
      <div className="container mx-auto py-6 px-4 flex items-center justify-center text-sm text-gray-500 dark:text-gray-500">
        <p>&copy; {currentYear} TJ. Kim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;