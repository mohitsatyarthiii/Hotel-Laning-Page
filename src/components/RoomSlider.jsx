// src/components/RoomShowcase.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const rooms = [
  {
    id: 1,
    name: "Ocean View Suite",
    description: "Wake up to breathtaking ocean views from your private suite. Features a king-sized bed, luxury amenities, and direct beach access.",
    price: "From $450/night",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    background: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Ocean View", "Private Balcony", "King Bed", "Luxury Bathroom"]
  },
  {
    id: 2,
    name: "Surf Villa",
    description: "Perfect for surf enthusiasts. Direct beach access, surfboard storage, and outdoor shower. Your ultimate surf retreat.",
    price: "From $380/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    background: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    features: ["Beach Access", "Surf Ready", "Outdoor Space", "Garden View"]
  },
  {
    id: 3,
    name: "Luxury Pool Villa",
    description: "Your private oasis with infinity pool, sun deck, and tropical garden. Ultimate privacy and luxury in one package.",
    price: "From $620/night",
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    background: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Private Pool", "Sun Deck", "Tropical Garden", "Butler Service"]
  },
  {
    id: 4,
    name: "Cliffside Retreat",
    description: "Perched on the cliffs with panoramic ocean views. Modern design meets natural beauty in this exclusive retreat.",
    price: "From $550/night",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    background: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    features: ["Cliff View", "Panoramic Windows", "Modern Design", "Private Access"]
  }
];

export default function RoomShowcase() {
  const [currentRoom, setCurrentRoom] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () => setCurrentRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1)),
        5000
      );
    }

    return () => resetTimeout();
  }, [currentRoom, isAutoPlaying]);

  const nextRoom = () => {
    setIsAutoPlaying(false);
    setCurrentRoom((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevRoom = () => {
    setIsAutoPlaying(false);
    setCurrentRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToRoom = (index) => {
    setIsAutoPlaying(false);
    setCurrentRoom(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={rooms[currentRoom].id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={rooms[currentRoom].background}
            alt={rooms[currentRoom].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm font-light text-white tracking-wider">
                LUXURY ACCOMMODATION
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={rooms[currentRoom].id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                  {rooms[currentRoom].name}
                </h2>
                
                <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg font-light">
                  {rooms[currentRoom].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {rooms[currentRoom].features.map((feature, index) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20 backdrop-blur-sm"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center gap-6">
                  <div className="text-2xl font-light text-yellow-400">
                    {rooms[currentRoom].price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-light text-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Room Indicators */}
            <div className="flex gap-3 mt-12">
              {rooms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToRoom(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentRoom 
                      ? 'bg-yellow-400 w-8' 
                      : 'bg-white/30 w-4 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={rooms[currentRoom].id}
                initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={rooms[currentRoom].image}
                  alt={rooms[currentRoom].name}
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
                />
                
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-white/20 rounded-3xl pointer-events-none"></div>
                <div className="absolute -inset-8 border border-white/10 rounded-4xl pointer-events-none"></div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 -left-6 lg:-left-12 flex items-center">
              <button
                onClick={prevRoom}
                className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute inset-y-0 -right-6 lg:-right-12 flex items-center">
              <button
                onClick={nextRoom}
                className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          key={currentRoom}
          className="h-full bg-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>
    </section>
  );
}