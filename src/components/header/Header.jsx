import React from "react";
import "./header.css";
import Download from "./Download";
import HeaderSocials from "./HeaderSocials";
import webDesign from "./webDesign.json";
import Lottie from "lottie-react";

const Header = () => {
  return (
    <div className="header_cont">
      <div className="container header__container">
        <div className="flex">
          <div className="left">
            <h4>Hi, my name is</h4>
            <h1 className="name">Hasan Safdari.</h1>
            <h2>I am a software developer student.</h2>
            <div className="flex-container"></div>
            <Download />
            <HeaderSocials />
          </div>
          <div className="right">
            <div className="lottieIcon">
              <Lottie animationData={webDesign} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
