import { connect } from "react-redux";
import Board from "./Board";
import * as actionTypes from "../actionsType";

function moveLeft() {
  return {
    type: actionTypes.MOVE_LEFT
  };
}
function moveRight() {
  return {
    type: actionTypes.MOVE_RIGHT
  };
}
function moveUp() {
  return {
    type: actionTypes.MOVE_UP
  };
}
function moveDown(score) {
  return {
    type: actionTypes.MOVE_DOWN,
    playLoad: score
  };
}
function check() {
  return {
    type: actionTypes.CHECK
  };
}
const mapStateToProps = (state) => ({
  board: state.board
});
const mapDispatchToProps = (dispatch) => ({
  moveLeft: () => {
    dispatch(moveLeft());
  },
  moveRight: () => {
    dispatch(moveRight());
  },
  moveUp: () => {
    dispatch(moveUp());
  },
  moveDown: () => {
    dispatch(moveDown());
  },
  check: () => {
    dispatch(check());
  }
});
const VisiableBoard = connect(mapStateToProps, mapDispatchToProps)(Board);
export default VisiableBoard;
