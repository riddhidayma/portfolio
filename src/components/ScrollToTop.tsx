import React from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  show: boolean;
  onClick: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ show, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 z-40 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <ChevronUp size={24} className="mx-auto" />
    </button>
  );
};

export default ScrollToTop;