import React, { useState, useEffect } from 'react';

// import TopNav from './TopNav';
import Navbar from './Navbar';
// import Footer from './Footer';
import ContentList from './ContentList';
import ContentLeft from './ContentLeft';

import './assets/css/app.scss';

const mdName = 'contentBox';

function App() {
  const [dataState, setDataState] = useState({showScroll: false});

  const [contents, setContents] = useState([]);

  /** */
  const sortContents = contents => {
    return contents.sort((a, b) => {
      return b.id - a.id;
    });
  }

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

  /** DEFINE */
  const MD_PATTERN = /#\sMDINFO/;
  const MD_MATCH = /#\sMDINFO.*}/;

  /** */
  useEffect(() => {
    /**  */
    async function fetchData() {
      let i = 1;
      let result = contents;

      try {
        do {
          // Fetch data
          let text = await fetch(`./data/${mdName}${i}.md`).then(res => res.text());

          if (text.substr(0, 9) === '<!DOCTYPE') {
            break;
          }

          // Get define info
          let info = JSON.parse((text.match(MD_MATCH) || ['{}'])[0].replace(MD_PATTERN, ''));
          text = text.replace(MD_MATCH, '');

          result.push({
            id: i,
            info,
            text
          });

          i += 1;
        } while (1);
      } catch (error) {
        console.log('error', error);
      }

      // Set state
      setContents([...sortContents(result)]);
    }

    fetchData();
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
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>

        <div className="col-md-12 col-sm-12">
          <div className="content-center ml-25per">
            <ContentList contents={contents.slice(2)}/> 
          </div>
        </div>
      </div>

      {/* Scroll top */}
      <div id="scroll-top" className={dataState.showScroll ? '' : 'dis-none'} onClick={onScrollTop}>
        <i className="fa fa-chevron-circle-up"></i>
      </div>

      {/* Import Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;