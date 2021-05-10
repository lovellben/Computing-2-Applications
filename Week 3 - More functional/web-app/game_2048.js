//const board = [
 //   [1, 1, 0, 0],
 //   [1, 0, 2, 0],
 //   [0, 2, 0, 2],
 //   [1, 1, 2, 0],

const game_2048 = Object.create(null);

// The identity function returns whatever it is passed. i.e does nothing.
const identity = (x) => x;

const pad_zeros = (row) => row.concat(new Array )

const row_left = (row) => pad_zeros(combine_tiles(strip_zeros()));

game_2048.left = (board) => board.map(row_left);// this is a placeholder for a correct implementation

const row_flip = (row) => row.slice().reverse();
const h_flip = (board) => board.map(row_flip);

game_2048.right = (board) => h_flip(game_2048.left(h_flip(board)));

game_2048.up = identity;

game_2048.down = identity;

export default Object.freeze(game_2048);
