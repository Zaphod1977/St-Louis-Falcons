import '../App.css';
import falcon from '../assets/images/falcon-look-sm.gif'


function Land(props) {
  const {
    currentPage, setCurrentPage
  } = props;

  return (
    <div className='land-wrap'>
      <div className="App-icon">
        <img src={falcon} className="App-logo" alt="logo" />
        <div class="loginLink"><a
          className="App-link"
        >St. Louis Falcons</a></div>
        <a
          className="next"
          href="#Login" onClick={() => setCurrentPage("Login")}
        >
          ENTER
        </a>
      </div>
      </div>
  );
}

export default Land;