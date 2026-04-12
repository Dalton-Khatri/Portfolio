import { motion } from 'motion/react';
import { Mail, Send, Github, MapPin, Phone, Instagram, Copy, Check } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { useState, useRef } from 'react';

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

const EMAILJS_SERVICE_ID  = 'service_zp3ryw4';
const EMAILJS_TEMPLATE_ID = 'template_xx3dgog';
const EMAILJS_PUBLIC_KEY  = 'zAHwtOkf2SShD9Mmb';

export default function Contact() {
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
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
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
      className="space-y-24"
    >
      <motion.div variants={item} className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-on-surface mb-6 font-headline tracking-tight">
          Contact <span className="text-primary">Portal</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Whether you have a question about a project, a potential collaboration, or just want to discuss the future of technology, my digital door is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div variants={item} className="space-y-12">
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
              <SocialLink icon={Github}     href="https://github.com/Dalton-Khatri" />
              <SocialLink icon={FaLinkedin} href="https://www.linkedin.com/in/dalton-khatri-856259342/" />
              <SocialLink icon={Instagram}  href="https://www.instagram.com/dalton_khatri/" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-surface-low p-8 lg:p-12 rounded-[3rem] border border-outline-variant">
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

            {/* Status messages */}
            {status === 'success' && (
              <p className="text-center text-sm font-semibold text-primary">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-semibold text-red-400">
                ✗ Something went wrong. Please try emailing directly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
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