import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: 'Shoyeb Shaikh',
      role: 'Director',
      description:
        'Shoyeb Shaikh is a director, writer, editor & professor. Holds a degree of mass media and has several film credits, which includes short, feature and documentary films. Shoyeb Shaikh believes in creating content that not only entertains, but fuels the imagination of the viewer and continually expands their scope of reality.',
    },
    {
      name: 'Ashish Datir',
      role: 'Creative Director',
      description:
        'Ashish Datir is a highly experienced and versatile creative professional. With a background as a freelance actor and director, Ashish has dedicated the past eight years to engaging in experimental theatre activities. His talent and commitment have been recognized with state-level awards for his outstanding performances.',
    },
    {
      name: 'Pavan Supekar',
      role: 'Social Media Executive',
      description:
        'Social Media Strategist, Creative Director, Storyteller. He helps brands tell their stories through engaging visual social content to grow their following and drive sales. Has a worked with National & International brands like Touch-tennis India, Felidae Electric, Whitedot Adverts & Sole Realty Estate.',
    },
    {
      name: 'Prabodhini Tipramwar',
      role: 'Editor & Asist. Director',
      description:
        'Specialising in project management, post-production, video editing, and visual effects. She also manages video production projects and helps collaborating with creative teams to refine storytelling.',
    },
    {
      name: 'Amin Kazi',
      role: 'VFX Supervisor',
      description:
        'Amin Kazi is a Award Winning VFX Supervisor. Films like Rangaa Patangaa, Institute of Pavtology, Video Parlour & Redu. Leading talent with substantial experience covering a diverse range of productions from prime time dramas and major TV series, to feature films both Studio and Independent.',
    },
  ]

  return (
    <section
      id="about-us"
      ref={ref}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2021 by Director Shoyeb Shaikh, Grid Pictures is a fully
            integrated studio. Grid pictures is being established as a film and a
            premier editing studio. It is our continual aim to deliver content that
            garners both popular as well as critical acclaim, while making Indian
            films more visible to an international audience. The company is proud to
            having built a reputation through powerful storytelling that is backed by
            originality, quality, and detail.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8"
          >
            <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
            <p className="text-lg text-gray-700">
              At GRID Pictures, we nurture an environment of mutual respect and
              integrity. Every member of this family is encouraged to innovate, and
              supported to deliver work to the best of their potential.
            </p>
          </motion.div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Team
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
              <p className="text-lg font-semibold text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs

