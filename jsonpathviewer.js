/*
 * JSONPathViewer
 * Author: Rene Mojica
 * Date: August 8, 2018
 * 
 */

function hop(node, level, path) {
  var addToPath, newNode;

  if (node == null) {
    return;
  }

  if (node === Object(node)) {
    if (Array.isArray(node)) {
      newNode = node[0];
      var addToPath = '[0]';
    } else {
      newNode = node;
      var addToPath = '';
    }

    var children = Object.keys(newNode);

    children.forEach(function(element) {
      var child = newNode[element];
      var nodePath = path + addToPath + '.' + element;
      p('level: ' + level + '  path: ' + nodePath);
      showPath(level, nodePath);
      hop(child, level + 1, nodePath);
    });
  } else {
    console.log('done');
  }
}
