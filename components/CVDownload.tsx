'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, Award, Briefcase, GraduationCap, Globe } from 'lucide-react'

const CVDownload = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownload = () => {
    window.open('/cv/Jessica_Agasaro_CV.pdf', '_blank');
  }

  const cvHighlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: '5+ years of multimedia journalism experience across multiple platforms'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Bachelor of Arts in Business Leadership from Pan African Christian University'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Multilingual reporting and digital content production expertise'
    },
    {
      icon: Globe,
      title: 'Languages',
      description: 'Fluent in English, French, Swahili, and Lingala'
    }
  ]

  const skills = [
    'Video Production',
    'Multilingual Reporting',
    'Social Media Management',
    'Digital Content Creation',
    'Broadcasting',
    'Field Reporting',
    'Teamwork',
    'Leadership',
    'Communication',
    'Problem-solving',
    'Organizational Skills'
  ]

  return (
    <section id="cv" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Download My <span className="gradient-text">CV</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get a comprehensive overview of my professional background, skills, and achievements. 
            Download my CV to learn more about my journalistic journey and expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* CV Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">JA</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">Jessica Agasaro</h3>
                    <p className="text-primary-600 font-semibold">Multimedia Journalist</p>
                    <p className="text-secondary-600">New Times Rwanda</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-primary-600" />
                      Experience
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      Multimedia Journalist at New Times Rwanda (March 2024 - Present)
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary-600" />
                      Education
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      Bachelor of Arts in Business Leadership, Pan African Christian University (2015 - 2018)
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary-600" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.slice(0, 4).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
              className="absolute -top-4 -right-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FileText className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                Ready to Download?
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                My CV contains detailed information about my professional experience, 
                education, skills, and achievements. It's formatted professionally 
                and ready to share with potential employers or collaborators.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="w-full btn-primary flex items-center justify-center space-x-3 text-lg py-4"
            >
              <Download className="w-6 h-6" />
              <span>Download CV (PDF)</span>
            </motion.button>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                What's Included
              </h4>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complete professional experience timeline</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Educational background and certifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Detailed skills and competencies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Notable achievements and awards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contact information and references</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CV Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cvHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-secondary-900 mb-3">{highlight.title}</h4>
              <p className="text-secondary-600 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-secondary-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CVDownload
