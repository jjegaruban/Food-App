import React from "react";
import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="" />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
            <p className="py-4 font-semibold">
            Great food brings people together! Our menu is packed with delicious, high-quality meals that satisfy every craving. Whether you're in the mood for something classic or adventurous, we serve goodness on every plate.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
