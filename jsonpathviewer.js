/*
 * JSONPathViewer
 * Author: Rene Mojica
 * Date: August 8, 2018
 * 
 */

function getJson() {
  var searchTerm = 'quokka';
  var limit = 10;
  var rating = 'G';
  var apiKey = 'Xon9MP7X2uR0jVetMBZoD8fQeb5hPodw';
  var queryURL =
    'https://api.giphy.com/v1/gifs/search?api_key=' +
    apiKey +
    '&q=' +
    searchTerm +
    '&limit=' +
    limit +
    '&offset=0&rating=' +
    rating +
    '&lang=en';

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
