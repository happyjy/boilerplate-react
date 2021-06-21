import { useParams } from 'react-router-dom';

function Topic() {
  let { topicId } = useParams();
  console.log('# useParams(): ', useParams());

  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Topic;
