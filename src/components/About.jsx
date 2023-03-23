import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="mt-10 mb-10">
      <div className="container">
        <h2 className="about--header font-bold text-black uppercase xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-xl text-center">
          capturing memories worldwide
        </h2>
        <p className="about--header--after text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia
          similique, perspiciatis maiores in distinctio doloremque non?
          Voluptate commodi enim animi sit, mollitia cumque numquam, et
          explicabo ducimus esse amet. Voluptate commodi enim animi sit,
          mollitia cumque numquam, et explicabo ducimus esse amet.
        </p>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-10 mt-20">
          <img src="./../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
          <div className="border-l-2 border-primary pl-5">
            <h3 className="styled--head font-bold text-4xl text-black capitalize mb-5">
              wedding photographer
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique excepturi totam adipisci officia dolorum itaque unde
              recusandae, iste voluptates! Veritatis
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique excepturi totam adipisci officia dolorum itaque unde
              recusandae, iste voluptates! Veritatis
            </p>
            <button className="mt-5">
              <Link
                to={"/about"}
                className={"spaced--text uppercase text-sm font-semibold text-primary"}
              >
                learn more about us &rarr;
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
