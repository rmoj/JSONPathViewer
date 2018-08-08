var obj = {
  animal1: {
    dog: { one: 'puppy', two: 'pup', three: { twenty: 'mutt' } },
    cat: 'kitten'
  },
  animal2: { quokka: 'joey', lion: 'cub' },
  animal3: { pig: 'piglet', horse: 'pony' }
};

var arr = [{ quokka: 'joey' }, { lion: 'cub' }, { pig: 'piglet' }];

var arr2 = [
  {
    animal1: {
      dog: { one: 'puppy', two: 'pup', three: 'mutt' },
      cat: 'kitten'
    },
    animal2: { quokka: 'joey', lion: 'cub' },
    animal3: { pig: 'piglet', horse: 'pony' }
  }
];

var testObj = [
  {
    id: '0001',
    type: 'donut',
    name: 'Cake',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' },
        { id: '1003', type: 'Blueberry' },
        { id: '1004', type: "Devil's Food" }
      ]
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5007', type: 'Powdered Sugar' },
      { id: '5006', type: 'Chocolate with Sprinkles' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' }
    ]
  },
  {
    id: '0002',
    type: 'donut',
    name: 'Raised',
    ppu: 0.55,
    batters: {
      batter: [{ id: '1001', type: 'Regular' }]
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5005', type: 'Sugar' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' }
    ]
  },
  {
    id: '0003',
    type: 'donut',
    name: 'Old Fashioned',
    ppu: 0.55,
    batters: {
      batter: [
        { id: '1001', type: 'Regular' },
        { id: '1002', type: 'Chocolate' }
      ]
    },
    topping: [
      { id: '5001', type: 'None' },
      { id: '5002', type: 'Glazed' },
      { id: '5003', type: 'Chocolate' },
      { id: '5004', type: 'Maple' }
    ]
  }
];

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
    for (var i = 0; i < children.length; i++) {
      var child = newNode[children[i]];
      var nodePath = path + addToPath + '.' + children[i];
      console.log('level: ' + level + '  path: ' + nodePath);
      hop(child, level + 1, nodePath);
    }
  } else {
    p('done');
  }
}
