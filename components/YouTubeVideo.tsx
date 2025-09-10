'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, ExternalLink, Calendar, Eye, ThumbsUp } from 'lucide-react'

const YouTubeVideo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  const videoData = {
    title: "Investigative Journalism Feature",
    description: "An in-depth look at Jessica's investigative reporting process and the impact of her work on the community. This video showcases her dedication to uncovering truth and telling stories that matter.",
    youtubeId: "TSTP78JTTEk",
    url: "https://www.youtube.com/watch?v=TSTP78JTTEk",
    duration: "8:45",
    views: "12.5K",
    likes: "847",
    publishDate: "2024",
    thumbnail: "https://img.youtube.com/vi/TSTP78JTTEk/maxresdefault.jpg"
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleVideoClick = () => {
    window.open(videoData.url, '_blank')
  }

  return (
    <section id="video" ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Featured <span className="gradient-text">Video</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch Jessica in action as she shares insights into her journalistic process 
            and the stories that have shaped her career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              {!isPlaying ? (
                <div 
                  className="relative w-full h-full cursor-pointer group"
                  onClick={handlePlay}
                >
                  <img
                    src={videoData.thumbnail}
                    alt={videoData.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-colors duration-300">
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                    {videoData.duration}
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&rel=0`}
                  title={videoData.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Video Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center justify-between"
            >
              <div className="flex items-center space-x-6 text-secondary-600">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{videoData.views} views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{videoData.likes} likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{videoData.publishDate}</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVideoClick}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Watch on YouTube</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                {videoData.title}
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed">
                {videoData.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  What You'll Learn
                </h4>
                <ul className="space-y-3 text-secondary-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Behind-the-scenes look at investigative journalism</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tips for conducting effective interviews</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building trust with sources and communities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>The impact of quality journalism on society</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                  Video Highlights
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-600">Professional insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-600">Real case studies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-600">Practical tips</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                    <span className="text-secondary-600">Career advice</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Want to See More of My Work?
            </h3>
            <p className="text-secondary-600 mb-6">
              Subscribe to my YouTube channel for more insights into journalism, 
              behind-the-scenes content, and professional development tips.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.youtube.com/watch?v=TSTP78JTTEk', '_blank')}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Subscribe on YouTube</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default YouTubeVideo
