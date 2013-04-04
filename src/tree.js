var makeTree = function(){
  var tree = {
    contents: null,
    children: [],
    parent: null,

    addChild: function(value){
      var child = makeTree();
      child.contents = value;
      tree.children.push(child);
      child.parent = tree;
    },

    contains: function(value){
      if(tree.contents === value){
        return true
      } else {
        for(x in tree.children){
          if(tree.children[x].contents === value){ 
            return true;
          } 
          
          else {
          tree.children[x].contains(value); 
          }
        }
        return false;
      }
    }
  };
  return tree;
}