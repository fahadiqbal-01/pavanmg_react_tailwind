import React from "react";
import footerlogo from "../images/logo 2.png";
import githublogo from "../images/vector1.png";
import twitterlogo from "../images/ant-design_twitter-circle-filled.png";
import linkedinlogo from "../images/entypo-social_linkedin-with-circle.png";

const Footer = () => {
  return (
    <>
      <footer className="w-[100%] pb-[59.8px] font-pop">
        <div className="container max-w-custom mx-auto">
          <div className="footer_main">
            <div className="footer_top flex items-center justify-between">
              <img src={footerlogo} alt="footer_logo" className="mr-[497px]" />
              <div className="footer_details flex">
                <a
                  href="#"
                  className=" text-[#A7A7A7] mr-[33px] pointer-events-none"
                >
                  {" "}
                  +91 12345 09876
                </a>
                <a
                  href="#"
                  className=" text-[#A7A7A7] mr-[48px] pointer-events-none"
                >
                  {" "}
                  info@example.com
                </a>
                <div className="footer_buttons flex gap-[20px] items-center">
                  <a
                    href="#"
                    className=" hover:scale-[1.2] transition duration-400"
                  >
                    <img src={githublogo} alt="github_icon" />
                  </a>
                  <a
                    href="#"
                    className=" hover:scale-[1.2] transition duration-400"
                  >
                    <img src={twitterlogo} alt="twitter_icon" />
                  </a>
                  <a
                    href="#"
                    className=" hover:scale-[1.2] transition duration-400"
                  >
                    <img src={linkedinlogo} alt="linkedin_icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer_divider h-[2px] w-[100%] bg-[#42446E] mt-[42px]"></div>
            <div className="footer_bottom mt-[59.32px]">
              <div className="footer_nav flex justify-between items-center">
                <ul className="flex gap-[52px]">
                  <li className="text-[18px] font-normal text-[#A7A7A7] leading-[26px] hover:text-[#fff] transition duration-300 ease-in">
                    <a href="#" className="inline-block">
                      Home
                    </a>
                  </li>
                  <li className="text-[18px] font-normal text-[#A7A7A7] leading-[26px] hover:text-[#fff] transition duration-300 ease-in">
                    <a href="#" className="inline-block">
                      About
                    </a>
                  </li>
                  <li className="text-[18px] font-normal text-[#A7A7A7] leading-[26px] hover:text-[#fff] transition duration-300 ease-in">
                    <a href="#" className="inline-block">
                      Technologies
                    </a>
                  </li>
                  <li className="text-[18px] font-normal text-[#A7A7A7] leading-[26px] hover:text-[#fff] transition duration-300 ease-in">
                    <a href="#" className="inline-block">
                      Projects
                    </a>
                  </li>
                  <li className="text-[18px] font-normal text-[#A7A7A7] leading-[26px] hover:text-[#fff] transition duration-300 ease-in">
                    <a href="#" className="inline-block">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="credentials text-[18px] font-normal text-[#A7A7A7] leading-[26px]">
                  <h4 className=" pointer-events-none">
                    Designed and built by{" "}
                    <a href="#" className="text-[#13B0F5] pointer-events-auto">
                      Pavan MG
                    </a>{" "}
                    with{" "}
                    <a href="#" className="text-[#13B0F5] pointer-events-auto">
                      Love
                    </a>{" "}
                    &{" "}
                    <a href="#" className="text-[#13B0F5] pointer-events-auto">
                      Coffee
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
