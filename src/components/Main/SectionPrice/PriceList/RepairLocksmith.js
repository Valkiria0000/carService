import classes from "./PriceList.module.css";

const RepairLocksmith = (props) => {

  let repairLocksmith = props.store
  return (repairLocksmith.state.repairLocksmith.map((elem) => (
    <div className={classes.info} key={elem.id}>
      <h3>{elem.title}</h3>
      <span>{elem.price}</span>
    </div>
  )))
};
export default RepairLocksmith;
