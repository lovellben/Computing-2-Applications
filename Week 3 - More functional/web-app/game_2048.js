//const board = [
 //   [1, 1, 0, 0],
 //   [1, 0, 2, 0],
 //   [0, 2, 0, 2],
 //   [1, 1, 2, 0],

const game_2048 = Object.create(null);

// The identity function returns whatever it is passed. i.e does nothing.
const identity = (x) => x;

game_2048.left = identity;// this is a placeholder for a correct implementation

const row_flip = (row) => row.slice().reverse();
const h_flip = (board) => board.map(row_flip);

game_2048.right = (board) => h_flip(game_2048.left(h_flip(board)));

game_2048.up = identity;

game_2048.down = identity;

export default Object.freeze(game_2048);
