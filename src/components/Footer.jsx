// src/components/Footer.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    // Add your newsletter logic here
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
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_99%,#fff_100%)] bg-[length:40px_40px]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_99%,#fff_100%)] bg-[length:40px_40px]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-gray-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl lg:text-3xl font-light mb-4"
              >
                Stay Connected with Purosurf
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto font-light"
              >
                Receive exclusive offers, surfing tips, and wellness insights directly to your inbox.
              </motion.p>
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300 font-light"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-pink-500 text-gray-900 rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  Subscribe
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Links */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  puro<span className="text-pink-500">surf</span>
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Where luxury meets the ocean. Experience world-class surfing, premium accommodation, 
                  and transformative wellness in one breathtaking destination.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { name: 'Instagram', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
                  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-gray-900 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-pink-500">Explore</h4>
              <ul className="space-y-3">
                {['Accommodation', 'Surf Camp', 'Wellness', 'Dining', 'Experiences', 'Gallery'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-light group flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-pink-500">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-light">Km 52 Carretera El Litoral</p>
                    <p className="text-gray-400 text-sm font-light">Playa El Zonte, Chiltiupan</p>
                    <p className="text-gray-400 text-sm font-light">La Libertad, El Salvador</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+623615551234" className="text-gray-400 hover:text-white transition-colors duration-300 font-light">
                    +62 361 555 1234
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@purosurf.com" className="text-gray-400 hover:text-white transition-colors duration-300 font-light">
                    hello@purosurf.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Awards & Recognition */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6 text-pink-500">Awards</h4>
              <div className="space-y-4">
                {[
                  { name: "Luxury Travel Guide", award: "Best Surf Resort 2023" },
                  { name: "World Spa Awards", award: "Best Wellness Retreat" },
                  { name: "Tripadvisor", award: "Travelers' Choice 2023" },
                ].map((award, index) => (
                  <div key={index} className="border-l-2 border-pink-500 pl-4">
                    <p className="text-white text-sm font-light">{award.name}</p>
                    <p className="text-gray-400 text-xs font-light">{award.award}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm font-light">
                © 2024 Purosurf. All rights reserved.
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-light"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}