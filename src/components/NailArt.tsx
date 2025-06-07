import React from 'react';
import nail1 from './images/nailart1.jpg';
import nail2 from './images/nailart2.jpg';
import nail3 from './images/nailart3.jpg';
import nail4 from './images/nailart4.jpg';
import nail5 from './images/nailart5.jpg';
import nail6 from './images/nailart6.jpg';
import nail7 from './images/nailart7.jpg';
import nail8 from './images/nailart8.jpg';
interface NailArtProps {
  onImageClick: (imageUrl: string) => void;
}

const nailImages = [
  nail1,
  nail2,
  nail3,
  nail4,
  nail5,
  nail6,
  nail7,
  nail8,
];

const NailArt: React.FC<NailArtProps> = ({ onImageClick }) => {
  return (
    <section id="nail-art" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nail Art Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our stunning collection of nail extensions and artistic designs. 
            From elegant classics to bold statement pieces, each set is crafted with precision and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nailImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              onClick={() => onImageClick(image)}
            >
              <div className="aspect-square">
                <img 
                  src={image}
                  alt={`Nail art design ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    Design {index + 1}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    Click to view details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default NailArt;