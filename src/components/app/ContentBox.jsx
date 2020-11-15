import React, {useState} from 'react';
import ContentModal from './ContentModal';

function ContentBox(props) {
  const {content} = props;
  const [state, setState] = useState({showContent: false});

  const onShowContent = () => {
    setState({...state, showContent: !state.showContent});
  }

  return (
    <div>
      <div className="content-item" onClick={onShowContent}>
        <div className="logo">
        </div>
        <div className="description">
          <h1>{content.info.header}</h1>
          <p>{content.info.description}</p>
        </div>
        <div className="box-info">
          {/* <p className="type">Markdown</p> */}
          {/* <p className="time">2020/01/01</p> */}
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
