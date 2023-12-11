import "./From-The-Heart.css";
import icon from "../../Assets/photo_2023-11-04_23-14-44.jpg";
import { animated, useInView } from "react-spring";

const FromTheHeart = () => {

  const [iconRef, iconStyles] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-20% 0%',
    }
  )

  return (
    <div className="from-the-heart-block">
      <div className="from-the-heart-container">
        <div className="from-the-heart__icon">
          <animated.div className="from-the-heart__icon-container" ref={iconRef} style={iconStyles}>
            <img src={icon} alt="Heart icon" />
          </animated.div>
        </div>
        <div className="from-the-heart__content">
          <div className="from-the-heart__title">
            <p>From The Heart</p>
          </div>
          <div className="from-the-heart__text">
            <p>
              Сотвори мир волшебства из мыслей, окрашенных в золото, и эмоций,
              окрашенных в цвета радуги.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromTheHeart;
