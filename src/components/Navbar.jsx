import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";

export default function LuxuryNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Update navbar style based on scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ["Home", "Stay", "Dining", "Experiences", "Contact"];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className={`text-2xl font-semibold tracking-tight ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          puro<span className="text-pink-500">surf</span>
        </motion.div>

        {/* Center Navigation Links - Desktop */}
        <motion.div
          className="hidden md:flex items-center gap-8 px-8 py-3 rounded-2xl transition-all duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)',
            border: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: isScrolled ? 'blur(8px)' : 'blur(10px)',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-light tracking-wide transition-all duration-300 hover:text-yellow-400 ${
                isScrolled ? "text-gray-700 hover:text-yellow-500" : "text-white/90 hover:text-yellow-300"
              }`}
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* CTA Button - Desktop */}
        <motion.button
          className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg ${
            isScrolled 
              ? "bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/20" 
              : "bg-pink-500 text-gray-900 hover:bg-pink-400 shadow-yellow-400/25"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Stay
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden flex flex-col gap-1.5 w-6 h-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-180' : ''
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            className={`w-full h-0.5 rounded-full transition-all duration-300 ${
              isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <motion.span
            className={`w-full h-0.5 rounded-full transition-all duration-300 ${
              isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
            } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <motion.span
            className={`w-full h-0.5 rounded-full transition-all duration-300 ${
              isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <motion.div
        className="fixed top-20 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="block text-lg font-light text-gray-700 hover:text-yellow-500 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          
          <motion.button
            className="w-full mt-8 px-6 py-4 rounded-full text-base font-medium bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Your Stay
          </motion.button>
        </div>
      </motion.div>

      {/* Prevent body scroll when mobile menu is open */}
      <style jsx>{`
        body {
          overflow: ${isMobileMenuOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
}