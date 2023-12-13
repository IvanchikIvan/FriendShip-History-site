import "./Footer.css";
import { animated, useSpring, config } from "react-spring";
import ivanchik_icon from "../Assets/ivan_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-ul__container">
          <div className="footer__block">
            <ul className="footer-block__ul">
              <li>
                <p className="footer__text">Забота</p>
              </li>
              <li>
                <p className="footer__text">Любовь</p>
              </li>
              <li>
                <p className="footer__text">Уважение</p>
              </li>
              <li>
                <p className="footer__text">Увлежнение</p>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer-block__ul">
              <li>
                <p className="footer__text">Email</p>
              </li>
              <li>
                <p className="footer__text">Telegram</p>
              </li>
              <li>
                <p className="footer__text">Vkontakte</p>
              </li>
              <li>
                <p className="footer__text">GitHub</p>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <ul className="footer-block__ul">
              <li>
                <p className="footer__text">vanyamalisheff@yandex.ru</p>
              </li>
              <li>
                <p className="footer__text">@kavalskiy_ivanchik</p>
              </li>
              <li>
                <p className="footer__text">id378890931</p>
              </li>
              <li>
                <p className="footer__text">Kavalskiy</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="ivanchik__container">
          <div className="ivanchik__icon">
            <img src={ivanchik_icon}></img>
          </div>
          <div className="ivanchik__text">
            <p>Made by Ivanchik © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;