import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    institution: 'University of Moratuwa',
    degree: 'BSc (Hons) in Information Technology',
    faculty: 'Faculty of IT',
    period: '2024 – 2028 (Expected)',
    location: 'Colombo, Sri Lanka',
    gpa: '3.49',
    courses: ['Computer Networks', 'Database Management Systems', 'Data Structures & Algorithms', 'Statistics'],
    icon: '🎓',
    gradient: 'from-indigo-500 to-purple-600',
    current: true,
  },
  {
    institution: "St. John's College",
    degree: 'GCE Advanced Level — Physical Science Stream',
    faculty: '',
    period: '2008 – 2023',
    location: 'Jaffna, Sri Lanka',
    gpa: 'Z-score: 1.7630',
    courses: [],
    icon: '📚',
    gradient: 'from-amber-500 to-orange-600',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu) => (
            <div key={edu.institution} className="card p-6 relative overflow-hidden group">
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient}`} />

              {/* Current badge */}
              {edu.current && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-50 dark:bg-green-950/50 text-green-600 dark:text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Current
                </div>
              )}

              <div className="flex items-start gap-4 mb-4 mt-2">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-2xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {edu.degree}
                  </p>
                  {edu.faculty && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">{edu.faculty}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span className="text-sm font-semibold text-gray-800 dark:text-white">
                  {edu.gpa}
                </span>
              </div>

              {edu.courses.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
