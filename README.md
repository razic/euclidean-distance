# euclidean-distance

> A mathematical function for calculating the distance between two points in
> any dimension.

## Installation

`component install hoverboard/euclidean-distance`

## API

### One dimension

> ![Euclidean distance formula 1D](http://goo.gl/WVo1e)

#### euclideanDistance(x, y);

#### euclideanDistance([x, y]);

#### euclideanDistance([x], [y]);

#### euclideanDistance({ x: x }, { y: y });

### Two dimensions

> ![Euclidean distance formula 2D](http://goo.gl/uZ2Xs)

#### euclideanDistance(p1, p2, q1, q2)

#### euclideanDistance([p1, p2, q1, q2])

#### euclideanDistance([p1, p2], [q1, q2])

#### euclideanDistance({ p1: p1, p2: p2 }, { q1: q1, q2: q2 })

### Three dimensions

> ![Euclidean distance formula 3D](http://goo.gl/QBqGG)

#### euclideanDistance(p1, p2, p3, q1, q2, q3)

#### euclideanDistance([p1, p2, p3, q1, q2, q3])

#### euclideanDistance([p1, p2, p3], [q1, q2, q3])

#### euclideanDistance({ p1: p1, p2: p2, p3: p3 }, { q1: q1, q2: q2, q3: q3 })

### N Dimensions

> ![Euclidean distance formula ND](http://goo.gl/eHDii)

The API remains the same no matter the number of dimensions you wish to
calculate. If you use the `euclideanDistance({ x: x1, y: y1 }, { x: x2, y: y2
})` object syntax, you may name the object's properties whatever you wish (this
applies to all dimensions). In fact, the keys don't even need to be named the
same in both objects; it's the order that matters.

## License

MIT
