import React from "react";
import "./body.css";
import IMG1 from "../../assets/mechan1.png";
import IMG2 from "../../assets/merch3.png";
const Body = () => {
  return (
    <>
      <div className="homeGrid">
        <div className="leftgrid">
          <h1>
            Very <p>Intelligent</p>
          </h1>
          <div className="lower_left">
            <h4>New Look</h4>
            <div className="new_lookImage">
              <img src={IMG1} alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <img src={IMG2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Body;
