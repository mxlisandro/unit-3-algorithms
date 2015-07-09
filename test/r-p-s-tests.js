describe('rockPaperScissors', function() {
  it('should return all combinations of results for 0 games', function() {
    expect(rockPaperScissors(0)).to.eql([]);
  });

  it('should return all combinations of results for 1 game', function() {
    var actual = rockPaperScissors(1);
    var expected = [['rock'],['paper'],['scissors']];
    expect(actual).to.have.length(expected.length);
    for (var i = 0; i < expected.length; i++) {
        expect(actual).to.contain(expected[i]);
    }
  });

  it('should return all combinations of results for 2 games', function() {
    var actual = rockPaperScissors(2);
    var expected = [['rock','rock'],['rock','paper'],['rock','scissors'],['paper','paper'],['paper','scissors'],['paper','rock'],['scissors','scissors'],['scissors','paper'],['scissors','rock']];
    expect(actual).to.have.length(expected.length);
    for (var i = 0; i < expected.length; i++) {
        expect(actual).to.contain(expected[i]);
    }
  });

 });



