import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-4 ">
        <a className="navbar-brand" href="#">
          E-LEARNING
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                className="nav-link"
                to="/"
                exact
              >
                Trang chủ
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ">
            <li className="nav-item">
              {/* nêu gắn href vi phạm quy tác one single page do nó load lại trang */}
              <NavLink
                activeStyle={{ color: "red" }}
                className="nav-link"
                to="/signup"
              >
                Đăng ký
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                className="nav-link"
                to="/signin"
              >
                Đăng nhập
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
