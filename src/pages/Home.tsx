import { motion } from 'motion/react';
import { ArrowRight, Terminal, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Github} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4x1"
    >
      
      <motion.h1 variants={item} className="text-5xl lg:text-7xl font-extrabold text-on-surface leading-tight mb-8 tracking-tight font-headline">
       Hello! I’m <span className="text-primary  text-glow">Dalton.</span>
      </motion.h1>

      <motion.p variants={item} className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl.5">
        A Computer Engineering student at <span className="text-on-surface font-semibold">Kathmandu University</span>, passionate about technology and programming.
      </motion.p>

      <motion.p variants={item} className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl.5">
        Alongside my technical interests, I enjoy traveling, exploring nature, music, and playing the guitar. I’m a curious learner who’s always looking to grow, try new things, and solve problems
      </motion.p>
      

      <motion.div variants={item} className="flex flex-wrap gap-4 mb-24">
        <Link 
        to="/projects"
        className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(102,232,192,0.3)] transition-all hover:scale-[1.02] active:scale-95"
        >
          View Projects
          <ArrowRight className="w-5 h-5" />
        </Link>
        <a
        href="/assets/CV_DaltonKhatri.pdf"
        download="CV_DaltonKhatri.pdf"
        className="bg-surface-high text-on-surface px-8 py-4 rounded-xl font-bold border border-outline-variant hover:bg-surface-variant transition-colors"
        >
          Download CV
        </a>
      </motion.div>

      <motion.section variants={item} className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold text-on-surface font-headline">Curated Works</h3>
          <Link to="/projects" className="text-primary font-medium flex items-center gap-1 hover:underline">
            Explore All Works
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="E-Badapatra"
            tags={["C++ & Qt", "Chatbot"]}
            description="Local Government Service Finder(LGSF) aka ई-Badapatra is a Qt and C++ desktop chatbot that helps users find local government services through JSON-based intent matching."
            image="/assets/E-Badapatra.png"
            github="https://github.com/Dalton-Khatri/E-Badapatra"
          />
          <ProjectCard 
            title="Freud"
            tags={["AI/ML", "Mobile App"]}
            description="Freud - AI-powered mental health chatbot built with Flutter, Firebase, and fine-tuned GPT-Neo 125M. Provides empathetic 24/7 support with crisis detection and 90-day privacy auto-deletion. Your safe space for mental wellness."
            image="/assets/Freud_pp.png"
            github="https://github.com/Dalton-Khatri/Freud"
          />
        </div>
      </motion.section>
    </motion.div>
  );
}

function ProjectCard({ title, tags, description, code, image, github }: { title: string, tags: string[], description: string, code: string, image: string, github?: string }) {
  return (
    <div className="group relative bg-surface-high rounded-3xl overflow-hidden transition-all duration-500 hover:translate-y-[-8px] border border-outline-variant/50">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-high via-transparent to-transparent opacity-80" />
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors font-headline">{title}</h4>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <ArrowRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
          
          <div className="flex items-center gap-3">
            {github && (
              <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <span className="text-xs text-on-surface-variant font-mono">{code}</span>
          </div>
</div>
      </div>
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-500 group-hover:h-full" />
    </div>
  );
}
