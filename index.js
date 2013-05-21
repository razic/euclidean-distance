/**
 * Dependencies
 */
var functionSignatures = require('function-signatures');

/**
 * Expose
 */
module.exports = euclideanDistance;

/**
 * Function signatures
 */
var signatures = new functionSignatures({
  "four numbers": function(x1, y1, x2, y2) {
    return typeof x1 === 'number' &&
    typeof y1 === 'number' &&
    typeof x2 === 'number' &&
    typeof y2 === 'number';
  },
  "two arrays, each with two numbers": function(a, b) {
    return a.length === 2 &&
    b.length === 2 &&
    typeof a[0] === 'number' &&
    typeof a[1] === 'number' &&
    typeof b[0] === 'number' &&
    typeof b[1] === 'number';
  },
  "two objects, each with x and y properties": function(a, b) {
    return typeof a.x === 'number' &&
    typeof a.y === 'number' &&
    typeof b.x === 'number' &&
    typeof b.y === 'number';
  },
  "one array with four numbers": function(ab) {
    return ab.length === 4 &&
    typeof ab[0] === 'number' &&
    typeof ab[1] === 'number' &&
    typeof ab[2] === 'number' &&
    typeof ab[3] === 'number';
  }
});

signatures.on("four numbers", function(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
});

signatures.on("two arrays, each with two numbers", function(a, b) {
  this.x1 = a[0];
  this.y1 = a[1];
  this.x2 = b[0];
  this.y2 = b[1];
});

signatures.on("two objects, each with x and y properties", function(a, b) {
  this.x1 = a.x;
  this.y1 = a.y;
  this.x2 = b.x;
  this.y2 = b.y;
});

signatures.on("one array with four numbers", function(ab) {
  this.x1 = ab[0];
  this.y1 = ab[1];
  this.x2 = ab[2];
  this.y2 = ab[3];
});

/**
 * Implementation
 */
function euclideanDistance() {
  signatures.normalize(arguments);

  var dx = signatures.x2 - signatures.x1;
  var dy = signatures.y2 - signatures.y1;

  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
