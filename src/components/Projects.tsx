import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Text-2-Image-GEN',
      description: 'A program that generates images from text using the hugging face inference API and black forest-labs/FLUX.1-dev. Built with HTML, CSS, and JavaScript, it converts any text prompt into an image.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Hugging Face API'],
      github: 'https://github.com/Virajcreates/Text-2-Image-GEN'
    },
    {
      title: 'MCQ-GEN Using Hugging Face',
      description: 'An automated MCQ generation system using Mistral-Nemo-Instruct-2407 LLM. Built with Python and Streamlit for creating an interactive web application.',
      tech: ['Python', 'Streamlit', 'Hugging Face', 'LLM'],
      github: 'https://github.com/Virajcreates/MCQ-GEN-using-HUGGING_FACE'
    },
    {
      title: 'E-Commerce Website Template',
      description: 'A full-stack e-commerce solution with Go backend and React frontend, featuring Stripe integration for payments and robust error handling.',
      tech: ['Go', 'React', 'Stripe', 'REST API'],
      github: 'https://github.com/Virajcreates/E-Commerce-website-Template-using-go-as-Backend'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;