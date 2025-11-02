import BotNav from './botnav';
import './screen.css';
import TopNav from './topnav';
import grid from './assets/grid.jpg';
import scanlines from './assets/scanlines.png';
import roni from './assets/roni.jpeg';

function Screen() {
  return (
    <div id="screen">
      <img src={scanlines} id="scan" className="noselect" />
      <img src={grid} id="grid" className="noselect" />

      <TopNav />

      <div id="welcome">
        <h2>&gt; whoami</h2>
        <p>
          I'm Roni, a computer science student, and aspiring software engineer!<br />
          I love building creative and technical projects, ranging from <br />
          low level systems, to visual tools, and full stack projects. <br />
          Creating is a passion for me, and coding helps me express this! <br />
        </p>

        <h2>&gt; skills-and-knowledge</h2>
        <p>
          C, C++, Java, Python, JavaScript, TypeScript, React, Vite, CSS, <br />
          Algorithms and data structures, Operating Systems, cryptography, AI, <br />
          Windows, Linux, MacOS, Low-Level design, Web Development
        </p>

        <h2>&gt; currently-exploring</h2>
        <p>
          System level C projects, specifically building a bash terminal, <br />
          Full stack project of a passion project, developing a digital magazine <br />
          Integration and usage of various AI APIs
        </p>
      </div>

      <div id="photo_window">
        <img src={roni} id='roni' className='noselect'/>
      </div>
      
      <BotNav />

    </div>
  );
}

export default Screen;
