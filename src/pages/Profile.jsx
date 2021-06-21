import { useParams } from 'react-router-dom';

function Profile(props) {
  // const userId = props.match.params.userId;
  let { userId } = useParams();

  console.log('# Profile: ', { userId, typeofId: typeof userId });

  return (
    <div>
      <h2>Profile페이지</h2>
      {userId && <p>userId: {userId}입니다</p>}
    </div>
  );
}

export default Profile;
