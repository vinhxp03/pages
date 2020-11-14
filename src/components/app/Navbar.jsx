import React from 'react';
import './assets/css/navbar.scss';

function Navbar() {
  /** */
  const onScrollBottom = () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  }

  return (
    <div className="navbar">
      <ul>
        <div className="nav-right">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li id="scroll-down" onClick={onScrollBottom}><i className="fa fa-angle-double-down"></i></li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;