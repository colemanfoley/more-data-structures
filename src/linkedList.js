// Note: don't use an array to do this.
var makeLinkedList = function(){
  var linkedList = {  
    head: null,
    insert: function(contents){
      var newNode = {contents: contents, next: null};
      var currentNode = linkedList.head;
      if(currentNode === null){
        linkedList.head = newNode;
      }
      else {
        while(currentNode.next != null){
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
     },

    contains: function(value){
      var currentNode = linkedList.head;
      var bool = false;
      if (currentNode.contents === value) {
          bool = true;
      }     
      else{
        while(currentNode.next != null){
          if (currentNode.contents === value) {
            bool = true;
          }
          else{
            currentNode = currentNode.next;
          }
        }
      }
      return bool;
    },

    getContents: function(key){
      var currentNode = linkedList.head;
  
      if (currentNode.contents[0] === key) {
          return currentNode.contents[1];
      }     
      else{
        while(currentNode.next != null){
          if (currentNode.contents[0] === key) {
            return currentNode.contents[1];
          }
          else{
            currentNode = currentNode.next;
          }
        }
      }
    }
  };
  return linkedList;
};


