
import  classes from "./SectionPrice.module.css"
const SectionPrice = ()=> {
    return (
        <div  className={classes.price}>
            <h2>Услуги</h2>
            <div >
            <h3>
              Ремонт ГБЦ без снятия ГБЦ (притирка клапанов + замена прокладок +
              замена маслосъемных колпачков)
            </h3>
            <p>Цена: 4000р</p>
          </div>
       
          <div >
            <h3>Замена ГРМ (рядный ДВС одновальный SOHC)</h3>
            <p>Цена: 4500р</p>
          </div>
     
          <div >
            <h3>Замена ГРМ (рядный ДВС двухвальный DOHC)</h3>
            <p>Цена: 6500р</p>
          </div>
        
          <div >
            <h3>Замена ГРМ (V-образный ДВС одновальный SOHC)</h3>
            <p>Цена: 8000р</p>
          </div>
        
          <div>
            <h3>Замена ГРМ (V-образный ДВС двухвальный DOHC)</h3>
            <p>Цена: 9000р</p>
          </div>
        </div>
    )
}

export default SectionPrice