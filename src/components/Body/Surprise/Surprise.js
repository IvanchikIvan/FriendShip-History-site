import React from "react";
import { animated, useInView } from "react-spring";
import "./Surprise.css";

const Surprise = () => {
  const [unboxRef, unboxStyles] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -300,
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

  const [deliverRef, deliverStyles] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 300,
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
    <div className="surprise-block">
      <div className="surprise-container">
        <div className="surprise-container__title">
          <p>Surprise Now</p>
        </div>
        <div className="surprise-container__text">
          <p>
            Сундук с сокровищами, наполненный комплиментами и пожеланиями. Зажгу
            радость в твоём сердце - сегодня и каждый день.
          </p>
        </div>
        <div className="surprise-container__buttons-container">
          <animated.div className="surprise-container__unbox-happiness" ref={unboxRef} style={unboxStyles}>
            <p>Unbox happiness</p>
          </animated.div>
          <animated.div className="surprise-container__deliver-delight" ref={deliverRef} style={deliverStyles}>
            <p>Deliver Delight</p>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
