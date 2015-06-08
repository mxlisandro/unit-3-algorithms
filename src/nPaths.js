/**
 *
 *  How many unique ways can one move from one corner of a n x n board to the other corner.
 *  You can move up, down, left, and right. You cannot visit spots that you have visited already.
 *  Make your solution work for a grid of any size.
 *
 */

// A Board class might be useful be useful

function makeBoard(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
}

function nPaths(size) {
  var board = makeBoard(size);
  function path(x, y, n) {


    // if invalid move
    if(x < 0 || x > n || y < 0 || y > n || board.hasBeenVisited(x, y)){
      return 0;
    }
    // if at opposite corner
    else if(x === n && y === n){
      return 1;

    } 
    board.togglePiece(x, y);

    var result = path(x+1, y, n) + path(x, y+1, n) + path(x-1, y, n) + path(x, y-1, n);


    board.togglePiece(x, y);
    return result;

  }

  return path(0, 0, size-1);
}