describe('functionBind', function() {
  beforeEach(function() {
    var matt = {name: "matt", shout: function() {return this.name;}};
    var bob = {name: "bob"};
  });
  it('should use the context it is bound to', function() {
    var boundShout = functionBind(matt.shout, matt);
    expect(boundShout()).to.be("matt");
    boundShout = functionBind(matt.shout, bob);
    expect(boundShout()).to.be("bob");
  });

 });



