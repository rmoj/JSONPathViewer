/*
 * JSONPathViewer
 * Author: Rene Mojica
 * Date: August 8, 2018
 * 
 */

$('#submit').on('click', function(event) {
  event.preventDefault();

  var qURL = $('#queryURL-input')
    .val()
    .trim();
  if (qURL != '') {
    getJson(qURL);
  }
});

$('#reset').on('click', function(event) {
  $('#input').html('');
  $('#output').html('');
});

function getJson(queryURL) {
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    .then(function(response) {
      prettifyJson(response);
      hop(response, 0, 'response');
    })
    .catch(function(error) {
      console.log(error);
    });
}

function prettifyJson(json) {
  var text = JSON.stringify(json, null, 4);
  $('#input').html('<pre>' + text + '</pre>');
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
    console.log('Null object');
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
      //showPath(level, nodePath);  //enable this to show all child nodes
      hop(child, level + 1, nodePath);
    });
  } else {
    console.log(path);
    showPath(level, path);
  }
}
