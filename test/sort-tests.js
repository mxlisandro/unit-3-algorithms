describe('sort', function() {
  it('should sort numbers', function() {
    for (var i = 0; i < 10; i++) {
      var smallArray = makeList(100);
      expect(sort(smallArray)).to.eql(smallArray.sort());
    }
  });

  it('should sort very large arrays', function() {
    var largeArray = makeList(10000);
    expect(sort(largeArray)).to.eql(largeArray.sort());
  });
});

function makeList(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random()*num));
  }

  return arr;
}