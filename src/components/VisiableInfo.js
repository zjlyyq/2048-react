import { connect } from "react-redux";
import Info from "./Info";

const mapStateToProps = (state) => ({
  score: state.score
});
const VisiableInfo = connect(mapStateToProps)(Info);
export default VisiableInfo;
