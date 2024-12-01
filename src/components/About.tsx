import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            As a dedicated Computer Science student focused on Artificial Intelligence and Machine Learning, 
            I bring a strong foundation in modern development technologies and a passion for solving complex problems.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My expertise spans across Python, JavaScript, HTML, CSS, React, Node.js, and Go, allowing me to tackle 
            diverse technical challenges with confidence. I thrive in collaborative environments where I can contribute 
            through well-structured code and innovative solutions.
          </p>
          <p className="text-lg text-gray-700">
            What sets me apart is my commitment to organized problem-solving and my ability to adapt quickly to new 
            technologies. I'm passionate about creating efficient, scalable solutions that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;