import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs";
import {FaTiktok} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="mt-10 bg-primary pt-8 pb-16">
      <div data-aos="fade-up" data-aos-duration="1000" className="container grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-white">
        <div>
          <h3 className="text-xl font-bold capitalize mb-3">
            EmSon Photography
          </h3>
          My name is Emmanuel Forson, a professional Photographer based in
          Massachusetts, where I specialize in wedding, portrait, Maternity,
          Birthday and lifestyle photography ...
        </div>
        <div>
          <h3 className="text-xl font-bold capitalize mb-3">contact</h3>
          <ul>
            <li>
              <a href="tel:+19782018477">+1 (978) 201-8477</a>
            </li>
            <li>United States, Massachusetts</li>
            <li>
              <a href="mailto:emson504@gmail.com">emson504@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold capitalize mb-3">follow us</h3>
          <ul className="flex gap-5 items-center">
            <li>
              <NavLink to={"/"}>
                <BsFacebook size={28} />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <BsTwitter size={28} />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <BsInstagram size={28} />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <FaTiktok size={28} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container relative">
        <hr className="mt-8" />
        <div className="absolute right-0 left-0 -bottom-16 text-center text-white pb-3">
          &copy; 2023. empSon Photos. All rights reserved. by{" "}
          <Link to="https://www.linkedin.com/in/daniel-sah-kwadwo-9a79271a6">
            Danny Quan
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
