import React from 'react';
/** Example: https://github.com/rexxars/react-markdown-examples */
import ReactMarkdown from 'react-markdown';

import gfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

import './assets/css/modal.scss';

function ContentModal(props) {
  const {content} = props;
  /** */
  const onCloseContent = () => {
    props.onShowContent();
  }

  /**  */
  window.onclick = function(event) {
    const modal = document.getElementById(`content-data-${content.id}`);

    if (event.target === modal) {
      onCloseContent();
    }
  }

  const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter language={language} children={value} />
    }
  }

  return (
    <div id={`content-data-${content.id}`} className={"modal " + (props.showContent ? 'dis-block' : 'dis-none')}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onCloseContent}><i className="fa fa-close"></i></span>
        </div>

        <div className="modal-body">
          <div className="markdown">
            <ReactMarkdown 
              children={content.text}
              plugins={[gfm]}
              linkTarget="_blank"
              renderers={renderers}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentModal;