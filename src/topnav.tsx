import './screen.css'

interface TopNavigate {
    onNavigate: (page: string) => void;
    active: string;
}

function TopNav({onNavigate, active}: TopNavigate) {
    return(
        <>
            <div id="topnav">
                <ul>
                    <li>
                        <button 
                        onClick={() => onNavigate("about")}
                        className={active === "about" ? "active" : ""}
                        >
                            About Me
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => onNavigate("projects")}
                        className={active === "projects" ? "active" : ""}
                        >
                            Projects 
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => onNavigate("resume")}
                        className={active === "resume" ? "active" : ""}
                        >
                            Resume
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => onNavigate("contact")}
                        className={active === "contact" ? "active" : ""}
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TopNav;