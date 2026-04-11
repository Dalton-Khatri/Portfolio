import { motion } from 'motion/react';
import { Download, Calendar, Star, ChevronRight } from 'lucide-react';

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

// ─── Skills Data ─────────────────────────────────────────────────────────────

const programmingLanguages = [
  { name: 'HTML',       icon: 'https://cdn.simpleicons.org/html5/e0e0e0' },
  { name: 'CSS',        icon: 'https://cdn.simpleicons.org/css/e0e0e0' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/e0e0e0' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/e0e0e0' },
  { name: 'Python',     icon: 'https://cdn.simpleicons.org/python/e0e0e0' },
  { name: 'C',          icon: 'https://cdn.simpleicons.org/c/e0e0e0' },
  { name: 'C++',        icon: 'https://cdn.simpleicons.org/cplusplus/e0e0e0' },
  { name: 'Dart',       icon: 'https://cdn.simpleicons.org/dart/e0e0e0' },
];

const frameworks = [
  { name: 'Flutter',    icon: 'https://cdn.simpleicons.org/flutter/e0e0e0' },
  { name: 'FastAPI',    icon: 'https://cdn.simpleicons.org/fastapi/e0e0e0' },
  { name: 'Firebase',   icon: 'https://cdn.simpleicons.org/firebase/e0e0e0' },
  { name: 'PyTorch',    icon: 'https://cdn.simpleicons.org/pytorch/e0e0e0' },
  { name: 'Docker',     icon: 'https://cdn.simpleicons.org/docker/e0e0e0' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/e0e0e0' },
];

const tools = [
  { name: 'Git / GitHub',   icon: 'https://cdn.simpleicons.org/github/e0e0e0' },
  { name: 'VS Code',        icon: 'https://cdn.simpleicons.org/visualstudiocode/e0e0e0' },
  { name: 'Qt Creator',     icon: 'https://cdn.simpleicons.org/qt/e0e0e0' },
  { name: 'Android Studio', icon: 'https://cdn.simpleicons.org/androidstudio/e0e0e0' },
  { name: 'Kaggle',         icon: 'https://cdn.simpleicons.org/kaggle/e0e0e0' },
];

const interests = [
  'AI / ML Development',
  'Mobile App Development',
  'Natural Language Processing',
  'System Programming',
  'Game Development',
  'Social Service Tech',
];

const educationData = [
  {
    level: 'Undergraduate — B.E. Computer Engineering',
    school: 'Kathmandu University',
    date: '2024-Present',
    gpa: 'In Progress',
    logo: '/assets/KU.png',
    initials: 'KU',
    batchPhoto: '/assets/KU_batch.jpg',      
    side: 'right' as const,
  },
  {
    level: 'Higher Secondary — Grade 12',
    school: 'St. Lawrence Secondary School',
    date: '2024',
    gpa: '3.92 GPA',
    logo: '/assets/StLawrence.png',
    initials: 'SL',
    batchPhoto: '/assets/St_batch.jpg', 
    side: 'left' as const,
  },
  {
    level: 'Secondary — Grade 10',
    school: 'Arunima Secondary School',
    date: '2022',
    gpa: '3.90 GPA',
    logo: '/assets/Arunima.png',
    initials: 'AS',
    batchPhoto: '/assets/Arunima_batch.jpg',  
    side: 'right' as const,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

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
          <SkillGroup label="Programming Languages" skills={programmingLanguages} />
          <SkillGroup label="Frameworks & Platforms" skills={frameworks} />
          <SkillGroup label="Tools" skills={tools} />

          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5 ml-1">Areas of Interest</p>
            <div className="flex flex-wrap gap-3">
              {interests.map((area) => (
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
        <h2 className="text-3xl font-bold text-on-surface mb-16 font-headline">
          Education <span className="text-primary">Path</span>
        </h2>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          {/* "Present" label at top */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-background px-2">Present</span>
          </div>

          {/* "Grade 10" label at bottom */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-background px-2">Grade 10</span>
          </div>

          <div className="space-y-0">
            {educationData.map((edu, index) => {
              const isRight = edu.side === 'right';
              return (
                <div
                  key={edu.school}
                  className="group relative grid grid-cols-[1fr_48px_1fr] items-center gap-0 pb-16 last:pb-0"
                >
                  {/* LEFT SLOT */}
                  <div className="pr-8 flex justify-end">
                    {!isRight ? (
                      // Info card on left
                      <EduCard edu={edu} align="right" />
                    ) : (
                      // Batch photo appears on hover (left side is empty when card is right)
                      <div className="w-full max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                        <BatchPhoto src={edu.batchPhoto} school={edu.school} />
                      </div>
                    )}
                  </div>

                  {/* CENTER: simple dot node */}
                  <div className="flex justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_rgba(102,232,192,0.6)] group-hover:shadow-[0_0_20px_rgba(102,232,192,0.9)] group-hover:scale-125 transition-all duration-300" />
                  </div>

                  {/* RIGHT SLOT */}
                  <div className="pl-8 flex justify-start">
                    {isRight ? (
                      // Info card on right
                      <EduCard edu={edu} align="left" />
                    ) : (
                      // Batch photo appears on hover (right side is empty when card is left)
                      <div className="w-full max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                        <BatchPhoto src={edu.batchPhoto} school={edu.school} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── EXPERIENCE / KUCC ── */}
      <motion.section variants={item}>
        <h2 className="text-3xl font-bold text-on-surface mb-14 font-headline">
          Experience & <span className="text-primary">Leadership</span>
        </h2>

        <div className="relative rounded-[3rem] overflow-hidden border border-outline-variant bg-surface-low group hover:border-primary/30 transition-all duration-500">

          {/* Glowing top stripe — hover only */}
          <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Background glow blob — hover only */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-primary/0 group-hover:bg-primary/8 transition-all duration-700" />

          <div className="relative p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-10 items-start">

              {/* KUCC Logo — large with white bg */}
              <div className="shrink-0 w-64 h-64 rounded-2xl bg-white border border-outline-variant group-hover:border-primary/40 transition-all duration-300 shadow-lg overflow-hidden">
                <img
                  src="/assets/KUCC.png"
                  alt="KUCC"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = 'none';
                    const parent = el.parentElement!;
                    parent.classList.add('flex', 'items-center', 'justify-center');
                    parent.innerHTML = '<span class="text-green-600 font-bold text-xl font-headline">KUCC</span>';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                    Executive Member
                  </span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
                    Nov 2025 — Present
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-on-surface font-headline mb-1 group-hover:text-primary transition-colors duration-300">
                  Kathmandu University<br />Computer Club
                </h3>
                <p className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">KUCC</p>

                <p className="text-on-surface-variant leading-relaxed max-w-2xl mb-8">
                  Serving as an Executive Member at KUCC, one of the most active tech communities at
                  Kathmandu University. Contributing to organizing technical workshops, hackathons, and
                  community-driven events that bridge the gap between students and the broader tech
                  ecosystem in Nepal.
                </p>

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

              {/* Chevron link — far right */}
              <a
                href="https://kucc.ku.edu.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 self-center w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </a>

            </div>
          </div>

          {/* Corner accents — hover only */}
          <div className="absolute bottom-0 left-0 w-[3px] h-24 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.section>

    </motion.div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SkillGroup({ label, skills }: { label: string; skills: { name: string; icon: string }[] }) {
  return (
    <div>
      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-5 ml-1">{label}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <SkillPill key={s.name} name={s.name} icon={s.icon} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-4 bg-surface-high border border-outline-variant/80 rounded-2xl px-5 py-4 hover:border-primary/40 hover:bg-surface-variant transition-all duration-200 group cursor-default">
      <div className="w-6 h-6 shrink-0 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain filter brightness-150"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="text-sm font-semibold text-on-surface-variant group-hover:text-on-surface transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function EduCard({ edu, align }: { edu: typeof educationData[0]; align: 'left' | 'right' }) {
  return (
    <div className="w-full bg-surface-high rounded-3xl border border-outline-variant/50 group-hover:border-primary/40 transition-all duration-300 p-6">
      {/* Top row: logo + school name side by side */}
      <div className="flex items-center gap-4 mb-5">
        {/* Logo with white background */}
        <div className="shrink-0 w-16 h-16 rounded-2xl bg-white border border-outline-variant/30 overflow-hidden shadow-sm flex items-center justify-center">
          <img
            src={edu.logo}
            alt={edu.school}
            className="w-full h-full object-contain p-1"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = 'none';
              el.parentElement!.innerHTML = `<span class="text-green-700 font-bold text-xs font-headline">${edu.initials}</span>`;
            }}
          />
        </div>
        {/* School name next to logo */}
        <h3 className="text-base font-bold text-on-surface font-headline group-hover:text-primary transition-colors leading-snug">
          {edu.school}
        </h3>
      </div>

      {/* Details below */}
      <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-3">{edu.level}</span>
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-3.5 h-3.5 text-on-surface-variant" />
        <span className="text-sm text-on-surface-variant font-medium">{edu.date}</span>
      </div>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
        <Star className="w-3 h-3" />
        {edu.gpa}
      </span>
    </div>
  );
}

function BatchPhoto({ src, school }: { src: string; school: string }) {
  return (
    <div className="w-full max-w-xs aspect-[4/3] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_20px_rgba(102,232,192,0.15)]">
      <img
        src={src}
        alt={`${school} batch`}
        className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-500"
        onError={(e) => {
          const el = e.currentTarget as HTMLImageElement;
          el.parentElement!.classList.add('bg-surface-high', 'flex', 'items-center', 'justify-center');
          el.style.display = 'none';
          el.parentElement!.innerHTML = `<span class="text-on-surface-variant text-xs font-medium p-4 text-center">Add ${school} batch photo to /assets/</span>`;
        }}
      />
    </div>
  );
}