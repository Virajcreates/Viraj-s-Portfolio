import React from 'react';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AI/ML Specialization",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive course covering machine learning algorithms, neural networks, and deep learning applications."
    },
    {
      title: "Full Stack Development",
      issuer: "Udemy",
      date: "2023",
      description: "Advanced web development course covering modern frontend and backend technologies."
    },
    {
      title: "Python for Data Science",
      issuer: "DataCamp",
      date: "2022",
      description: "Specialized course in Python programming for data analysis and machine learning applications."
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Certificates</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Award className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
              <p className="text-gray-700">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;