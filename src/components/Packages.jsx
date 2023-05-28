import React from "react";
import { Link } from "react-router-dom";

function Packages() {
  return (
    <section className="mt-10 mb-10">
      <div className="container">
        <h2 className="styled--head capitalize text-black font-bold text-4xl">
          browse our packages
        </h2>
        <div data-aos="zoom-in" data-aos-duration="1000" className="package--cards mt-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <Link
            to={"/packages/1/silver-package"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/package1.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">Silver package</button>
              </div>
            </div>
          </Link>
          <Link
            to={"/packages/2/diamond-package"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/portriat2.jpeg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">Diamond package</button>
              </div>
            </div>
          </Link>
          <Link
            to={"/packages/3/gold-package"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/package3.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">Gold package</button>
              </div>
            </div>
          </Link>
          <Link
            to={"/packages/4/family-shoot"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/wedding2.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">Family shoot</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Packages;
