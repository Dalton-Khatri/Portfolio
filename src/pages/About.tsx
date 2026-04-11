import { motion } from 'motion/react';
import { Download, Calendar, Star, X } from 'lucide-react';
import { useState } from 'react';

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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxLabel, setLightboxLabel] = useState<string>('');

  const openLightbox = (src: string, label: string) => {
    setLightboxSrc(src);
    setLightboxLabel(label);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
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
                I’m Dalton Khatri, a Computer Engineering student at Kathmandu University, currently exploring my journey in the IT and engineering world. I enjoy building projects, trying out new technologies, and experimenting with new ideas.
              </p>
              <p>
                I’m especially interested in working on solutions that can solve real-world and social problems. I like learning by doing, and I’m always exploring different stacks and approaches to improve my skills.
              </p>
              <p>
                Outside of tech, I love traveling, exploring nature, listening to music, and playing the guitar. I’m a curious learner who’s always looking to grow, try new things, and take on new challenges.
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
              {educationData.map((edu) => {
                const isRight = edu.side === 'right';
                return (
                  <div
                    key={edu.school}
                    className="group relative grid grid-cols-[1fr_48px_1fr] items-center gap-0 pb-16 last:pb-0"
                  >
                    {/* LEFT SLOT */}
                    <div className="pr-8 flex justify-end">
                      {!isRight ? (
                        <EduCard edu={edu} align="right" />
                      ) : (
                        <div className="w-full max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                          <BatchPhoto
                            src={edu.batchPhoto}
                            school={edu.school}
                            onOpen={openLightbox}
                          />
                        </div>
                      )}
                    </div>

                    {/* CENTER: dot node */}
                    <div className="flex justify-center z-10">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_rgba(102,232,192,0.6)] group-hover:shadow-[0_0_20px_rgba(102,232,192,0.9)] group-hover:scale-125 transition-all duration-300" />
                    </div>

                    {/* RIGHT SLOT */}
                    <div className="pl-8 flex justify-start">
                      {isRight ? (
                        <EduCard edu={edu} align="left" />
                      ) : (
                        <div className="w-full max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                          <BatchPhoto
                            src={edu.batchPhoto}
                            school={edu.school}
                            onOpen={openLightbox}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* ── HALL OF ACHIEVEMENT ── */}
        <motion.section variants={item}>
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-on-surface font-headline">
              Hall of <span className="text-primary">Achievement</span>
            </h2>
            <p className="text-on-surface-variant mt-3 text-base">Milestones worth remembering.</p>
          </div>

          <div className="space-y-8">

            {/* ── Achievement 1 — IT Meet 2026 ── */}
            <div className="group relative bg-surface-low rounded-[2.5rem] border border-outline-variant hover:border-primary/30 overflow-hidden transition-all duration-500 flex flex-col lg:flex-row">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Photo — left */}
              <div
                className="lg:w-2/5 aspect-[4/3] lg:aspect-auto relative shrink-0 overflow-hidden cursor-pointer"
                onClick={() => openLightbox('/assets/ideapitching.jpg', 'IT Meet 2026 — Idea Pitching')}
              >
                <img
                  src="/assets/ideapitching.jpg"
                  alt="IT Meet 2026 Idea Pitching"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = 'none';
                    el.parentElement!.classList.add('bg-surface-high', 'flex', 'items-center', 'justify-center', 'min-h-[200px]');
                    el.parentElement!.innerHTML = `<span class="text-on-surface-variant text-xs font-mono p-6">ideapitching.jpg</span>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-low opacity-0 lg:opacity-60" />
              </div>

              {/* Content — right */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                    🏆 2nd Runner Up
                  </span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
                    IT Meet 2026
                  </span>
                  <span className="ml-auto text-xs text-on-surface-variant font-mono">Recent</span>
                </div>

                <h3 className="text-2xl font-extrabold text-on-surface font-headline mb-1 group-hover:text-primary transition-colors duration-300">
                  Idea Pitching — IT Meet 2026
                </h3>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Kathmandu, Nepal</p>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Our team secured 2nd Runner-Up in the Idea Pitching event at IT Meet 2026. Together with{' '}
                  <span className="text-on-surface font-semibold">Aayush K.C.</span>,{' '}
                  <span className="text-on-surface font-semibold">Abhyudaya Pokhrel</span>, and{' '}
                  <span className="text-on-surface font-semibold">Anurat Niraula</span>, we presented{' '}
                  <span className="text-primary font-semibold">ई-Badapatra</span>, extending beyond a chatbot
                  by integrating directly into the Nagarik App, aiming to make government services more
                  accessible and citizen-friendly.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['ई-Badapatra', 'Nagarik App', 'GovTech', 'Team of 4'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-high text-on-surface-variant text-xs font-medium rounded-xl border border-outline-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Achievement 2 — Trinity SciTech 2023 ── */}
            <div className="group relative bg-surface-low rounded-[2.5rem] border border-outline-variant hover:border-primary/30 overflow-hidden transition-all duration-500 flex flex-col lg:flex-row-reverse">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Photo — right (mirrored) */}
              <div
                className="lg:w-2/5 aspect-[4/3] lg:aspect-auto relative shrink-0 overflow-hidden cursor-pointer"
                onClick={() => openLightbox('/assets/trinity.jpg', 'Trinity SciTech & Management Expo 2023')}
              >
                <img
                  src="/assets/trinity.jpg"
                  alt="Trinity SciTech Expo 2023"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = 'none';
                    el.parentElement!.classList.add('bg-surface-high', 'flex', 'items-center', 'justify-center', 'min-h-[200px]');
                    el.parentElement!.innerHTML = `<span class="text-on-surface-variant text-xs font-mono p-6">trinity.jpg</span>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-low opacity-0 lg:opacity-60" />
              </div>

              {/* Content — left (mirrored) */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
                    🥇 Winner
                  </span>
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
                    SciTech & Mgmt Expo
                  </span>
                  <span className="ml-auto text-xs text-on-surface-variant font-mono">Jan 30, 2023</span>
                </div>

                <h3 className="text-2xl font-extrabold text-on-surface font-headline mb-1 group-hover:text-primary transition-colors duration-300">
                  Trinity SciTech & Management Expo
                </h3>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  Exhibition-cum-Competition · Magh 16, 2079
                </p>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  Together with three teammates, we represented{' '}
                  <span className="text-on-surface font-semibold">St. Lawrence College</span> and presented
                  our mini-project at this inter-college science & management exhibition, a proud early
                  milestone that set the tone for what was to come.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Mini Project', 'St. Lawrence College', 'Team of 4', 'Exhibition'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-high text-on-surface-variant text-xs font-medium rounded-xl border border-outline-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.section>

      </motion.div>

      {/* ── LIGHTBOX ── */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(10px)' }}
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            style={{ width: '60vw', maxWidth: '1100px' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxSrc}
              alt={lightboxLabel}
              className="w-full h-auto block"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h2 className="text-xl font-bold text-white font-headline">{lightboxLabel}</h2>
            </div>
            {/* Close button */}
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 text-white hover:text-primary hover:border-primary transition-all"
              style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
              onClick={closeLightbox}
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </>
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
      <div className="flex items-center gap-4 mb-5">
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
        <h3 className="text-base font-bold text-on-surface font-headline group-hover:text-primary transition-colors leading-snug">
          {edu.school}
        </h3>
      </div>

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

function BatchPhoto({
  src,
  school,
  onOpen,
}: {
  src: string;
  school: string;
  onOpen: (src: string, label: string) => void;
}) {
  return (
    <div
      className="w-full max-w-xs aspect-[4/3] rounded-3xl overflow-hidden border border-primary/30 shadow-[0_0_20px_rgba(102,232,192,0.15)] cursor-pointer"
      onClick={() => onOpen(src, `${school} — Batch Photo`)}
    >
      <img
        src={src}
        alt={`${school} batch`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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