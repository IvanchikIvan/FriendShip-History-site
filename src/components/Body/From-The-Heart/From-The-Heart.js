import "./From-The-Heart.css";
import icon from "../../Assets/photo_2023-11-04_23-14-44.jpg"

const FromTheHeart = () => {
  return (
    <div className="for-the-heart-block">
      <div className="for-the-heart-container">
        <div className="for-the-heart__icon"><img src={icon}></img></div>
        <div className="for-the-heart__content">
          <div className="for-the-heart__title"><p>From The Heart</p></div>
          <div className="for-the-heart__text"><p>Сотвори мир волшебства из мыслей, окрашенных в золото, и эмоций, окрашенных в цвета радуги.</p></div>
        </div>
      </div>
    </div>
  );
};

export default FromTheHeart;
