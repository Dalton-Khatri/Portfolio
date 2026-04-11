import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

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

export default function Experience() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      <motion.div variants={item} className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-on-surface mb-6 font-headline tracking-tight">
          Experience & <span className="text-primary">Leadership</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A chronological record of professional growth, academic milestones, and technical contributions.
        </p>
      </motion.div>

      {/* ── KUCC ── */}
      <motion.div variants={item}>
        <div className="relative rounded-[3rem] overflow-hidden border border-outline-variant bg-surface-low group hover:border-primary/30 transition-all duration-500">

          {/* Glowing top stripe — hover only */}
          <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Background glow blob — hover only */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-primary/0 group-hover:bg-primary/8 transition-all duration-700" />

          <div className="relative p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-10 items-start">

              {/* KUCC Logo */}
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

              {/* Chevron link */}
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
      </motion.div>

    </motion.div>
  );
}