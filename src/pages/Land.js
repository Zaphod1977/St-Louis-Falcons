import '../App.css';
import falcon from '../assets/images/falcon-look-sm.gif'
import Nav from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home.js'

function Land() {
  return (
    <div className="App">
      <Nav></Nav>
      <header className="App-icon">
        <img src={falcon} className="App-logo" alt="logo" />
        <div class="loginLink"><a
          className="App-link"
        >St. Louis Falcons</a></div>
        <a
          className="next"
          href={Home}
        >
          ENTER
        </a>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default Land;