import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './screen.css';

function Footer() {
  return (
    <footer id="footer">
      <span id="footer-copy">roni domi &middot; 2026</span>
      <div id="footer-links">
        <a href="https://github.com/RoniDomi" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/roni-domi-5878a626b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:roni.domi001@umb.edu" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
          <FaFileAlt />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
