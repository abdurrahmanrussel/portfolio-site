import React from 'react';
import { FaLaptopCode, FaTrophy, FaCertificate, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CompetitiveProgramming = () => {
  const profiles = [
    {
      platform: 'Codeforces',
      url: 'https://codeforces.com/profile/Abdur_Rahman_Russel',
      solved: 1123,
    },
    {
      platform: 'VJudge',
      url: 'https://vjudge.net/user/Rahman_1910055',
      solved: 239,
    },
    {
      platform: 'Beecrowd',
      url: 'https://judge.beecrowd.com/en/profile/422752',
      solved: 226,
    },
    {
      platform: 'Toph',
      url: 'https://toph.co/u/Russel_191005',
      solved: 19,
    },
  ];

  const achievements = [
    {
      icon: <FaLaptopCode className="text-indigo-600" />,
      title: 'Active Competitor',
      description:
        'Solved 1100+ problems on Codeforces (max rating: 1361), consistently participating in Div 2 & Div 3 contests.',
    },
    {
      icon: <FaTrophy className="text-yellow-500" />,
      title: 'ICPC Preliminary Participation',
      description:
        'Participated multiple times in ICPC Preliminary Contests representing RUET. Developed teamwork and advanced problem-solving skills.',
    },
    {
      icon: <FaCertificate className="text-green-600" />,
      title: 'Certificates of Participation',
      description:
        'Earned certificates for participation in ICPC preliminaries and various programming contests, showcasing commitment and continuous learning.',
    },
  ];

  return (
    <section
      id="competitive-programming"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.h3
        className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-700 to-purple-700 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Competitive Coding & Platforms
      </motion.h3>

      {/* Profiles Section */}
      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {profiles.map(({ platform, url, solved }) => (
          <motion.a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-transparent hover:border-indigo-600 hover:shadow-indigo-400/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FaLink className="text-indigo-600 text-3xl mb-2" />
            <h4 className="text-lg font-semibold text-indigo-800 dark:text-indigo-400">{platform}</h4>
            <p className="text-gray-700 dark:text-gray-300 mt-1">Solved: {solved}</p>
          </motion.a>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map(({ icon, title, description }) => (
          <motion.div
            key={title}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-transparent hover:border-indigo-600 hover:shadow-indigo-400/30 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="text-4xl">{icon}</div>
              <h4 className="text-xl font-semibold text-indigo-800 dark:text-indigo-400">{title}</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
