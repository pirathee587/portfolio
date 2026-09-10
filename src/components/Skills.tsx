interface SkillCategory {
  title: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'C', 'Python'],
    gradient: 'from-blue-500/10 to-indigo-500/10',
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    gradient: 'from-purple-500/10 to-pink-500/10',
  },
  {
    title: 'Backend Development',
    skills: ['Spring Boot', '.NET'],
    gradient: 'from-green-500/10 to-emerald-500/10',
  },
  {
    title: 'Mobile Development',
    skills: ['React Native', 'Expo'],
    gradient: 'from-orange-500/10 to-amber-500/10',
  },
  {
    title: 'Database Systems',
    skills: ['MySQL', 'MSSQL', 'MongoDB'],
    gradient: 'from-cyan-500/10 to-teal-500/10',
  },
  {
    title: 'DevOps Tools',
    skills: ['Git', 'GitHub', 'Docker'],
    gradient: 'from-red-500/10 to-rose-500/10',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">My Skills</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`card p-6 bg-gradient-to-br ${category.gradient} group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-base font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag-pill hover:bg-indigo-200 dark:hover:bg-indigo-800/60 cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
