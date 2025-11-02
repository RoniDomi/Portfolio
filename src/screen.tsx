import './screen.css';

import BotNav from './botnav';
import TopNav from './topnav';
import Aboutme from './pages/aboutme';

import grid from './assets/grid.jpg';
import scanlines from './assets/scanlines.png';
import React, { useState } from 'react';

function Screen() {
    const [page, setPage] = useState("about");

    const toPage: Record<string, React.ReactNode> = {
        about: <Aboutme />,
    }

  return (
    <div id="screen">
    <img src={scanlines} id="scan" className="noselect" />
    <img src={grid} id="grid" className="noselect" />

    <TopNav onNavigate={setPage} active={page} />

    {toPage[page]}

    <BotNav />

    </div>
  );
}

export default Screen;
