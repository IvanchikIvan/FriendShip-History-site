import React from "react";
import "./StatsBox.css";
import rabbit from '../../Assets/rabbit.svg'
import snake from '../../Assets/snake.svg'

const StatsBox = () => {
  return (
    <div className="stats-box">
      <div className="stats-box__container">
        <div className="stats-box__row">
          <div className="stats-box__item">
            <p className="stats-box__item-title">134</p>
            <p className="stats-box__item-content">Дней с нашего знакомства</p>
          </div>
          <div className="stats-box__item"><img  src={snake} alt=""></img></div>
        </div>
        <div className="stats-box__row">
          <div className="stats-box__item"><img src={rabbit} alt=""></img></div>
          <div className="stats-box__item">
            <p className="stats-box__item-title">1,904</p>
            <p className="stats-box__item-content">Голосовых сообщений</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBox;
