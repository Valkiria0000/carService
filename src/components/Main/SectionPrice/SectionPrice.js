import classes from "./SectionPrice.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../../App.css";
import RepairClutch from "./PriceList/PriceList";
import RepairEngine from "./PriceList/RepairEngine";
import RepairLocksmith from "./PriceList/RepairLocksmith";
import Maintenance from "./PriceList/Maintenance";
const SectionPrice = (props) => {
  return (
    <section className={classes.price} id="section2">
      <div className={classes.wrapper}>
        <h2 className="title">Услуги</h2>
        <Tabs>
          <TabList>
            <Tab>Ремонт КПП и сцепления</Tab>
            <Tab>Ремонт двигателя</Tab>
            <Tab>Слесарный ремонт</Tab>
            <Tab>Тех.обслуживание</Tab>
          </TabList>
          <TabPanel>
            <RepairClutch store={props.store} />
          </TabPanel>
          <TabPanel>
            <RepairEngine store={props.store} />
          </TabPanel>
          <TabPanel>
            <RepairLocksmith store={props.store} />
          </TabPanel>{" "}
          <TabPanel>
            <Maintenance store={props.store} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default SectionPrice;
