import { NavLink } from 'react-router-dom';

const activeStyle = { fontWeight: 'bold', color: 'red' };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={activeStyle}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) =>
            match !== null && location.search === ''
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=jyoon"
          activeStyle={activeStyle}
          isActive={(match, location) =>
            match !== null && location.search === '?name=jyoon'
          }
        >
          About?name=jyoon
        </NavLink>
      </li>
    </ul>
  );
}
