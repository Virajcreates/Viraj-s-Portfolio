import React from 'react';
import { Code2, Brain, Users, Clock, Lightbulb, MessageSquare } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'Python', 'JavaScript', 'C', 'Java', 'React', 'HTML', 'CSS', 'Go'
  ];

  const softSkills = [
    { icon: Clock, name: 'Time Management' },
    { icon: MessageSquare, name: 'Communication Skills' },
    { icon: Lightbulb, name: 'Adaptability' },
    { icon: Brain, name: 'Fast Learner' },
    { icon: Users, name: 'Leadership Skills' },
    { icon: Code2, name: 'Problem Solving' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-4">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-gray-800 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                  <Icon className="text-indigo-600" size={20} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;