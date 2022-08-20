let selected_cell = null;

let initial_placement = function () {
  // Initial placement for black pieces
  let a8 = document.querySelector(".eight").querySelector(".a");
  let b8 = document.querySelector(".eight").querySelector(".b");
  let c8 = document.querySelector(".eight").querySelector(".c");
  let d8 = document.querySelector(".eight").querySelector(".d");
  let e8 = document.querySelector(".eight").querySelector(".e");
  let f8 = document.querySelector(".eight").querySelector(".f");
  let g8 = document.querySelector(".eight").querySelector(".g");
  let h8 = document.querySelector(".eight").querySelector(".h");

  let a7 = document.querySelector(".seven").querySelector(".a");
  let b7 = document.querySelector(".seven").querySelector(".b");
  let c7 = document.querySelector(".seven").querySelector(".c");
  let d7 = document.querySelector(".seven").querySelector(".d");
  let e7 = document.querySelector(".seven").querySelector(".e");
  let f7 = document.querySelector(".seven").querySelector(".f");
  let g7 = document.querySelector(".seven").querySelector(".g");
  let h7 = document.querySelector(".seven").querySelector(".h");

  a8.innerHTML = black_rook;
  b8.innerHTML = black_knight;
  c8.innerHTML = black_bishop;
  d8.innerHTML = black_queen;
  e8.innerHTML = black_king;
  f8.innerHTML = black_bishop;
  g8.innerHTML = black_knight;
  h8.innerHTML = black_rook;

  a7.innerHTML = black_pawn;
  b7.innerHTML = black_pawn;
  c7.innerHTML = black_pawn;
  d7.innerHTML = black_pawn;
  e7.innerHTML = black_pawn;
  f7.innerHTML = black_pawn;
  g7.innerHTML = black_pawn;
  h7.innerHTML = black_pawn;

  // Initial Placement for white pieces
  let a1 = document.querySelector(".one").querySelector(".a");
  let b1 = document.querySelector(".one").querySelector(".b");
  let c1 = document.querySelector(".one").querySelector(".c");
  let d1 = document.querySelector(".one").querySelector(".d");
  let e1 = document.querySelector(".one").querySelector(".e");
  let f1 = document.querySelector(".one").querySelector(".f");
  let g1 = document.querySelector(".one").querySelector(".g");
  let h1 = document.querySelector(".one").querySelector(".h");

  let a2 = document.querySelector(".two").querySelector(".a");
  let b2 = document.querySelector(".two").querySelector(".b");
  let c2 = document.querySelector(".two").querySelector(".c");
  let d2 = document.querySelector(".two").querySelector(".d");
  let e2 = document.querySelector(".two").querySelector(".e");
  let f2 = document.querySelector(".two").querySelector(".f");
  let g2 = document.querySelector(".two").querySelector(".g");
  let h2 = document.querySelector(".two").querySelector(".h");

  a1.innerHTML = white_rook;
  b1.innerHTML = white_knight;
  c1.innerHTML = white_bishop;
  d1.innerHTML = white_queen;
  e1.innerHTML = white_king;
  f1.innerHTML = white_bishop;
  g1.innerHTML = white_knight;
  h1.innerHTML = white_rook;

  a2.innerHTML = white_pawn;
  b2.innerHTML = white_pawn;
  c2.innerHTML = white_pawn;
  d2.innerHTML = white_pawn;
  e2.innerHTML = white_pawn;
  f2.innerHTML = white_pawn;
  g2.innerHTML = white_pawn;
  h2.innerHTML = white_pawn;

  return [
    [
      white_rook,
      white_knight,
      white_bishop,
      white_queen,
      white_king,
      white_bishop,
      white_knight,
      white_rook,
    ],
    [
      white_pawn,
      white_pawn,
      white_pawn,
      white_pawn,
      white_pawn,
      white_pawn,
      white_pawn,
      white_pawn,
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      black_rook,
      black_knight,
      black_bishop,
      black_queen,
      black_king,
      black_bishop,
      black_knight,
      black_rook,
    ],
    [
      black_pawn,
      black_pawn,
      black_pawn,
      black_pawn,
      black_pawn,
      black_pawn,
      black_pawn,
      black_pawn,
    ],
  ];
};
