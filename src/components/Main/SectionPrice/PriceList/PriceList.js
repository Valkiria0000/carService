import classes from "./PriceList.module.css";

const PriceList = (props) => {
  let repairClutch = props.store
  return (repairClutch.state.repairClutch.map((elem) => (
    <div className={classes.info} key={elem.id}>
      <h3>{elem.title}</h3>
      <span>{elem.price}</span>
    </div>
  )))
};
export default PriceList;
