class View {
  constructor(game, $rootEl) {
    this.game = game;
    this.board = $rootEl;
    this.setupTowers();
    this.renderBoard();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $ul = $("<ul></ul>");
      for (let j = 0; j < 3; j++) {
        let $li;
        if (i === 0) {
          $li = $("<li></li>");
          $li.addClass(`disk-${j + 1}`);
        } else {
          $li = $("<li></li>");
        }

        $ul.append($li);
      }
      this.board.append($ul);
    }
  }

  renderTower(gameArr, tower_idx) {
    const $tower = $("ul").eq(tower_idx);
    gameArr.reverse().forEach( (size, idx) => {
      let $disk = $tower.children().eq(idx);
      swapClass($disk, size);
    });
  }

  renderBoard() {
    this.game.towers.forEach( (tower, idx) => {
      this.renderTower(tower, idx);
    });
  }
}

function swapClass($li, size) {
  $li.removeClass().addClass(`disk-${size}`);
}



module.exports = View;
