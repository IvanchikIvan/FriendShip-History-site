import "./why-website.css";

const WhyWebsite = () => {
  return (
    <div className="whywebsite-box">
      <div className="whywebsite__container">
        <div className="whywebsite__title">
          <h1>Ответики на никем незаданные вопросики</h1>
        </div>
        <div className="whywebsite__block">
          <div className="whywebsite-block__title"><h2>Почему я решил сделать сайт?</h2></div>
          <div className="whywebsite-block__text"><p>Всё просто, сайты - это единственное, что я могу сделать. Мастером на все руки меня не назовёшь, но в сайтах я нашёл область искусства которой я смогу овладеть</p></div>
        </div>
        <div className="whywebsite__block">
          <div className="whywebsite-block__title"><h2>Как я это сделал?</h2></div>
          <div className="whywebsite-block__text"><p>А я и не знаю. Честно говоря сайт с историей это либо из ряда вон либо википедия...<br></br>Задумка была выразить всю накопившуюся благодарность. По ощущениям..., не получилось, так как ещё очень много осталось</p></div>
        </div>
      </div>
    </div>
  );
};

export default WhyWebsite;
