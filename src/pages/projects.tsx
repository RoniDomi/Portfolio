import '../screen.css';

export default function Projects() {
    let github_link = 'https://github.com/RoniDomi';

    return(
        <>
        <div id='template'>
            <h1>Coming Soon!</h1>
            <p>Meanwhile feel free to check out my <a href={github_link} target='blank'>Github</a>!</p>
        </div>
        </>
    );
}
