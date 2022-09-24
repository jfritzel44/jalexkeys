import './Nav.scss';
import 'react-dropdown/style.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/main-logo.png'; // Tell webpack this JS file uses this image

export default function Navbar() {
  let [showMenu, setShowMenu] = useState(false);

  function changeMenuState() {
    setShowMenu(!showMenu);
  }

  function goToInsta() {
    window.location.href = "https://www.instagram.com/jalexkeys/?hl=en";
  }

  function goToFB() {
    window.location.href = "https://www.facebook.com/alex.fritzel.1";
  }

  function goToTiktok() {
    window.location.href = "https://www.tiktok.com/@jalexkeys";
  }

  return (
    <nav className="navbar">
      <img className="logo" src={logo}></img>

      <ul className="nav-links">
        <label onClick={() => changeMenuState()} className="hamburger">
          &#9776;
        </label>

        <div className={`menu ${showMenu ? "show-menu" : ""}`}>
          <li>
            <a className="hvr-radial-out button" href="/home">
              HOME
            </a>
          </li>
          <li>
            <a className="hvr-radial-out button" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="hvr-radial-out button" href="/videos">
              Music
            </a>
          </li>

          <li>
            <div className="social-media-links">
              <FontAwesomeIcon
                onClick={() => goToFB()}
                className="fa-facebook"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="fa-instagram"
                onClick={() => goToInsta()}
                icon={faInstagram}
              />

              <FontAwesomeIcon
                onClick={() => goToTiktok()}
                className="fa-tiktok"
                icon={faTiktok}
              />
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
}
