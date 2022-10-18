import '../App.css';
import falcon from '../assets/images/falcon-look-sm.gif'

function Land() {
  return (
    <div className="App">
      <header className="App-icon">
        <img src={falcon} className="App-logo" alt="logo" />
        <div class="loginLink"><a
          className="App-link"
        >St. Louis Falcons</a></div>
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="next"
          href="https://zaphodsportfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENTER
        </a>
      </header>
      </div>
      );
}

      export default Land;