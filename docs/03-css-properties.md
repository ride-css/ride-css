# custom css properties in ride-css

Ride css offers a set of custom css properties to ease your work.

## positioning properties

Like in [nib](https://github.com/tj/nib), you can setup your elements position fast.

You can use it like a common css property (*property: value*)

```
mixin: values...
```

Values are a pair of a *css property* (top, right, bottom, left) and a css *value* (10px, 1em, 2%, 1rem...)

### absolute positioning

the mixin is called like

```sass
absolute: $properties...
```

While **$properties** are, de facto, css properties.

An example will show explain it better I suppose.

```sass
.my-class
  absolute: top 0 left 50%
```

This will yeld

```css
.my-class {
  position: absolute;
  top: 0;
  left: 0;
}
```

### fixed positioning

works like absolute positioning

```sass
.my-class
  fixed: top 0 left 50%
```

This will yeld

```css
.my-class {
  position: fixed;
  top: 0;
  left: 0;
}
```
### relative positioning

works like absolute positioning

```sass
.my-class
  relative: top 0 left 50%
```

This will yeld

```css
.my-class {
  position: relative;
  top: 0;
  left: 0;
}
```
### sticky positioning

works like absolute positioning, but won't work (at the moment) in some browsers, so be careful about using it without propert javascript fallbacks.

```sass
.my-class
  sticky: top 0 left 50%
```

This will yeld

```css
.my-class {
  position: sticky;
  top: 0;
  left: 0;
}
```
## box-model properties

Sometimes is quite booooring to write down each vertical or horizontal css box-model property.

What if you would **declare vertical/horizontal padding or margin at once** only with a single line of code?

The answer is 42.

### margin-vertical, margin-horizontal

Yes! Now you can. These css rules are **handy for setting or resetting vertical or horizontal margins**.

Just remember that parameters passed to these rules work clockwise. (parameters will be coupled: *top bottom*, *right left*)

A simple example for a better comprehension.

```sass
.my-class
  margin-vertical: 1em
.my-class.only-bottom
  margin-vertical: 0 1em
.my-class.only-top
  margin-vertical: 1em 0
```

Will yeld

```css
.my-class {
  margin-bottom: 1em
  margin-top: 1em
}
.my-class.only-bottom {
  margin-bottom: 1em
  margin-top: 0
}
.my-class.only-top {
  margin-top: 1em
  margin-bottom: 0
}
```

Wundabah?

### padding-vertical, padding-horizontal

These css properties acts the same as **margin-vertical, margin-horizontal**, but yeld padding properties.

```sass
.my-class
  padding-vertical: 1em
.my-class.only-bottom
  padding-vertical: 0 1em
.my-class.only-top
  padding-vertical: 1em 0
```

Will yeld

```css
.my-class {
  padding-bottom: 1em
  padding-top: 1em
}
.my-class.only-bottom {
  padding-bottom: 1em
  padding-top: 0
}
.my-class.only-top {
  padding-top: 1em
  padding-bottom: 0
}
```

## center-block

This css property will instanly align the current block element to the center of it's parent.

Note that this will override margin-left and margin-right.

This css property is cached throught the current-media.

## wrapper

Acts the same as center-block, but you can pass a **parameter** to decide the **max-width** of the current block element.

```sass
.my-class
  wrapper: 1000px
```

```css
.my-class {
  margin-left: auto;
  margin-right: auto;
}
.my-class {
  width: 1000px;
}
```
