import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  role: string;
  description: string;
  bullets: string[];
  tags: string[];
  github: string;
  liveUrl?: string;
  image: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'TravelHub',
    role: 'Full-stack Developer & Deployment Developer',
    description: 'Developed and deployed a full-stack travel booking platform with four portals — Admin, Tourist, Agency, and Hotel Owner — to streamline bookings and finance management. Built the backend with Spring Boot and PostgreSQL, integrated an AI chatbot for customer support, and added real-time notifications via WebSocket. Independently deployed on AWS EC2 with Docker and CI/CD.',
    bullets: [],
    tags: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'AWS EC2', 'Docker'],
    github: 'https://github.com/pirathee587/travelhub',
    liveUrl: 'https://travelhublanka.netlify.app/',
    image: '/assets/travelhub.png',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
  },
  {
    title: 'AgriConnect',
    role: 'Full-stack Developer',
    description: 'Sri Lankan agricultural logistics platform connecting farmers with agents across three roles: farmer, agent, and admin.',
    bullets: [
      'Built with React Native (Expo) frontend, Spring Boot backend, PostgreSQL database.',
      'Implemented full agent approval workflow: registration → admin review → payment → activation.',
      'Integrated Twilio OTP-based verification for secure agent onboarding.',
      'Designed system architecture and SRS; built glassmorphism UI using expo-blur.',
    ],
    tags: ['Spring Boot', 'React Native', 'TypeScript', 'PostgreSQL', 'Twilio', 'WebSocket'],
    github: 'https://github.com/pirathee587/Agriconnect',
    image: '',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
  },
  {
    title: 'Hotel Management System',
    role: 'Sole Backend Developer',
    description: 'Hotel management backend using Clean Architecture with API, Application, Domain, and Infrastructure layers.',
    bullets: [
      'Built with ASP.NET Core (.NET 8) following Clean Architecture principles.',
      'Designed a smart task allocation algorithm using weighted scoring (workload, floor proximity, priority).',
      'Structured across four clean layers for maximum maintainability and testability.',
    ],
    tags: ['ASP.NET Core', '.NET 8', 'Next.js', 'Clean Architecture'],
    github: 'https://github.com/pirathee587/hotel-management-system',
    image: '',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
  },
];

const iconMap: Record<string, string> = {
  'TravelHub': '✈️',
  'AgriConnect': '🌾',
  'Hotel Management System': '🏨',
};

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects built with modern tech stacks, deployed and in use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card flex flex-col overflow-hidden group"
            >
              {/* Project visual — top image */}
              <div className="relative h-52 overflow-hidden shrink-0">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjMiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiLz48L2c+PC9zdmc+')]" />
                    <span className="text-7xl select-none drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {iconMap[project.title]}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    {project.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border-b-2 border-gray-200 dark:border-gray-700 hover:border-indigo-500 pb-0.5"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="w-4 h-4" />
                    Repository
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b-2 border-indigo-300 dark:border-indigo-700 hover:border-purple-500 pb-0.5"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
