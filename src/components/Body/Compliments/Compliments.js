import React from "react";
import { animated, useInView } from "react-spring";
import "./Compliments.css";

const Compliments = () => {
  const complimentsList = [
    "Каждый раз, засыпая, я не могу удержаться, чтобы представить тебя со мной рядом",
    "Твоё горячее дыхание, каждый раз встречает меня в душе",
    "Ты определённо одна из самых лучших девушек, которых я встречал",
  ];

  const [listRef, listStyles] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -1000,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: '-30% 0%',
    }
  )

  return (
    <div className="compliments" ref={listRef}>
      <div className="compliments-container">
        <div className="compliments__text-container">
          <div className="compliments__title-container">
            <p className="compliments__title">A Candy-Box of Compliments</p>
          </div>
          <animated.div className="compliments__content" style={listStyles}>
              <ul className="compliments__list">
                <div className="compliments__list-items">
                  {complimentsList.map((compliment, index) => (
                    <li key={index} className="compliments__item">
                      <p>{compliment}</p>
                    </li>
                  ))}
                </div>
                <button></button>
              </ul>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Compliments;
