import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Syed Aamir Nazir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;