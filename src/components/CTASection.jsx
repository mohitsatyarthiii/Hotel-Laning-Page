// src/components/CTASection.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Image */}
        {!isVideoLoaded && (
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beach waves"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="float"
          className="absolute top-1/4 left-10 w-6 h-6 border border-white/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute top-1/3 right-20 w-4 h-4 border border-white/30 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-1/4 left-20 w-3 h-3 border border-white/25 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1.5 }}
          className="absolute bottom-1/3 right-10 w-5 h-5 border border-white/15 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          className="text-center text-white max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-light text-white tracking-wider">
              LIMITED TIME OFFER
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-6 leading-tight"
          >
            Your{" "}
            <span className="font-serif italic text-white/90">Luxury</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent font-semibold">
              Surf Escape
            </span>
            <br />
            Awaits
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-white/80 mb-8 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Experience the perfect harmony of world-class surfing, luxury accommodation, 
            and transformative wellness in one unforgettable destination.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
          >
            {[
              { number: "24/7", label: "Luxury Service" },
              { number: "5★", label: "Premium Stay" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 lg:px-12 lg:py-5 bg-pink-600 text-gray-900 rounded-full font-semibold text-lg lg:text-xl hover:bg-pink-500 transition-all duration-300 shadow-2xl flex items-center gap-3 group"
            >
              Book Your Escape
              <motion.svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 lg:px-12 lg:py-5 bg-transparent text-white rounded-full font-light text-lg lg:text-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Our Story
            </motion.button>
          </motion.div>

          

          {/* Scroll Indicator */}
        
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}