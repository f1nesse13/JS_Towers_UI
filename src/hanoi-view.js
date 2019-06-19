/* eslint-disable prefer-const */
class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.moveFrom = '';
    this.setupTowers();
    this.render();
    this.clickTower();
  }
}

HanoiView.prototype.setupTowers = function() {
  const that = this;
  for (let i = 0; i < 3; i++) {
    const newUl = $('<ul>')
      .addClass(`tower-${i}`)
      .attr('tower', i);
    $(this.$el).append(newUl);
  }
  for (let y = 0; y < 3; y++) {
    const newLi = $('<li>')
      .addClass(`disc-${y + 1}`)
      .attr('disc', y);
    $(this.$el)
      .find('ul:first-of-type')
      .append(newLi);
  }
};

HanoiView.prototype.render = function() {
  for (let i = 0; i < 3; i++) {
    for (let y = 0; y < 3; y++) {
      if (this.game.towers[i][y]) {
        let discEl = $(`.disc-${this.game.towers[i][y]}`);
        $(`.tower-${i}`)
          .append(discEl)
          .append(`<h1>${y + 1}</h1>`);
      }
    }
  }
};

HanoiView.prototype.clickTower = function() {
  let that = this;
  $('ul').on('click', function(e) {
    // gets towers index (stored in tower attribute)
    let towerIndex = $(this).attr('tower');
    try {
      // stores instance variable if it doesn't exist or calls move if it does
      if (that.moveFrom) {
        // removes background color of selected element
        $(`.tower-${that.moveFrom}`).removeClass('selected');
        that.game.move(parseInt(that.moveFrom), parseInt(towerIndex));
        this.moveFrom = '';
      } else {
        $(this).addClass('selected');
        that.moveFrom = towerIndex;
      }
    } catch (error) {
      alert('invalid move');
      console.log(error);
    }
  });
};

module.exports = HanoiView;
