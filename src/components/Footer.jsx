import React from "react";
import { NavLink } from "react-router-dom";
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="mt-10 bg-primary pt-8 pb-16">
      <div className="container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-white">
        <div>
          <h3 className="text-xl font-bold capitalize mb-3">empSon Photos</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae labore
          odio quidem minima omnis quibusdam repellat asperiores enim voluptates
          quam.
        </div>
        <div>
          <h3 className="text-xl font-bold capitalize mb-3">contact</h3>
          <ul>
            <li>
              <a href="tel:0545143000">+233 54 514 3000</a>
            </li>
            <li>Sunyani-Fiapre</li>
            <li>
              <a href="mailto:empson@gmail.com">empson@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
            <h3 className="text-xl font-bold capitalize mb-3">follow us</h3>
          <ul className="flex gap-5 items-center">
            <li>
              <NavLink to={"/"}><BsFacebook size={28}/></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><BsTwitter size={28}/></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><BsInstagram size={28}/></NavLink>
            </li>
            <li>
              <NavLink to={"/"}><BsLinkedin size={28}/></NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container relative">
      <hr className="mt-8" />
      <div className="absolute right-0 left-0 -bottom-16 text-center text-white pb-3">
        &copy; 2023. empSon Photos. All rights reserved. by Danny Quan
      </div>
      </div>
    </footer>
  );
}

export default Footer;
