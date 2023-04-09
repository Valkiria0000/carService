import classes from "./SectionContact.module.css";

const SectionContact = () => {
  return (
    <section className={classes.contact}>
    
      <div className="wrapper">
      <div className={classes.bcg}> </div> 
        <h2 className="title">Контакты</h2>
        <div className={classes.info}>
          <div className={classes.adress}>
            <p>
              Адрес: <span>Московская область, г.о. Щелково, село Трубино</span>
            </p>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Af424808ab746531cac318585c7cf042d26dac0d6eb38150a316bf9c58f6a71fd&amp;source=constructor"
              width="457"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
          <div className={classes.links}>
            <p>Связаться с нами:</p>
            <div className={classes.block}>
              <img src="assets/img/contact/phone.png" alt="телефон" />
              <a href="tel:+79253714842">8(925)371-48-42</a> ,
              <a href="tel:+79067198405">8(906)719-84-05</a>
            </div>
            <div className={classes.block}>
              <img src="assets/img/contact/VK.png" alt="вконтакте" />
              <a href="vk.com/club77353971">
                Свяжитесь с нами в социальной сети VK
              </a>
            </div>
            <div className={classes.block}>
              <img src="assets/img/contact/mail.png" alt="почта" />
              <a href="mailto:admin@hipolink.net">
                Напишите нам по электронной почте
              </a>
            </div>
            <div className={classes.block}>
               <img src="assets/img/contact/whatsapp.png" alt="whatsapp" /><a href="whatsapp://send?abid=phonenumber&text=Hello%2C%20World!">
               
                Написать в whatsapp
              </a>
            </div>
            <div className={classes.block}>
            <img src="assets/img/contact/telegram.png" alt="telegram" />  <a href="tg://resolve?domain=имя">
                
                Написать в telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
