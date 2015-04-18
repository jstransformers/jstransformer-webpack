var merge = require('merge');

var array1 = {
  salutation: 'Goodbye',
  name: 'World!'
};
var array2 = {
  salutation: 'Hello',
  seperator: ' '
};

var output = merge(array1, array2);

console.log(JSON.stringify(output));
