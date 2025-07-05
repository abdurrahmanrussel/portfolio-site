import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaGraduationCap, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Competitive Programming",
      icon: <FaTrophy className="text-yellow-500" />,
      items: [
        "Solved 1100+ problems on Codeforces (max. pupil, 1361), active participant in Div 2 & 3 contests",
        "Winner of RUET Intra-University Programming Contest",
        "Participated in ICPC preliminary contests & MBSTU Inter-University Contest representing RUET",
      ],
    },
    {
      title: "Olympiads & Awards",
      icon: <FaGraduationCap className="text-blue-600" />,
      items: [
        "Achieved 4th place in Science Olympiad Divisional Round 2017",
        "Participated in Math, Science, and Chemistry Olympiads at High School, College, and University levels",
      ],
    },
    {
      title: "Team Skills & Problem Solving",
      icon: <FaCertificate className="text-purple-600" />,
      items: [
        "Experienced in team-based competitive strategies and agile collaboration",
        "Proven problem-solving mindset through competitions and projects",
      ],
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h3
        className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Achievements & Competitions
      </motion.h3>

      <motion.p
        className="text-center max-w-xl mx-auto mb-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        My journey is powered by dedication and passion. Every challenge
        conquered and every award earned fuels my drive to create impactful,
        innovative solutions.
      </motion.p>

      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map(({ title, icon, items }, i) => (
          <motion.div
            key={title}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-transparent hover:border-blue-500 hover:shadow-blue-400/30 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
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
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
