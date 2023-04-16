import classes from "./SectionAbout.module.css";
const SectionAbout = () => {
  return (
    <section className={classes.about} id="section1">
      <div className="wrapper">   <h2 className="title">О нас</h2>
      <div className={classes.info}>
        <div className={classes.card}>
          <div className={classes.num}>5</div>
          <div>высококлассных специалистов, имеющих сертификаты</div>
        </div>
        <div className={classes.card}>
          <div className={classes.num}>927</div>
          <div>клиентов уже выбрали нас и остались довольны</div>
        </div>
        <div className={classes.card}>
          <div className={classes.num}> 10 </div>
          <div>лет успешных работ по обслуживанию и ремонту</div>
        </div>
      
      </div>
     
      <div className={classes.block}>
            <img src="./assets/img/icon/icon3.png" />
            <p>
            Мы оказываем услуги по обслуживанию авто, шиномонтажу. Кроме того, мы можем заказать необходимые запчасти для Вашего автомобиля.
            </p>
          </div>
          <div className={classes.block}>
            <img src="./assets/img/icon/icon1.png" />
            <p>
              Техцентр «ГАРАЖ» (ГТГ) предлагает качественный ремонт
              автомобилей во Фрязино по приемлемым ценам. Также, возможен выезд мастера в удобное для Вас место.
            </p>
          </div>
          <br/>
          <div className={classes.block}>
            <img src="./assets/img/icon/icon2.png" />
            <p>
              Мы профессионально ремонтируем машины всех марок. Для многих владельцев автомобилей наш
              автосервис является одним из немногих, где можно устранить
              практически любую неисправность..
            </p>
          </div><br/>
          <div className={classes.block}>
            <img src="./assets/img/icon/icon3.png" />
            <p>
              Благодаря многолетнему опыту и профессиональному обучению наши
              специалисты справятся с любой поставленной задачей по ремонту
              автомобиля.
            </p>
          </div>
          
        
      </div>
    </section>
  );
};

export default SectionAbout;
