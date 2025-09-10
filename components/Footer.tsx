'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/newtimesrwanda',
      icon: '🐦'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jessica-agasaro',
      icon: '💼'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/watch?v=TSTP78JTTEk',
      icon: '📺'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iamagasaro/',
      icon: '📸'
    },
    {
      name: 'New Times Rwanda',
      url: 'https://www.newtimes.co.rw/author/414/jessica-agasaro?fbclid=PAZXh0bgNhZW0CMTEAAae_nopJ78Sjmv9SalYkx_i8nIs0PGfQ7eeb3QgwymjjUhira5KWTV8BPyE5Jw_aem_XZljmlfyjhoP_I1IWAt5ZA',
      icon: '📰'
    },
    {
      name: 'Email',
      url: 'mailto:jessicagasaro@gmail.com',
      icon: '✉️'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'News Articles', href: '#news' },
    { name: 'Video', href: '#video' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JA</span>
                </div>
                <span className="text-2xl font-bold text-secondary-900 dark:text-white">Jessica Agasaro</span>
              </div>
              <p className="leading-relaxed mb-6 max-w-md text-secondary-700 dark:text-gray-300">
                Versatile multimedia journalist at New Times Rwanda, skilled in video production, 
                storytelling, and digital content across multiple platforms and languages.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-secondary-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-secondary-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-secondary-700 dark:text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-secondary-900 dark:text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-700 dark:text-gray-300">jessicagasaro@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-700 dark:text-gray-300">+250 788681371</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-secondary-700 dark:text-gray-300">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-500 dark:text-gray-400">
              <span>© {currentYear} Jessica Agasaro. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for journalism excellence.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400 dark:text-gray-500">
              <a 
                href="https://www.newtimes.co.rw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors duration-300 flex items-center space-x-1"
              >
                <span>New Times Rwanda</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span>Professional Portfolio</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors duration-300 z-50"
      >
        <span className="text-white font-bold">↑</span>
      </motion.button>
    </footer>
  )
}

export default Footer
