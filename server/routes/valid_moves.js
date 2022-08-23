const express = require("express");
const router = express.Router();
const { pieces } = require("../pieces");

let white_pawn_moved = [0, 0, 0, 0, 0, 0, 0, 0];

//Check valid moves for given piece and arrangement
router.post("/white_pawn", (req, res) => {
  let position = req.body.position;
  let chessboard = req.body.chessboard;
  let valid_moves = [];
  let forward = { row: position.row + 1, col: position.col };
  let forward_double = { row: position.row + 2, col: position.col };
  let forward_left = { row: position.row + 1, col: position.col - 1 };
  let forward_right = { row: position.row + 1, col: position.col + 1 };
  if (white_pawn_moved[position.col] == 0) {
    valid_moves.push(forward_double);
    white_pawn_moved[position.col] = 1;
  }
  if (
    chessboard[forward.row][forward.col] == null &&
    8 > forward.row > -1 &&
    8 > forward.col > -1
  ) {
    valid_moves.push(forward);
  }
  if (
    chessboard[forward_left.row][forward_left.col] != null &&
    8 > forward_left.row > -1 &&
    8 > forward_left.col > -1
  ) {
    valid_moves.push(forward_left);
  }
  if (
    chessboard[forward_right.row][forward_right.col] != null &&
    8 > forward_right.row > -1 &&
    8 > forward_right.col > -1
  ) {
    valid_moves.push(forward_right);
  }
  res.send(valid_moves);
});

module.exports = router;
