describe('mergeSort', function() {
  it('should sort numbers', function() {
    for (var i = 0; i < 10; i++) {
      var smallArray = makeList(100);

      expect(mergeSort(smallArray)).to.eql(smallArray.sort(inc));

    }
  });

  it('should sort very large arrays', function() {
    var largeArray = makeList(10000);

    expect(mergeSort(largeArray)).to.eql(largeArray.sort(inc));
  });

  it('should sort very large array in nlog(n) time', function() {
    var largeArray = makeList(100000);
    var start = Date.now();
    mergeSort(largeArray);
    var sortTime = Date.now() - start;
    expect(sortTime).to.be.lessThan(200);
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
