import React from "react";
import logo from "../images/logo 1.png";
import giticon from "../images/vector1.png";
import Xicon from "../images/ant-design_twitter-circle-filled.png";
import linkicon from "../images/entypo-social_linkedin-with-circle.png";

const Header = () => {
  return (
    <>
      <nav className="w-[100%] bg-[#191919] font-dm absolute mt-[41px]">
        <div className=" max-w-custom mx-auto ">
          <div className="nav_main flex justify-between items-center">
            <div className="nav-logo">
              <img src={logo} alt="navbar_logo" />
            </div>
            <div className="nav_list mr-[-51px]">
              <ul className="flex ">
                <li className=" ml-[67px] text-[#A7A7A7] hover:text-[#fff] hover:scale-[.8] transition duration-300 ease-in">
                  <a
                    href="#"
                    className="inline-block capitalize text-[20px] font-medium leadig-[26px] "
                  >
                    home
                  </a>
                </li>
                <li className=" ml-[67px] text-[#A7A7A7]  hover:text-[#fff] hover:scale-[.8] transition duration-300 ease-out">
                  <a
                    href="#"
                    className="inline-block  text-[20px] font-medium leadig-[26px]"
                  >
                    About
                  </a>
                </li>
                <li className=" ml-[67px] text-[#A7A7A7]  hover:text-[#fff] hover:scale-[.8] transition duration-300 ease-out">
                  <a
                    href="#"
                    className="inline-block  text-[20px] font-medium leadig-[26px]"
                  >
                    Tech Stack
                  </a>
                </li>
                <li className=" ml-[67px] text-[#A7A7A7]  hover:text-[#fff] hover:scale-[.8] transition duration-300 ease-out">
                  <a
                    href="#"
                    className="inline-block  text-[20px] font-medium leadig-[26px]"
                  >
                    Projects
                  </a>
                </li>
                <li className=" ml-[67px] text-[#A7A7A7]  hover:text-[#fff] hover:scale-[.8] transition duration-300 ease-out">
                  <a
                    href="#"
                    className="inline-block  text-[20px] font-medium leadig-[26px]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav_icons flex items-center gap-[20px]">
              <a
                href="#"
                className="inline-block hover:scale-[1.2] transition duration-300 ease-in-out"
              >
                <img src={giticon} alt="github_icon" className="text-[30px]" />
              </a>
              <a
                href="#"
                className="inline-block hover:scale-[1.2] transition duration-300 ease-in-out"
              >
                <img src={Xicon} alt="twitter_icon" className="text-[30px]" />
              </a>
              <a
                href="#"
                className="inline-block hover:scale-[1.2] transition duration-300 ease-in-out"
              >
                <img
                  src={linkicon}
                  alt="linkedin_icon"
                  className="text-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
