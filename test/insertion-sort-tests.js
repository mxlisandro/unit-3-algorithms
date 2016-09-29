describe('insertionSort', () => {
  it('should sort numbers', () => {
    for (var i = 0; i < 10; i++) {
      var smallArray = makeList(100);
      var clone = smallArray.slice();
      expect(insertionSort(clone)).to.eql(smallArray.sort(inc));
    }
  });

  it('should sort very large arrays', () => {
    var largeArray = makeList(10000);
    var clone = largeArray.slice();
    expect(insertionSort(clone)).to.eql(largeArray.sort(inc));
  });

});

function makeList(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random() * num));
  }
  return arr;
}

function inc(a,b) {
  return a - b;
}
