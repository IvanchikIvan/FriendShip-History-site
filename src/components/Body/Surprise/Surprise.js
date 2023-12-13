import React from "react";
import "./Surprise.css";

const Surprise = () => {
  return (
    <div className="surprise-block">
      <div className="surprise-container">
        <div className="surprise-container__title">
          <p>Улыбка</p>
        </div>
        <div className="surprise-container__text">
          <p>
            Появляется каждый день, когда ты мне пишешь.<br></br>Утром, днём или вечером, на кровати, в душе или на кухне.<br></br>Мне всегда приятно видеть от тебя новые сообщения
          </p>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
