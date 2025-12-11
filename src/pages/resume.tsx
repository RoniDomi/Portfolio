import '../screen.css';

export default function Resume() {
    let linkedin_link = 'https://www.linkedin.com/in/roni-domi-5878a626b/';
    let github_link = 'https://github.com/RoniDomi';

    return(
        <>
         <div id='resume'>
            <div id='titleinfo'>
                <h2>Roni Domi</h2>
                <p>Stoneham, MA | domi_roni@yahoo.com | <a href={linkedin_link} target='blank'>LinkedIn</a> | <a href={github_link} target='blank'>Github</a> </p>
                <a href={"/RoniResume.pdf"} target='_blank' rel='noopener noreferrer'>
                    Download PDF version here!
                </a><br/><br/>
            </div>
            <div id='education'>
                <h2>&gt;Education</h2>
                <h3>&gt;University of Massachusetts Boston - BS in Computer Science</h3>
                <p>
                    Boston, MA<br/>
                    2023 - 2026 | GPA: 3.8<br/>
                    Relevant Coursework: Data Structures & Algorithms, Operating Systems, <br/> 
                    Automata Theory, Cryptography, Embedded Systems
                </p>
                <h3>&gt;Epoka Univseriy - BA in Software Engineering</h3>
                <p>
                    Tirana, Albania<br/>
                    2022 - 2023 | GPA: 3.1 <br/>
                    Relevant Coursework: C programming, Calculus, Linear Algebra, Discrete Mathematics
                </p> <br/>
            </div>
            <div id='Skills'>
                <h2>&gt;Technical Skills</h2>
                <p>
                    Languages: C, C++, Python, Java, JS, TS <br/>
                    Frameworks: React, Node.js, Vite <br/>
                    Tools: Git, Linux/Unix, Arduino, MongoDB <br/>
                    Concepts: Systems Programming, Full-Stack Development, Cryptography <br/>
                </p>
            </div><br/>
            <div id='experience'>
                 <h2>&gt;Experience</h2>
                 <p>
                    <h3>&gt;Retail Associate - CVS Health, Reading, MA</h3>
                    Operated in a high-reliability environment requiring accuracy, attention to detail, and strict procedural
                    compliance. Managed point-of-sale systems, inventory tracking software, and digital transaction processing with
                    zero data errors. Prioritized and executed multiple tasks under time pressure while maintaining system accuracy
                    and customer safety. Identified and resolved front-store workflow inefficiencies to improve transaction speed and
                    reduce congestion. Worked independently with minimal supervision, demonstrating operational discipline and
                    accountability.
                 </p><br/>
                 <p>
                    <h3>&gt;Retail Associate - One Albania, Tirana, Albania</h3>
                    Delivered technical customer support for mobile service plans, device issues, and software-related service
                    questions. Maintained accurate records of customer transactions within internal enterprise IT systems. Explained
                    complex service configurations in a clear, structured manner, strengthening technical communication skills.
                    Collaborated with team members to troubleshoot service issues and optimize customer workflow. Handled
                    sensitive customer data with strict adherence to privacy and security guidelines.
                 </p>
            </div><br/>
         </div>
        </>
    );
}
