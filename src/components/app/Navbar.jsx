import './assets/css/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="active"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li className="align-right"><a href="#right">Right</a></li>
      </ul>
    </div>
  );
}

export default Navbar;