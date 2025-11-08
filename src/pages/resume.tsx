import '../screen.css';

export default function Resume({ onNavigate }: { onNavigate: (page: string) => void}) {
    let linkedin_link = 'https://www.linkedin.com/in/roni-domi-5878a626b/';
    let github_link = 'https://github.com/RoniDomi';

    return(
        <>
         <div id='resume'>
            <div id='titleinfo'>
                <h2>Roni Domi</h2>
                <p>Stoneham, MA | roni.domi001@umb.edu | <a href={linkedin_link} target='blank'>LinkedIn</a> | <a href={github_link} target='blank'>Github</a> </p>
                <a href='#'>Download PDF version here!</a><br/><br/>
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
                    Provided excellent and consistent customer care in a fast paced environment.
                    Consistently recognized ffor friendliness and reliability by customers and coworkers.
                    Completed tasks efficiently and proactively, often taking on additional responsibilty.
                    Showcased strong teamworking skills, assisting my coworkers whenever possible.
                    Helped maintain a smooth and productive workflow.
                 </p>
            </div><br/>
         </div>
        </>
    );
}
