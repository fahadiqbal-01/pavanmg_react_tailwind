import React from "react";
import tech1 from "../images/css.png";
import tech2 from "../images/html.png";
import tech3 from "../images/JS.png";
import tech4 from "../images/react.png";
import tech5 from "../images/Vector.png";
import tech6 from "../images/bootstrap.png";
import tech7 from "../images/vscode.png";
import tech8 from "../images/saas.png";
import tech9 from "../images/git.png";
import tech10 from "../images/cib_greensock.png";
import tech11 from "../images/vscodemain.png";
import tech12 from "../images/github.png";

const MyTech = () => {
  return (
    <>
      <div className="mytech pb-[214px] font-pop">
        <div className="container max-w-custom mx-auto">
          <h4 className=" text-[#CCCCCC] text-[48px] font-[700] leading-[25px] text-center mt-[348px]">
            My Tech Stack
          </h4>
          <h6 className=" text-[#A7A7A7] font-normal text-[32px] leading-[26px] mt-[49px] text-center mb-[140px]">
            {" "}
            Technologies I’ve been working with recently
          </h6>
          <div className="alltechs">
            <div className="top flex justify-between items-center mb-[71px]">
              <img src={tech1} alt="css_logo" />
              <img src={tech2} alt="html_logo" />
              <img src={tech3} alt="js_logo" />
              <img src={tech4} alt="react_logo" />
              <img src={tech5} alt="vector_logo" />
              <img src={tech6} alt="bootstrap_logo" />
            </div>
            <div className="bottom flex justify-between items-center">
              <img src={tech7} alt="vscode_logo" />
              <img src={tech8} alt="saas_logo" />
              <img src={tech9} alt="git_logo" />
              <img src={tech10} alt="greensock_logo" />
              <img src={tech11} alt="vscode_logo" />
              <img src={tech12} alt="github_logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTech;
