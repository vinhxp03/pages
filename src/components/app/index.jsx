import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// import TopNav from './TopNav';
import Navbar from './Navbar';
import Footer from './Footer';

import './assets/css/app.scss';

const mdName = 'content-box';

function App() {
  const [dataState, setDataState] = useState({showScroll: false, contents: []});

  /** */
  const onScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  /** */
  const checkScrollTop = () => {
    if (!dataState.showScroll && window.pageYOffset > 300) {
      setDataState({...dataState, showScroll: true});
    } else if (dataState.showScroll && window.pageYOffset <= 300){
      setDataState({...dataState, showScroll: false});
    }
  }

  /** */
  window.addEventListener('scroll', checkScrollTop);

  /** */
  useEffect(() => {
    /**  */
    async function fetchData() {
      let i = 1;
      let {contents} = dataState;

      try {
        do {
          // Fetch data
          let text = await fetch(`./data/${mdName}${i}.md`).then(res => res.text());

          if (text.substr(0, 9) === '<!DOCTYPE') {
            break;
          }

          i += 1;
          contents.push(text);

        } while (1);
      } catch (error) {
        console.log('error', error);
      }

      // Set state
      setDataState({...dataState, contents});
    }

    fetchData();
    console.log('dataState', dataState);
  }, []);

  /** */
  const renderContent = () => {
    return dataState.contents.map((content, index) => 
            <p key={index}><a href="/#">{content}</a></p>
          );
  }

  return (
    <div>
      {/* Import Top */}
      {/* <TopNav /> */}

      {/* Import Navbar */}
      <Navbar />

      <div className="row main">
        <div className="col-md-3 col-sm-3">
          <div className="content-left">
            <p><a href="/#">#The Flight wer vaeawec awerva werawra wvr</a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>
            <p><a href="/#">#The Flight </a></p>

            {/* {renderContent()} */}
          </div>
        </div>

        <div className="col-md-6 col-sm-9">
          <div className="content-center">
            <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

              <h1>The City</h1>
            <p>Chania is the capital of the Chania region on the island of Crete. 
              The city can be divided in two parts, the old town and the modern city.</p>

          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div className="content-right">
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>
      </div>

      {/* Scroll top */}
      <div id="scroll-top" className={dataState.showScroll ? '' : 'hidden'} onClick={onScrollTop}>
        <i className="fa fa-chevron-circle-up"></i>
      </div>

      {/* Import Footer */}
      <Footer />
    </div>
  );
}

export default App;