describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  describe("set", function(){
    it("should be a method", function() {
      expect(hashTable.set).toEqual(jasmine.any(Function));
    });

    it("should assign a unique index to a given key, store the value at that index", function(){
      hashTable.set("dog", "friendly animal");
      hashTable.set("cat", "mean animal");
      expect(hashTable.get("dog")).toEqual("friendly animal");
      expect(hashTable.get("cat")).toEqual("mean animal");
    });

    it("should assign a unique index to a given key, in the case of a conflict of indices", function(){
      hashTable.set("dog", "friendly animal");
      hashTable.set("cat", "mean animal");
      expect(hashTable.get("dog")).toEqual("friendly animal");
      expect(hashTable.get("cat")).toEqual("mean animal");
    });


  });

  it("should have a method named 'get'", function() {
    expect(hashTable.get).toEqual(jasmine.any(Function));
  });




});