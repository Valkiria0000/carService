import classes from "./SectionPrice.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const SectionPrice = () => {
  return (
    <div className={classes.price}>
      <h2 className="title">Услуги</h2>
      <div className={classes.container}>
        <Tabs>
          <TabList>
            <Tab>Ремонт КПП и сцепления</Tab>
            <Tab>Слесарный ремонт</Tab>
            <Tab>Ремонт двигателя</Tab>
            <Tab>Тех.обслуживание

            </Tab>
          </TabList>

          <TabPanel>
            <div>
              <div>
                <h3>
                  Замена сцепления(комплект)
                </h3>
                <p>Цена: от 6000 ₽</p>
              </div>
              <div>
                <h3>
                  Замена рабочего циллиндра сцепления
                </h3>
                <p>Цена: 630 ₽</p>
              </div>
              <div>
                <h3>
                  Прокачка контура сцепления
                </h3>
                <p>Цена: 630 ₽</p>
              </div>
              <div>
                <h3>
                  Замена главного циллиндра сцепления
                </h3>
                <p>Цена: 1500 ₽</p>
              </div>
              <div>
                <h3>
                  С/у АКПП(МКПП)легкового моноприводного а/м
                </h3>
                <p>Цена: 6000 ₽</p>
              </div>
              <div>
                <h3>
                 Сборка/разборка АКПП (МКПП) легкового моноприводного а/м
                </h3>
                <p>Цена: 7000 ₽</p>
              </div>
              <div>
                <h3>
                  С/у АКПП (МКПП) полноприводного а/м
                </h3>
                <p>Цена: 8000 ₽</p>
              </div>
              <div>
                <h3>
                 Сборка/разборка АКПП (МКПП) полноприводного а/м
                </h3>
                <p>Цена: 9000₽</p>
              </div>
              <div>
                <h3>
                Сборка/разборка АКПП (МКПП) тяжелого внедорожного а/м
                </h3>
                <p>Цена: 12000 ₽</p>
              </div>
              <div>
                <h3>
                С/у АКПП (МКПП) тяжелого внедорожного а/м
                </h3>
                <p>Цена: 13000 ₽</p>
              </div>
              <div>
                <h3>
                  Ремонт ГБЦ без снятия ГБЦ (притирка клапанов + замена
                  прокладок + замена маслосъемных колпачков)
                </h3>
                <p>Цена: 4000р</p>
              </div>
              <div>
                <h3>Замена ГРМ (рядный ДВС одновальный SOHC)</h3>
                <p>Цена: 4500р</p>
              </div>

              <div>
                <h3>Замена ГРМ (рядный ДВС двухвальный DOHC)</h3>
                <p>Цена: 6500р</p>
              </div>
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
    </div>
  );
};

export default SectionPrice;
