import React, { useState, useEffect } from "react";
import ModalImage from "react-modal-image";
import { imageData } from "../data/images";
import { Link } from "react-router-dom";

function Works() {
  const [filtered, setFiltered] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (filtered === 0) {
      setFilteredData(imageData);
      return;
    }
    const myData = imageData.filter((image) => image.filterId === filtered);
    setFilteredData(myData);
  }, [filtered]);

  return (
    <section>
      <div className="container">
        <h2 className="styled--head text-black font-bold xl:text-5xl lg:text-5xl md:text-4xl text-4xl capitalize ">
          latest works
        </h2>
        <div className="navigation text-center mt-10 mb-10">
          <button
            onClick={() => {
              setFiltered(0);
            }}
            className="filter--btn text-white bg-black px-8 text-sm py-2 rounded-full focus:bg-transparent focus:text-black border-2 border-black transition-all duration-300 mr-2"
          >
            All
          </button>
          <button
            onClick={() => {
              setFiltered(10);
            }}
            className="filter--btn text-white bg-black px-8 text-sm py-2 rounded-full focus:bg-transparent focus:text-black border-2 border-black transition-all duration-300 mr-2"
          >
            FASHION
          </button>
          <button
            onClick={() => {
              setFiltered(20);
            }}
            className="filter--btn text-white bg-black px-8 text-sm py-2 rounded-full focus:bg-transparent focus:text-black border-2 border-black transition-all duration-300 mr-2"
          >
            WEDDING
          </button>
          <button
            onClick={() => {
              setFiltered(30);
            }}
            className="filter--btn text-white bg-black px-8 text-sm py-2 rounded-full focus:bg-transparent focus:text-black border-2 border-black transition-all duration-300"
          >
            PERSONAL
          </button>
        </div>
        <div className="gallery">
          {filteredData.map((image) => (
            <div className="pics" key={image.id}>
              <ModalImage
                small={image.source}
                large={image.source}
                alt="work"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <button className="bg-primary text-white rounded-full px-2 py-2">
            <Link to={"/gallery"} className={"text-sm p-5"}>
              View More &nbsp; &rarr;{" "}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
