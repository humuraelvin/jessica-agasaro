'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Calendar, Eye, Share2 } from 'lucide-react'
import Image from 'next/image'

const NewsArticles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const articles = [
    {
      title: "Breaking News Coverage",
      description: "Comprehensive coverage of major national events and developments in Rwanda.",
      link: "https://t.co/MA1Rn06542",
      image: "/news_articles_pics/WhatsApp Image 2025-07-08 at 7.43.52 PM.jpeg",
      date: "2024",
      category: "Breaking News"
    },
    {
      title: "Investigative Report",
      description: "In-depth investigation into social issues affecting local communities.",
      link: "https://t.co/7jk3vu5UKF",
      image: "/news_articles_pics/WhatsApp Image 2025-07-08 at 7.43.53 PM.jpeg",
      date: "2024",
      category: "Investigation"
    },
    {
      title: "Community Feature Story",
      description: "Highlighting positive stories and developments in local communities.",
      link: "https://x.com/newtimesrwanda/status/1907057071914098751?s=48&t=pJYw5O8BXYAS_yvp0SBUyQ",
      image: "/news_articles_pics/WhatsApp Image 2025-07-08 at 7.43.53 PM (1).jpeg",
      date: "2024",
      category: "Feature"
    },
    {
      title: "Political Analysis",
      description: "Expert analysis of political developments and policy implications.",
      link: "https://x.com/newtimesrwanda/status/1907064153845444621?s=48&t=pJYw5O8BXYAS_yvp0SBUyQ",
      image: "/news_articles_pics/WhatsApp Image 2025-07-08 at 7.43.54 PM.jpeg",
      date: "2024",
      category: "Politics"
    },
    {
      title: "Social Impact Story",
      description: "Stories that highlight social change and community development initiatives.",
      link: "https://x.com/newtimesrwanda/status/1907072161405145443?s=48&t=pJYw5O8BXYAS_yvp0SBUyQ",
      image: "/news_articles_pics/WhatsApp Image 2025-07-08 at 7.43.56 PM.jpeg",
      date: "2024",
      category: "Social Impact"
    }
  ]

  const categories = ["All", "Breaking News", "Investigation", "Feature", "Politics", "Social Impact"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory)

  return (
    <section id="news" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            News <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of impactful stories and investigative reports that have made a difference 
            in informing and engaging our community.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-secondary-700 hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="card group cursor-pointer"
              onClick={() => window.open(article.link, '_blank')}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-secondary-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed mb-4">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(article.link, '_blank')
                    }}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Read Article</span>
                  </motion.button>
                  
                  <div className="flex items-center space-x-4 text-secondary-400">
                    <button className="hover:text-primary-600 transition-colors duration-300">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="hover:text-primary-600 transition-colors duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-secondary-600">Articles Published</div>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6">
            <div className="text-3xl font-bold text-secondary-600 mb-2">100K+</div>
            <div className="text-secondary-600">Total Views</div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
            <div className="text-secondary-600">Exclusive Stories</div>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6">
            <div className="text-3xl font-bold text-secondary-600 mb-2">5</div>
            <div className="text-secondary-600">Awards Won</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsArticles
