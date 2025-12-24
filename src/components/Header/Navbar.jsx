import React from "react";
import { NavLink, Link } from "react-router";
import gitImage from "../../assets/github.png";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li className="m-2">Home</li>{" "}
      </NavLink>
      <NavLink to="/apps">
        <li className="m-2">Apps</li>{" "}
      </NavLink>
      <NavLink to="/installation">
        <li className="m-2">Installation</li>{" "}
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="h-10" />
          <h2 className="text-xl font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end ">
        <a
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
          href="https://github.com/AmtazAhmedGazi"
        >
          <img src={gitImage} alt="" className="mr-0.5" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
