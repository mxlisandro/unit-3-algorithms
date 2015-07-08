describe('bubbleSort', function() {
  it('should sort numbers', function() {
    for (var i = 0; i < 10; i++) {
      var smallArray = makeList(100);

      expect(bubbleSort(smallArray)).to.eql(smallArray.sort(inc));

    }
  });

  it('should sort very large arrays', function() {
    var largeArray = makeList(10000);

    expect(bubbleSort(largeArray)).to.eql(largeArray.sort(inc));
  });

});

function makeList(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random()*num));
  }
  return arr;
}

function inc(a,b) {
  return a-b;
}
