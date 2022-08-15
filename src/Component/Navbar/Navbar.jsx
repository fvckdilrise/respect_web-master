import { Link } from "react-router-dom";
//import Logo from "../../Asset/Logo.svg";
import "./Navbar.css";
function Navbar() {
  const isVisited = (url) => {
    if (url === window.location.pathname) {
      return "nav-link text-primary";
    }
    return "nav-link";
  };

  return (
    <div className=" App">
      <nav className="main-header navbar navbar-expand navbar-light navbar-white">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="/"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mr-4">
          <li className="nav-item">
            <Link
              to="/"
              className={isVisited("/")}
              style={{ alignItems: "center" }}
            >
              <img src="https://media.discordapp.net/attachments/897000085815197737/1008593666727751760/ca502d113252555.6023ff63402cc-removebg-preview.png?width=520&height=390" alt="" width="35" className="logo" />
              Respect
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
