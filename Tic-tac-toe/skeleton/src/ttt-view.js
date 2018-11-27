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
  }

  bindEvents() {

  }

  makeMove($square) {}


  setupBoard() {
    let $ul = $('<ul></ul>');
    $ul.addClass('board');
    
    for (let i = 0; i < 9; i ++) {
      let $li = $('<li>TEST</li>');
      $li.addClass('box');
      $li.data("pos", POS[i]);
      $ul.append($li);
    }
    this.board.append($ul);
  }
}

module.exports = View;
