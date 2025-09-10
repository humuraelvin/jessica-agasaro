'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Target, Heart } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality journalism with accuracy and integrity.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Believes in the power of storytelling to connect and empower communities.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Focused on creating meaningful change through investigative reporting.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by a genuine love for journalism and serving the public interest.'
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            About <span className="gradient-text">Jessica</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A versatile and driven multimedia journalist with a strong foundation in reporting, storytelling, 
            and digital content production. With experience covering major events including elections in Rwanda 
            and the Democratic Republic of Congo, Jessica brings deep understanding of political and social 
            dynamics in the Great Lakes region.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/personal_pics/IMG-20250708-WA0003.jpg"
                  alt="Jessica Agasaro at work"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/personal_pics/IMG-20250708-WA0006.jpg"
                  alt="Jessica Agasaro professional"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/personal_pics/IMG-20250708-WA0009.jpg"
                  alt="Jessica Agasaro portrait"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/personal_pics/IMG-20250708-WA0004.jpg"
                  alt="Jessica Agasaro"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">My Story</h3>
              <p className="text-secondary-600 dark:text-gray-300 leading-relaxed mb-4">
                Skilled in video production, writing, and social media engagement, I produce content 
                across multiple platforms and languages—English, French, and Kinyarwanda. I have a 
                confident on-camera presence and am comfortable working in fast-paced, high-pressure 
                environments where accuracy, clarity, and speed are critical.
              </p>
              <p className="text-secondary-600 dark:text-gray-300 leading-relaxed">
                My strengths include pitching and developing in-depth feature stories, conducting 
                compelling interviews, and navigating diverse field conditions with professionalism. 
                I value ethical journalism, cultural sensitivity, and the power of storytelling to 
                inform, inspire, and hold space for underrepresented voices.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">My Approach</h3>
              <ul className="space-y-3 text-secondary-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multilingual content production (English, French, Kinyarwanda)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Digital platform management and social media engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Video production and on-camera presentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Ethical journalism and cultural sensitivity</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">{value.title}</h4>
              <p className="text-secondary-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
