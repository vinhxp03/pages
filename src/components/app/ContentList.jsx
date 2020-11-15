import React from 'react';
import ContentBox from './ContentBox';
import {isEmptyObj} from './Helpers';

function ContentList(props) {
  const showContentBox = () => {
    const {contents, activeBox} = props;
    
    return contents.map((content, index) => {
      // Check info null
      if (isEmptyObj(content.info)) return null;
      
      return <ContentBox 
        key={index}
        content={content}
        activeBox={activeBox}
      />
    });
  }

  return (
    <div>
      {showContentBox()}
    </div>
  )
}

export default ContentList;
