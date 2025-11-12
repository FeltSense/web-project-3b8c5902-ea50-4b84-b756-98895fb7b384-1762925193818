'use client';

import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt="Retail store interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">Trusted by 10,000+ customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Premium
            <span className="block text-blue-400">Shopping Destination</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed">
            Experience quality products, exceptional service, and a shopping journey designed around you. Welcome to retail reimagined.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-white mb-1">10K+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300 text-sm">Product Lines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}