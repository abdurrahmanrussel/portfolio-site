import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/profile.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-72 h-72 bg-blue-300 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-300 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse bottom-10 right-10"></div>
        <div className="absolute w-72 h-72 bg-purple-300 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profile}
          alt="Md. Abdur Rahman"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-blue-500"
        />
      </motion.div>

      {/* Text + CTA */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center lg:text-left max-w-2xl z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Hi, I'm Md. Abdur Rahman
        </h2>

        {/* TypeAnimation for dynamic subtitle */}
        <TypeAnimation
          sequence={[
            'AI Enthusiast', 2000,
            'Machine Learning Explorer', 2000,
            'Full-stack Developer', 2000,
            'Problem Solver', 2000
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-xl md:text-2xl lg:text-3xl text-blue-700 dark:text-blue-300 mb-6 font-medium"
        />

        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I’m passionate about creating innovative software solutions
          that make a positive impact on the world.
        </p>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-6 mb-6">
          <a
            href="https://github.com/abdurrahmanrussel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abdur-rahman77/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codeforces.com/profile/Abdur_Rahman_Russel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-3xl"
          >
            <FaCode />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition transform text-lg font-semibold"
        >
          🚀 View My Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
