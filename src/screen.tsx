import './screen.css'

function Screen() {
  return (
    <>
        <div id="screen">
            <img src="./src/assets/scanlines.png" id="scan" className="noselect" />
            <img src="./src/assets/bezel.png" id="bezel" className="noselect" />
            <div id="content">
                <h1 id="title">&lt;ronidomi&gt;</h1>
            </div>
        </div>
    </>
  )
}

export default Screen;