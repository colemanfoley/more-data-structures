// Note: don't use an object to store the inserted elements.
var makeHashTable = function(){
  var max = 50;
  var storage = new Array(50);
  
  var i = 0;
  
  while(i < 50){
    storage[i] = makeLinkedList();
    i++;
  }
  var hashTable = {
    
    set: function(key, value){
      var index  = utilities.getIndexBelowMaxForKey(key, max);              
      storage[index].insert([key, value]);
    },
  
    get: function(key){
      var index = utilities.getIndexBelowMaxForKey(key, max);
      var currentLinkedList = storage[index];
      value = currentLinkedList.getContents(key);  
      return value;    
    }
  };
  return hashTable;
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key

// REFACTOR - take this function out of the object when you find jasmines spy for a naked function
var utilities = {
  getIndexBelowMaxForKey: function(str, max){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
      hash = (hash<<5) - hash;
      hash = hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash % max;
  }
};





//old get and set
    // set: function(key, value){
    //   var index  = getIndexBelowMaxForKey(key, max);
    //   if (!storage[index]) {
    //     storage[index] = value;
    //   };
    //   else{
    //     var i = 0;
    //     while(storage[i]){
    //       i++;
    //     }
    //     storage[i] = value;
    //   }
    //   conflictKeys[i] = key;

    //     //conflictStorage[i];
      

    // },
  
    // get: function(key){
    //   var index = getIndexBelowMaxForKey(key, max);
    //   var i = 0;
    //   while(conflictKeys(i)!=key) {
    //     if(conflictKeys(i) = key) return storage[i]
    //     else return storage[index];
    //     i++;
    //   }

    // }
