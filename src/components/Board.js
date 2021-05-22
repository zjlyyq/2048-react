import Cell from "./Cell";
const startPos = {};
const endPos = {};
const Board = (props) => {
  const { moveLeft, moveRight, moveUp, moveDown, check } = props;
  const touchEnd = (e) => {
    const [dx, dy] = [endPos.x - startPos.x, endPos.y - startPos.y];
    console.log(endPos, startPos);
    if (dx < 0) {
      if (dy > 0) {
        if (dy > -dx) {
          console.log("Down");
          moveDown();
        } else {
          console.log("Left");
          moveLeft();
        }
      } else {
        if (-dy > -dx) {
          console.log("Up");
          moveUp();
        } else {
          console.log("left");
          moveLeft();
        }
      }
    } else {
      if (dy > 0) {
        if (dy > dx) {
          console.log("Down");
          moveDown();
        } else {
          console.log("Right");
          moveRight();
        }
      } else {
        if (-dy > dx) {
          console.log("Up");
          moveUp();
        } else {
          console.log("Right");
          moveRight();
        }
      }
    }
    check();
  };
  const touchStart = (e) => {
    console.log(e);
    startPos.x = e.touches[0].clientX;
    startPos.y = e.touches[0].clientY;
  };
  const touchMove = (e) => {
    endPos.x = e.touches[0].clientX;
    endPos.y = e.touches[0].clientY;
  };
  const boardState = props.board || [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, 0]
  ];

  const rows = [];
  let count = 0;
  for (let row of boardState) {
    // 4. 组件 & Props
    const cells = row.map((state, index) => <Cell val={state} key={index} />);
    const Row = (
      <div className="rows" key={count}>
        {cells}
      </div>
    );
    rows.push(Row);
    count++;
  }
  return (
    <div
      id="container"
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
    >
      {rows}
    </div>
  );
};
export default Board;
