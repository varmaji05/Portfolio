import React from 'react';
import { Server, Cloud, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      title: "Infrastructure",
      description: "Designing cloud-native systems using AWS, Azure, and Infrastructure as Code (Terraform)"
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      title: "Cloud Native",
      description: "Proficient in Kubernetes, Docker, Helm, and Micro-Services Architecture"
    },
    {
      icon: <Code className="w-8 h-8 text-green-600 dark:text-green-400" />,
      title: "Automation",
      description: "CI/CD Pipelines with GitHub Actions, ArgoCD, and Automated Testing frameworks"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
      title: "Collaboration",
      description: "Driving DevOps culture by enabling fast feedback loops between Dev and Ops"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Passionate DevOps Engineer with a track record of transforming Development Workflows and Scaling Infrastructure for High-Growth Companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <p className="mb-6">
                With over 3+ years of experience in DevOps and Cloud, I've helped engineerig teams reduce deployment times by 80% and improve system reliability to 99.9% uptime.
              </p>
              <p className="mb-6">
                My expertise includes architecting and managing scalable infrastructure on AWS and Azure, implementing Kubernetes-based container orchestration, and building CI/CD pipelines using tools like GitHub Actions and Terraform.
              </p>
              <p className="mb-8">
                Outside of work, You can find me contributing to open-source projects and share insights on cloud-native technologies through technical blogging and community talks.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
