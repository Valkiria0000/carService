import classes from "./PriceList.module.css";

const RepairEngine = (props) => {

  let repairEngine = props.store
  return (repairEngine.state.repairEngine.map((elem) => (
    <div className={classes.info} key={elem.id}>
      <h3>{elem.title}</h3>
      <span>{elem.price}</span>
    </div>
  )))
};
export default RepairEngine;
