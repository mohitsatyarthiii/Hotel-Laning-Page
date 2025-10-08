// src/components/DamaiHero.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Hero() {
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Preload video
    if (videoRef.current) {
      videoRef.current.load();
    }

    // Set timeout for fallback in case video takes too long
    const fallbackTimer = setTimeout(() => {
      if (!isVideoLoaded) {
        setShowFallback(true);
      }
    }, 3000);

    // Soft overlay fade-in
    gsap.fromTo(
      overlayRef.current,
      { opacity: 1 },
      { opacity: 0.4, duration: 2, ease: "power2.out" }
    );

    // Parallax on mouse move
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      gsap.to(bgRef.current, {
        x,
        y,
        duration: 1,
        ease: "power2.out",
      });
    };
    
    window.addEventListener("mousemove", handleMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      clearTimeout(fallbackTimer);
    };
  }, [isVideoLoaded]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    setShowFallback(false);
  };

  const handleVideoError = () => {
    setIsVideoLoaded(false);
    setShowFallback(true);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Optimized Video Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        {/* Fallback background image - shows immediately */}
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            showFallback || !isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: "url('/purosurf.webp')", // Add a compressed fallback image
          }}
        />
        
        {/* Optimized video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded && !showFallback ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoaded}
          onCanPlayThrough={handleVideoLoaded}
          onError={handleVideoError}
          poster="/hero-poster.jpg" // Add a compressed poster image
        >
          {/* Multiple video sources for better compatibility */}
          <source src="/1.mp4" type="video/mp4" />
          <source src="/1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Loading spinner */}
        {!isVideoLoaded && !showFallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <motion.div
              className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
      </div>

      {/* Soft black overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          className="text-white font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          Find the Spirit
          <br />
          <span className="bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
            of Surfing
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-200 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        >
          At Puro Surf, everything is meticulously crafted to ensure your experience is as complete as possible
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <motion.button
            className="px-10 py-4 bg-pink-600 text-gray-900 text-lg rounded-full font-semibold tracking-wide hover:bg-pink-500 transition-all duration-300 shadow-2xl flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover The Experience
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>

          <motion.button
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg rounded-full font-light tracking-wide hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Story
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/70 text-sm font-light tracking-wider">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-white/70"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}