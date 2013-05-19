var assert = require('assert'),
    euclideanDistance = require('euclidean-distance');

describe('euclideanDistance', function() {
  var x1 = 5,
      y1 = 0,
      x2 = -5.99,
      y2 = -10.02,
      distance = 14.872138380206122;

  it('should be a function', function() {
    assert(typeof euclideanDistance === 'function');
  });

  describe('euclideanDistance(x1, y1, x2, y2)', function() {
    describe('when there are four arguments that are numbers', function() {
      it('should calculate properly', function() {
        var result = euclideanDistance(x1, y1, x2, y2);

        assert(result === distance);
      });
    });
  });

  describe('euclideanDistance({ x: x1, y: y1 }, { x: x2, y: y2 })', function() {
    describe(
      'when there are two arguments that are objects, each containing x and y \
      properties',
      function() {
        it('should calculate properly', function() {
          var result = euclideanDistance({ x: x1, y: y1 }, { x: x2, y: y2 });

          assert(result === distance);
        });
      }
    );
  });

  describe('euclideanDistance([x1, y1], [x2, y2])', function() {
    describe(
      'when there are two arguments that are arrays, each containing two \
      numbers',
      function() {
        it('should calculate properly', function() {
          var result = euclideanDistance([x1, y1], [x2, y2]);

          assert(result === distance);
        });
      }
    );
  });

  describe('euclideanDistance([x1, y1, x2, y2])', function() {
    describe(
      'when there is one argument that is an array, containing four numbers',
      function() {
        it('should calculate properly', function() {
          var result = euclideanDistance([x1, y1, x2, y2]);

          assert(result === distance);
        });
      }
    );
  });
});
