import React from "react";
import { Link } from "react-router-dom";

function Packages() {
  return (
    <section className="mt-10 mb-10">
      <div className="container">
        <h2 className="styled--head capitalize text-black font-bold text-4xl">
          browse our packages
        </h2>
        <div className="package--cards mt-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <Link
            to={"/packages/1/weddings"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">weddings</button>
              </div>
            </div>
          </Link>
          <Link
            to={"/packages/2/family"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">family</button>
              </div>
            </div>
          </Link>
          <Link
            to={"/packages/3/engagement"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">engagement</button>
              </div>
            </div>
          </Link>
          <Link
            to={"/packages/4/branding"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">branding</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Packages;
