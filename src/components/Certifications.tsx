import { Award, Shield } from 'lucide-react';

const certifications = [
  {
    name: 'Web Development Series',
    issuer: 'Open Learning Platform, University of Moratuwa',
    icon: '🌐',
  },
  {
    name: 'Programming in Python Series',
    issuer: 'Open Learning Platform, University of Moratuwa',
    icon: '🐍',
  },
  {
    name: 'Foundations of Cybersecurity',
    issuer: 'Professional Certificate in Cyber Security & Networking',
    icon: '🔒',
  },
];

const hackathons = [
  {
    name: 'CREST CTF – Operation Ghost Mantis',
    description: 'National-level cybersecurity Capture The Flag competition organized by Cybersecurity Club CREST, Pimpri Chinchwad University.',
    icon: '🏴',
  },
  {
    name: 'CryptX 2.0',
    description: 'Capture The Flag (CTF) competition participant — cryptography and cybersecurity challenges.',
    icon: '🔐',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications & Achievements</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="card p-4 flex items-start gap-4 group hover:border-indigo-300 dark:hover:border-indigo-700"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200 shrink-0">
                    {cert.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hackathons</h3>
            </div>
            <div className="space-y-4">
              {hackathons.map((h) => (
                <div
                  key={h.name}
                  className="card p-4 flex items-start gap-4 group hover:border-amber-300 dark:hover:border-amber-700"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200 shrink-0">
                    {h.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{h.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
