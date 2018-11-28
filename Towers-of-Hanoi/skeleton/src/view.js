class View {
  constructor(game, $rootEl) {
    this.game = game;
    this.board = $rootEl;
    this.setupTowers();
    this.render();
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

  render() {

  }
}

module.exports = View;
