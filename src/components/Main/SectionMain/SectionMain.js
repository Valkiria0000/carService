import classes from "./SectionMain.module.css";
import Typewriter from "typewriter-effect";
const Section = () => {
  return (
    <div className={classes.section}>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.block}>
          <h1 className={classes.title}><Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Ремонт и обслуживание автомобилей")
                .pauseFor(1000)
                .start();
            }}
          /></h1>
          <p>возможен выезд мастера в удобное для Вас место</p></div>
          <div><h2>Шиномонтаж</h2>
          <p>все виды шиномонтажных работ</p></div>
        </div>
      </div>
    </div>
  );
};
export default Section;
