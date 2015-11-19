// Example

var fs = require('fs');
var Schematic = require('schematic')('1.8');

fs.readFile('test/test1.schematic', function (err, data) {
  if (err) throw err;

  Schematic.parse(data, function (err, schem) {
    if (err) throw err;

    console.log(schem.getBlock(0, 0, 0));
  });
});
