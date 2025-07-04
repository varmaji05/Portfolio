  import React from 'react';
  import { Cloud, Container, GitBranch, Monitor, Code, Server, Computer, Globe, Network,} from 'lucide-react';

  const Skills: React.FC = () => {
    const skillCategories = [
      {
        title: 'Operating Systems',
        icon: <Computer className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
        skills: [
          { name: 'Linux', img: 'https://icon.icepanel.io/Technology/png-shadow-512/Linux.png' },
          { name: 'Windows', img: 'https://icon.icepanel.io/Technology/svg/Windows-11.svg' },
        ],
      },
      {
        title: 'Cloud Platforms',
        icon: <Cloud className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
        skills: [
          { name: 'AWS', img: 'https://iamops.io/wp-content/uploads/2024/06/aws.svg' },
          { name: 'Azure', img: 'https://iamops.io/wp-content/uploads/2024/06/Azure.svg' },
        ],
      },
      {
        title: 'Hosting Platforms',
        icon: <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
        skills: [
          { name: 'Godaddy', img: 'https://cdn.prod.website-files.com/612f5131b9c94eda2fe9c725/6650b305bf6d81ad12356860_GoDaddy-Logo%201.png' },
          { name: 'Route 53', img: 'https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg' },
        ],
      },
      {
        title: 'Containers & Orchestration',
        icon: <Container className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
        skills: [
          { name: 'Docker', img: 'https://cdn.simpleicons.org/docker/2496ED' },
          { name: 'Kubernetes', img: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
          { name: 'Helm', img: 'https://miro.medium.com/v2/resize:fit:606/format:webp/1*nViWw5hFgS7l3vu1RkO3YA.png' },
        ],
      },
      {
        title: 'Infrastructure as Code',
        icon: <Server className="w-8 h-8 text-green-600 dark:text-green-400" />,
        skills: [
          { name: 'Terraform', img: 'https://cdn.simpleicons.org/terraform/623CE4' },
          { name: 'Ansible', img: 'https://iamops.io/wp-content/uploads/2024/06/Azad-Gamer.svg' },
          { name: 'CloudFormation', img: 'https://icon.icepanel.io/AWS/svg/Management-Governance/CloudFormation.svg' },
        ],
      },
      {
        title: 'Programming & Scripting',
        icon: <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
        skills: [
          { name: 'Python', img: 'https://cdn.simpleicons.org/python/3776AB' },
          { name: 'Bash/Shell', img: 'https://runcode-app-public.s3.amazonaws.com/images/bash-shell-script-online-editor-compiler.original.png' },
          { name: 'YAML', img: 'https://assets.exercism.org/tracks/yamlscript.svg ' },
        ],
      },
      {
        title: 'CI/CD & Automation',
        icon: <GitBranch className="w-8 h-8 text-orange-600 dark:text-orange-400" />,
        skills: [
          { name: 'Jenkins', img: 'https://iamops.io/wp-content/uploads/2024/06/Jenkins.svg' },
          { name: 'GitLab CI', img: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
          { name: 'GitHub Actions', img: 'https://iamops.io/wp-content/uploads/2024/06/github-actions.svg' },
          { name: 'BitBucket', img: 'https://icon.icepanel.io/Technology/svg/BitBucket.svg' },
          { name: 'CodePipeline', img: 'https://icon.icepanel.io/AWS/svg/Developer-Tools/CodePipeline.svg' },
          { name: 'Azure Pipeline', img: 'https://www.wecoderight.com/wp-content/uploads/2023/06/azure.png' },
        ],
      },
      {
        title: 'Monitoring & Observability',
        icon: <Monitor className="w-8 h-8 text-red-600 dark:text-red-400" />,
        skills: [
          { name: 'Prometheus', img: 'https://cdn.simpleicons.org/prometheus/E6522C' },
          { name: 'Grafana', img: 'https://cdn.simpleicons.org/grafana/F46800' },
          { name: 'Loki', img: 'https://elpuig.xeill.net/Members/vcarceler/articulos/introduccion-a-la-monitorizacion-con-grafana-y-loki/logo-1.png/@@images/13dd22a2-267b-4821-99ed-3e153d86ce7c.png'},
          { name: 'ELK Stack', img: 'https://icon.icepanel.io/Technology/png-shadow-512/Elastic-Search.png' },
          { name: 'Kibana', img: 'https://icon.icepanel.io/Technology/svg/Kibana.svg' },
          { name: 'LogStash', img: 'https://icon.icepanel.io/Technology/svg/Logstash.svg' },
        ],
      },
      {
        title: 'Networking & Security',
        icon: <Network className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
        skills: [
          { name: 'DNS', img: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/dns-5528460-4659348.png?f=webp&w=256' },
          { name: 'Load Balancing', img: 'https://symbols.getvecta.com/stencil_9/39_load-balancer.af7d4495ba.svg' },
          { name: 'Firewall', img: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/firewall-2306882-1948591.png?f=webp&w=256' },
          { name: 'IAM', img: 'https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/IAM-Identity-Center.svg' },
          { name: 'SSL', img: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/ssl-icon-download-in-svg-png-gif-file-formats--security-certificate-shield-protection-lock-web-hosting-pack-design-development-icons-10801665.png?f=webp&w=256' },
          { name: 'Seceret Manger', img: 'https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/Secrets-Manager.svg' },

        ],
      },
    ];

    return (
      <section
        id="skills"
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A modern DevOps toolkit powered by automation, containers, cloud, and clean code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-3">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-10 h-10 object-contain mb-2"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Skills;
