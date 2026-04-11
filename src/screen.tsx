import './screen.css';

import Footer from './botnav';
import TopNav from './topnav';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';

function Screen() {
  return (
    <div id="screen">
      <TopNav />
      <section id="about"><Aboutme /></section>
      <section id="projects"><Projects /></section>
      <Footer />
    </div>
  );
}

export default Screen;
