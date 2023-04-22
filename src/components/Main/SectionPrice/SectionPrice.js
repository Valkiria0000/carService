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
            <Tab>Ремонт двигателя</Tab>
            <Tab>Слесарный ремонт</Tab>
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
              <div className={classes.info}> 
                <h3>С/у подрамника
                </h3>
                <span>Цена: от 3000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>С/у рулевой рейки легкового а/м
                </h3>
                <span>Цена: от 5000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>С/у рулевой рейки внедорожника
                </h3>
                <span>Цена: от 8000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена продольного рычага
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена поперечного рычага
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена рулевой тяги
                </h3>
                <span>Цена: от 900₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена суппорта в сборе
                </h3>
                <span>Цена: от 1000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена тормозного диска + замена колодок
                </h3>
                <span>Цена: от 1100₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена верхнего рычага
                </h3>
                <span>Цена: от 1300₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена треугольного рычага
                </h3>
                <span>Цена: от 1500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена приводного вала (в сборе)
                </h3>
                <span>Цена: от 1800₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Регулировка развал схождения малый и средний класс
                </h3>
                <span>Цена: от 1800₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена заднего амортизатора
                </h3>
                <span>Цена: от 2000₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена заднего продольного рычага
                </h3>
                <span>Цена: от 2200₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Регулировка развал схождения представительский класс, внедорожники, минивэны
                </h3>
                <span>Цена: от 2200₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена переднего амортизатора + опорного подшипника + пружины
                </h3>
                <span>Цена: от 2250₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена задних тормозных колодок (барабанные)
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена вакуумного усилителя тормозов
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
              <div className={classes.info}> 
                <h3>Замена подшипника ступицы
                </h3>
                <span>Цена: от 2500₽</span>
              </div>
             
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
