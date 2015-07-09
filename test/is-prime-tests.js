describe('isPrime', function() {

  it('should return true if prime', function() {
    expect(prime(2)).to.eql(true);
    expect(prime(491)).to.eql(true);
    expect(prime(997)).to.eql(true);
  });

  it('should return false if not prime', function() {
    expect(prime(1)).to.eql(false);
    expect(prime(123)).to.eql(false);
    expect(prime(777)).to.eql(false);
  });

  xit('should work for big numbers', function() {
    expect(prime(10007)).to.eql(true);
    expect(prime(10001)).to.eql(false);
  });

});



