describe("Creator Controller Tests", function() {
  beforeEach(angular.mock.module('creatorApp'));

  it('should have a creator controller', function() {
    expect(App.creatorController).toBeDefined();
  });
});
