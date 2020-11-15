import React, {useState} from 'react';
import {isEmptyObj, CONTENT_PREFIX, removeSpalChar} from './Helpers';

function ContentLeft(props) {
  const [state, setState] = useState(props);
  const [searchTerm, setSearchTerm] = useState("");

  /** */
  const handleClickLink = (id, e) => {
    // Prevent default anchor click behavior
    e.preventDefault();

    let element = document.getElementById(`${CONTENT_PREFIX}${id}`);
    window.scrollTo({top: element.offsetTop - 70, behavior: 'smooth'});
  }

  /** */
  const renderContentLeft = () => {
    const dataContent = state.contents.length || searchTerm ? state.contents : props.contents;

    if (!dataContent.length) {
      return <p>Content not found!</p>
    }

    return dataContent.map((content, index) => {
      // Check info null
      if (isEmptyObj(content.info)) return null;

      return <p key={index}>
              <a href={`#${CONTENT_PREFIX}${content.id}`} onClick={(e) => handleClickLink(content.id, e)}>
                #{content.info.header}
              </a>
            </p>;
    });
  }

  /** */
  const handleInputChange = e => {
    let query = removeSpalChar(e.target.value);
    setSearchTerm(query);

    if (query) {
      const dataFilter = props.contents.filter(content => {
        return content.info.header.toLowerCase().includes(query);
      });
  
      setState({...state, contents: dataFilter});
    } else {
      setState({...state, contents: props.contents});
    }
  }

  /* useEffect(() => {
    console.log('useEffect', 'useEffect')
    const dataFilter = props.contents.filter(content => {
      return content.info.header.toLowerCase().includes(searchTerm);
    });

    console.log('dataFilter', dataFilter)
    setState({...state, contents: dataFilter});
  }, [searchTerm]); */

  return (
    <div>
      <div className="box-search">
        <input type="text" placeholder="Search ..." onKeyUp={handleInputChange}/>
      </div>

      {renderContentLeft()}
    </div>
  )
}

export default ContentLeft;
