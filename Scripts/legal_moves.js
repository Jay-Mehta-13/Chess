let get_piece = function (cell) {
  try {
    return cell.children[0].getAttribute("name");
  } catch (error) {
    return null;
  }
};

let get_position = function (cell) {
  let cols = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
  let rows = {
    one: 0,
    two: 1,
    three: 2,
    four: 3,
    five: 4,
    six: 5,
    seven: 6,
    eight: 7,
  };
  return {
    row: rows[cell.parentElement.className.split(" ")[0]],
    col: cols[cell.className[0]],
  };
};

let check_valid_moves = async function (piece_name, position, chessboard) {
  try {
    let rep = await fetch(`http://localhost:3000/valid_moves/${piece_name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        position: position,
        chessboard: chessboard,
      }),
    });
    return await rep.json();
  } catch (error) {
    console.log(error);
  }
};

let highlight_cells = function (cells) {
  let rows = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
  cells.forEach((cell) => {
    let cell_row = document.querySelector(`.${rows[cell.row]}`);
    let cell_col = cell_row.children[cell.col];
    cell_col.classList.toggle("valid_move");
    if (cell_col.classList.contains("valid_move")) {
      cell_col.addEventListener("click", () =>
        move_piece(cell_col, document.querySelector(".selected"))
      );
    } else {
      cell_col.removeEventListener("click", () =>
        move_piece(cell_col, document.querySelector(".selected"))
      );
    }
  });
};

let move_piece = function (final, initial) {
  let svg = initial.children[0];
  final.appendChild(svg);
};
