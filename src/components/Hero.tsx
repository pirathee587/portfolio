import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Internships
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                Piratheepan
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
                  Jeyakumaran
                </span>
              </h1>
              <p className="mt-3 text-xl font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">
                Software Engineering Intern
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-xl">
              A passionate problem solver and tech enthusiast with foundational programming knowledge. 
              I have a basic understanding of SOLID principles and am actively improving my time management 
              and attention to detail. Currently pursuing a <span className="text-indigo-600 dark:text-indigo-400 font-medium">BSc (Hons) in Information Technology</span> at the 
              University of Moratuwa.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1R8WJMNUtCQjNawWm94OjUWP9w-JnqlAH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              <a
                href="mailto:piratheepan0693@gmail.com"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="Email Piratheepan"
              >
                Email
              </a>
              <a
                href="https://github.com/pirathee587"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="Piratheepan GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/piratheepan-jeyakumaran-277210301/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="Piratheepan LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://medium.com/@jeyakumaranpiratheepan120"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="Piratheepan Medium blog"
              >
                Medium
              </a>
            </div>
          </div>

          {/* Right — Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin [animation-duration:8s] blur-sm scale-105 opacity-60" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-indigo-600 to-purple-600 scale-102 opacity-30" />

              {/* Glowing halo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-2xl" />

              {/* Photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/assets/profile.jpg"
                  alt="Piratheepan Jeyakumaran — Software Engineering Intern"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
