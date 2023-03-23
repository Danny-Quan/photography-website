import React, { useEffect, useState } from "react";
import { data } from "../data/packageData";
import { useParams,Link } from "react-router-dom";

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
        {packageData ?        <div>
          <h2 className="font-bold text-black xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl uppercase text-center mb-10">{packageData.title} package</h2>
          <img className="mb-10 mt-5" src={`${packageData.img_url}`} alt="" />
          <h3 className="font-bold xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-xl mb-5 text-black">Details</h3>
          <p>
            {packageData.description}
          </p>
        </div> :   
        <div>
          <h2 className="text-center font-bold xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl uppercase mb-10">our services</h2>
        <div className="package--cards mt-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <Link
            to={"/packages/1/weddings"}
            className="uppercase text-primary font-semibold spaced--text text-sm"
          >
            <div className="card">
              <img src="./../../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
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
              <img src="./../../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
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
              <img src="./../../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
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
              <img src="./../../img/wallpaperflare.com_wallpaper-min.jpg" alt="" />
              <div className="text-center">
                <button className="mt-3 uppercase">branding</button>
              </div>
            </div>
          </Link>
        </div>
        </div>
        }

      </div>
    </section>
  );
}

export default PackagesPage;
