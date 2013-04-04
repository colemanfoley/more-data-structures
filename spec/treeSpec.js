describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  describe("addChild",function(){
  
    it("should be a method", function() {
      expect(tree.addChild).toEqual(jasmine.any(Function));
    });

    it("should increase the length of the children array by one when called", function(){
      tree.addChild("A");
      expect(tree.children.length).toEqual(1);
    });

    it("should increase the length of the grand children array by one when called", function(){
      tree.addChild("A");
      tree.children[0].addChild("a");
      expect(tree.children[0].children.length).toEqual(1);
    });

    it("should add a first node to an empty tree",function(){
      tree.addChild("a");
      expect(tree.contains("a")).toBe(true);
    });

  });

  describe("contains",function(){
    it("should be a method", function() {
      expect(tree.contains).toEqual(jasmine.any(Function));
    });

    it("should return true if we ask it if it contains a given  1st-gen child",function(){
      tree.addChild("a");
      tree.addChild("b");
      expect(tree.contains("a")).toBe(true);
      expect(tree.contains("b")).toBe(true);
     
    });

    it("should return false if we ask it if it contains a given  1st-gen child that's not there",function(){
      tree.addChild("a");
      tree.addChild("b");
      expect(tree.contains("c")).toBe(false);     
    });

    it("should return true if we ask it if it contains a given 2nd-gen child",function(){
      tree.addChild("A");
      tree.addChild("B");
      tree.children[0].addChild("a");
      tree.children[0].addChild("b");
      expect(tree.children[0].contains("a")).toBe(true);
      expect(tree.children[0].contains("b")).toBe(true);
    });

    it("should return false if we ask it if it contains a given 2nd-gen child that is not there",function(){
      tree.addChild("A");
      tree.addChild("B");
      tree.children[0].addChild("a");
      tree.children[0].addChild("b");
      expect(tree.children[0].contains("c")).toBe(false);
      
    });

  });
  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});