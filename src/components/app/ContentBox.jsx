import React, {useState} from 'react';
import ContentModal from './ContentModal';

import ReactMarkdown from 'react-markdown';

function ContentBox(props) {
  const {content} = props;
  const [state, setState] = useState({showContent: false});

  const onShowContent = () => {
    setState({...state, showContent: !state.showContent});
  }

  //test.slice(test.search(/\n\w/), 30).trim()
  const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`
  return (
    <div>
      <div className="content-item" onClick={onShowContent}>
        <h1>{content.info.header}</h1>
        <p>{content.info.description}</p>
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
