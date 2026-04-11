import './screen.css';

function TopNav() {
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav id="topnav">
      <a href="#about" id="nav-logo" onClick={scrollTo('about')}>
        &gt; roni.domi<span className="cursor" />
      </a>
      <ul>
        <li><a href="#about" onClick={scrollTo('about')}>about</a></li>
        <li><a href="#projects" onClick={scrollTo('projects')}>projects</a></li>
        <li><a href="/resume.pdf" target="_blank" rel="noreferrer">resume</a></li>
      </ul>
    </nav>
  );
}

export default TopNav;
