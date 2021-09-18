import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";

import "./Nav.css";

import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title"> <img className="image"src="./img/transparent-meditation-icon-yoga-icon-concentration-icon-5f36c331d824b2.4697180215974244338853.jpg" width="100" height="150" /> Meditate With Me</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/profilepage">
              Profile Page
            </Link>

            <Link className="navLink" to="/dashboard">
              Dashboard
            </Link>

            <Link className="navLink" to="/hostasession">
              Host A Session
            </Link>

            <Link className="navLink" to="/contactform">
              Contact Form
            </Link>

            <Link className="navLink" to="/chatbot">
              Chat Room
            </Link>

            <Link className="navLink" to="/info">
              Info 
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
