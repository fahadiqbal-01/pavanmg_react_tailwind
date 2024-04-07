import React from "react";
import project1 from "../images/project1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar, faLink } from "@fortawesome/free-solid-svg-icons";
import githubicon from "../images/akar-icons_github-fill.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";

const Projects = () => {
  return (
    <>
      <div className="projects pb-[219px] font-pop">
        <div className="container max-w-custom mx-auto">
          <h4 className=" text-[48px] font-[700] leding-[26px] text-[#CCCCCC] text-center mb-[49px]">
            Projects
          </h4>
          <h5 className=" text-[32px] font-[400] leading-[26px] text-[#A7A7A7] text-center mb-[99px]">
            Things I’ve built so far
          </h5>
          <div className="projects_main">
            <div className="top flex gap-[50px]">
              <div className="project_card w-[373px] border-0 rounded-[20px] bg-[#363636] pb-[25px]">
                <img src={project1} alt="project1img" />
                <div className="project_details px-[28px] ">
                  <h4 className=" text-[28px] font-medium leadinmg-[26px] text-[#CCCCCC] font-pop mt-[27px]">
                    Project Tile goes here
                  </h4>
                  <p className=" text-[18px] font-[300] leading-[26px] text-[#CCCCCC] w-[314px] font-pop mt-[17px] opacity-[70%] ">
                    This is sample project description <br /> random things are
                    here in <br />
                    description This is sample project <br /> lorem ipsum
                    generator for dummy <br /> content
                  </p>
                  <h5 className="text-[18px] font-[300] text-[#CCCCCC] mt-[12px]">
                    Tech stack :{" "}
                    <span className=" font-thin text-[14px]">
                      HTML , JavaScript, SASS, React
                    </span>
                  </h5>
                  <div className="ptoject_buttons flex gap-[48px] items-center mt-[21px] ">
                    <div className="left text-center">
                      <FontAwesomeIcon
                        icon={faLink}
                        className=" text-[20px] text-[#fff]"
                      ></FontAwesomeIcon>
                      <a
                        href="#"
                        className=" inline-block ml-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[26px] underline hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="right flex gap-[12px]">
                      <img
                        src={githubicon}
                        alt="github_icon"
                        className=" h-[20px] w-[20px] "
                      />
                      <a
                        href="#"
                        className="inline-block underline text-[#FFFFFF] text-[16px] font-normal leading-[26px] hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_card w-[373px] border-0 rounded-[20px] bg-[#363636] pb-[25px]">
                <img src={project2} alt="project1img" />
                <div className="project_details px-[28px] ">
                  <h4 className=" text-[28px] font-medium leadinmg-[26px] text-[#CCCCCC] font-pop mt-[27px]">
                    Project Tile goes here
                  </h4>
                  <p className=" text-[18px] font-[300] leading-[26px] text-[#CCCCCC] w-[314px] font-pop mt-[17px] opacity-[70%] ">
                    This is sample project description <br /> random things are
                    here in <br />
                    description This is sample project <br /> lorem ipsum
                    generator for dummy <br /> content
                  </p>
                  <h5 className="text-[18px] font-[300] text-[#CCCCCC] mt-[12px]">
                    Tech stack :{" "}
                    <span className=" font-thin text-[14px]">
                      HTML , JavaScript, SASS, React
                    </span>
                  </h5>
                  <div className="ptoject_buttons flex gap-[48px] items-center mt-[21px] ">
                    <div className="left text-center">
                      <FontAwesomeIcon
                        icon={faLink}
                        className=" text-[20px] text-[#fff]"
                      ></FontAwesomeIcon>
                      <a
                        href="#"
                        className=" inline-block ml-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[26px] underline hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="right flex gap-[12px]">
                      <img
                        src={githubicon}
                        alt="github_icon"
                        className=" h-[20px] w-[20px] "
                      />
                      <a
                        href="#"
                        className="inline-block underline text-[#FFFFFF] text-[16px] font-normal leading-[26px] hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_card w-[373px] border-0 rounded-[20px] bg-[#363636] pb-[25px]">
                <img src={project3} alt="project1img" />
                <div className="project_details px-[28px] ">
                  <h4 className=" text-[28px] font-medium leadinmg-[26px] text-[#CCCCCC] font-pop mt-[27px]">
                    Project Tile goes here
                  </h4>
                  <p className=" text-[18px] font-[300] leading-[26px] text-[#CCCCCC] w-[314px] font-pop mt-[17px] opacity-[70%] ">
                    This is sample project description <br /> random things are
                    here in <br />
                    description This is sample project <br /> lorem ipsum
                    generator for dummy <br /> content
                  </p>
                  <h5 className="text-[18px] font-[300] text-[#CCCCCC] mt-[12px]">
                    Tech stack :{" "}
                    <span className=" font-thin text-[14px]">
                      HTML , JavaScript, SASS, React
                    </span>
                  </h5>
                  <div className="ptoject_buttons flex gap-[48px] items-center mt-[21px] ">
                    <div className="left text-center">
                      <FontAwesomeIcon
                        icon={faLink}
                        className=" text-[20px] text-[#fff]"
                      ></FontAwesomeIcon>
                      <a
                        href="#"
                        className=" inline-block ml-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[26px] underline hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="right flex gap-[12px]">
                      <img
                        src={githubicon}
                        alt="github_icon"
                        className=" h-[20px] w-[20px] "
                      />
                      <a
                        href="#"
                        className="inline-block underline text-[#FFFFFF] text-[16px] font-normal leading-[26px] hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom flex gap-[50px] mt-[65px]">
              <div className="project_card w-[373px] border-0 rounded-[20px] bg-[#363636] pb-[25px]">
                <img src={project4} alt="project1img" />
                <div className="project_details px-[28px] ">
                  <h4 className=" text-[28px] font-medium leadinmg-[26px] text-[#CCCCCC] font-pop mt-[27px]">
                    Project Tile goes here
                  </h4>
                  <p className=" text-[18px] font-[300] leading-[26px] text-[#CCCCCC] w-[314px] font-pop mt-[17px] opacity-[70%] ">
                    This is sample project description <br /> random things are
                    here in <br />
                    description This is sample project <br /> lorem ipsum
                    generator for dummy <br /> content
                  </p>
                  <h5 className="text-[18px] font-[300] text-[#CCCCCC] mt-[12px]">
                    Tech stack :{" "}
                    <span className=" font-thin text-[14px]">
                      HTML , JavaScript, SASS, React
                    </span>
                  </h5>
                  <div className="ptoject_buttons flex gap-[48px] items-center mt-[21px] ">
                    <div className="left text-center">
                      <FontAwesomeIcon
                        icon={faLink}
                        className=" text-[20px] text-[#fff]"
                      ></FontAwesomeIcon>
                      <a
                        href="#"
                        className=" inline-block ml-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[26px] underline hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="right flex gap-[12px]">
                      <img
                        src={githubicon}
                        alt="github_icon"
                        className=" h-[20px] w-[20px] "
                      />
                      <a
                        href="#"
                        className="inline-block underline text-[#FFFFFF] text-[16px] font-normal leading-[26px] hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_card w-[373px] border-0 rounded-[20px] bg-[#363636] pb-[25px]">
                <img src={project5} alt="project1img" />
                <div className="project_details px-[28px] ">
                  <h4 className=" text-[28px] font-medium leadinmg-[26px] text-[#CCCCCC] font-pop mt-[27px]">
                    Project Tile goes here
                  </h4>
                  <p className=" text-[18px] font-[300] leading-[26px] text-[#CCCCCC] w-[314px] font-pop mt-[17px] opacity-[70%] ">
                    This is sample project description <br /> random things are
                    here in <br />
                    description This is sample project <br /> lorem ipsum
                    generator for dummy <br /> content
                  </p>
                  <h5 className="text-[18px] font-[300] text-[#CCCCCC] mt-[12px]">
                    Tech stack :{" "}
                    <span className=" font-thin text-[14px]">
                      HTML , JavaScript, SASS, React
                    </span>
                  </h5>
                  <div className="ptoject_buttons flex gap-[48px] items-center mt-[21px] ">
                    <div className="left text-center">
                      <FontAwesomeIcon
                        icon={faLink}
                        className=" text-[20px] text-[#fff]"
                      ></FontAwesomeIcon>
                      <a
                        href="#"
                        className=" inline-block ml-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[26px] underline hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="right flex gap-[12px]">
                      <img
                        src={githubicon}
                        alt="github_icon"
                        className=" h-[20px] w-[20px] "
                      />
                      <a
                        href="#"
                        className="inline-block underline text-[#FFFFFF] text-[16px] font-normal leading-[26px] hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_card w-[373px] border-0 rounded-[20px] bg-[#363636] pb-[25px]">
                <img src={project6} alt="project1img" />
                <div className="project_details px-[28px] ">
                  <h4 className=" text-[28px] font-medium leadinmg-[26px] text-[#CCCCCC] font-pop mt-[27px]">
                    Project Tile goes here
                  </h4>
                  <p className=" text-[18px] font-[300] leading-[26px] text-[#CCCCCC] w-[314px] font-pop mt-[17px] opacity-[70%] ">
                    This is sample project description <br /> random things are
                    here in <br />
                    description This is sample project <br /> lorem ipsum
                    generator for dummy <br /> content
                  </p>
                  <h5 className="text-[18px] font-[300] text-[#CCCCCC] mt-[12px]">
                    Tech stack :{" "}
                    <span className=" font-thin text-[14px]">
                      HTML , JavaScript, SASS, React
                    </span>
                  </h5>
                  <div className="ptoject_buttons flex gap-[48px] items-center mt-[21px] ">
                    <div className="left text-center">
                      <FontAwesomeIcon
                        icon={faLink}
                        className=" text-[20px] text-[#fff]"
                      ></FontAwesomeIcon>
                      <a
                        href="#"
                        className=" inline-block ml-[12px] text-[#FFFFFF] text-[16px] font-normal leading-[26px] underline hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="right flex gap-[12px]">
                      <img
                        src={githubicon}
                        alt="github_icon"
                        className=" h-[20px] w-[20px] "
                      />
                      <a
                        href="#"
                        className="inline-block underline text-[#FFFFFF] text-[16px] font-normal leading-[26px] hover:text-[#CCCCCC] transition duration-300 ease-in"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
