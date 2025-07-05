import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contacts = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    href: 'mailto:abdurrahmanrussel77@gmail.com',
    display: 'abdurrahmanrussel77@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    href: 'tel:+8801714042230',
    display: '+8801714042230',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-abdur-rahman77/',
    display: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/abdurrahmanrussel',
    display: 'GitHub',
  },
];

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
    <motion.h3
      className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Contact
    </motion.h3>

    <div className="max-w-md mx-auto space-y-6 text-center">
      {contacts.map(({ icon, label, href, display }) => (
        <motion.div
          key={label}
          className="flex items-center justify-center gap-3 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="text-xl">{icon}</span>
          <a
            href={href}
            target={label === 'Email' || label === 'Phone' ? undefined : '_blank'}
            rel={label === 'Email' || label === 'Phone' ? undefined : 'noopener noreferrer'}
            className="underline underline-offset-2"
            aria-label={label}
          >
            {display}
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Contact;
