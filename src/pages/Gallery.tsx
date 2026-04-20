import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { useState } from 'react';

const images = [
  {
    id: 1,
    src: '/assets/ideapitching.jpg',
    title: '2nd Runner-Up, IDEAPITCH 2025',
    category: 'Achievement',
    caption: 'Secured 2nd Runner-Up position at IDEAPITCH 2025. We presented about our project E-Badapatra',
  },
  {
    id: 2,
    src: '/assets/Defence1.jpeg',
    title: '1st Semester Project Defence',
    category: 'Project Defence',
    caption: 'We team of five successfully defended our first semester project, E-Badapatra',
  },
  {
    id: 3,
    src: '/assets/amayangri_solo.jpg',
    title: 'Amayangri Treak',
    category: 'Treak',
    caption: 'Went AmaYangri for 1st Treaking experience of my life, it was amazing experience to be in nature and seeing the beauty of mountains',
  },
  {
    id: 4,
    src: '/assets/amayangri_group.jpg',
    title: 'Amayangri Treak Group Photo',
    category: 'Treak',
    caption: 'Group photo from our Amayangri trekking adventure.',
  },
  {
    id: 5,
    src: '/assets/Football_team.jpg',
    title: 'Football Team Photo',
    category: 'Sports',
    caption: 'Our football team posing for a group photo on the field.',
  },
  {
    id: 6,
    src: '/assets/Dhakatopi.jpg',
    title: 'DhakaTopi Diwas 2026',
    category: 'Event',
    caption: 'Celebrating DhakaTopi Diwas with our fellow friends.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | typeof images[0]>(null);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      <motion.div variants={item} className="max-w-2xl">
        <h1 className="text-5xl font-extrabold text-on-surface mb-6 font-headline tracking-tight">
          Visual <span className="text-primary">Gallery</span>
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A curated collection of moments, memories, and captured archives.
        </p>
      </motion.div>

      {/* Grid — auto-fit, images keep their natural ratio */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img) => (
          <motion.div
            key={img.id}
            variants={item}
            className="group relative break-inside-avoid rounded-[2rem] overflow-hidden cursor-pointer border border-outline-variant hover:border-primary/40 transition-all duration-300"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Hover overlay — title + category only, no "Captured Archive" line */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                {img.category}
              </span>
              <h3 className="text-lg font-bold text-on-surface font-headline">{img.title}</h3>
            </div>

            {/* Expand icon */}
            <div className="absolute top-4 right-4 p-2.5 bg-background/70 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-background/50 backdrop-blur-md flex items-center justify-center p-6 lg:p-16"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-outline-variant"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image at its natural size, capped to 90% of viewport in both directions */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="block max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain bg-surface-low"
              />

              {/* Caption overlaid on image bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent px-8 py-8 pt-16">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-1">
                  {selectedImage.category}
                </span>
                <h2 className="text-xl font-bold text-on-surface font-headline mb-1">
                  {selectedImage.title}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>

              {/* X close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:border-primary border border-outline-variant transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}