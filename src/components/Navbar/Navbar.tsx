import { Link } from "react-router-dom";

const Navbar = () => {
  const checkLogged = () => {
    if (localStorage.getItem("token")) {
      return (
        <div>
          <Link className="menu-button" to="/create">Create Post</Link>
          <a> Welcome, {localStorage.getItem("name")} </a>
        </div>
      )
    } else {
      return (
        <div>
          <Link className="menu-button" to="/login">Login</Link>
          <Link className="menu-button" to="/signup">Signup</Link>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <nav>
        <a>
          <Link className="menu-button" to="/">Social</Link>
        </a>
        {checkLogged()}

      </nav>
    </div>
  );
}

export default Navbar;