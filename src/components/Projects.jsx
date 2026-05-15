import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const CATEGORY_ORDER = [
  { key: 'Web & SaaS',  label: 'Web & SaaS',   desc: 'Full-stack and production SaaS platforms' },
  { key: 'AI & Agents', label: 'AI & Agents',  desc: 'LLM systems, agents, fine-tuning' },
  { key: 'Automation',  label: 'Automation',   desc: 'Workflow and pipeline automation' },
  { key: 'ML & Data',   label: 'ML & Data',    desc: 'Machine learning and data science' },
  { key: 'Embedded',    label: 'Embedded',     desc: 'Hardware and embedded systems' },
];

const ProjectCard = ({ project, i }) => (
  <motion.a
    href={project.link || undefined}
    target={project.link ? '_blank' : undefined}
    rel="noopener noreferrer"
    className="group relative block bg-white/90 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: i * 0.07 }}
  >
    {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    ) : (
      <div className="h-48 w-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center px-4">
        <span className="text-white/60 text-sm font-medium text-center">{project.title}</span>
      </div>
    )}
    <div className="p-5">
      <h4 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-400 leading-snug">
        {project.title}
      </h4>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-blue-600/10 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const Projects = () => {
  const grouped = CATEGORY_ORDER.map(({ key, label, desc }) => ({
    key,
    label,
    desc,
    items: projects.filter((p) => p.category === key),
  })).filter((g) => g.items.length > 0);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A collection of projects spanning production SaaS, AI agents, automation pipelines, machine learning, and embedded systems.
        </motion.p>

        <div className="space-y-20">
          {grouped.map(({ key, label, desc, items }) => (
            <div key={key}>
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-1">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {label}
                  </h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-400 to-transparent" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((project, i) => (
                  <ProjectCard key={project.title} project={project} i={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
