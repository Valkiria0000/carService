import classes from "./Menu.module.css"
const Menu = () => {
    return(
        <ul className={classes.menu}>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Услуги</a>
        </li>{" "}
        <li>
          <a href="#">Примеры работ</a>
        </li>{" "}
        <li>
          <a href="#">Контакты</a>
        </li>
        <li>
          <a href="#">Отзывы</a>
        </li>
      </ul>  
    )
}

export default Menu