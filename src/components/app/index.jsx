import React, { useState, useEffect } from 'react';

// import TopNav from './TopNav';
import Navbar from './Navbar';
// import Footer from './Footer';
import ContentList from './ContentList';
import ContentLeft from './ContentLeft';

import './assets/css/app.scss';

import {fetchDataMarkDown, sortContents} from './Helpers';

function App() {
  const [state, setState] = useState({showScroll: false});

  const [contents, setContents] = useState([]);

  /** */
  const onScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  /** */
  const checkScrollTop = () => {
    if (!state.showScroll && window.pageYOffset > 300) {
      setState({...state, showScroll: true});
    } else if (state.showScroll && window.pageYOffset <= 300){
      setState({...state, showScroll: false});
    }
  }

  /** */
  // window.addEventListener('scroll', checkScrollTop);

  /** */
  useEffect(() => {
    /**  */
    async function getData() {
      const result = await fetchDataMarkDown();
      // Set state
      setContents([...sortContents(result)]);
    }

    getData();
  }, []);

  return (
    <div>
      {/* Import Top */}
      {/* <TopNav /> */}

      {/* Import Navbar */}
      <Navbar />

      <div className="row main">
        <div className="col-md-3 col-sm-3">
          <div className="content-left">
            <ContentLeft contents={contents} />
            {/* <p ><a href="/#"># ...</a></p> */}
          </div>
        </div>

        {/* Render content */}
        <div className="col-md-6 col-sm-9">
          <div className="content-center">
            <ContentList contents={contents.slice(0, 2)} />
          </div>
        </div>

        <div className="col-md-3 col-sm-12">
          <div className="content-right">
            <h2>What?</h2>
            <p>This is my Github Page</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <div className="content-center ml-25per">
            <ContentList contents={contents.slice(2)}/> 

            {/* <p>Helooooooooooooooooooooooooooo</p> */}
          </div>
        </div>
      </div>

      {/* Scroll top */}
      <div id="scroll-top" className={state.showScroll ? '' : 'dis-none'} onClick={onScrollTop}>
        <i className="fa fa-chevron-circle-up"></i>
      </div>

      {/* Import Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;