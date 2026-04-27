import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Mail, MapPin, Phone, Send, ChevronRight, Copy, Check, Download } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Github, Instagram } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useState, useRef } from 'react';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

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
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('khatridalton1235@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4x1"
    >

      <motion.h1 variants={item} className="text-5xl lg:text-7xl font-extrabold text-on-surface leading-tight mb-6 tracking-tight font-headline">
        Hello! I'm <span className="text-primary text-glow">Dalton.</span>
      </motion.h1>

      {/* Tagline badges */}
      <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant">
          <span className="text-primary">✦</span> Designer
        </span>
        <span className="text-outline-variant">|</span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant">
          <span className="text-primary">✦</span> Developer
        </span>
        <span className="text-outline-variant">|</span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant">
          <span className="text-primary">✦</span> Learner
        </span>
        <span className="text-outline-variant mx-1">·</span>
        <span className="flex items-center gap-1.5 text-sm text-on-surface-variant">
          <MapPin className="w-3.5 h-3.5 text-primary" /> Kathmandu, Nepal
        </span>
      </motion.div>


      <motion.p variants={item} className="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
        A Computer Engineering student at <span className="text-on-surface font-semibold">Kathmandu University</span>, passionate about technology and programming.
      </motion.p>

      <motion.p variants={item} className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
        Alongside my technical interests, I enjoy traveling, exploring nature, music, and playing the guitar. I'm a curious learner who's always looking to grow, try new things, and solve problems.
      </motion.p>

      <motion.div variants={item} className="flex flex-wrap gap-4 mb-24">
        <Link
          to="/about"
          className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(102,232,192,0.3)] transition-all hover:scale-[1.02] active:scale-95"
        >
          View More
          <ArrowRight className="w-5 h-5" />
        </Link>
        <a
          href="/assets/CV_DaltonKhatri.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-surface-high text-on-surface px-8 py-4 rounded-xl font-bold border border-outline-variant hover:bg-surface-variant transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download CV
        </a>
        <button
          onClick={copyEmail}
          className="bg-surface-high text-on-surface px-5 py-4 rounded-xl font-bold border border-outline-variant hover:bg-surface-variant hover:text-primary hover:border-primary transition-all flex items-center gap-2"
          title="Copy email address"
        >
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy Email'}
        </button>
      </motion.div>

      {/* Curated Works */}
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
            caseStudyId="e-badapatra"
          />
          <ProjectCard
            title="Freud"
            tags={["AI/ML", "Mobile App"]}
            description="Freud - AI-powered mental health chatbot built with Flutter, Firebase, and fine-tuned GPT-Neo 125M. Provides empathetic 24/7 support with crisis detection and 90-day privacy auto-deletion. Your safe space for mental wellness."
            image="/assets/Freud_pp.png"
            github="https://github.com/Dalton-Khatri/Freud"
            caseStudyId="freud"
          />
        </div>
      </motion.section>

      {/* Activities & Leadership */}
      <motion.section variants={item} className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-bold text-on-surface font-headline">Activities & Leadership</h3>
        </div>

        <div className="relative group bg-surface-high rounded-3xl overflow-hidden border border-outline-variant/50 hover:border-primary/30 transition-all duration-500 hover:translate-y-[-4px]">
          {/* Top green accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Left accent line */}
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-500 group-hover:h-full" />

          <div className="p-10 flex flex-col md:flex-row gap-8 items-start">
            {/* Icon block */}
            <div className="shrink-0 w-50 h-50 rounded-2xl bg-white border border-primary/20 flex items-center justify-center">
              <img
                src="/assets/KUCC.png"
                alt="KUCC"
                className="w-50 h-50 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                  Executive Member
                </span>
                <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
                  Nov 2025 - Present
                </span>
              </div>

              <h4 className="text-2xl font-bold text-on-surface font-headline mb-1 group-hover:text-primary transition-colors">
                Kathmandu University Computer Club
              </h4>
              <p className="text-sm text-primary font-medium mb-4 uppercase tracking-widest">KUCC</p>

              <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">
                Serving as an Executive Member at KUCC, one of the most active tech communities at Kathmandu University.
                Contributing to organizing technical workshops, hackathons, and community events that bridge the gap between
                students and the broader tech ecosystem.
              </p>
            </div>

            {/* Arrow */}
            <div className="shrink-0 self-center hidden md:block">
              <a
                href="https://kucc.ku.edu.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-surface-variant transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6 text-on-surface-variant group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={item} className="mb-12">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-on-surface font-headline mb-3">Get In <span className="text-primary">Touch</span></h3>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Whether it's a collaboration, a question, or just a hello, my digital door is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <ContactInfo
                    icon={Mail}
                    label="Email"
                    value="khatridalton1235@gmail.com"
                    href="mailto:khatridalton1235@gmail.com"
                  />
                </div>
                <button
                  onClick={copyEmail}
                  title="Copy email"
                  className="shrink-0 w-10 h-10 rounded-xl bg-surface-high border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <ContactInfo
                icon={MapPin}
                label="Location"
                value="Bouddha 6, Kathmandu"
              />
              <ContactInfo
                icon={Phone}
                label="Communication"
                value="+977 9841256096"
              />
            </div>

            <div className="pt-8 border-t border-outline-variant">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Social Archives</h3>
              <div className="flex gap-4">
                <SocialLink icon={Github} href="https://github.com/Dalton-Khatri" />
                <SocialLink icon={FaLinkedin} href="https://www.linkedin.com/in/dalton-khatri-856259342/" />
                <SocialLink icon={Instagram} href="https://www.instagram.com/dalton_khatri/" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-low p-8 lg:p-12 rounded-[3rem] border border-outline-variant">
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-4">Identification</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-surface-high border border-outline-variant rounded-2xl px-6 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-4">Return Address</label>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="your@email.com"
                  required
                  className="w-full bg-surface-high border border-outline-variant rounded-2xl px-6 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-4">Transmission</label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full bg-surface-high border border-outline-variant rounded-2xl px-6 py-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-on-primary font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === 'sending' ? 'Sending...' : 'Initiate Transmission'}
                <Send className="w-5 h-5" />
              </button>
              {status === 'success' && (
                <p className="text-center text-sm font-semibold text-primary">✓ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-semibold text-red-400">✗ Something went wrong. Please try emailing directly.</p>
              )}
            </form>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}

function ProjectCard({ title, tags, description, code, image, github, caseStudyId }: { title: string, tags: string[], description: string, code?: string, image: string, github?: string, caseStudyId?: string }) {
  const navigate = useNavigate();
  return (
    <div className="group relative bg-surface-high rounded-3xl overflow-hidden transition-all duration-500 hover:translate-y-[-8px] border border-outline-variant/50">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
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
          <button
            onClick={() => caseStudyId && navigate(`/projects/${caseStudyId}`)}
            className={`transition-colors ${caseStudyId ? 'cursor-pointer text-on-surface-variant hover:text-primary' : 'text-on-surface-variant'}`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>

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

function ContactInfo({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 bg-surface-high rounded-2xl flex items-center justify-center border border-outline-variant group-hover:border-primary group-hover:text-primary transition-all">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">{label}</span>
        <span className="text-xl font-medium text-on-surface group-hover:text-primary transition-colors">{value}</span>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a
      href={href}
      className="w-12 h-12 bg-surface-high rounded-xl flex items-center justify-center border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary hover:bg-surface-variant transition-all"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}