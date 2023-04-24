import classes from "./SectionPrice.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../../../App.css"
import PriceList from "./PriceList/PriceList";
const SectionPrice = (props) => {

  return (
    <section className={classes.price} id="section2">
        <div className="wrapper">
            
      <h2 className="title">Услуги</h2>
     
        <Tabs>
          <TabList>
            <Tab>Ремонт КПП и сцепления</Tab>
            <Tab>Ремонт двигателя</Tab>
            <Tab>Слесарный ремонт</Tab>
            <Tab>Тех.обслуживание</Tab>
          </TabList>

          <TabPanel >
           <PriceList store={props.store} />
             
          </TabPanel>
          <TabPanel>
          <PriceList store={props.store} />
             
          </TabPanel>
          <TabPanel>
             <div className={classes.info}> 
                <h3>Регулировка ручного тормоза
                </h3>
                <span>Цена: от 200₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена тормозного шланга
                </h3>
                <span>Цена: от 300₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Диагностика тормозной системы
                </h3>
                <span>Цена: от 500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Диагностика ходовой системы
                </h3>
                <span>Цена: от 500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Перепрессовка сайлент-блока
                </h3>
                <span>Цена: от 500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена тормозного барабана
                </h3>
                <span>Цена: от 600₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Прока тормозов
                </h3>
                <span>Цена: от 630₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена рулевого наконечника
                </h3>
                <span>Цена: от 630₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена шаровой опоры
                </h3>
                <span>Цена: от 630₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена 1-й стойки стабилизатора
                </h3>
                <span>Цена: от 650₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена 1-й втулки стабилизатора
                </h3>
                <span>Цена: от 630₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена передних тормозных колодок (дисковые)
                </h3>
                <span>Цена: от 700₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена задних тормозных колодок (дисковые)
                </h3>
                <span>Цена: от 700₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена передних тормозных колодок (дисковые с датчиками)
                </h3>
                <span>Цена: от 800₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена заднего тормозного циллиндра
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Диагностика ходовой системы + тормозной системы
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена топливного фильтра - дизель
                </h3>
                <span>Цена: от 1100₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена масла в автоматической коробке передач (АКПП)
                </h3>
                <span>Цена: от 1500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена масла в механической коробке передач (МКПП) + с/у поддона + замена фильтра
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена топливного фильтра (погружного)
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
          </TabPanel> <TabPanel>
          <div className={classes.info}> 
                <h3>С/у защиты двигателя
                </h3>
                <span>Цена: от 200₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена воздушного фильтра
                </h3>
                <span>Цена: от 200₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена свечей зажигания (1 шт)
                </h3>
                <span>Цена: от 200₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена масла в двигателе (ДВС) + маслянный фильтр
                </h3>
                <span>Цена: от 600₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена салонного фильтра
                </h3>
                <span>Цена: от 630₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена масла в механической коробке передач (КПП)
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена масла в редукторе
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена масла в ведущем мосту
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена тормозной жидкости с прокачкой
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена охлаждающей жидкости, тосола
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена антифриза
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена жидкости ГУР
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена жидкости сцепления с прокачкой
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена топливного фильтра - бензин
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>С/у коллектора
                </h3>
                <span>Цена: от 1000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена топливного фильтра
                </h3>
                <span>Цена: от 1100₽</span>
              </div>
          </TabPanel>
        </Tabs>
      </div>
    
    </section>
  );
};

export default SectionPrice;
