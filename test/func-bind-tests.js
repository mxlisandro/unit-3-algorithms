describe('functionBind', () => {
  var matt;
  var bob;

  beforeEach(() => {
    matt = {name: "matt", shout: function() {return this.name;}};
    bob = {name: "bob"};
  });

  it('should use the context it is bound to', () => {
    var boundShout = functionBind(matt.shout, matt);
    expect(boundShout()).to.be("matt");
    boundShout = functionBind(matt.shout, bob);
    expect(boundShout()).to.be("bob");
  });

 });



