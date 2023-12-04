import React from "react";
import "./Compliments.css";
import img from "./artwork.png";

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
          <h2 className="compliments__title">A Candy-Box of Compliments</h2>
          <ul className="compliments__list">
            {complimentsList.map((compliment, index) => (
              <li key={index} className="compliments__item">
                {compliment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Compliments;
