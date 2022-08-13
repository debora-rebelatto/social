import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App">
      <nav>
        <a>
          <Link className="menu-button" to="/">Social</Link>
        </a>
        <div>
          <Link className="menu-button" to="/create">Create Post</Link>
          <Link className="menu-button" to="/login">Login</Link>
          <Link className="menu-button" to="/signup">Signup</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;