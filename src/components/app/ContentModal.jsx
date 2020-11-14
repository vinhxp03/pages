import ReactMarkdown from 'react-markdown';

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

  return (
    <div id={`content-data-${content.id}`} className={"modal " + (props.showContent ? 'dis-block' : 'dis-none')}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onCloseContent}><i className="fa fa-close"></i></span>
        </div>

        <div className="modal-body">
          <ReactMarkdown children={content.text} />
        </div>
      </div>
    </div>
  );
}

export default ContentModal;