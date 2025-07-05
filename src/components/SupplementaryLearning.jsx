import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaBrain, FaLightbulb, FaExternalLinkAlt } from "react-icons/fa";

const SupplementaryLearning = () => {
  const courses = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain className="text-purple-600" />,
      items: [
        {
          name: "Generative AI for Software Developers Specialization",
          university: "IBM (via Coursera)",
          link: "https://www.coursera.org/account/accomplishments/specialization/T36C8ID31ADM",
        },
        {
          name: "Deep Learning and Reinforcement Learning",
          university: "IBM (via Coursera)",
          link: "https://www.coursera.org/account/accomplishments/verify/R8Q2Y0CRUVT7",
        },
        {
          name: "Machine Learning with Python",
          university: "IBM (via Coursera)",
          link: "https://www.coursera.org/account/accomplishments/verify/OXTKKRDUC7WT",
        },
      ],
    },
    {
      title: "Programming & Development",
      icon: <FaLightbulb className="text-yellow-500" />,
      items: [
        {
          name: "The Arduino Platform and C Programming",
          university: "University of California, Irvine (via Coursera)",
          link: "https://www.coursera.org/account/accomplishments/verify/SZJPRLSPR04T",
        },
        {
          name: "Python Basics",
          university: "University of Michigan (via Coursera)",
           link: "https://www.coursera.org/account/accomplishments/verify/22B0XDSV7HEU",
        },
        {
          name: "Introduction to Calculus",
          university: "The University of Sydney (via Coursera)",
           link: "https://www.coursera.org/account/accomplishments/verify/JUTUXE99BN3A",
        },
      ],
    },
    {
      title: "Professional Development",
      icon: <FaBookOpen className="text-blue-600" />,
      items: [
        {
          name: "English for Career Development",
          university: "University of Pennsylvania (via Coursera)",
          link: "https://www.coursera.org/account/accomplishments/verify/DMHBFHS4YE3L",
        },
        {
          name: "Data Science Math Skills",
          university: "Duke University (via Coursera)",
          link: "https://www.coursera.org/account/accomplishments/verify/1PMDCOD8V4PN",
        },
      ],
    },
  ];

  return (
    <section
      id="supplementary-learning"
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h3
        className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Supplementary Learning
      </motion.h3>

      <motion.p
        className="text-center max-w-xl mx-auto mb-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Always eager to learn new tools and technologies from diverse platforms to sharpen my knowledge. These courses reflect a passion for continuous learning and staying updated beyond the classroom.
      </motion.p>

      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(({ title, icon, items }, i) => (
          <motion.div
            key={title}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-transparent hover:border-blue-500 hover:shadow-blue-400/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="flex items-center mb-4 space-x-3">
              <div className="text-3xl">{icon}</div>
              <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-400">
                {title}
              </h4>
            </div>

            <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {items.map(({ name, university, link }) => (
                <li key={name}>
                  <span className="font-medium">{name}</span>
                  <br />
                  <span className="text-sm">{university}</span>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-blue-600 hover:underline inline-flex items-center text-sm"
                    >
                      [View Certificate] <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SupplementaryLearning;
