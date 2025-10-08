// src/components/BentoExperiencePerfect.jsx
import { motion } from "framer-motion";

const items = [
  {
    title: "HOTEL",
    desc: "Experience timeless luxury with ocean-view suites and crafted comfort.",
    img: "/hotel.webp",
    area: "a",
  },
  {
    title: "SURFCAMP",
    desc: "Surf the finest waves with world-class trainers and tailored guidance.",
    img: "/surf.webp",
    area: "b",
  },
  {
    title: "ACADEMY",
    desc: "Learn the art of balance, body, and mind in a serene environment.",
    img: "/aca.webp",
    area: "c",
  },
  {
    title: "COVANA",
    desc: "Wellness, dining, and calm — your sanctuary of indulgence awaits.",
    img: "/covana2.webp",
    area: "d",
  },
];

export default function BentoExperience() {
  return (
    <section className="w-full flex justify-center bg-white py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-4 md:mb-6">
            Discover Our World
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Immerse yourself in unparalleled experiences where luxury meets adventure
          </p>
        </motion.div>

        {/* Responsive Bento Grid */}
        <div className="w-full">
          {/* Desktop Layout */}
          <div className="hidden lg:grid gap-4 md:gap-6 p-4 rounded-3xl overflow-hidden"
            style={{
              gridTemplateAreas: `
                "a b"
                "c d"
              `,
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              height: "70vh",
            }}
          >
            {items.map((item, i) => (
              <BentoCard key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:grid lg:hidden gap-4 p-4 rounded-3xl overflow-hidden"
            style={{
              gridTemplateAreas: `
                "a b"
                "c d"
              `,
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              height: "60vh",
            }}
          >
            {items.map((item, i) => (
              <BentoCard key={item.title} item={item} index={i} />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative h-64 sm:h-80 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <MobileBentoCard item={item} index={i} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
}

// Desktop & Tablet Card Component
const BentoCard = ({ item, index }) => (
  <motion.div
    style={{ gridArea: item.area }}
    className="relative overflow-hidden rounded-2xl cursor-pointer group"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.7, 
      delay: index * 0.15,
      type: "spring",
      stiffness: 100
    }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ 
      scale: 1.02,
      y: -5
    }}
  >
    {/* Background Image with Enhanced Overlay */}
    <motion.div
      className="absolute inset-0 w-full h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      {/* Enhanced Gradient Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
    </motion.div>

    {/* Hover Border Effect */}
    <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/40 transition-all duration-500"></div>

    {/* Content */}
    <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
        className="w-full"
      >
        {/* Accent Line */}
        <div className="w-8 h-0.5 bg-white/70 mb-3 sm:mb-4 group-hover:w-12 group-hover:bg-white transition-all duration-500"></div>
        
        {/* Title */}
        <h2 className="text-white font-serif font-semibold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3">
          {item.title}
        </h2>
        
        {/* Description */}
        <p className="text-white/90 font-light text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm md:max-w-md transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
          {item.desc}
        </p>

        {/* CTA Button */}
        <motion.button
          className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs sm:text-sm font-medium hover:bg-white hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover More
        </motion.button>
      </motion.div>
    </div>

    {/* Shine Effect */}
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-shine group-hover:duration-1500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </motion.div>
);

// Mobile Card Component
const MobileBentoCard = ({ item, index }) => (
  <>
    {/* Background Image */}
    <motion.div
      className="absolute inset-0 w-full h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      {/* Mobile-optimized Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>
    </motion.div>

    {/* Content */}
    <div className="relative z-10 p-6 flex flex-col justify-end h-full">
      <div className="w-full">
        {/* Accent Line */}
        <div className="w-6 h-0.5 bg-white/70 mb-3"></div>
        
        {/* Title */}
        <h2 className="text-white font-serif font-semibold text-xl mb-2">
          {item.title}
        </h2>
        
        {/* Description */}
        <p className="text-white/90 font-light text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* Mobile CTA Button */}
        <button className="mt-4 px-5 py-2 bg-white/90 rounded-full text-gray-900 text-xs font-medium active:bg-white active:scale-95 transition-all duration-200 shadow-lg">
          Explore
        </button>
      </div>
    </div>
  </>
);

// Add global styles for shine animation
const styles = `
  @keyframes shine {
    0% { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(200%) skewX(-12deg); }
  }
  .animate-shine {
    animation: shine 1.5s ease-in-out;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}