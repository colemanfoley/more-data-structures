describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  describe("insert ", function(){
    it("should be a method", function() {
      expect(linkedList.insert).toEqual(jasmine.any(Function));
    });

    it("should, when the linked list is empty, make a new node that head points to", function(){
      linkedList.insert("test");      
      expect(linkedList.head.contents).toEqual("test");
    });    

    it("should, when the linked list is not empty, make a new node, but still have head \
      pointing to the first node", function(){
      linkedList.insert("test");
      linkedList.insert("test2");      
      expect(linkedList.head.contents).toEqual("test");
    });
  });


  describe("contains", function(){
    it("should have a method named 'contains'", function() {
      expect(linkedList.contains).toEqual(jasmine.any(Function));
    });

    it("should return true when passed a value that is in the linked list", function(){
      linkedList.insert("a");
      expect(linkedList.contains("a")).toBe(true);
    });
  
  it("should return false when passed a value that is not in the linked list", function(){
      linkedList.insert("a");
      expect(linkedList.contains("b")).not.toBe(true);
    });

  });
  // add more tests here to test the functionality of linkedList
});