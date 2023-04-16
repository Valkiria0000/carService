import classes from "./Menu.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
const Menu = () => {

 
    return(
        <ul className={classes.menu}>
        <li>
        <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>О нас</Link>
          
        </li>
        <li>
        <Link
    activeClass="active"
    to="section2"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Услуги</Link>
          
        </li>
        <li>
        <Link
    activeClass="active"
    to="section3"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Примеры работ</Link>
         
        </li>
        <li>
          
        <Link
    activeClass="active"
    to="section4"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Контакты</Link>
        </li>
        <li>
        <Link
    activeClass="active"
    to="section5"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
>Отзывы</Link>
        </li>
      </ul>  
    )
}

export default Menu