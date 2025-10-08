// src/components/CreativeShowcase.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function CreativeShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const imagesRef = useRef([]);
  const textRef = useRef(null);

  // Sample images array
  const images = [
    {
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Luxury Beachfront",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Surfing Experience",
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Wellness Retreat",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Fine Dining",
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout - 3 Columns */}
        <div className="hidden lg:flex items-center justify-between gap-8 xl:gap-12 min-h-[600px]">
          
          {/* Left Images Column */}
          <div className="w-2/5 relative h-[500px]">
            <motion.div
              ref={el => imagesRef.current[0] = el}
              className="absolute top-0 left-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-64 xl:w-72 h-80 xl:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              ref={el => imagesRef.current[1] = el}
              className="absolute bottom-0 left-20 xl:left-24"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-56 xl:w-64 h-64 xl:h-72 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Center Text Content */}
          <motion.div 
            ref={textRef}
            className="w-1/3 text-center z-30 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 mb-8"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm font-light text-gray-600 tracking-wider">
                UNPARALLELED EXPERIENCE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-5xl xl:text-6xl font-light text-gray-900 mb-6 leading-tight"
            >
              Where{" "}
              <span className="font-serif italic text-gray-700">Luxury</span>{" "}
              <span className="block">
                Meets{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  Nature
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-md mx-auto font-light"
            >
              Discover a sanctuary where pristine beaches, world-class surfing, and 
              premium amenities create unforgettable moments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-900 text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto"
              >
                Explore Our World
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Images Column */}
          <div className="w-2/5 relative h-[500px]">
            <motion.div
              ref={el => imagesRef.current[2] = el}
              className="absolute top-4 right-20 xl:right-24"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-56 xl:w-64 h-64 xl:h-72 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              ref={el => imagesRef.current[3] = el}
              className="absolute bottom-0 right-0"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-64 xl:w-72 h-80 xl:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Tablet & Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center px-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 mb-6"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-xs sm:text-sm font-light text-gray-600 tracking-wider">
                UNPARALLELED EXPERIENCE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 leading-tight"
            >
              Where Luxury Meets Nature
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto font-light"
            >
              Discover a sanctuary where pristine beaches, world-class surfing, and 
              premium amenities create unforgettable moments.
            </motion.p>
          </motion.div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`flex justify-center ${
                  index === 1 || index === 3 ? 'mt-8' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${
                    index === 0 || index === 3 ? 'h-48 sm:h-64' : 'h-40 sm:h-56'
                  } object-cover rounded-xl shadow-lg`}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-light text-base sm:text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg w-full max-w-xs"
            >
              Explore Our World
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}