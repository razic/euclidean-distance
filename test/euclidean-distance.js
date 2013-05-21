var assert = require('assert'),
    euclideanDistance = require('euclidean-distance'),
    x1 = 5,
    y1 = 0,
    z1 = -9.2,
    x2 = -5.99,
    y2 = -10.02,
    z2 = 2,
    distance2D = 14.872138380206122,
    distance3D = 18.6177469098707;

describe('euclideanDistance(x1, y1, x2, y2)', function() {
  describe('when there are four arguments that are numbers', function() {
    it('should calculate properly', function() {
      var result = euclideanDistance(x1, y1, x2, y2);

      assert(result === distance2D);
    });
  });
});

describe('euclideanDistance(x1, y1, z1 x2, y2, z2)', function() {
  describe('when there are six arguments that are numbers', function() {
    it('should calculate properly', function() {
      var result = euclideanDistance(x1, y1, z1, x2, y2, z2);

      assert(result === distance3D);
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

        assert(result === distance2D);
      });
    }
  );
});

describe(
  'euclideanDistance({ x: x1, y: y1, z: z1 }, { x: x2, y: y2, z2 })',
  function() {
    describe(
      'when there are two arguments that are objects, each containing x, y and \
      z properties',
      function() {
        it('should calculate properly', function() {
          var result = euclideanDistance(
            { x: x1, y: y1, z: z1 },
            { x: x2, y: y2, z: z2 }
          );

          assert(result === distance3D);
        });
      }
    );
  }
);

describe('euclideanDistance([x1, y1], [x2, y2])', function() {
  describe(
    'when there are two arguments that are arrays, each containing two \
    numbers',
    function() {
      it('should calculate properly', function() {
        var result = euclideanDistance([x1, y1], [x2, y2]);

        assert(result === distance2D);
      });
    }
  );
});

describe('euclideanDistance([x1, y1, z1], [x2, y2, z2])', function() {
  describe(
    'when there are two arguments that are arrays, each containing three \
    numbers',
    function() {
      it('should calculate properly', function() {
        var result = euclideanDistance([x1, y1, z1], [x2, y2, z2]);

        assert(result === distance3D);
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

        assert(result === distance2D);
      });
    }
  );
});

describe('euclideanDistance([x1, y1, z1 x2, y2, z2])', function() {
  describe(
    'when there is one argument that is an array, containing six numbers',
    function() {
      it('should calculate properly', function() {
        var result = euclideanDistance([x1, y1, z1, x2, y2, z2]);

        assert(result === distance3D);
      });
    }
  );
});
