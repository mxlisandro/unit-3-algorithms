describe('nPaths', function() {
  it('should calculate paths for small board', function() {
    expect(nPaths(1)).to.eql(1);
    expect(nPaths(2)).to.eql(2);
    expect(nPaths(3)).to.eql(12);
  });

  it('should calculate paths for large board', function() {
    expect(nPaths(4)).to.eql(184);
    expect(nPaths(5)).to.eql(8512);
    expect(nPaths(6)).to.eql(1262816);
  });
});