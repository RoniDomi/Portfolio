import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../screen.css';

type Project = {
  cmd: string;
  description: string;
  tech: string[];
  link: string;
  linkLabel: string;
  isExternal?: boolean;
};

const PROJECTS: Project[] = [
  {
    cmd: 'sustainable-labs-bot',
    description:
      "RAG-based AI assistant for UMass Boston's Sustainable Labs. Served as Technical Lead — drove architecture decisions, built the frontend UI, and coordinated the team throughout development.",
    tech: ['Python', 'RAG', 'Gemini', 'Hugging Face', 'React'],
    link: 'https://github.com/RoniDomi/Sustainable-Labs-ChatBot',
    linkLabel: 'GitHub',
  },
  {
    cmd: 'mage-platform',
    description:
      "Homepage and landing page for the MAGE platform, built for a client. Designed and developed the full UI in React and TypeScript to represent the platform's brand and features.",
    tech: ['React', 'TypeScript'],
    link: 'https://github.com/RoniDomi/MAGE-Homepage',
    linkLabel: 'GitHub',
  },
  {
    cmd: 'ai-model-fine-tuning',
    description:
      'Fine-tuned a pretrained AI model for a machine learning course project assigned and evaluated by a guest engineer from Meta. Managed the training environment, CUDA optimization, and iteratively improved output quality by tuning generation parameters.',
    tech: ['Python', 'Machine Learning', 'CUDA'],
    link: 'https://colab.research.google.com/drive/1_iBSv-DAn5aGoTm7VS6F8dOILlfiZNKr?authuser=1',
    linkLabel: 'Colab',
    isExternal: true,
  },
  {
    cmd: 'ai-agent',
    description:
      'Autonomous AI agent built in Python using the OpenAI API. Reasons through multi-step tasks and uses tools to complete goals without manual intervention.',
    tech: ['Python', 'OpenAI API', 'AI'],
    link: 'https://github.com/RoniDomi/Ai-agent',
    linkLabel: 'GitHub',
  },
  {
    cmd: 'huffman-compression',
    description:
      'File compression tool in C implementing the Huffman coding algorithm. Builds a frequency tree from input data and encodes it with variable-length bit sequences to reduce file size.',
    tech: ['C', 'Algorithms', 'Data Structures'],
    link: 'https://github.com/RoniDomi/Huffman-Compression',
    linkLabel: 'GitHub',
  },
  {
    cmd: 'miller-rabin-c',
    description:
      'Probabilistic primality test implementing the Miller-Rabin algorithm in C — used as a building block for RSA key generation. Applies number theory and public key cryptography concepts.',
    tech: ['C', 'Cryptography', 'Number Theory'],
    link: 'https://github.com/RoniDomi/Miller-Rabin-C',
    linkLabel: 'GitHub',
  },
  {
    cmd: 'portfolio',
    description:
      'This site. A retro terminal-themed dev portfolio with a typewriter animation, smooth scroll, Framer Motion entrance effects, and a clean single-page layout.',
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    link: 'https://github.com/RoniDomi',
    linkLabel: 'GitHub',
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <div id="projects-inner">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: '-60px' }}
      >
        <h2>&gt; projects</h2>
      </motion.div>

      <motion.div
        className="project-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {PROJECTS.map(p => (
          <motion.div key={p.cmd} className="project-card" variants={cardVariants}>
            <div className="card-preview">
              <span>[ preview ]</span>
            </div>

            <h3>&gt; {p.cmd}</h3>
            <p>{p.description}</p>

            <div className="tech-tags">
              {p.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer">
                {p.isExternal ? <FaExternalLinkAlt /> : <FaGithub />} {p.linkLabel}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
