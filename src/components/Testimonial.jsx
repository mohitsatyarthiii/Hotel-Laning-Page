// src/components/TestimonialSection.jsx
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "Luxury Travel Blogger",
    location: "New York, USA",
    rating: 5,
    text: "Purosurf redefined luxury for me. The attention to detail, from the ocean-view suites to the personalized surf coaching, was exceptional. This is more than a resort; it's a transformative experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    background: "bg-gradient-to-br from-blue-50 to-cyan-50"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "Professional Surfer",
    location: "Bali, Indonesia",
    rating: 5,
    text: "The waves were incredible, but what truly amazed me was the coaching staff. World-class trainers who genuinely care about your progress. I improved my technique dramatically in just one week.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    background: "bg-gradient-to-br from-amber-50 to-orange-50"
  },
  {
    id: 3,
    name: "Emily & James Wilson",
    position: "Honeymooners",
    location: "London, UK",
    rating: 5,
    text: "Our honeymoon at Purosurf was magical. The private villa, sunset dinners, and wellness treatments created memories we'll cherish forever. The staff made us feel like royalty.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    background: "bg-gradient-to-br from-purple-50 to-pink-50"
  },
  {
    id: 4,
    name: "Dr. Kenji Tanaka",
    position: "Wellness Retreat Guest",
    location: "Tokyo, Japan",
    rating: 5,
    text: "The perfect balance of adventure and tranquility. Morning surf sessions followed by yoga and spa treatments. My stress melted away within days. Highly recommended for digital detox.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    background: "bg-gradient-to-br from-green-50 to-emerald-50"
  },
  {
    id: 5,
    name: "Sophie Martinez",
    position: "Yoga Instructor",
    location: "Barcelona, Spain",
    rating: 5,
    text: "The academy's approach to mind-body balance is revolutionary. I learned new techniques that I now incorporate into my own practice. The serene environment is perfect for deep meditation.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    background: "bg-gradient-to-br from-rose-50 to-red-50"
  },
  {
    id: 6,
    name: "Alex Thompson",
    position: "Food Critic",
    location: "Melbourne, Australia",
    rating: 5,
    text: "Covana's dining experience is Michelin-star quality with breathtaking ocean views. Each dish tells a story of local ingredients and culinary excellence. An absolute gastronomic journey.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    background: "bg-gradient-to-br from-indigo-50 to-blue-50"
  }
];

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setActiveTestimonial(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-60 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full opacity-60 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 mb-6"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-light text-gray-600 tracking-wider">
              GUEST TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight"
          >
            Stories of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
              Transformation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover what our guests say about their life-changing experiences at Purosurf. 
            From surfing breakthroughs to wellness transformations.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Testimonial Cards with Mobile Arrows */}
            <div className="relative">
              {/* Mobile Navigation Arrows - Only visible on mobile */}
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <motion.button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-gray-900 w-4' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              <div className="relative h-[500px] lg:h-[600px]">
                <AnimatePresence mode="wait">
                  {testimonials.map((testimonial, index) => (
                    index === activeTestimonial && (
                      <motion.div
                        key={testimonial.id}
                        className={`absolute inset-0 ${testimonial.background} rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 flex flex-col justify-between`}
                        initial={{ opacity: 0, x: 100, rotateY: 10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -100, rotateY: -10 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        {/* Quote Icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-6xl text-blue-200 font-serif mb-4"
                        >
                          "
                        </motion.div>

                        {/* Testimonial Text */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light mb-8 flex-1"
                        >
                          {testimonial.text}
                        </motion.p>

                        {/* Author Info */}
                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex items-center gap-4 mb-4">
                            <motion.img
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg"
                            />
                            <div>
                              <motion.h4
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-lg font-semibold text-gray-900"
                              >
                                {testimonial.name}
                              </motion.h4>
                              <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="text-gray-600 text-sm"
                              >
                                {testimonial.position}
                              </motion.p>
                              <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="text-gray-500 text-xs"
                              >
                                {testimonial.location}
                              </motion.p>
                            </div>
                          </div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                          >
                            <StarRating rating={testimonial.rating} />
                          </motion.div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Testimonial Navigation & Stats */}
            <div className="space-y-8">
              {/* Navigation Dots - Hidden on mobile since we have arrows */}
              <div className="hidden lg:flex flex-wrap gap-3 justify-center lg:justify-start">
                {testimonials.map((testimonial, index) => (
                  <motion.button
                    key={testimonial.id}
                    onClick={() => goToTestimonial(index)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-gray-900 text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{testimonial.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12"
              >
                {[
                  { number: "4.9/5", label: "Average Rating" },
                  { number: "2K+", label: "Happy Guests" },
                  { number: "98%", label: "Return Rate" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center p-4 lg:p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 font-light">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Desktop Navigation Arrows - Only visible on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden lg:flex gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={prevTestimonial}
                  className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, x: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}