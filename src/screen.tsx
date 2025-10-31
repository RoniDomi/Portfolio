import Planet from './planet';
import './screen.css'
import TopNav from './topnav';

function Screen() {
  return (
    <>
        <div id="screen">
            <img src="./src/assets/scanlines.png" id="scan" className="noselect" />
            <img src="./src/assets/grid.jpg" id="grid" className="noselect" />
            <div id="content">
                <TopNav/>
                <div id="welcome">
                    <h1>Hello World, I'm &lt;Roni/&gt;</h1>
                    <p>I'm a computer sience student, and aspiring software engineer!<br/>
                       I love building creative and technical projects, ranging from <br/>
                       low level systems, to visual tools, and full stack projects.  <br/> 
                       Creating is a passion for me, and coding helps me express this!
                    </p>
                </div>

                <div id="planet">
                    <Planet/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Screen;