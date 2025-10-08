// src/components/BlogSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blogs = [
  {
    id: 1,
    title: "The Art of Wave Reading",
    excerpt: "Master the ocean's rhythm and learn how to read waves like a professional surfer. Essential tips for beginners and advanced surfers alike.",
    author: "Maria Santos",
    date: "Dec 15, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Surfing",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    size: "large"
  },
  {
    id: 2,
    title: "Luxury Wellness Retreats",
    excerpt: "Discover how our wellness programs combine ancient practices with modern luxury for complete mind-body transformation.",
    author: "Dr. Kenji Tanaka",
    date: "Dec 12, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Wellness",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    size: "medium"
  },
  {
    id: 3,
    title: "Sustainable Luxury",
    excerpt: "How we're pioneering eco-friendly luxury tourism without compromising on the premium experience our guests deserve.",
    author: "Sarah Chen",
    date: "Dec 10, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Sustainability",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    size: "small"
  },
  {
    id: 4,
    title: "Culinary Excellence",
    excerpt: "Behind the scenes of our Michelin-inspired kitchen where local ingredients meet world-class culinary artistry.",
    author: "Chef Marco",
    date: "Dec 8, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Dining",
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    size: "medium"
  },
  {
    id: 5,
    title: "Surf Photography Guide",
    excerpt: "Capture stunning surf moments with professional tips on angles, lighting, and timing from our resident photographer.",
    author: "Alex Thompson",
    date: "Dec 5, 2023",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Photography",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    size: "small"
  },
  {
    id: 6,
    title: "Mindful Morning Routines",
    excerpt: "Start your day with purpose. Our guide to creating morning rituals that set the tone for success and wellbeing.",
    author: "Sophie Martinez",
    date: "Dec 3, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Lifestyle",
    gradient: "from-rose-500 to-red-500",
    bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
    size: "large"
  },
  {
    id: 7,
    title: "Ocean Conservation Efforts",
    excerpt: "Join us in protecting marine ecosystems. Learn about our initiatives and how you can contribute to ocean preservation.",
    author: "Marine Biology Team",
    date: "Nov 28, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Conservation",
    gradient: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    size: "medium"
  }
];

export default function BlogSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const getCardClasses = (size, index) => {
    const baseClasses = "group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer";
    
    switch (size) {
      case 'large':
        return `${baseClasses} lg:col-span-2 lg:row-span-2 h-96 lg:h-full`;
      case 'medium':
        return `${baseClasses} lg:col-span-1 h-80 lg:h-72`;
      case 'small':
        return `${baseClasses} lg:col-span-1 h-72 lg:h-64`;
      default:
        return `${baseClasses} lg:col-span-1 h-80`;
    }
  };

  // Group blogs by layout pattern
  const layoutPattern = [
    ['large', 'medium', 'small'],
    ['medium', 'small', 'large'],
    ['small', 'medium', 'medium']
  ];

  const getBlogsByLayout = () => {
    const largeBlogs = blogs.filter(blog => blog.size === 'large');
    const mediumBlogs = blogs.filter(blog => blog.size === 'medium');
    const smallBlogs = blogs.filter(blog => blog.size === 'small');
    
    const arrangedBlogs = [];
    let largeIndex = 0, mediumIndex = 0, smallIndex = 0;

    layoutPattern.forEach(row => {
      row.forEach(size => {
        if (size === 'large' && largeIndex < largeBlogs.length) {
          arrangedBlogs.push(largeBlogs[largeIndex++]);
        } else if (size === 'medium' && mediumIndex < mediumBlogs.length) {
          arrangedBlogs.push(mediumBlogs[mediumIndex++]);
        } else if (size === 'small' && smallIndex < smallBlogs.length) {
          arrangedBlogs.push(smallBlogs[smallIndex++]);
        }
      });
    });

    return arrangedBlogs;
  };

  const arrangedBlogs = getBlogsByLayout();

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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-40 blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full opacity-40 blur-3xl"
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
              LATEST STORIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4 leading-tight"
          >
            Insights &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
              Stories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover expert tips, inspiring stories, and behind-the-scenes looks at the Purosurf experience.
          </motion.p>
        </motion.div>

        {/* Blog Grid - Improved Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            gridTemplateRows: 'masonry'
          }}
        >
          {arrangedBlogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              className={getCardClasses(blog.size, index)}
              whileHover={{ 
                y: -8,
                scale: 1.02
              }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${blog.bgColor} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Blog Image */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70`} />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  className="mb-4"
                >
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${blog.gradient} backdrop-blur-sm border border-white/20`}>
                    {blog.category}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  className={`font-semibold text-white mb-3 leading-tight group-hover:text-yellow-100 transition-colors duration-300 ${
                    blog.size === 'large' ? 'text-2xl lg:text-3xl' : 
                    blog.size === 'medium' ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'
                  }`}
                >
                  {blog.title}
                </motion.h3>

                {/* Excerpt - Only show for medium and large cards */}
                {(blog.size === 'large' || blog.size === 'medium') && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                    className="text-white/90 text-sm lg:text-base leading-relaxed mb-4 font-light line-clamp-2 group-hover:text-white/100 transition-colors duration-300"
                  >
                    {blog.excerpt}
                  </motion.p>
                )}

                {/* Meta Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                  className="flex items-center justify-between text-white/80 text-sm"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium">{blog.author}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                    <span>{blog.date}</span>
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    {blog.readTime}
                  </span>
                </motion.div>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-500"
                  initial={false}
                />
              </div>

              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-light text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            View All Articles
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}