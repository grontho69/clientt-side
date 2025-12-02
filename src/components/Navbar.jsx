import React from "react";

const Navbar = () => {
  const links = <></>
  return (
<div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
  {/* Left */}
  <div className="navbar-start">
    {/* Mobile Dropdown */}
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">All Issues</a></li>
        <li><a href="#">Add Issue</a></li>
        <li><a href="#">My Issues</a></li>
        <li><a href="#">My Contribution</a></li>
        <li><button className="btn btn-sm btn-outline w-full">Logout</button></li>
      </ul>
    </div>

    {/* Logo */}
    <a href="#" className="btn btn-ghost text-xl font-semibold flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-success"
      >
        <path d="M21 2 3 22" />
        <path d="M21 16V2H7" />
        <path d="M3 8v14h14" />
      </svg>
      Clean Community
    </a>
  </div>

  {/* Center - Desktop Menu */}
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
      <li><a href="#">Home</a></li>
      <li><a href="#">All Issues</a></li>
      <li><a href="#">Add Issue</a></li>
      <li><a href="#">My Issues</a></li>
      <li><a href="#">My Contribution</a></li>
    </ul>
  </div>

  {/* Right */}
  <div className="navbar-end gap-2">
    <a href="#" className="btn btn-sm btn-outline">Login</a>
    <a href="#" className="btn btn-sm btn-success text-white">Register</a>
  </div>
</div>

  );
};
export default Navbar;