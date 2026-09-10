import { ExternalLink } from 'lucide-react';

interface BlogPost {
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  slug: string;
  url: string;
}

// Tag color map — light and dark variants using the site's theme palette
const tagColorMap: Record<string, string> = {
  'Career-Advice':
    'bg-violet-100 text-violet-700 border-violet-300 dark:bg-violet-900/60 dark:text-violet-200 dark:border-violet-700/50',
  'Computer-Science':
    'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/60 dark:text-blue-200 dark:border-blue-700/50',
  'Internships':
    'bg-teal-100 text-teal-700 border-teal-300 dark:bg-teal-900/60 dark:text-teal-200 dark:border-teal-700/50',
  'Software-Engineering':
    'bg-indigo-100 text-indigo-700 border-indigo-300 dark:bg-indigo-900/60 dark:text-indigo-200 dark:border-indigo-700/50',
  'Programming':
    'bg-cyan-100 text-cyan-700 border-cyan-300 dark:bg-cyan-900/60 dark:text-cyan-200 dark:border-cyan-700/50',
  'Technology':
    'bg-sky-100 text-sky-700 border-sky-300 dark:bg-sky-900/60 dark:text-sky-200 dark:border-sky-700/50',
  'Nanotechnology':
    'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900/60 dark:text-emerald-200 dark:border-emerald-700/50',
  'Quantum-Computing':
    'bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900/60 dark:text-purple-200 dark:border-purple-700/50',
  'IT-Trends':
    'bg-rose-100 text-rose-700 border-rose-300 dark:bg-rose-900/60 dark:text-rose-200 dark:border-rose-700/50',
  'Startup':
    'bg-orange-100 text-orange-700 border-orange-300 dark:bg-orange-900/60 dark:text-orange-200 dark:border-orange-700/50',
  'Innovation':
    'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300 dark:bg-fuchsia-900/60 dark:text-fuchsia-200 dark:border-fuchsia-700/50',
  'Hackathons':
    'bg-pink-100 text-pink-700 border-pink-300 dark:bg-pink-900/60 dark:text-pink-200 dark:border-pink-700/50',
};

const defaultTagColor =
  'bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-800/60 dark:text-gray-300 dark:border-gray-600/50';

const blogPosts: BlogPost[] = [
  {
    title: 'What Nobody Tells You Before Your First Internship as an IT Student',
    description:
      'My first month as a software engineering intern, I opened the codebase and had no idea what I was looking at, even after 2 years of coding classes.',
    tags: ['Career-Advice', 'Computer-Science', 'Internships', 'Software-Engineering', 'Programming'],
    date: '01/04/2026',
    image: '/assets/blog/internship.jpg',
    slug: 'what-nobody-tells-you-first-internship-it-student',
    url: 'https://medium.com/@jeyakumaranpiratheepan120',
  },
  {
    title: 'From Micro to Nano: How Miniaturization is Powering the Future of IT',
    description:
      'Microprocessors got us to the smartphone era, but the real shift is happening at the nanometer scale — quantum dots, nano-transistors, and graphene circuits that could redefine computing itself.',
    tags: ['Technology', 'Nanotechnology', 'Computer-Science', 'Quantum-Computing', 'IT-Trends'],
    date: '28/05/2025',
    image: '/assets/blog/micro-to-nano.jpg',
    slug: 'from-micro-to-nano-miniaturization-it',
    url: 'https://medium.com/@jeyakumaranpiratheepan120/from-micro-to-nano-how-miniaturization-is-powering-the-future-of-information-technology-80e805ba1001',
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read: ${post.title}`}
      className="group block rounded-2xl overflow-hidden
        bg-white border border-gray-200 shadow-md
        hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100
        dark:bg-gray-900/80 dark:border-white/10
        dark:hover:border-indigo-500/50 dark:hover:shadow-indigo-500/10
        hover:-translate-y-1 transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent dark:from-gray-900/80 dark:via-gray-900/10" />
        {/* Medium badge */}
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 backdrop-blur-sm text-gray-700 dark:text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <ExternalLink className="w-3 h-3" />
          Medium
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-3 py-1 rounded-full border ${tagColorMap[tag] ?? defaultTagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{post.date}</p>
      </div>
    </a>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featuring Medium Articles</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Articles I've written and published on{' '}
            <a
              href="https://medium.com/@jeyakumaranpiratheepan120"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors"
            >
              Medium
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
