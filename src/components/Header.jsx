import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header--container ">
        <div className="text-center">
          <h1 className="font-bold text-center text-white xl:text-6xl lg:text-5xl md:text-5xl text-4xl uppercase pb-5 px-3">
            wedding & lifestyle <br /> photographer
          </h1>
          <button>
            <Link to={"/contact"} className="uppercase font-bold text-sm text-white">
              reserve your wedding date &rarr;{" "}
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
