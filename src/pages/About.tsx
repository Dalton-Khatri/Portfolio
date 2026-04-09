import { motion } from 'motion/react';
import { School, Download, GraduationCap, Users, Calendar, MapPin, Star } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// ─── Skills Data ────────────────────────────────────────────────────────────

const programmingLanguages = [
  { name: 'HTML',       icon: 'https://cdn.simpleicons.org/html5/ffffff' },
  { name: 'CSS',        icon: 'https://cdn.simpleicons.org/css3/ffffff' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/ffffff' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/ffffff' },
  { name: 'Python',     icon: 'https://cdn.simpleicons.org/python/ffffff' },
  { name: 'C',          icon: 'https://cdn.simpleicons.org/c/ffffff' },
  { name: 'C++',        icon: 'https://cdn.simpleicons.org/cplusplus/ffffff' },
  { name: 'Dart',       icon: 'https://cdn.simpleicons.org/dart/ffffff' },
];

const tools = [
  { name: 'Git / GitHub',      icon: 'https://cdn.simpleicons.org/github/ffffff' },
  { name: 'VS Code',           icon: 'https://cdn.simpleicons.org/visualstudiocode/ffffff' },
  { name: 'Qt Creator',        icon: 'https://cdn.simpleicons.org/qt/ffffff' },
  { name: 'Android Studio',    icon: 'https://cdn.simpleicons.org/androidstudio/ffffff' },
  { name: 'Kaggle',            icon: 'https://cdn.simpleicons.org/kaggle/ffffff' },
];

const frameworks = [
  { name: 'Flutter',      icon: 'https://cdn.simpleicons.org/flutter/ffffff' },
  { name: 'FastAPI',      icon: 'https://cdn.simpleicons.org/fastapi/ffffff' },
  { name: 'Firebase',     icon: 'https://cdn.simpleicons.org/firebase/ffffff' },
  { name: 'PyTorch',      icon: 'https://cdn.simpleicons.org/pytorch/ffffff' },
  { name: 'Docker',       icon: 'https://cdn.simpleicons.org/docker/ffffff' },
  { name: 'PostgreSQL',   icon: 'https://cdn.simpleicons.org/postgresql/ffffff' },
];

// ─── Education Data ──────────────────────────────────────────────────────────

const educationData = [
  {
    level: 'Secondary — Grade 10',
    school: 'Arunima Secondary School',
    date: '2022',
    gpa: '3.90 GPA',
    logo: null, // replace with: '/assets/arunima-logo.png'
    initials: 'AS',
  },
  {
    level: 'Higher Secondary — Grade 12',
    school: 'St. Lawrence Secondary School',
    date: '2024',
    gpa: '3.92 GPA',
    logo: null, // replace with: '/assets/stlawrence-logo.png'
    initials: 'SL',
  },
  {
    level: 'Undergraduate — B.E. Computer Engineering',
    school: 'Kathmandu University',
    date: '2024 — Present',
    gpa: 'In Progress',
    logo: null, // replace with: '/assets/ku-logo.png'
    initials: 'KU',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-28"
    >

      {/* ── INTRO ── */}
      <motion.section variants={item} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-on-surface mb-8 font-headline tracking-tight">
            <span className="text-primary">Dalton Khatri</span>
          </h1>
          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed mb-10">
            <p>
              I am Dalton Khatri, a Computer Engineering student at Kathmandu University with a profound interest in the intersection of hardware architecture and software systems.
            </p>
            <p>
              My journey began with a curiosity about how silicon translates into logic. This led me to explore everything from low-level assembly and embedded systems to modern full-stack development and decentralized architectures.
            </p>
            <p>
              I believe that great engineering is as much about aesthetics and user experience as it is about performance and reliability.
            </p>
          </div>

          <a
            href="/assets/CV_DaltonKhatri.pdf"
            download="CV_DaltonKhatri.pdf"
            className="inline-flex items-center gap-3 bg-surface-high text-on-surface px-8 py-4 rounded-xl font-bold border border-outline-variant hover:border-primary hover:text-primary transition-all group"
          >
            <Download className="w-5 h-5 group-hover:text-primary transition-colors" />
            Download CV
          </a>
        </div>

        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-outline-variant group">
          <img
            src="/assets/ProfilePic.jpg"
            alt="Dalton Khatri"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
        </div>
      </motion.section>

      {/* ── SKILLS ── */}
      <motion.section variants={item}>
        <h2 className="text-3xl font-bold text-on-surface mb-14 font-headline">
          Technical <span className="text-primary">Arsenal</span>
        </h2>

        <div className="space-y-10">

          {/* Programming Languages */}
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5 ml-1">Programming Languages</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {programmingLanguages.map((lang) => (
                <SkillPill key={lang.name} name={lang.name} icon={lang.icon} />
              ))}
            </div>
          </div>

          {/* Frameworks & Platforms */}
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5 ml-1">Frameworks & Platforms</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {frameworks.map((f) => (
                <SkillPill key={f.name} name={f.name} icon={f.icon} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5 ml-1">Tools</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tools.map((tool) => (
                <SkillPill key={tool.name} name={tool.name} icon={tool.icon} />
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5 ml-1">Areas of Interest</p>
            <div className="flex flex-wrap gap-3">
              {[
                'AI / ML Development',
                'Mobile App Development',
                'Natural Language Processing',
                'System Programming',
                'Game Development',
                'Social Service Tech',
              ].map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* ── EDUCATION TIMELINE ── */}
      <motion.section variants={item}>
        <h2 className="text-3xl font-bold text-on-surface mb-14 font-headline">
          Education <span className="text-primary">Path</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-outline-variant to-transparent" />

          <div className="space-y-0">
            {educationData.map((edu, index) => (
              <div key={edu.school} className="relative flex gap-8 pb-14 last:pb-0">
                {/* Node on the line */}
                <div className="relative z-10 shrink-0 flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center overflow-hidden shadow-[0_0_12px_rgba(102,232,192,0.25)]"
                  >
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-primary font-bold text-xs font-headline">{edu.initials}</span>
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-surface-high rounded-3xl border border-outline-variant/50 hover:border-primary/30 transition-all duration-300 p-8 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{edu.level}</span>
                      <h3 className="text-xl font-bold text-on-surface font-headline group-hover:text-primary transition-colors">
                        {edu.school}
                      </h3>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                      <span className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.date}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                        <Star className="w-3 h-3" />
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── EXPERIENCE / KUCC ── */}
      <motion.section variants={item}>
        <h2 className="text-3xl font-bold text-on-surface mb-14 font-headline">
          Experience & <span className="text-primary">Leadership</span>
        </h2>

        <div className="relative rounded-[3rem] overflow-hidden border border-outline-variant bg-surface-low group hover:border-primary/30 transition-all duration-500">

          {/* Glowing top stripe */}
          <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

          {/* Background glow blob */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all duration-700" />

          <div className="relative p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-10 items-start">

              {/* Logo block */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-surface-high border border-outline-variant flex items-center justify-center overflow-hidden group-hover:border-primary/40 transition-all duration-300 shadow-lg">
                  {/* Replace src with '/assets/kucc-logo.png' once you add it */}
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-primary opacity-70" />
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                    Executive Member
                  </span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
                    Nov 2025 - Present
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-on-surface font-headline mb-1 group-hover:text-primary transition-colors duration-300">
                  Kathmandu University<br />Computer Club
                </h3>
                <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">KUCC</p>

                <p className="text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                  Serving as an Executive Member at KUCC, one of the most active tech communities at Kathmandu University.
                  Contributing to organizing technical workshops, hackathons, and community-driven events that bridge the gap
                  between students and the broader tech ecosystem in Nepal.
                </p>

                {/* Responsibility tags */}
                <div className="flex flex-wrap gap-3">
                  {['Workshops', 'Hackathons', 'Community Events', 'Tech Outreach'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-surface-high text-on-surface-variant text-xs font-semibold rounded-xl border border-outline-variant hover:border-primary/40 hover:text-primary transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom left corner accent */}
          <div className="absolute bottom-0 left-0 w-[3px] h-24 bg-gradient-to-t from-primary to-transparent" />
          <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </motion.section>

    </motion.div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SkillPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-4 bg-surface-high border border-outline-variant/80 rounded-2xl px-5 py-4 hover:border-primary/40 hover:bg-surface-variant transition-all duration-200 group cursor-default">
      <div className="w-7 h-7 shrink-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain"
          onError={(e) => {
            // fallback: hide broken icon
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}