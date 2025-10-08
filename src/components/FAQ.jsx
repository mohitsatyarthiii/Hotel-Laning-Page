// src/components/FAQSection.jsx
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What makes Purosurf different from other luxury resorts?",
    answer: "Purosurf offers a unique blend of world-class surfing, luxury accommodation, and holistic wellness experiences. Our personalized coaching, private beach access, and exclusive amenities create an unparalleled coastal retreat that combines adventure with premium comfort."
  },
  {
    id: 2,
    question: "Do I need surfing experience to join the surf camp?",
    answer: "Not at all! We welcome surfers of all levels. Our expert coaches provide tailored instruction from complete beginners to advanced surfers. We have dedicated beginner zones with gentle waves and specialized equipment to ensure a safe and enjoyable learning experience."
  },
  {
    id: 3,
    question: "What wellness facilities are available at the resort?",
    answer: "Our wellness center includes a state-of-the-art spa, yoga pavilion with ocean views, meditation gardens, fitness center, and thermal suites. We offer daily yoga classes, meditation sessions, and personalized wellness programs designed by our expert practitioners."
  },
  {
    id: 4,
    question: "Are the accommodations suitable for families?",
    answer: "Absolutely! We offer family-friendly villas with multiple bedrooms, private pools, and dedicated family activities. Our kids' club provides supervised activities, and we have special family packages that include surfing lessons and wellness activities suitable for all ages."
  },
  {
    id: 5,
    question: "What dining options are available?",
    answer: "Purosurf features three distinct dining venues: our signature restaurant 'Covana' offering fine dining with ocean views, 'The Beach Club' for casual meals by the pool, and 'The Wellness Cafe' serving healthy, organic options. We accommodate all dietary requirements with advance notice."
  },
  {
    id: 6,
    question: "What is included in the all-inclusive package?",
    answer: "Our all-inclusive package includes luxury accommodation, all meals and beverages, daily surfing lessons, wellness activities, use of all facilities, airport transfers, and select excursions. Premium beverages and spa treatments are available at additional cost."
  },
  {
    id: 7,
    question: "How do I book surfing lessons and wellness activities?",
    answer: "You can pre-book activities through our online portal after reservation confirmation, or our concierge team will assist you upon arrival. We recommend booking in advance for peak seasons to secure your preferred time slots."
  },
  {
    id: 8,
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation with full refund up to 30 days before arrival. For cancellations 15-29 days before arrival, we provide a 50% refund or credit for future stay. Within 14 days, we offer rescheduling options based on availability."
  }
];

export default function FAQSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openItems, setOpenItems] = useState([1]); // First item open by default

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
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
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full opacity-40 blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_99%,#000_100%)] bg-[length:60px_60px]" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_99%,#000_100%)] bg-[length:60px_60px]" />
        </div>
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
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight"
          >
            Your Questions{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
              Answered
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Find everything you need to know about your Purosurf experience. 
            Can't find what you're looking for? Our team is here to help.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() => toggleItem(faq.id)}
                  className={`w-full text-left p-6 lg:p-8 rounded-2xl transition-all duration-500 border-2 ${
                    openItems.includes(faq.id)
                      ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 shadow-lg scale-[1.02]'
                      : 'bg-white border-gray-100 hover:border-blue-100 hover:bg-gray-50 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`text-lg lg:text-xl font-semibold pr-8 transition-colors duration-300 ${
                      openItems.includes(faq.id) ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openItems.includes(faq.id) ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openItems.includes(faq.id)
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openItems.includes(faq.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-gray-600 leading-relaxed font-light mt-4 lg:mt-6 text-base lg:text-lg"
                        >
                          {faq.answer}
                        </motion.p>
                        
                        {/* Additional Info for some FAQs */}
                        {faq.id === 1 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="mt-4 p-4 bg-white/50 rounded-xl border border-blue-100"
                          >
                            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                              Unique Features
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Private beach access
                              </span>
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Personalized coaching
                              </span>
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Holistic wellness programs
                              </span>
                              <span className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                Luxury eco-design
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
         
        </div>
      </div>
    </section>
  );
}