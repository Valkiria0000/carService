import classes from "./PriceList.module.css";

const Maintenance = (props) => {

  let maintenance = props.store
  return (maintenance.state.maintenance.map((elem) => (
    <div className={classes.info} key={elem.id}>
      <h3>{elem.title}</h3>
      <span>{elem.price}</span>
    </div>
  )))
};
export default Maintenance;
