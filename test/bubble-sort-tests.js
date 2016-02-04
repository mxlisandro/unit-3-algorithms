describe('bubbleSort', function() {
  it('should sort numbers', function() {
    for (var i = 0; i < 10; i++) {
      var smallArray = makeList(100);
      var clone = smallArray.slice();
      expect(bubbleSort(clone)).to.eql(smallArray.sort(inc));
    }
  });

  it('should sort very large arrays', function() {
    var largeArray = makeList(10000);
    var clone = largeArray.slice();
    expect(bubbleSort(clone)).to.eql(largeArray.sort(inc));
  });

  xit('should handle a very, very large but already sorted arrays', function() {
    var ultraArray = [];
    for (var i = 0; i < 10000000; i++) {
      ultraArray.push(i);
    }
    bubbleSort(arr);
    expect(arr[2000]).to.eql(2000);
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
