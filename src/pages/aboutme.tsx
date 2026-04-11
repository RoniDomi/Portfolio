import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../screen.css';

type TermLine = { text: string; isCmd?: boolean };

const LINES: TermLine[] = [
  { text: '> whoami', isCmd: true },
  { text: "I'm Roni a CS student at UMass Boston, graduating 2026." },
  { text: "I lean towards AI development and frontend engineering." },
  { text: "I've been the techincal lead for projects, built for" },
  { text: "clients, and like shipping things that are useful while" },
  { text: "also looking good!" },
  { text: '' },
  { text: '> skills', isCmd: true },
  { text: 'Python, TypeScript, JavaScript, React, Vite, CSS' },
  { text: 'RAG pipelines, LLM fine-tuning, Gemini, Hugging Face' },
  { text: 'C, Java, Node.js, MongoDB, Git, Linux' },
  { text: '' },
  { text: '> currently-working-on', isCmd: true },
  { text: 'Frontend dev on the MAGE platform — client work' },
  { text: 'Compiler design, building a Java parser and scanner from scratch' },
  { text: 'UMass SSL chatbot that could go officially live for the school' },
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
    <>
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

      <motion.div
        id="photo-placeholder"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span>[ photo ]</span>
      </motion.div>
    </>
  );
}
