const Game = require("../../solution/game.js");
const Board = require("../../solution/board.js");

const POS = [
  [0, 0], [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 2],
  [2, 0], [2, 1], [2, 2]
];

class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $ul = this.board;

    $ul.on("click", '.box', e => {
      console.log("test");
      let $box = $(e.target);
      let pos = $box.data("pos");

      if (this.game.board.isEmptyPos(pos) && Board.isValidPos(pos)) {
        this.game.playMove(pos);
        this.makeMove($box);
      } else {
        alert("You suck at this game!");
      }

      if (this.game.board.winner()) {
        alert(`${this.game.board.winner()} has LOST!!!`);
      }
    });
  }

  makeMove($box) {
    $box.addClass(this.game.currentPlayer);
    $box.text(this.game.currentPlayer);
  }


  setupBoard() {
    let $ul = $('<ul></ul>');
    $ul.addClass('board');

    for (let i = 0; i < 9; i ++) {
      let $li = $('<li></li>');
      $li.addClass('box');
      $li.data("pos", POS[i]);
      $ul.append($li);
    }

    this.board.append($ul);
  }
}

module.exports = View;
