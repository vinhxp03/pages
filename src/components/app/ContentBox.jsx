import React, {useState} from 'react';
import ContentModal from './ContentModal';

import ReactMarkdown from 'react-markdown';

function ContentBox(props) {
  const {content} = props;
  const [state, setState] = useState({showContent: false});

  const onShowContent = () => {
    setState({...state, showContent: !state.showContent});
  }

  const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`
  return (
    <div>
      <div className="content-item" onClick={onShowContent}>
        <h1>The City</h1>
        <p>Chania is the capital of the Chania region on the island of Crete. 
          The city can be divided in two parts, the old town and the modern city.</p>
        <ReactMarkdown children={markdown} />
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
