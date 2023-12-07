import React from "react";
import "./Compliments.css";

const Compliments = () => {
  const complimentsList = [
    "Каждый раз, засыпая, я не могу удержаться, чтобы представить тебя со мной рядом",
    "Твоё горячее дыхание, каждый раз встречает меня в душе",
    "Невероятно добрая, искренняя",
  ];

  return (
    <div className="compliments">
      <div className="compliments-container">
        <div className="compliments__text-container">
          <div className="compliments__title-container">
            <p className="compliments__title">A Candy-Box of Compliments</p>
          </div>
          <div className="compliments__content">
            <ul className="compliments__list">
              <div className="compliments__list-items">
                {complimentsList.map((compliment, index) => (
                  <li key={index} className="compliments__item">
                    <p>{compliment}</p>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliments;
