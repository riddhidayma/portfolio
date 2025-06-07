import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Janhavi Nails & Art</h3>
        <p className="text-gray-400 mb-6">
          Creating beautiful nail extensions and unique resin art pieces with passion and precision.
        </p>
        <p className="text-gray-400 flex items-center justify-center space-x-2 text-sm mx-auto max-w-xs">
          <span>© 2024 Janhavi Nails & Art. Made with</span>
          <Heart className="text-rose-500" size={16} />
          <span>for beautiful creations.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
