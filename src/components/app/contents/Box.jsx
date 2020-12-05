import React, {useState} from 'react';
import ContentModal from './Modal';

import {CONTENT_PREFIX} from '../Helpers';

function ContentBox(props) {
  const {content} = props;
  const [state, setState] = useState({showContent: false});

  const onShowContent = () => {
    setState({...state, showContent: !state.showContent});
  }

  return (
    <div id={`${CONTENT_PREFIX}${content.id}`}>
      <div className="content-item" onClick={onShowContent}>
        <div className="logo">
        </div>
        <div className="description">
          <h2>{content.info.header}</h2>
          <p>{content.info.description}</p>
        </div>
        <div className="box-info">
          <span className="type">Markdown</span>
        </div>
      </div>

      <ContentModal  
        content={content}
        showContent={state.showContent}
        onShowContent={onShowContent}
      />
    </div>
  )
}

export default ContentBox;
