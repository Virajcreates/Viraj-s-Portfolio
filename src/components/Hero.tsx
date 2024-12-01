import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Replace the src with your actual photo URL */}
                <img
                  src="MYPIC.jpg"
                  alt="Viraj D Naik"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium">AI/ML Engineer</span>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Viraj D Naik</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              B.Tech in Artificial Intelligence and Machine Learning
            </p>
            <p className="text-lg text-gray-600 mb-12">
              A passionate developer specializing in AI/ML, with expertise in Python, JavaScript, and modern web technologies.
              I transform complex problems into elegant solutions.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#projects"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;