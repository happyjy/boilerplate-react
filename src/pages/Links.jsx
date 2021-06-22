import { Link } from 'react-router-dom';

function Links() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li></li>
        <li>
          <Link to="/profile/happyjy">Profile:happjy(useParam)</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li></li>
        <li>
          <Link to="/about?name=jyoon">About?name=jyoon(searchParam)</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Links;
