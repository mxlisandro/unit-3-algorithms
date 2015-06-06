describe('coinSum', function() {
  it('should work for under small amounts', function() {
    expect(coinSum(1)).to.eql(1);
    expect(coinSum(2)).to.eql(2);
    expect(coinSum(3)).to.eql(2);
    expect(coinSum(4)).to.eql(3);
    expect(coinSum(5)).to.eql(4);
    expect(coinSum(6)).to.eql(5);
    expect(coinSum(7)).to.eql(6);
    expect(coinSum(8)).to.eql(7);
    expect(coinSum(9)).to.eql(8);
    expect(coinSum(10)).to.eql(11);
    expect(coinSum(11)).to.eql(12);
    expect(coinSum(12)).to.eql(15);
    expect(coinSum(13)).to.eql(16);
    expect(coinSum(14)).to.eql(19);
    expect(coinSum(15)).to.eql(22);
    expect(coinSum(16)).to.eql(25);
    expect(coinSum(17)).to.eql(28);
  });

  it('should not take too long', function() {
    expect(coinSum(100)).to.eql(2156);
    expect(coinSum(1000)).to.eql(1712051);
    expect(coinSum(10000)).to.eql(1133873304647601);
  });
});