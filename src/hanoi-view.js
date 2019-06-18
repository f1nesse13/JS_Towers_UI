class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }
}

HanoiView.prototype.setupTowers = function() {
  const that = this;
  for (let i = 0; i < 3; i++) {
    const newUl = $('<ul>').attr('datapos', i);
    $(this.$el).append(newUl);
  }
  for (let y = 0; y < 3; y++) {
    const newLi = $('<li>').attr('datapos', y);
    $(this.$el)
      .find('ul:first-of-type')
      .append(newLi);
  }
};

View.prototype.render = function() {};

module.exports = HanoiView;
