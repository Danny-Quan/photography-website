import React, { useEffect, useState } from "react";
import { data } from "../data/packageData";
import { useParams, Link } from "react-router-dom";

function PackagesPage() {
  const { id, title } = useParams();
  const [packageData, setPackageData] = useState([]);
  useEffect(() => {
    const myData = data[id - 1];
    setPackageData(myData);
  }, [id, title]);
  return (
    <section className="mt-10 pb-10">
      <div className="container">
        {packageData ? (
          <div>
            <h2 className="font-bold text-black xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl uppercase text-center mb-10">
              {packageData.package}
            </h2>
            <img className="mb-10 mt-5" src={`${packageData.img_url}`} alt="" />
            <h4 className="uppercase font-bold text-black">
              please read carefully before booking
            </h4>
            <p className="mb-5">
              Deposit Policy for outdoor and studio protography sessions, a non
              refundable <strong>$50</strong> deposit is required to secure a
              time slot. Remaining balance due by the day of the session <br />
              return time <br />
              standard return time for edits is 5 to 10 business days.
            </p>
            <p>
              <strong>Express delivery</strong> <br />
              1-2 business days <strong>$100</strong> <br />
              2-4 business days <strong>$50</strong>
            </p>

            <h3 className="capitalize mt-5 font-bold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl mb-5 text-black">
              package Details
            </h3>
            <h4>{packageData.package}</h4>
            <p className={"font-bold"}>{packageData.price}</p>
            <p>{packageData.duration}</p>
            <p>{packageData.pictures}</p>
            <p>{packageData.outfit}</p>
            <p>{packageData.person}</p>
          </div>
        ) : (
          <div>
            <h2 className="text-center font-bold xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl uppercase mb-10">
              our services
            </h2>
            <div className="package--cards mt-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <Link
                to={"/packages/1/silver-package"}
                className="uppercase text-primary font-semibold spaced--text text-sm"
              >
                <div data-aos="zoom-in" data-aos-duration="1000" className="card">
                  <img
                    src="./../../img/package1.jpg"
                    alt=""
                  />
                  <div className="text-center">
                    <button className="mt-3 uppercase">silver package</button>
                  </div>
                </div>
              </Link>
              <Link
                to={"/packages/2/diamond-package"}
                className="uppercase text-primary font-semibold spaced--text text-sm"
              >
                <div data-aos="zoom-in-left" data-aos-duration="1000" className="card">
                  <img
                    src="./../../img/portriat2.jpeg"
                    alt=""
                  />
                  <div className="text-center">
                    <button className="mt-3 uppercase">diamond package</button>
                  </div>
                </div>
              </Link>
              <Link
                to={"/packages/3/gold-package"}
                className="uppercase text-primary font-semibold spaced--text text-sm"
              >
                <div className="card">
                  <img
                    src="./../../img/package3.jpg"
                    alt=""
                  />
                  <div data-aos="zoom-in-right" data-aos-duration="1000" className="text-center">
                    <button className="mt-3 uppercase">gold package</button>
                  </div>
                </div>
              </Link>
              <Link
                to={"/packages/4/family-shoot"}
                className="uppercase text-primary font-semibold spaced--text text-sm"
              >
                <div data-aos="zoom-in" data-aos-duration="1000" className="card">
                  <img
                    src="./../../img/wedding2.jpg"
                    alt=""
                  />
                  <div className="text-center">
                    <button className="mt-3 uppercase">Family shoot</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        <button className="mt-10 text-white bg-primary px-5 py-2 rounded-full">
          <Link to={"/contact"}>Join the list &nbsp; &rarr;</Link>
        </button>
      </div>
    </section>
  );
}

export default PackagesPage;
