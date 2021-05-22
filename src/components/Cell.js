const Cell = (props) => {
  const bits = "bits-" + props.val;
  return <div className={"cols " + bits}>{props.val > 0 ? props.val : ""}</div>;
};

export default Cell;
