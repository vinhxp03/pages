import ContentBox from './ContentBox';

function ContentList(props) {
  const showContentBox = () => {
    const {contents} = props;
    
    return contents.map((content, index) => {
      return <ContentBox 
        key={index}
        content={content}
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
