import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./Sidebar.css";
//import Logo from "../../Asset/Logo.svg";
function Sidebar() {
  const isVisited = (url) => {
    if (url === window.location.pathname) {
      return { color: "blue" };
    }
  };

  return (
    <div>
      <aside className="main-sidebar sidebar-secondary-primary  elevation-1">
        <div className="title">
          <img src="https://media.discordapp.net/attachments/897000085815197737/1008593666727751760/ca502d113252555.6023ff63402cc-removebg-preview.png?width=520&height=390" alt="" width="150" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/" style={isVisited("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Project" style={isVisited("/Project")}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/About" style={isVisited("/About")}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="contact">
            <p>Contact</p>
          </div>
          <div className="contact-menu">
            <a href="https://wa.me/+62895323496371">
              <FaWhatsapp />
            </a>
            <a href="https://github.com/BudAzimbud">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/azim-a-5bab22215/">
              <AiOutlineLinkedin />
            </a>
          </div>
          <div className="contact-menu">
            <Link to="/">
              <AiFillTwitterCircle />
            </Link>
            <a href="https://www.facebook.com/gakusahcepuajg3705/">
              <AiFillFacebook />
            </a>
            <a href="https://www.instagram.com/">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
