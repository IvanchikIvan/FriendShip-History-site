import React from "react";
import "./Compliments.css";

const Compliments = () => {
  const complimentsList = [
    "Your laughter rings sweeter than a symphony of bells, warming hearts and lifting spirits",
    "Your eyes, they shine brighter than the northern lights, painting the world in hues of enchantment",
    "Your soul, a beautiful meadow of wildflowers, blossoms with the exquisite fragrance of kindness",
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
