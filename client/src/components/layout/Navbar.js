import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
       <div className="">
        <nav className="z-depth-0">
  <ul className="navbar-nav">
  <li className="nav-item">
    <Link 
    to="/"
    style={{
      fontFamily: "monospace"
      }}
      >Домой</Link>
    </li>
    <li className="nav-item">
    <Link to="/login"
       style={{
        fontFamily: "monospace"
        }}>Логин</Link>
    </li>
    <li className="nav-item">
      <Link to="/register"
       style={{
        fontFamily: "monospace"
        }}>Регистрация</Link>
    </li>
  </ul>
</nav>
      </div> 
    );
  }
}

export default Navbar;
