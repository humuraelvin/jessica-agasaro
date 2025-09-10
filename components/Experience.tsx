'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, Award, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: 'Multimedia Journalist',
      company: 'New Times Rwanda',
      location: 'Kigali, Rwanda',
      period: 'March 2024 - Present',
      description: 'Producing feature stories in video on business and other growing fields, managing social media platforms including WhatsApp channel, Instagram, X, and TikTok, sending updates on video and doing vox pop on events.',
      achievements: [
        'Managing multiple social media platforms (WhatsApp, Instagram, X, TikTok)',
        'Producing video content for business and growing sectors',
        'Conducting vox pop interviews at major events',
        'Creating engaging digital content strategies'
      ],
      skills: ['Video Production', 'Social Media Management', 'Digital Content', 'Multimedia Storytelling', 'Platform Management']
    },
    {
      title: 'French Correspondent',
      company: 'Xinhua News Agency',
      location: 'Rwanda',
      period: 'July 2023 - February 2024',
      description: 'Covering matters and events happening in Rwanda, specifically in provinces, collecting news in Kinyarwanda and combining written stories in French and video stories for their website.',
      achievements: [
        'Multilingual reporting (Kinyarwanda to French)',
        'Provincial coverage across Rwanda',
        'Video story production for web platforms',
        'Cross-cultural news translation and adaptation'
      ],
      skills: ['Multilingual Reporting', 'Video Production', 'Translation', 'Provincial Coverage', 'Web Content']
    },
    {
      title: 'News Reporter',
      company: 'Rwanda Broadcasting Agency',
      location: 'Rwanda',
      period: 'December 2022 - July 2023',
      description: 'Pitching story ideas in morning editorial meetings, going on field to collect news, assembling findings in video and audio for both radio and TV stations in English, French and Kinyarwanda.',
      achievements: [
        'Multilingual broadcasting (English, French, Kinyarwanda)',
        'Field reporting and news collection',
        'Radio and TV content production',
        'Editorial meeting participation and story pitching'
      ],
      skills: ['Broadcasting', 'Field Reporting', 'Multilingual Content', 'Radio Production', 'TV Production']
    },
    {
      title: 'Reporter',
      company: 'Thompson Reuters',
      location: 'Rwanda',
      period: '2021 - September 2022',
      description: 'Collecting, verifying and analyzing thoroughly newsworthy information, assembling findings into stable stories, abiding by journalism ethics and codes, receiving assignments or investigating news leads/tips.',
      achievements: [
        'Thorough news verification and analysis',
        'Ethical journalism standards compliance',
        'Assignment execution and lead investigation',
        'Stable story assembly and reporting'
      ],
      skills: ['News Verification', 'Ethical Journalism', 'Lead Investigation', 'Story Assembly', 'Analysis']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Arts in Business Leadership',
      institution: 'Pan African Christian University',
      year: 'January 2015 - October 2018',
      description: 'Major in Marketing and Entrepreneurship, providing strong foundation in business leadership and strategic thinking.'
    },
    {
      degree: 'Advanced Level Certificate',
      institution: 'Groupe Scolaire de Notre Dame du Bon Conseil',
      year: 'January 2011 - October 2013',
      description: 'High School Diploma in Physics-Chemistry-Biology, demonstrating strong analytical and scientific foundation.'
    },
    {
      degree: 'Ordinary Level Certificate',
      institution: 'Centre Scolaire Elena Guerra',
      year: 'January 2008 - October 2010',
      description: 'Foundation education providing comprehensive academic base.'
    }
  ]

  const skills = [
    { name: 'Video Production', level: 95 },
    { name: 'Multilingual Reporting', level: 90 },
    { name: 'Social Media Management', level: 88 },
    { name: 'Digital Content Creation', level: 85 },
    { name: 'Broadcasting', level: 80 },
    { name: 'Field Reporting', level: 92 }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey of growth, learning, and impactful storytelling in the dynamic world of journalism.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Line */}
                <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
                
                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 ml-0 lg:ml-16">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-2 text-primary-600 mb-2">
                        <Building className="w-5 h-5" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-secondary-600 mb-2">
                        <MapPin className="w-5 h-5" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-secondary-600">
                        <Calendar className="w-5 h-5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary-600 leading-relaxed mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-secondary-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-primary-600" />
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-secondary-900 mb-2">{edu.degree}</h4>
                <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                <p className="text-secondary-600 mb-3">{edu.year}</p>
                <p className="text-secondary-600 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-secondary-900">{skill.name}</span>
                  <span className="text-primary-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
