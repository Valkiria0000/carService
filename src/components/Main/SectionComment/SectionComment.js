import classes from "./SectionComment.module.css";
import WOW from "wowjs";
import "animate.css";

const SectionComment = () => {
  const wow = new WOW.WOW();
  wow.init();
  return (
    <section className={classes.section} id="section5">
      <div className={classes.wrapper}>
        <h2 className="title">Отзывы</h2>
        <div className={classes.bcg}> </div>
        <div className={classes.container}>
          <div
            className="wow animate__fadeInTopRight "
            data-wow-offset="30"
            data-wow-delay="0.8s"
          >
            <p>
            Огромное спасибо ребятам! Всё делают быстро, качественно,не дорого. Приятно приезжать. Ещё раз огромное вам спасибо. Вы лучшие!!!!!
            </p>

            <p>Елена</p>
          </div>
          <div
            className="wow animate__fadeInTopRight "
            data-wow-offset="30"
            data-wow-delay="1s"
          >
            <p>
            Приехали по совету знакомых, теперь только здесь будем обслуживать машину. Не дорого, всё расскажут, посоветуют, лишнего не навязывают. Спасибо!!!

            </p>
            <p>Тамара</p>
          </div>
          <div
            className="wow animate__fadeInTopRight "
            data-wow-offset="30"
            data-wow-delay="1.2s"
          >
            <p>
              Приятный сервис, хорошие ремонтники. Устроила консультация и
              скорость работы. Доходчиво объяснили, что на что влияет при замене
              антифриза.
            </p>
            <p>Константин</p>
          </div>
          <div
            className="wow animate__fadeInTopRight "
            data-wow-offset="30"
            data-wow-delay="1.4s"
          >
            <p>
            Очень все понравилось. Ребята знают свою работу, делают качественно и бысто.
Не обманывают, все обьясняют. Советую.
            </p>

            <p>Марина А</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComment;
