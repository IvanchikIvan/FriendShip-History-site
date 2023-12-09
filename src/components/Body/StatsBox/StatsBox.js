import React from "react";
import "./StatsBox.css";

const StatsBox = () => {
  return (
    <div className="stats-box">
      <div className="stats-box__container">
        <div className="stats-box__row">
          <div className="stats-box__item">
            <p className="stats-box__item-title"></p>
            <p className="stats-box__item-content"></p>
          </div>
          <div className="stats-box__item"></div>
        </div>
        <div className="stats-box__row">
          <div className="stats-box__item"></div>
          <div className="stats-box__item">
            <p className="stats-box__item-title"></p>
            <p className="stats-box__item-content"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
