import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Github, Download, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Objective { number: string; title: string; description: string; }
interface Feature { emoji: string; title: string; description: string; }

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  team: string[];
  tech: string[];
  github: string;
  report: string | null;
  apk: string | null;
  coverImage: string;
  slides: string[];
  abstract: string;
  objectives: Objective[];
  features: Feature[];
  tools: string[];
  conclusion: string;
}

const caseStudies: Record<string, CaseStudyData> = {
  'e-badapatra': {
    id: 'e-badapatra',
    title: 'ई-Badapatra',
    subtitle: 'Local Government Service Finder',
    tagline: 'Bridging citizens and local government through intelligent offline conversation, accurate, and always available.',
    category: 'C++ & Qt / Desktop Chatbot',
    year: '2025',
    role: 'Co-Developer',
    team: ['Aayush K.C.', 'Anurat Niraula', 'Dalton Khatri', 'Siddharth Thapa', 'Tosin Lamichhane'],
    tech: ['C++', 'Qt 6.5', 'PostgreSQL', 'SQLite', 'JSON', 'NLP'],
    github: 'https://github.com/Dalton-Khatri/E-Badapatra',
    report: '/assets/E-Badapatra.pdf',
    apk: null,
    coverImage: '/assets/E-Badapatra.png',
    slides: [
      '/assets/ebadapatra_1.png',
      '/assets/ebadapatra_2.png',
      '/assets/ebadapatra_3.png',
      '/assets/ebadapatra_4.png',
    ],
    abstract: `Many citizens in Nepal face difficulties accessing local government services due to disorganized information and limited online systems. ई-Badapatra is a desktop chatbot application built with Qt and C++ that provides clear, step-by-step guidance to users in plain language using NLP, without requiring internet access. It uses a structured data system to interpret user questions and offer accurate responses about citizenship, passports, property tax, birth registration, and more. The design emphasizes user experience, simplicity, and offline functionality.`,
    objectives: [
      {
        number: '01',
        title: 'Intuitive Qt-Based GUI',
        description: 'Design a clean interface for user login, signup, and chatbot interaction, making government service information accessible without technical skills.',
      },
      {
        number: '02',
        title: 'Natural Language Processing',
        description: 'Build a chat interface with NLP to deliver dynamic, user-friendly service instructions through intent matching and fuzzy query handling.',
      },
      {
        number: '03',
        title: 'Offline Functionality',
        description: 'Ensure the system runs fully offline, critical for deployment in areas with limited internet access across Nepal.',
      },
    ],
    features: [
      { emoji: '💬', title: 'Intent Recognition', description: 'Matches user queries through keyword, partial, and fuzzy matching to handle varied phrasing naturally.' },
      { emoji: '🗂️', title: 'Dynamic Service Response', description: 'Retrieves info from Ministries → Offices → Services → Documents hierarchy, including fees and requirements.' },
      { emoji: '📋', title: 'Conversation History', description: 'Saves chat history in SQLite for fast access and JSON for backups, users can revisit or delete chats anytime.' },
      { emoji: '🕐', title: 'Office Hour Awareness', description: 'Checks real-time day and time to answer questions about office availability, including special closures.' },
      { emoji: '🔢', title: 'Numbered Options', description: 'Presents lists when multiple services match, letting users select via number input for precision.' },
      { emoji: '🌐', title: 'Multilingual Input', description: 'Supports context-aware queries and multilingual input to improve usability for all Nepali citizens.' },
    ],
    tools: ['C++', 'Qt 6.5', 'Qt Creator', 'PostgreSQL', 'SQLite', 'JSON', 'Tesseract OCR', 'VS Code', 'GitHub'],
    conclusion: `ई-Badapatra demonstrates how a simple, offline desktop tool can meaningfully reduce friction between citizens and government services in Nepal. The chatbot accurately matches queries, retrieves real-time data from a PostgreSQL database, and presents results through an engaging interface with typing animations and sidebar navigation. This project later evolved into ई-Badapatra v2, which won 2nd Runner-Up at IT Meet 2026's Idea Pitching competition,  validating its real-world impact.`,
  },

  'freud': {
    id: 'freud',
    title: 'Freud',
    subtitle: 'Mental Health AI Assistant',
    tagline: 'Your safe space for mental wellness, empathetic, private, and always available.',
    category: 'AI/ML / Mobile App',
    year: '2026',
    role: 'Co-Developer',
    team: ['Aayush K.C.', 'Anurat Niraula', 'Anwesh Humagain', 'Dalton Khatri', 'Himesh Bhandari'],
    tech: ['Flutter', 'Dart', 'Firebase', 'FastAPI', 'Python', 'GPT-Neo 125M'],
    github: 'https://github.com/Dalton-Khatri/Freud',
    report: '/assets/Freud.pdf',
    apk: null,
    coverImage: '/assets/Freud_pp.png',
    slides: [
      '/assets/freud_1.png',
      '/assets/freud_2.png',
      '/assets/freud_3.png',
      '/assets/freud_4.png',
      '/assets/freud_5.png',
      '/assets/freud_6.png',
      '/assets/freud_7.png',
      '/assets/freud_8.png',
      
    ],
    abstract: `Mental health problems are increasing rapidly worldwide, yet many people still lack access to proper support. Freud is a mobile application developed to provide basic mental health support using AI, specifically designed for middle-class individuals who cannot afford professional therapy, or those who feel uncomfortable opening up to others. The app uses a fine-tuned GPT-Neo 125M model to understand user input and respond in a supportive, empathetic manner, while maintaining strong privacy through automatic 90-day data deletion.`,
    objectives: [
      {
        number: '01',
        title: 'Fine-Tuned Conversational AI',
        description: 'Design and develop a fine-tuned model capable of engaging in empathetic, context-aware conversations related to mental health support.',
      },
      {
        number: '02',
        title: 'Privacy-First Architecture',
        description: 'Build a privacy-focused app with automatic 90-day TTL data deletion, Firestore security rules, and zero third-party data sharing.',
      },
      {
        number: '03',
        title: 'Safety & Crisis Detection',
        description: 'Implement a safety mechanism to detect signs of emotional distress and provide appropriate guidance and redirection to professional help.',
      },
      {
        number: '04',
        title: 'Accessible AI Deployment',
        description: 'Demonstrate feasibility of deploying large language models on resource-constrained infrastructure, making support available without financial barriers.',
      },
    ],
    features: [
      { emoji: '🤖', title: 'Fine-Tuned GPT-Neo 125M', description: 'Fine-tuned on 11,139 mental health conversation samples across 80 emotional intent categories including sadness, anxiety, crisis, and meditation.' },
      { emoji: '🔒', title: '90-Day Auto-Delete', description: 'All conversation data automatically purged after 90 days via Firebase TTL privacy is built-in, not optional.' },
      { emoji: '🚨', title: 'Crisis Detection', description: 'Keyword-based safety layer detects distress signals and appends helpline resources in responses.' },
      { emoji: '☁️', title: 'FastAPI + HuggingFace', description: 'Backend deployed on Hugging Face Spaces via FastAPI free cloud hosting with 24/7 availability.' },
      { emoji: '📱', title: 'Flutter Mobile App', description: 'Full-featured Flutter app with real-time chat, conversation management, mood tracking, and calming purple UI.' },
      { emoji: '🛡️', title: 'Firebase Security', description: 'Firestore security rules enforce user data isolation, users can only ever access their own conversations.' },
    ],
    tools: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'FastAPI', 'Python', 'GPT-Neo 125M', 'Hugging Face', 'Kaggle P100 GPU', 'Android Studio', 'VS Code'],
    conclusion: `Freud successfully demonstrates the feasibility of building an accessible, privacy-focused AI chatbot for emotional support using open-source tools and limited resources. The team fine-tuned GPT-Neo 125M on mental health conversation data, deployed it via FastAPI on Hugging Face Spaces, and integrated it into a full-featured Flutter app with Firebase backend, all within a 3-month timeline. Training loss dropped steadily from 3.2 to 0.6 across 3 epochs with minimal gap between training and validation curves, confirming successful fine-tuning without overfitting.`,
  },

  'lenden': {
    id: 'lenden',
    title: 'LenDen',
    subtitle: 'Paisa Saathi — Money Between Friends',
    tagline: 'Remove the awkwardness of tracking money between friends. Log, settle, and share with no sign-up needed.',
    category: 'Finance / Mobile App',
    year: '2025',
    role: 'Developer',
    team: ['Dalton Khatri'],
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'pdf (dart)', 'share_plus'],
    github: 'https://github.com/Dalton-Khatri/LenDen',
    report: null,
    apk: '/assets/LenDen.apk',
    coverImage: '/assets/Lenden.png',
    slides: [
      '/assets/lenden_1.png',
      '/assets/lenden_2.png',
      '/assets/lenden_3.png',
      '/assets/lenden_4.png',
      '/assets/lenden_5.png',
      '/assets/lenden_6.png',
      '/assets/lenden_7.png',
    ],
    abstract: `In Nepal and South Asia, informal lending between friends and family is extremely common but memory is unreliable and asking for money back is uncomfortable. LenDen (Paisa Saathi) is a Flutter mobile application designed to remove exactly that awkwardness. It makes it effortless to log every transaction, see exactly who owes what in real time, and share proof as a professional PDF. Built with Flutter and Firebase, the app works without any sign-up using anonymous authentication, just open and use, instantly.`,
    objectives: [
      {
        number: '01',
        title: 'Zero-Friction Onboarding',
        description: 'Firebase anonymous auth creates a unique identity silently on first launch with no email, no password, no forms.',
      },
      {
        number: '02',
        title: 'Real-Time Balance Tracking',
        description: 'Show live net balances per friend using persistent Firestore stream subscriptions that never flicker or reload unnecessarily.',
      },
      {
        number: '03',
        title: 'Shareable PDF Evidence',
        description: 'Generate professional PDFs, per-friend transaction tables or full date-range reports — shareable directly on WhatsApp or email.',
      },
      {
        number: '04',
        title: 'Robust Data Management',
        description: 'Support editing, starring, settling, unsettling, and deleting transactions. Batch settle-all with atomic Firestore batch writes.',
      },
    ],
    features: [
      { emoji: '💜', title: 'Friend Profiles', description: 'Add friends with a camera photo or emoji avatar. Edit name, photo, and avatar anytime. Duplicate name guard prevents confusion.' },
      { emoji: '📊', title: 'Live Balance Dashboard', description: 'Green = they owe you. Red = you owe them. Updates instantly without flicker via Firestore stream subscriptions.' },
      { emoji: '💸', title: 'Transaction Logging', description: 'Log I Gave / I Took with reason, optional note, date, and up to 3 decimal precision. Sorted newest first, active above settled.' },
      { emoji: '✅', title: 'Settle & Unsettle', description: 'Settle individual transactions or settle everything with a long press. Unsettling moves a transaction back to active, full flexibility.' },
      { emoji: '⭐', title: 'Starred Transactions', description: 'Star any transaction to mark it important. All starred transactions across all friends visible in the Analysis screen.' },
      { emoji: '📄', title: 'PDF Export', description: 'Two modes: per-friend active transactions with summary, or full report across all friends with date range filter and grand total.' },
    ],
    tools: ['Flutter 3.0+', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'pdf (dart)', 'share_plus', 'image_picker', 'flutter_animate', 'google_fonts', 'Android Studio', 'VS Code'],
    conclusion: `The informal lending culture in Nepal, where "I'll pay you back" is said dozens of times a week, needed a tool this simple. By combining Flutter's UI power with Firebase's real-time capabilities, LenDen turned a frustrating social problem into a clean, shareable, always-in-your-pocket solution. Every decision, from the glassmorphism UI to the in-memory sorting strategy, was made to keep the experience fast and the codebase maintainable.`,
  },

  'riskmapper': {
    id: 'riskmapper',
    title: 'RiskMapper Nepal',
    subtitle: 'Seismic Risk Dashboard for Kathmandu',
    tagline: 'Mapping earthquake vulnerability across 32 wards of Kathmandu — real data, real routes, real-time alerts.',
    category: 'GIS / Web App',
    year: '2026',
    role: 'Co-Developer',
    team: ['Abhyudaya Pokhrel', 'Dalton Khatri', 'Sahaj Wagle', 'Saksham Dallakoti'],
    tech: ['Leaflet.js', 'Node.js', 'Express', 'OSRM', 'Python', 'VAPID Web Push'],
    github: 'https://github.com/Dalton-Khatri/RiskMapper',
    report: null,
    apk: null,
    coverImage: '/assets/risk_mapper.png',
    slides: [
      '/assets/Riskmapper_1.png',
      '/assets/Riskmapper_2.png',
      '/assets/Riskmapper_3.png',
      '/assets/Riskmapper_4.png',
      '/assets/Riskmapper_5.png',
      '/assets/Riskmapper_6.png',
      '/assets/Riskmapper_7.png',
      '/assets/Riskmapper_8.png',
      '/assets/Riskmapper_9.png',
    ],
    abstract: `Kathmandu Metropolitan City sits on an ancient lake bed where soft alluvial soil amplifies seismic waves 2–5× compared to bedrock, making it one of the most earthquake-vulnerable capitals in the world. RiskMapper Nepal is a web-based seismic risk dashboard that visualizes earthquake vulnerability across all 32 KMC wards using real data from the 2015 NPC/CBS building survey (260,601 records), USGS ShakeMap PGA values, and Paudyal Vs30 soil classification research. It computes composite risk scores, simulates how damage cascades between neighboring wards via BFS, calculates smart evacuation routes through OSRM that balance distance with corridor safety, and delivers real-time earthquake push notifications via VAPID Web Push.`,
    objectives: [
      {
        number: '01',
        title: 'Data-Driven Risk Scoring',
        description: 'Compute ward-level seismic risk from four calibrated factors — building age, material vulnerability, PGA ground shaking, and Vs30 soil amplification — weighted by 2015 earthquake damage correlation.',
      },
      {
        number: '02',
        title: 'Cascade Simulation Engine',
        description: 'Model how earthquake damage propagates between neighboring wards using BFS with probability decay, pre-computed for all 32 scenarios for instant O(1) browser lookup.',
      },
      {
        number: '03',
        title: 'Smart Evacuation Routing',
        description: 'Generate road-level walking routes to safe open spaces via OSRM, scored by a composite of 40% distance and 60% corridor risk to find paths that are both short and safe.',
      },
      {
        number: '04',
        title: 'Real-Time Earthquake Alerts',
        description: 'Deliver push notifications for significant earthquakes near Kathmandu via VAPID Web Push, with automatic evacuation routing triggered on notification interaction.',
      },
    ],
    features: [
      { emoji: '🗺️', title: 'Interactive Risk Map', description: 'Color-coded GeoJSON ward polygons on Leaflet with real administrative boundaries, hover effects, and risk-proportional fill opacity across all 32 KMC wards.' },
      { emoji: '🔗', title: 'BFS Cascade Simulation', description: 'Click any ward to visualize damage spreading to neighbors — staggered animation with probability-scaled circles, connecting lines, and detailed info panels.' },
      { emoji: '🛣️', title: 'OSRM Evacuation Routes', description: 'Google Maps-style blue polyline walking routes to nearest open spaces, scored by composite distance + corridor risk for the safest-fastest path.' },
      { emoji: '🔔', title: 'Push Notifications', description: 'VAPID Web Push alerts for M≥4.5 earthquakes within 500km of Kathmandu, with service worker background reception and auto-evacuation on click.' },
      { emoji: '📊', title: 'Real-Time Stats Panel', description: 'Live summary dashboard showing threat counts (2 Critical, 23 High, 7 Moderate), shelter capacity, and active ward statistics.' },
      { emoji: '📍', title: 'Personal Evacuation Finder', description: 'GPS-based nearest open space finder with turn-by-turn directions, Overpass API park queries, and 85% distance / 15% risk composite scoring.' },
    ],
    tools: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'Node.js', 'Express.js', 'Python', 'OSRM API', 'Overpass API', 'VAPID Web Push', 'Service Workers', 'GeoJSON', 'VS Code', 'GitHub'],
    conclusion: `RiskMapper Nepal transforms raw seismic data into an actionable, visual decision-support tool for disaster management. By combining 260K real building records from the 2015 NPC survey with USGS ShakeMap PGA and Paudyal Vs30 soil research, the dashboard produces calibrated risk scores grounded in peer-reviewed methodology. The cascade simulation reveals how Kathmandu's dense urban fabric propagates damage between wards, while the OSRM-powered evacuation routing finds paths that are both short and safe. Every design decision — from pre-computing all 32 cascade scenarios in Python to using VAPID over Firebase — was made to keep the tool fast, free, and deployable without proprietary dependencies.`,
  },
};

// ─── Slideshow ────────────────────────────────────────────────────────────────

function Slideshow({ slides, title }: { slides: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + slides.length) % slides.length);
  };

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden bg-surface-low border border-outline-variant">
      <div className="relative aspect-[16/9] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={slides[current]}
            alt={`${title} screenshot ${current + 1}`}
            custom={direction}
            initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'min-h-[200px]');
              el.style.display = 'none';
              el.parentElement!.innerHTML = `<span class="text-on-surface-variant text-sm font-mono p-6 text-center">Add screenshot to /assets/</span>`;
            }}
          />
        </AnimatePresence>

        {/* Nav arrows — stop click from bubbling to image click */}
        {slides.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-transparent border border-white/30 flex items-center justify-center text-white hover:border-white hover:bg-white/10 transition-all z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Dots — overlaid at bottom of image */}
        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-6 h-2 bg-primary'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const data = id ? caseStudies[id] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <p className="text-6xl">404</p>
        <p className="text-on-surface-variant">Case study not found.</p>
        <button onClick={() => navigate('/projects')} className="text-primary hover:underline font-medium">
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-24 pb-16"
    >
      {/* ── BACK ── */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        onClick={() => navigate('/projects')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Projects</span>
      </motion.button>

      {/* ── HERO ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-8"
      >
        {/* Category + year pill row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/20">
            {data.category}
          </span>
          <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
            {data.year}
          </span>
          <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-widest">
            {data.role}
          </span>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-6xl lg:text-7xl font-extrabold text-on-surface font-headline tracking-tight leading-none mb-3">
            {data.title}
          </h1>
          <p className="text-xl text-primary font-semibold tracking-wide">{data.subtitle}</p>
        </div>

        {/* Tagline */}
        <p className="text-xl text-on-surface-variant leading-relaxed max-w-3xl border-l-2 border-primary/40 pl-6">
          {data.tagline}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-high border border-outline-variant rounded-2xl text-sm font-bold text-on-surface hover:text-primary hover:border-primary transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          {data.report && (
            <a
              href={data.report}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-high border border-outline-variant rounded-2xl text-sm font-bold text-on-surface hover:text-primary hover:border-primary transition-all"
            >
              <Download className="w-4 h-4" />
              Project Report
            </a>
          )}
          {data.apk && (
            <a
              href={data.apk}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-2xl text-sm font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
            >
              <Smartphone className="w-4 h-4" />
              Download APK
            </a>
          )}
        </div>
      </motion.div>

      {/* ── COVER IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-[2.5rem] overflow-hidden border border-outline-variant aspect-[16/7] relative"
      >
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.parentElement!.classList.add('bg-surface-low', 'flex', 'items-center', 'justify-center');
            el.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* ── META STRIP ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          { label: 'Year', value: data.year },
          { label: 'Role', value: data.role },
          { label: 'Team', value: data.team.length === 1 ? 'Solo' : `${data.team.length} Members` },
          { label: 'Category', value: data.category.split('/')[0].trim() },
        ].map(({ label, value }) => (
          <div key={label} className="bg-surface-low rounded-2xl border border-outline-variant p-6 text-center">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{label}</p>
            <p className="text-base font-bold text-on-surface">{value}</p>
          </div>
        ))}
      </motion.div>

      {/* ── ABSTRACT ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start"
      >
        <h2 className="text-3xl font-extrabold text-on-surface font-headline">Abstract</h2>
        <p className="text-on-surface-variant leading-relaxed text-lg">{data.abstract}</p>
      </motion.section>

      {/* ── OBJECTIVES ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-extrabold text-on-surface font-headline">Objectives</h2>
        <div className="space-y-4">
          {data.objectives.map((obj) => (
            <div key={obj.number} className="group flex gap-8 bg-surface-low rounded-2xl border border-outline-variant hover:border-primary/30 p-7 transition-all duration-300">
              <span className="text-5xl font-extrabold text-primary/20 font-headline shrink-0 group-hover:text-primary/40 transition-colors select-none">
                {obj.number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{obj.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── FEATURES ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-extrabold text-on-surface font-headline">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.features.map((feat, index) => (
            <div key={feat.title} className="group bg-surface-low rounded-2xl border border-outline-variant hover:border-primary/30 p-6 transition-all duration-300 hover:translate-y-[-2px]">
              <span className="text-3xl font-extrabold text-primary/30 group-hover:text-primary/60 font-headline mb-4 block transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-base font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{feat.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── SLIDESHOW ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-extrabold text-on-surface font-headline">Screenshots</h2>
        <Slideshow slides={data.slides} title={data.title} />
      </motion.section>

      {/* ── TOOLS ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-extrabold text-on-surface font-headline">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {data.tools.map((tool) => (
            <span key={tool} className="px-5 py-2.5 bg-surface-low border border-outline-variant rounded-xl text-sm font-medium text-on-surface-variant hover:border-primary/40 hover:text-primary transition-all">
              {tool}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ── TEAM ── */}
      {data.team.length > 1 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-extrabold text-on-surface font-headline">Team</h2>
          <div className="flex flex-wrap gap-3">
            {data.team.map((member) => (
              <span
                key={member}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  member === 'Dalton Khatri'
                    ? 'bg-primary/10 text-primary border-primary/30'
                    : 'bg-surface-low text-on-surface-variant border-outline-variant'
                }`}
              >
                {member}
              </span>
            ))}
          </div>
        </motion.section>
      )}

      {/* ── CONCLUSION ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative rounded-[2.5rem] overflow-hidden border border-outline-variant bg-surface-low p-10 lg:p-14"
      >
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Conclusion</p>
        <p className="text-on-surface-variant leading-relaxed text-lg max-w-3xl">{data.conclusion}</p>
      </motion.section>

      {/* ── BOTTOM DOWNLOADS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant"
      >
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>
        <div className="ml-auto flex flex-wrap gap-3">
          {data.report && (
            <a href={data.report} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-high border border-outline-variant rounded-xl text-sm font-bold text-on-surface hover:text-primary hover:border-primary transition-all">
              <Download className="w-4 h-4" />
              Download Report
            </a>
          )}
          {data.apk && (
            <a href={data.apk} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
              <Smartphone className="w-4 h-4" />
              Download APK
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}