import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace these with your actual EmailJS service/template/public keys
    const SERVICE_ID = 'service_344tw7x';
    const TEMPLATE_ID = 'template_rpj82ic';
    const PUBLIC_KEY = '4IaZoOPCDaVN0cP0Q';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error: unknown) => {
        console.error('Email sending error:', error);
        alert('Oops! Something went wrong. Please try again.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your nails or add beautiful resin art to your space? 
            Get in touch and let's bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Call or Text</p>
                    <p className="text-white font-semibold text-lg">+91 7020356660</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold text-lg">janhavimundada24@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-semibold text-lg">
                      📍Green tower B602 Gilbert hill road near azad nagar metro andheri west
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow My Work</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Facebook className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-gray-300 border border-white/30 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your vision or ask any questions..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-rose-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
