# css shapes in ride-css

Ride css offers a set of mixins to create simple css shapes.

## Circle shape

This mixin makes an html looks like a round.

This mixin can be used as a transparent mixin.

```sass
  shape-circle($diameter)
```

* $diameter (required, must be a unit): is the diameter of the shape.

Example:

```sass
.my-round
  shape-circle: 10px
```

will yeld to:

```css
.my-round {
  border-radius: 50%;
}
.my-round {
  height: 10px;
  width: 10px;
}
```

## Rectangle shape

This mixin creates a rectangle shape.

```sass
  shape-rectangle($width, $height)
```

* $width (required, must be a unit) : rectangle's width

* $height (required, must be a unit) : rectangle's height

Example:

```sass
.my-rectangle
  shape-rectangle: 10px, 20px
```

will yeld to:

```css
.my-rectangle {
  height: 20px;
  width: 10px;
}
```

## Square shape

This mixin creates a square shape.

```sass
  shape-square($size)
```

* $size (required, must be a unit) : rectangle's height and width

Example:

```sass
.my-square
  shape-square: 10px
```

will yeld to:

```css
.my-square {
  height: 10px;
  width: 10px;
}
```

## Triangle shape

This mixin creates a css triangle shape.

Note that this is achieved using a border css property.

```sass
  shape-triangle($position, $size, $colour)
```

* $position (required, must be a position) : triangles edge direction (top right bottom left)

* $size (required, must be a unit) : triangles's height and width

* $colour (required, must be a rgba) : triangle's colour

Example:

```sass
.my-triangle
  shape-triangle: top, 10px, #ff0
```

will yeld to:

```css
.my-triangle {
  border: 10px solid transparent;
}
.my-triangle {
  border-bottom-color: #ff0;
}
.my-triangle {
  height: 10px;
  width: 10px;
}
```

## Triangle bottom shape

Is a shorthand version of shape-triangle. It sets the position to bottom.

```sass
  shape-triangle-bottom($size, $colour)
```

## Triangle left shape

Is a shorthand version of shape-triangle. It sets the position to left.

```sass
  shape-triangle-left($size, $colour)
```

## Triangle right shape

Is a shorthand version of shape-triangle. It sets the position to right.

```sass
  shape-triangle-right(size, $colour)
```

## Triangle top shape

Is a shorthand version of shape-triangle. It sets the position to top.

```sass
  shape-triangle-top($size, $colour)
```
