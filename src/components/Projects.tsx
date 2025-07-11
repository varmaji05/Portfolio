import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Microservices Platform",
      description: "Built a complete microservices platform using Kubernetes, Istio, and GitOps principles. Reduced deployment time from hours to minutes.",
      technologies: ["Kubernetes", "Docker", "Istio", "ArgoCD", "Prometheus"],
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com",
      // demo: "https://demo.com"
    },
    {
      title: "Infrastructure as Code",
      description: "Automated AWS infrastructure provisioning using Terraform and Ansible. Managed 50+ services across multiple environments.",
      technologies: ["Terraform", "Ansible", "AWS", "CloudFormation", "Jenkins"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com",
      // demo: "https://demo.com"
    },
  ];

  const getTagColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      Kubernetes: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      Docker: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
      Istio: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
      ArgoCD: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
      Prometheus: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      Terraform: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      Ansible: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      AWS: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
      CloudFormation: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
      Jenkins: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
      GitLab: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      SonarQube: 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300',
      Nexus: 'bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300',
      Slack: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300',
      ELK: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      Jaeger: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      PagerDuty: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300'
    };
    return colorMap[tech] || 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">What I’ve Built</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A curated collection of real-world solutions focused on automation, scalability, and system reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1 bg-white dark:bg-gray-900 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-3xl border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${getTagColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    See How It Works
                  </a>
{/*                   <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a> */}
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
