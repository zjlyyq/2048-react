import { createStore } from "redux";
import * as actionTypes from "./actionsType";
import {
  handleDownMove,
  handleLeftMove,
  handleRightMove,
  handleUpMove,
  check
} from "./move";

const initState = {
  board: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, 0]
  ],
  score: 0
};

// reducer
const reducer = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.ADD_SCORE:
      return Object.assign({}, state, { score: state.score + action.playLoad });
    case actionTypes.MOVE_LEFT:
      newState = handleLeftMove(state.board);
      return Object.assign({}, state, {
        board: newState.board,
        score: state.score + newState.score
      });
    case actionTypes.MOVE_RIGHT:
      newState = handleRightMove(state.board);
      return Object.assign({}, state, {
        board: newState.board,
        score: state.score + newState.score
      });
    case actionTypes.MOVE_UP:
      newState = handleUpMove(state.board);
      return Object.assign({}, state, {
        board: newState.board,
        score: state.score + newState.score
      });
    case actionTypes.MOVE_DOWN:
      newState = handleDownMove(state.board);
      return Object.assign({}, state, {
        board: newState.board,
        score: state.score + newState.score
      });
    case actionTypes.CHECK:
      return Object.assign({}, state, { board: check(state.board) });
    default:
      return state;
  }
};

const store = createStore(reducer);

// actioncreator
// function moveLeft() {
//   return {
//     type: actionTypes.MOVE_LEFT
//   };
// }
// function addScore(score) {
//   return {
//     type: actionTypes.ADD_SCORE,
//     playLoad: score
//   };
// }
// const unsubscribe = store.subscribe(() => console.log("new", store.getState()));
// store.dispatch(moveLeft());
// store.dispatch(addScore(2));
// //  注意 subscribe() 返回一个函数用来注销监听器
// unsubscribe();

export default store;
