import { motion } from 'motion/react';
import { Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'e-badapatra',
    title: 'E-Badapatra',
    category: 'C++ & Qt / Chatbot',
    description: 'Local Government Service Finder (LGSF) aka ई-Badapatra is a Qt and C++ desktop chatbot that helps users find local government services through JSON-based intent matching.',
    image: '/assets/E-Badapatra.png',
    tech: ['C++', 'Qt', 'JSON', 'Chatbot'],
    github: 'https://github.com/Dalton-Khatri/E-Badapatra',
    status: 'Desktop App Prototype',
  },
  {
    id: 'freud',
    title: 'Freud',
    category: 'AI/ML / Mobile App',
    description: 'Freud is an AI-powered mental health chatbot built with Flutter, Firebase, and fine-tuned GPT-Neo 125M. Provides empathetic 24/7 support with crisis detection and 90-day privacy auto-deletion.',
    image: '/assets/Freud_pp.png',
    tech: ['Flutter', 'Firebase', 'GPT-Neo', 'Python'],
    github: 'https://github.com/Dalton-Khatri/Freud',
    status: 'Mobile App Prototype',
  },
  {
    id: 'lenden',
    title: 'LenDen',
    category: 'Finance / Mobile App',
    description: 'A Flutter + Firebase money tracker for tracking dues between friends. Real-time balances, PDF export, starred transactions, and cloud sync, no sign-up needed.',
    image: '/assets/Lenden.png',
    tech: ['Flutter', 'Firebase', 'Firestore', 'Dart'],
    github: 'https://github.com/Dalton-Khatri/LenDen',
    status: 'Mobile App',
  },
  {
    id: 'riskmapper',
    title: 'RiskMapper Nepal',
    category: 'GIS / Web App',
    description: 'A web-based seismic risk dashboard for Kathmandu that visualizes earthquake vulnerability across 32 wards, simulates damage cascades via BFS, computes smart evacuation routes through OSRM, and sends real-time push notifications.',
    image: '/assets/RiskMapper.png',
    tech: ['Leaflet.js', 'Node.js', 'OSRM', 'Python'],
    github: 'https://github.com/Dalton-Khatri/RiskMapper',
    status: 'Web App',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      <motion.div variants={item} className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-on-surface mb-6 font-headline tracking-tight">
          The <span className="text-primary">Archive</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          An evolving collection of learning, building, and real-world exploration.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group flex flex-col lg:flex-row gap-8 lg:gap-12 bg-surface-low p-6 lg:p-10 rounded-[2.5rem] border border-outline-variant hover:border-primary/30 transition-all duration-500"
          >
            <div
              className="lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden relative cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                {project.status}
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">{project.category}</span>
              <h2
                className="text-4xl font-bold text-on-surface mb-6 font-headline group-hover:text-primary transition-colors cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {project.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-8 text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-surface-high rounded-xl text-xs font-medium border border-outline-variant">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-surface-high rounded-2xl text-on-surface hover:text-primary hover:bg-surface-variant transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="flex-1 bg-primary text-on-primary font-bold rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}