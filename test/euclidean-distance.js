var assert = require('assert'),
    euclideanDistance = require('euclidean-distance'),
    x1 = 5,
    y1 = 0,
    z1 = -9.2,
    n1 = -3
    x2 = -5.99,
    y2 = -10.02,
    z2 = 2,
    n2 = 7.1,
    distance1D = 10.99,
    distance2D = 14.872138380206122,
    distance3D = 18.6177469098707,
    distance4D = 21.180899414330828;

describe('euclideanDistance(x1, y1, ... )', function() {
  it('should calculate properly', function() {
    var result1D = euclideanDistance(x1, x2),
        result2D = euclideanDistance(x1, y1, x2, y2),
        result3D = euclideanDistance(x1, y1, z1, x2, y2, z2),
        result4D = euclideanDistance(x1, y1, z1, n1, x2, y2, z2, n2);

    assert(result1D === distance1D);
    assert(result2D === distance2D);
    assert(result3D === distance3D);
    assert(result4D === distance4D);
  });
});

describe(
  'euclideanDistance({ x: x1, y: y1, ... }, { x: x2, y: y2, ... })',
  function() {
    it('should calculate properly', function() {
      var result1D = euclideanDistance({ x: x1 }, { x: x2 }),
          result2D = euclideanDistance({ x: x1, y: y1 }, { x: x2, y: y2 }),
          result3D = euclideanDistance(
            { x: x1, y: y1, z: z1 }, { x: x2, y: y2, z: z2 }
          ),
          result4D = euclideanDistance(
            { x: x1, y: y1, z: z1, n: n1 }, { x: x2, y: y2, z: z2, n: n2 }
          );

      assert(result1D === distance1D);
      assert(result2D === distance2D);
      assert(result3D === distance3D);
      assert(result4D === distance4D);
    });
  }
);

describe('euclideanDistance([x1, y1, ... ], [x2, y2 ... ])', function() {
  it('should calculate properly', function() {
    var result1D = euclideanDistance([x1], [x2]),
        result2D = euclideanDistance([x1, y1], [x2, y2]),
        result3D = euclideanDistance([x1, y1, z1], [x2, y2, z2]),
        result4D = euclideanDistance([x1, y1, z1, n1], [x2, y2, z2, n2]);

    assert(result1D === distance1D);
    assert(result2D === distance2D);
    assert(result3D === distance3D);
    assert(result4D === distance4D);
  });
});

describe('euclideanDistance([x1, y1, ... ])', function() {
  it('should calculate properly', function() {
    var result1D = euclideanDistance([x1, x2]),
        result2D = euclideanDistance([x1, y1, x2, y2]),
        result3D = euclideanDistance([x1, y1, z1, x2, y2, z2]),
        result4D = euclideanDistance([x1, y1, z1, n1, x2, y2, z2, n2]);

    assert(result1D === distance1D);
    assert(result2D === distance2D);
    assert(result3D === distance3D);
    assert(result4D === distance4D);
  });
});
