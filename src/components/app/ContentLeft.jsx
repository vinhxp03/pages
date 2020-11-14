import React from 'react';
import {isEmptyObj} from './Helpers';

function ContentLeft(props) {
  /** */
  const renderContentLeft = () => {
    return props.contents.map((content, index) => {
      // Check info null
      if (isEmptyObj(content.info)) return null;

      return <p key={index}>
              <a href="/#">#{content.info.header} ...</a>
            </p>;
    });
  }

  return (
    <div>
      {renderContentLeft()}
    </div>
  )
}

export default ContentLeft;
