import classes from "./SectionPrice.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "../../../App.css"
const SectionPrice = () => {
  return (
    <section className={classes.price} id="section2">
        <div className="wrapper">
            
      <h2 className="title">Услуги</h2>
     
        <Tabs>
          <TabList>
            <Tab>Ремонт КПП и сцепления</Tab>
            <Tab>Слесарный ремонт</Tab>
            <Tab>Ремонт двигателя</Tab>
            <Tab>Тех.обслуживание

            </Tab>
          </TabList>

          <TabPanel>
            
              <div className={classes.info}>
                <h3>
                  Замена сцепления(комплект)
                </h3>
                <span>Цена: от 6000 ₽</span>
              </div>
              <div className={classes.info}> 
                <h3>
                  Замена рабочего циллиндра сцепления
                </h3>
                <span>Цена: от 630 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  Прокачка контура сцепления
                </h3>
                <span>Цена: от 630 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  Замена главного циллиндра сцепления
                </h3>
                <span>Цена: от 1500 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  С/у АКПП(МКПП)легкового моноприводного а/м
                </h3>
                <span>Цена: от 6000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                 Сборка/разборка АКПП (МКПП) легкового моноприводного а/м
                </h3>
                <span>Цена: от 7000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  С/у АКПП (МКПП) полноприводного а/м
                </h3>
                <span>Цена: от 8000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                 Сборка/разборка АКПП (МКПП) полноприводного а/м
                </h3>
                <span>Цена: от 9000₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                Сборка/разборка АКПП (МКПП) тяжелого внедорожного а/м
                </h3>
                <span>Цена: от 12000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                С/у АКПП (МКПП) тяжелого внедорожного а/м
                </h3>
                <span>Цена: от 13000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  Ремонт ГБЦ без снятия ГБЦ (притирка клапанов + замена
                  прокладок + замена маслосъемных колпачков)
                </h3>
                <span>Цена: от 4000₽</span>
              </div>
              <div className={classes.info}>
                <h3>Замена ГРМ (рядный ДВС одновальный SOHC)</h3>
                <span>Цена: от 4500₽</span>
              </div>

              <div className={classes.info}> 
                <h3>Замена ГРМ (рядный ДВС двухвальный DOHC)</h3>
                <span>Цена: от 6500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена ГРМ (V-образный ДВС одновальный SOHC)</h3>
                <span>Цена: от 8000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена ГРМ (V-образный ДВС двухвальный DOHC)</h3>
                <span>Цена: от 9000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена прокладки ГБЦ</h3>
                <span>Цена: от 15000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Капитальный ремонт * ДВС (рядный ДВС 4-х циллиндровый)
                </h3>
                <span>Цена: от 35000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Капитальный ремонт * ДВС (рядный ДВС 5-ти циллиндровый)
                </h3>
                <span>Цена: от 45000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Капитальный ремонт * ДВС (рядный ДВС 6-ти циллиндровый)
                </h3>
                <span>Цена: от 55000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Капитальный ремонт * ДВС (V-образный ДВС 6-ти, 8-ми циллиндровый)
                </h3>
                <span>Цена: от 65000₽</span>
              </div>
          </TabPanel>
          <TabPanel>
          <div className={classes.info}> 
                <h3>Замер компрессии (1-го циллиндра)
                </h3>
                <span>Цена: от 250₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена приводного ремня
                </h3>
                <span>Цена: от 450₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена сальника
                </h3>
                <span>Цена: от 500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>С/у шкива
                </h3>
                <span>Цена: от 500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена ролика
                </h3>
                <span>Цена: от 500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена натяжителя
                </h3>
                <span>Цена: от 600₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена прокладки клапанной крышки
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена помпы (без учета стоимости с/у ГРМ)
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена термостата
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>С/у маховика
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Чистка клапана холостого хода
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена общего приводного ремня
                </h3>
                <span>Цена: от 1500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Чистка дроссельной заслонки (с адаптацией)
                </h3>
                <span>Цена: от 1500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Чистка инжектора (без расходных материалов)
                </h3>
                <span>Цена: от 1800₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена прокладки поддона картера
                </h3>
                <span>Цена: от 2000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Регулировка клапанов (рядный ДВС 4-х циллиндровый)
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена ШРУСа
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена пыльника ШРУСа
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel> <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
    
    </section>
  );
};

export default SectionPrice;
