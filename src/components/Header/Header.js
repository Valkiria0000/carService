import classes from "./Header.module.css";
import Menu from "./Menu/Menu";
const Header = () => {
  return (<>
    
      <header className={classes.header}>
        <div className={classes.logo}>
            <div className={classes.logo_text}>ТЕХ<span>Ц</span>ЕНТР <br/><span>Гараж</span>
            <img className={classes.logo_img} src="assets/img/logo.png"/></div>
        </div>
        <Menu/>
      </header>
    </>
  );
};

export default Header;
