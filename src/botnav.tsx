import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './screen.css';

function BotNav() {
  return (
    <div id="links">
      <ul>
        <li>
          <a href="https://github.com/RoniDomi" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/roni-domi-5878a626b/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:roni.domi001@umb.edu">
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default BotNav;
