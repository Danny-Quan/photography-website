import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function About() {
  return (
    <section className="mt-10 mb-10">
      <div className="container">
        <h2 className="about--header font-bold text-black uppercase xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-xl text-center">
          capturing memories worldwide
        </h2>
        <p className="about--header--after text-center mt-5">
          "Only Photography has been able to divide human life into series of
          moments, each of them has a complete value of existence" &nbsp;{" "}
          <strong>Eadweard Muybridge</strong>
        </p>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-10 mt-20">
          <img data-aos="fade-right" data-aos-duration="1000" src="./../img/emson_logo.jpeg" alt="about logo" />
          <div data-aos="fade-left" data-aos-duration="1000" className="border-l-2 border-primary pl-5">
            <h3 className="styled--head font-bold text-4xl text-black capitalize mb-5">
              EmSon photography
            </h3>
            <p>
              My name is Emmanuel Forson, a professional Photographer based in
              Massachusetts, where I specialize in wedding, portrait, Maternity,
              Birthday and lifestyle photography ...
            </p>{" "}
            <br />
            <p>
              what started as a hobby quick developed into a passion and
              profession leading me to also become the founder of{" "}
              <strong>EmSon Photography</strong>
            </p>
            <button className="mt-5">
              <Link
                to={"/about"}
                className={
                  "spaced--text uppercase text-sm font-semibold text-primary"
                }
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
