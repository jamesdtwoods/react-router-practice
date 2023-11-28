import { Link } from 'react-router-dom';

function Nav() {

  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/allStudents">
        <li>Students</li>
      </Link>
    </ul>
  )
}


export default Nav;