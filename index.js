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
  "an even amount of numbers passed singly": function() {
    if (arguments.length % 2 !== 0) return;

    for (var i = 0; i < arguments.length; i++)
      if (typeof arguments[i] !== 'number') return;

    return true;
  },
  "two objects with equal length of keys": function(a, b) {
    var aKeys = Object.getOwnPropertyNames(a),
        bKeys = Object.getOwnPropertyNames(b),
        aLength = aKeys.length,
        bLength = bKeys.length;

    if (aLength === 0 || bLength === 0 || aLength !== bLength) return;

    for (var i = 0; i < aLength; i++) {
      var aKey = aKeys[i],
          bKey = bKeys[i];

      if (typeof a[aKey] !== 'number' || typeof b[bKey] !== 'number') return;
    }

    return true;
  },
  "one array with an even length greater than zero": function(a) {
    if (!(a instanceof Array)) return;
    if (a.length === 0) return;
    if (a.length % 2 !== 0) return;

    return true;
  }
});

signatures.on("an even amount of numbers passed singly", function() {
  var args = Array.prototype.slice.call(arguments, 0),
      half = args.length / 2,
      i = 0;

  for (; i < half; this.sum += Math.pow(args[i] - args[i + half], 2), i++);
});

signatures.on("two objects with equal length of keys", function(a, b) {
  var aKeys = Object.getOwnPropertyNames(a),
      bKeys = Object.getOwnPropertyNames(b),
      aLength = aKeys.length,
      i = 0;

  if (a instanceof Array && b instanceof Array) aLength -= 1;

  for (; i < aLength; this.sum += Math.pow(a[aKeys[i]] - b[bKeys[i]], 2), i++);
});

signatures.on("one array with an even length greater than zero", function(a) {
  this.emit.apply(this, ["an even amount of numbers passed singly"].concat(a));
});

/**
 * Implementation
 */
function euclideanDistance() {
  signatures.sum = 0;

  signatures.normalize(arguments);

  return Math.sqrt(signatures.sum);
}
