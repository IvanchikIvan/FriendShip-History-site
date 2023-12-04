import "./From-The-Heart.css";
import icon from "../../Assets/photo_2023-11-04_23-14-44.jpg";

const FromTheHeart = () => {
  return (
    <div className="from-the-heart-block">
      <div className="from-the-heart-container">
        <div className="from-the-heart__icon">
          <div className="from-the-heart__icon-container">
            <img src={icon} alt="Heart icon" />
          </div>
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
