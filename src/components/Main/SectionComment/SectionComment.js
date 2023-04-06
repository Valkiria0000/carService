import classes from "./SectionComment.module.css";
import WOW from "wowjs";
import "animate.css";

const SectionComment = () => {
    const wow = new WOW.WOW();
    wow.init();
  return (
    <section className={classes.section}>
    <div className="wrapper">  <h2 >
       
      
        Отзывы
      </h2>
      <div className={classes.container}>
        <div className="wow animate__fadeInTopRight " data-wow-offset="10" data-wow-delay="0.8s">
      <p > На мерседесе высветилась ошибка и я приехала на компьютерную
            диагностику, сотрудники сервиса за два дня нашли причину ошибки и
            устранили ее.
          </p>
      
           
          <p>Марина А</p>
        </div>
        <div className="wow animate__fadeInTopRight " data-wow-offset="10" data-wow-delay="1s">
          <p>
            Мне нравится обслуживание. На автомобиле сделали декоративное
            устройство под бампером. И пока я ничего плохого не заметил, все
            нормально.
          </p>
          <p>Борис К.</p>
        </div>
        <div className="wow animate__fadeInTopRight " data-wow-offset="10" data-wow-delay="1.2s">
          <p>
            Приятный сервис, хорошие ремонтники. Устроила консультация и
            скорость работы. Доходчиво объяснили, что на что влияет при замене
            антифриза.
          </p>
          <p>Константин</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SectionComment;
