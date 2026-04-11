import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../screen.css';

type TermLine = { text: string; isCmd?: boolean };

const LINES: TermLine[] = [
  { text: '> whoami', isCmd: true },
  { text: "I'm Roni — a CS student and aspiring software engineer." },
  { text: "I love building things: low-level systems, visual tools," },
  { text: "and full-stack web apps. Creating is a passion of mine." },
  { text: '' },
  { text: '> skills-and-knowledge', isCmd: true },
  { text: 'C, C++, Java, Python, JavaScript, TypeScript, React, Vite, CSS' },
  { text: 'Algorithms, Data Structures, Operating Systems, Cryptography' },
  { text: 'Windows, Linux, MacOS — Low-Level Design, Web Development' },
  { text: '' },
  { text: '> currently-exploring', isCmd: true },
  { text: 'System-level C: building a bash terminal from scratch' },
  { text: 'Full-stack: developing a digital magazine platform' },
  { text: 'AI: integrating and experimenting with LLM APIs' },
];

export default function Aboutme() {
  const [completedLines, setCompletedLines] = useState<TermLine[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[lineIdx];

    if (line.text === '') {
      const t = setTimeout(() => {
        setCompletedLines(prev => [...prev, line]);
        setLineIdx(i => i + 1);
        setCharIdx(0);
      }, 60);
      return () => clearTimeout(t);
    }

    if (charIdx >= line.text.length) {
      const t = setTimeout(() => {
        setCompletedLines(prev => [...prev, line]);
        setLineIdx(i => i + 1);
        setCharIdx(0);
      }, 30);
      return () => clearTimeout(t);
    }

    const speed = line.isCmd ? 20 : 8;
    const t = setTimeout(() => setCharIdx(i => i + 1), speed);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const skip = () => {
    if (!done) {
      setCompletedLines(LINES);
      setLineIdx(LINES.length);
      setDone(true);
    }
  };

  const activeLine = !done && lineIdx < LINES.length ? LINES[lineIdx] : null;

  return (
    <motion.div
      id="welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      onClick={skip}
      style={{ cursor: done ? 'default' : 'pointer' }}
    >
      <div id="terminal-output">
        {completedLines.map((line, i) => (
          <div
            key={i}
            className={
              line.text === ''
                ? 'term-blank'
                : line.isCmd
                ? 'term-cmd'
                : 'term-text'
            }
          >
            {line.text}
          </div>
        ))}

        {activeLine && (
          <div className={activeLine.isCmd ? 'term-cmd' : 'term-text'}>
            {activeLine.text.slice(0, charIdx)}
            <span className="cursor" />
          </div>
        )}

        {done && <span className="cursor" />}
      </div>

      {!done && <p className="term-skip">[click to skip]</p>}
    </motion.div>
  );
}
