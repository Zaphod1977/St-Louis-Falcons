import '../App.css';
import falcon from '../assets/images/falcon-look-sm.gif'
import Nav from '../components/Header';
import Footer from '../components/Footer';
import Land from './Land';

function Home() {
  return (
    <div className="App">
        <div class="loginLink"><a
          className="App-link"
        >St. Louis Falcons</a></div>
        <a
          className="next"
          href={Land}
        >
          Home
        </a>
    </div>
  );
}

export default Home;