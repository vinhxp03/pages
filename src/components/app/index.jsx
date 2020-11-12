import Navbar from './Navbar';
import Footer from './Footer';
import './assets/css/app.css';

function App() {
  return (
    <div className="app">
      {/* Import Navbar */}
      <Navbar />

      <div className="main row">
        <div className="col-md-3 align-left">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
        </ul>
        </div>

        <div className="col-md-6 align-center">
          <h1>The City</h1>
          <p>Chania is the capital of the Chania region on the island of Crete. 
            The city can be divided in two parts, the old town and the modern city.</p>
        </div>

        <div className="col-md-3 align-right">
          <h2>What?</h2>
          <p>Chania is a city on the island of Crete.</p>
          <h2>Where?</h2>
          <p>Crete is a Greek island in the Mediterranean Sea.</p>
          <h2>How?</h2>
          <p>You can reach Chania airport from all over Europe.</p>
        </div>
      </div>

      {/* Import Footer */}
      <Footer />
    </div>
  );
}

export default App;