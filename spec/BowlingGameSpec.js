
describe("BowlingGame",function() {
  "use strict"
  var game;

  beforeEach(function(){
    game = new BowlingGame();

  });

  describe('on new game, ',function(){
    it('score is 0',function() {
      expect(game.total_score()).toEqual(0);
    });
  });

  describe('rolls,  ',function(){
    beforeEach(function(){
      BowlingGame.prototype.rollMany = function(times, pins) {
        for (var i=0; i<times; i++) {
          game.roll(pins);
        }
      };
    });
    it('gutter game, score is zero',function(){
      game.rollMany(20,0);
      expect(game.total_score()).toEqual(0);
    });

    it('with rolls of 1, score is 20',function(){
      game.rollMany(20,1);
      expect(game.total_score()).toEqual(20);
    });

    it('F1R1:1, F1R2:9, (spare), F2R1: 5, F2R2: 0 gives score 20', function(){
      game.roll(1);
      game.roll(9);
      game.roll(5);
      game.rollMany(17,0);
      expect(game.total_score()).toEqual(20);
    });

  });
});
