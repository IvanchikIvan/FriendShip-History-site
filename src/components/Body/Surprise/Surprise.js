import React from "react";
import "./Surprise.css";

const Surprise = () => {
  return (
    <div className="surprise-block">
      <div className="surprise-container">
        <div className="surprise-container__title">
          <p>Surprise Now</p>
        </div>
        <div className="surprise-container__text">
          <p>A treasure chest filled with compliments and wishes. Spark joy in her heart—today and every day.</p>
        </div>
        <div className="surprise-container__buttons-container">
          <div className="surprise-container__unbox-happiness"><p>Unbox happiness</p></div>
          <div className="surprise-container__deliver-delight"><p>Deliver Delight</p></div>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
