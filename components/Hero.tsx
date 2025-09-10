'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                Multimedia Journalist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6 leading-tight"
            >
              Jessica{' '}
              <span className="gradient-text">Agasaro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-secondary-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Versatile multimedia journalist at{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">New Times Rwanda</span>, 
              skilled in video production, storytelling, and digital content across multiple 
              platforms and languages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#cv')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-sm text-secondary-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4</div>
                <div className="text-sm text-secondary-600 dark:text-gray-400">Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">Multi</div>
                <div className="text-sm text-secondary-600 dark:text-gray-400">Platform Expert</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full blur-3xl opacity-20"></div>
                <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700">
                  <Image
                    src="/personal_pics/IMG-20250708-WA0004.jpg"
                    alt="Jessica Agasaro"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">📰</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-sm">✍️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="text-secondary-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
