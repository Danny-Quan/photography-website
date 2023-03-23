import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const toggleNav= ()=>{
    // const hamburger= document.querySelector('.hamburger');
    const navLinks= document.querySelector('.nav--elements');
    navLinks.classList.toggle('open')
  }
  return (
    <nav className="bg-white shadow-md z-50 py-5 sticky top-0">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <h3 className="font-bold text-xl ">Empson Photos</h3>
        </div>
        <button onClick={toggleNav} className="hamburger">
        &#9776;
        </button>
        <ul className="nav--elements flex xl:flex-row lg:flex-row md:flex-row flex-col items-center gap-8 text-black font-semibold">
          <li onClick={toggleNav}>
            <Link to={'/'}>Home</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to={'/about'}>About</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to={'/gallery'}>Galleries</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to={'/packages/0/all'}>Services</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
