import React, { useState, useEffect } from 'react';

// import TopNav from './TopNav';
import Navbar from './Navbar';
// import Footer from './Footer';
import ContentList from './contents/List';
import ContentLeft from './contents/Left';

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

  if (0) {
    checkScrollTop()
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

      <div className="main container">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <div className="content-left">
              <ContentLeft contents={contents} />
              {/* <p ><a href="/#"># ...</a></p> */}
            </div>
          </div>

          {/* Render content */}
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="content-center">
              <ContentList contents={contents} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll top */}
      <div id="scroll-top" className={state.showScroll ? '' : 'd-none'} onClick={onScrollTop}>
        <i className="fa fa-chevron-circle-up"></i>
      </div>

      {/* Import Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;