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
  "six numbers": function(x1, y1, z1, x2, y2, z2) {
    return typeof x1 === 'number' &&
    typeof y1 === 'number' &&
    typeof z1 === 'number' &&
    typeof x2 === 'number' &&
    typeof y2 === 'number' &&
    typeof z2 === 'number';
  },
  "four numbers": function(x1, y1, x2, y2) {
    return typeof x1 === 'number' &&
    typeof y1 === 'number' &&
    typeof x2 === 'number' &&
    typeof y2 === 'number';
  },
  "two arrays, each with three numbers": function(a, b) {
    return a.length === 3 &&
    b.length === 3 &&
    typeof a[0] === 'number' &&
    typeof a[1] === 'number' &&
    typeof a[2] === 'number' &&
    typeof b[0] === 'number' &&
    typeof b[1] === 'number' &&
    typeof b[2] === 'number';
  },
  "two arrays, each with two numbers": function(a, b) {
    return a.length === 2 &&
    b.length === 2 &&
    typeof a[0] === 'number' &&
    typeof a[1] === 'number' &&
    typeof b[0] === 'number' &&
    typeof b[1] === 'number';
  },
  "two objects, each with x, y and z properties": function(a, b) {
    return typeof a.x === 'number' &&
    typeof a.y === 'number' &&
    typeof a.z === 'number' &&
    typeof b.x === 'number' &&
    typeof b.y === 'number' &&
    typeof b.z === 'number';
  },
  "two objects, each with x and y properties": function(a, b) {
    return typeof a.x === 'number' &&
    typeof a.y === 'number' &&
    typeof b.x === 'number' &&
    typeof b.y === 'number';
  },
  "one array with six numbers": function(ab) {
    return ab.length === 6 &&
    typeof ab[0] === 'number' &&
    typeof ab[1] === 'number' &&
    typeof ab[2] === 'number' &&
    typeof ab[3] === 'number' &&
    typeof ab[4] === 'number' &&
    typeof ab[5] === 'number';
  },
  "one array with four numbers": function(ab) {
    return ab.length === 4 &&
    typeof ab[0] === 'number' &&
    typeof ab[1] === 'number' &&
    typeof ab[2] === 'number' &&
    typeof ab[3] === 'number';
  }
});

signatures.on("six numbers", function(x1, y1, z1, x2, y2, z2) {
  this.distance = euclideanDistance3D(x1, y1, z1, x2, y2, z2);
});

signatures.on("four numbers", function(x1, y1, x2, y2) {
  this.distance = euclideanDistance2D(x1, y1, x2, y2);
});

signatures.on("two arrays, each with three numbers", function(a, b) {
  this.distance = euclideanDistance3D(a[0], a[1], a[2], b[0], b[1], b[2]);
});

signatures.on("two arrays, each with two numbers", function(a, b) {
  this.distance = euclideanDistance2D(a[0], a[1], b[0], b[1]);
});

signatures.on("two objects, each with x, y and z properties", function(a, b) {
  this.distance = euclideanDistance3D(a.x, a.y, a.z, b.x, b.y, b.z);
});

signatures.on("two objects, each with x and y properties", function(a, b) {
  this.distance = euclideanDistance2D(a.x, a.y, b.x, b.y);
});

signatures.on("one array with six numbers", function(ab) {
  this.distance = euclideanDistance3D.apply(null, ab);
});

signatures.on("one array with four numbers", function(ab) {
  this.distance = euclideanDistance2D.apply(null, ab);
});

/**
 * Implementation
 */
function euclideanDistance() {
  signatures.normalize(arguments);

  return signatures.distance;
}

function euclideanDistance2D(x1, y1, x2, y2) {
  var dx = x2 - x1,
      dy = y2 - y1;

  return Math.sqrt((dx * dx) + (dy * dy));
}

function euclideanDistance3D(x1, y1, z1, x2, y2, z2) {
  var dx = x2 - x1,
      dy = y2 - y1,
      dz = z2 - z1;

  return Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));
}
