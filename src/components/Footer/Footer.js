import "./Footer.css";
import { animated, useInView } from "react-spring";
import ivanchik_icon from "../Assets/ivan_icon.png";

const Footer = () => {
    const [ulRef, ulStyle] = useInView(
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
          rootMargin: '-10% 0%',
        }
      )

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-ul__container">
          <div className="footer__block">
            <animated.ul className="footer-block__ul" ref={ulRef} style={ulStyle}>
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
            </animated.ul>
          </div>
          <div className="footer__block">
            <animated.ul className="footer-block__ul" ref={ulRef} style={ulStyle}>
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
            </animated.ul>
          </div>
          <div className="footer__block">
            <animated.ul className="footer-block__ul" ref={ulRef} style={ulStyle}>
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
            </animated.ul>
          </div>
        </div>
        <div className="ivanchik__container">
          <div className="ivanchik__icon">
            <img src={ivanchik_icon} alt=""></img>
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
