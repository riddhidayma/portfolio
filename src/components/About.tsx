import React from 'react';
import myPhoto from './images/profile.jpg'; // Replace with your actual photo path

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo with glow */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl blur opacity-20"></div>
            <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl" style={{ height: '650px' }}>
  <img
    src={myPhoto}
    alt="My Photo"
    className="w-full h-full object-cover object-top"
  />
</div>


          </div>

          </div>

          {/* Info and quote */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Janhavi Mundada
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                I’m a passionate artist blending the delicate beauty of nail art with the creative versatility of resin crafting. 
                Each piece I create—whether a stunning nail design or a handcrafted resin art—reflects your unique style and story.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2+</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Years in Nail Artistry</h3>
                  <p className="text-gray-600">
                    Specializing in gel extensions, intricate designs, and trendsetting styles that last.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2+</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Years of Resin Crafting</h3>
                  <p className="text-gray-600">
                    Designing unique, functional resin art like coasters, trays, and decorative pieces that brighten any space.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion & Creativity</h3>
                  <p className="text-gray-600">
                    Every nail and resin piece I create is a labor of love, crafted with attention to detail and a heart full of inspiration.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-lg text-gray-700 italic">
                “Art is where imagination meets skill — and where your personality shines. 
                Whether on your nails or in resin, I create to empower, inspire, and celebrate YOU.” 
                <br />
                <span className="text-rose-500 font-semibold">– Janhavi 💅✨</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
