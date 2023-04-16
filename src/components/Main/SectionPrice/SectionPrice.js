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
                <span>Цена: 630 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  Прокачка контура сцепления
                </h3>
                <span>Цена: 630 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  Замена главного циллиндра сцепления
                </h3>
                <span>Цена: 1500 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  С/у АКПП(МКПП)легкового моноприводного а/м
                </h3>
                <span>Цена: 6000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                 Сборка/разборка АКПП (МКПП) легкового моноприводного а/м
                </h3>
                <span>Цена: 7000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  С/у АКПП (МКПП) полноприводного а/м
                </h3>
                <span>Цена: 8000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                 Сборка/разборка АКПП (МКПП) полноприводного а/м
                </h3>
                <span>Цена: 9000₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                Сборка/разборка АКПП (МКПП) тяжелого внедорожного а/м
                </h3>
                <span>Цена: 12000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                С/у АКПП (МКПП) тяжелого внедорожного а/м
                </h3>
                <span>Цена: 13000 ₽</span>
              </div>
              <div className={classes.info}>
                <h3>
                  Ремонт ГБЦ без снятия ГБЦ (притирка клапанов + замена
                  прокладок + замена маслосъемных колпачков)
                </h3>
                <span>Цена: 4000р</span>
              </div>
              <div className={classes.info}>
                <h3>Замена ГРМ (рядный ДВС одновальный SOHC)</h3>
                <span>Цена: 4500р</span>
              </div>

              <div className={classes.info}> 
                <h3>Замена ГРМ (рядный ДВС двухвальный DOHC)</h3>
                <span>Цена: 6500р</span>
              </div>
           
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
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
