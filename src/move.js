function handleUpMove(old_board) {
  const board = [];
  let score = 0;
  old_board.forEach((rows) => {
    board.push([].concat(rows));
  });
  for (let c = 0; c < board[0].length; c++) {
    const finalStates = []; // save the final states of current cols
    // double pointer
    for (let r = 0; r < board.length; ) {
      let cur_start = board[r][c];
      let next = -1;
      if (!cur_start) {
        r += 1;
        continue;
      }
      for (let e = r + 1; e < board.length; ) {
        const cur_end = board[e][c];
        if (!cur_end) {
          e += 1;
          continue;
        }
        if (cur_end === cur_start) {
          score += cur_end + cur_start;
          finalStates.push(cur_end + cur_start);
          next = e + 1;
          cur_start = 0;
        } else {
          finalStates.push(cur_start);
          cur_start = 0;
          next = e;
        }
        break;
      }
      r = next >= 0 ? next : r + 1;
      if (cur_start) {
        finalStates.push(cur_start);
      }
    }
    // console.log("UP:", finalStates);
    let _r = 0;
    while (_r < board.length) {
      if (_r < finalStates.length) board[_r][c] = finalStates[_r++];
      else board[_r++][c] = 0;
    }
  }
  return { board, score };
}
function handleDownMove(old_board) {
  const board = [];
  let score = 0;
  old_board.forEach((rows) => {
    board.push([].concat(rows));
  });
  for (let c = 0; c < board[0].length; c++) {
    let finalStates = []; // save the final states of current cols
    // double pointer
    for (let r = board.length - 1; r >= 0; ) {
      let cur_start = board[r][c];
      let next = -1;
      if (!cur_start) {
        r -= 1;
        continue;
      }
      for (let e = r - 1; e >= 0; ) {
        const cur_end = board[e][c];
        if (!cur_end) {
          e -= 1;
          continue;
        }
        if (cur_end === cur_start) {
          score += cur_end + cur_start;
          finalStates.push(cur_end + cur_start);
          cur_start = -1;
          next = e - 1;
        } else {
          finalStates.push(cur_start);
          cur_start = -1;
          next = e;
        }
        break;
      }
      r = next >= 0 ? next : r - 1;
      if (cur_start > -1) {
        finalStates.push(cur_start);
      }
    }
    // console.log("DOWM:", finalStates);
    finalStates.reverse();
    let _r = board.length - 1;
    let _index = finalStates.length - 1;
    while (_r >= 0) {
      if (_index >= 0) board[_r--][c] = finalStates[_index--];
      else board[_r--][c] = 0;
    }
  }
  return { board, score };
}
function handleLeftMove(old_board) {
  const board = [];
  let score = 0;
  old_board.forEach((rows) => {
    board.push([].concat(rows));
  });
  for (let r = 0; r < board.length; r++) {
    const finalStates = []; // save the final states of current cols
    // double pointer
    for (let c = 0; c < board[0].length; ) {
      let cur_start = board[r][c];
      let next = -1;
      if (!cur_start) {
        c += 1;
        continue;
      }
      for (let e = c + 1; e < board[0].length; ) {
        const cur_end = board[r][e];
        if (!cur_end) {
          e += 1;
          continue;
        }
        if (cur_end === cur_start) {
          score += cur_end + cur_start;
          finalStates.push(cur_end + cur_start);
          cur_start = 0;
          next = e + 1;
        } else {
          finalStates.push(cur_start);
          cur_start = 0;
          next = e;
        }
        break;
      }
      c = next >= 0 ? next : c + 1;
      if (cur_start) {
        finalStates.push(cur_start);
      }
    }
    // console.log("LEFT:", finalStates);
    let offset = board.length - finalStates.length;
    while (offset--) finalStates.push(0);
    board[r] = finalStates;
  }
  return { board, score };
}
function handleRightMove(old_board) {
  const board = [];
  let score = 0;
  old_board.forEach((rows) => {
    board.push([].concat(rows));
  });
  for (let r = 0; r < board.length; r++) {
    let finalStates = []; // save the final states of current cols
    // double pointer
    for (let c = board[0].length - 1; c >= 0; ) {
      let cur_start = board[r][c];
      let next = -1;
      if (!cur_start) {
        c -= 1;
        continue;
      }
      for (let e = c - 1; e >= 0; ) {
        const cur_end = board[r][e];
        if (!cur_end) {
          e -= 1;
          continue;
        }
        if (cur_end === cur_start) {
          score += cur_end + cur_start;
          finalStates.push(cur_end + cur_start);
          cur_start = 0;
          next = e - 1;
        } else {
          finalStates.push(cur_start);
          cur_start = 0;
          next = e;
        }
        break;
      }
      c = next >= 0 ? next : c - 1;
      if (cur_start) {
        finalStates.push(cur_start);
      }
    }
    // console.log("RIGHT:", finalStates);
    finalStates.reverse();
    let offset = board.length - finalStates.length;
    while (offset--) finalStates = [0, ...finalStates];
    board[r] = finalStates;
  }
  return { board, score };
}
function check(old_board) {
  const board = [];
  old_board.forEach((rows) => {
    board.push([].concat(rows));
  });
  let zeroSet = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // console.log(board[i][j]);
      if (board[i][j] === 0) {
        zeroSet.push([i, j]);
      }
    }
  }
  if (zeroSet.length === 0) {
    console.log("You Lost!");
    return;
  }
  let random = Math.floor(zeroSet.length * Math.random());
  let pos = zeroSet[random];
  board[pos[0]][pos[1]] = random % 2 ? 4 : 2;
  return board;
}
export { handleUpMove, handleDownMove, handleLeftMove, handleRightMove, check };
