import React from "react";
import bannerimg from "../images/50353683 1.png";

const Banner = () => {
  return (
    <>
      <div className="banner font-pop">
        <div className="container max-w-custom mx-auto">
          <div className="banner_main flex justify-between ">
            <div className="banner_left mt-[365px]">
              <h1 className=" pointer-events-none text-[58px] font-[700] text-[#D9D9D9] tracking-[-1px] font-pop">
                Hi 👋, <br />
                My name is <br />
                <span className=" text-[#13B0F5]"> Pavan MG</span> <br />I build things for web
              </h1>
            </div>
            <div className="banner_right mt-[339px]">
              <img src={bannerimg} alt="banner_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
