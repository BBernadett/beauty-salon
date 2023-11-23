import React from "react";
import "./content.css";
import bgPic from "../../img/bg-pic.png";
import flower from "../../img/flower.png";

const Content = () => {
  return (
    <div className="content-box">
      <div>
        <div>
          <p className="main_content_text">
            Beauty <br /> Salon
          </p>
        </div>
        <div>
          <p className="slogen">
            Gyönyörű bőr, csillogó haj, formás köröm - minden, <br /> amire az
            önbizalmadnak szüksége lehet
          </p>
        </div>
      </div>
      <div>
        <img src={bgPic} alt="bg-pic" className="bg_pic" />
      </div>
    </div>
  );
};

export default Content;
