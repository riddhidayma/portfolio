import React from 'react';
import raisin1 from './images/raisinart1.jpg';
import raisin2 from './images/raisinart2.jpg';
import raisin3 from './images/raisinart3.jpg';
import raisin4 from './images/raisinart4.jpg';
import raisin5 from './images/raisinart5.jpg';
import raisin6 from './images/raisinart6.jpg';
import raisin7 from './images/raisinart7.jpg';
import raisin8 from './images/raisinart8.jpg';
import raisin9 from './images/raisinart9.jpg';


interface ResinArtProps {
  onImageClick: (imageUrl: string) => void;
}

const resinImages = [
  raisin1,
  raisin2,
  raisin3,
  raisin4,
  raisin5,
  raisin6,
  raisin7,
  raisin8,
  raisin9,
];

const ResinArt: React.FC<ResinArtProps> = ({ onImageClick }) => {
  return (
    <section id="resin-art" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resin Art Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Handcrafted resin art pieces that bring beauty and functionality to your space. 
            From elegant coasters to stunning decorative trays, each piece is unique and made with love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resinImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => onImageClick(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image}
                  alt={`Resin art piece ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    Handcrafted Piece {index + 1}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Unique resin art piece perfect for home decoration or as a thoughtful gift
                  </p>
                  <div className="mt-3 flex items-center">
                    <span className="text-white/80 text-xs uppercase tracking-wider font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Custom Orders Available
            </h3>
            <p className="text-gray-600 mb-6">
              Have a specific vision in mind? I create custom resin art pieces tailored to your preferences and space.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Request Custom Piece
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResinArt;