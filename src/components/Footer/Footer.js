import classes from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <div className={classes.wrapper}>
           <img src="./assets/img/icon/icon5.jpg"/> <span>
                copyright © 2023	</span>
           </div>
        </footer>
    )
}

export default Footer