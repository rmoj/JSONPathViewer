/*
 * JSONPathViewer
 * Author: Rene Mojica
 * Date: August 8, 2018
 * 
 */

$('#submit').on('click', function() {
  event.preventDefault();

  var qURL = $('#queryURL-input')
    .val()
    .trim();
  if (qURL != '') {
    getJson(qURL);
  }
});

function getJson(queryURL) {
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    .then(function(response) {
      hop(response, 0, 'response');
    })
    .catch(function(error) {
      console.log(error);
    });
}

function showPath(level, path) {
  var nbsp = '\u00A0';
  var dv = $('<div>');
  dv.text('level: ' + level + nbsp + nbsp + ' path: ' + path);
  $('#output').append(dv);
}

function hop(node, level, path) {
  var addToPath, newNode, nodePath;

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
      nodePath = path + addToPath + '.' + element;
      console.log('level: ' + level + '  path: ' + nodePath);
      //showPath(level, nodePath);  //enable this to show all nodes
      hop(child, level + 1, nodePath);
    });
  } else {
    showPath(level, path);
    console.log('done');
  }
}
