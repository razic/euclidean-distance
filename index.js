module.exports = euclideanDistance;

var methodSignatureA = 'four numbers',
    methodSignatureB = 'two arrays, each containing two numbers',
    methodSignatureC = 'two objects, each containing x and y properties',
    methodSignatureD = 'one array, containing four numbers';

function euclideanDistance() {
  validateArguments.apply(null, arguments);

  var points = normalizeArguments.apply(null, arguments);

  return Math.sqrt(
    Math.pow(points.b.x - points.a.x, 2) + Math.pow(points.b.y - points.a.y, 2)
  );
}

function normalizeArguments() {
  var points = { a: {}, b: {} };

  switch (methodSignature.apply(null, arguments)) {
    case methodSignatureA:
      points.a.x = arguments[0];
      points.a.y = arguments[1];
      points.b.x = arguments[2];
      points.b.y = arguments[3];
      break;
    case methodSignatureB:
      points.a.x = arguments[0][0];
      points.a.y = arguments[0][1];
      points.b.x = arguments[1][0];
      points.b.y = arguments[1][1];
      break;
    case methodSignatureC:
      points.a = arguments[0];
      points.b = arguments[1];
      break;
    case methodSignatureD:
      points.a.x = arguments[0][0];
      points.a.y = arguments[0][1];
      points.b.x = arguments[0][2];
      points.b.y = arguments[0][3];
      break;
  }

  return points;
}

function validateArguments() {
  switch (methodSignature.apply(null, arguments)) {
    case methodSignatureA:
    case methodSignatureB:
    case methodSignatureC:
    case methodSignatureD:
      break;
    default:
      throw "Method signature was not recognized.";
  }
}

function methodSignature() {
  if (isMethodSignatureA.apply(null, arguments)) return methodSignatureA;
  if (isMethodSignatureB.apply(null, arguments)) return methodSignatureB;
  if (isMethodSignatureC.apply(null, arguments)) return methodSignatureC;
  if (isMethodSignatureD.apply(null, arguments)) return methodSignatureD;
}

function isMethodSignatureA() {
  return arguments.length === 4 &&
  typeof arguments[0] === 'number' &&
  typeof arguments[1] === 'number' &&
  typeof arguments[2] === 'number' &&
  typeof arguments[3] === 'number';
}

function isMethodSignatureB() {
  return arguments.length === 2 &&
  arguments[0] instanceof Array &&
  arguments[1] instanceof Array &&
  arguments[0].length === 2 &&
  arguments[1].length === 2 &&
  typeof arguments[0][0] === 'number' &&
  typeof arguments[0][1] === 'number' &&
  typeof arguments[1][0] === 'number' &&
  typeof arguments[1][1] === 'number';
}

function isMethodSignatureC() {
  return arguments.length === 2 &&
  arguments[0] instanceof Object &&
  arguments[1] instanceof Object &&
  typeof arguments[0].x === 'number' &&
  typeof arguments[0].y === 'number' &&
  typeof arguments[1].x === 'number' &&
  typeof arguments[1].y === 'number';
}

function isMethodSignatureD() {
  return arguments.length === 1 &&
  arguments[0] instanceof Array &&
  arguments[0].length === 4 &&
  typeof arguments[0][0] === 'number' &&
  typeof arguments[0][1] === 'number' &&
  typeof arguments[0][2] === 'number' &&
  typeof arguments[0][3] === 'number';
}
