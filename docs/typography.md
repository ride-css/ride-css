[back](https://github.com/octod/ride-css/)

#typography mixins

##ride-anchors
```
// this mixins has not a {block}
// @params
// color color -> is the basic color for your anchors
// bool light (default: false)-> determines if the hover state color will be brighter (true) or darker (false)
// percent ratio (default: 21%)-> the basic percentual the color will be enlighted or darkened
// string class (default: 'a')-> the css selector. 
// ride-anchors(color, light = false, ratio = 21%, class = 'a')
example:
// using
ride-anchors(red)
// the output will be like
a {
  color: #f00;
}
a:hover {
  color: #c90000;
}
a:active {
  color: #c50000;
}
// or using
ride-anchors(red, true, 45%, '.test-anchor')
// will output
.test-anchor {
  color: #f00;
}
.test-anchor:hover {
  color: #ff7373;
}
.test-anchor:active {
  color: #ff7c7c;
}
```

##headings
```
// this mixin has a {block}
// @params: none
// heading()
example:
// using
+headings()
  color red
// will output
h1, h2, h3, h4, h5, h6{
  color: red;
}
```

##ride-headings
```
// this mixin has not a {block}
// @params
// number fontMultiplier (default: 2) -> the h1 size multiplier (2 will means 2x the inherited font-size)
// number line-height (default: 1.5) -> the base line-height
// number multiplier (default: 0.2) -> each heading will subtract the multiplier and will have the line-height recalculated to keep the vertical rhytm ok
// heading()
example:
// using
ride-headings()
// will output
h1 {
  font-size: 2em;
  line-height: 0.75;
}
h2 {
  font-size: 1.8em;
  line-height: 0.833333333333333;
}
h3 {
  font-size: 1.4em;
  line-height: 1.071428571428571;
}
h4 {
  font-size: 1.2em;
  line-height: 1.25;
}
h5 {
  font-size: 1em;
  line-height: 1.5;
}
h6 {
  font-size: 0.8em;
  line-height: 1.875;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
```

##ride-paragraph
```
// this mixin has a {block}
// ride-paragraph()
example:
// using
ride-paragraph()
// will output
p {
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0;
}
// and for example
+ride-paragraph()
  font-size 1.2em
  line-height 2
// will output in
p {
  font-size: 1.2em;
  line-height: 2;
  margin: 0.8em 0;
}
```
##ride-small
This mixin will add a class with a smaller font-size and regularly adapted line-height.
``` 
// this mixin has not a {block}
// @params
// [string] className (default: 'small, .small'): this will be the css selector use to add the small font-size style
// [float] fontSize (default: (62.5/100)): this will be the font-size returned from this mixin
// how to use it:
ride-small()
// will render into:
small,
.small {
  font-size: 0.625em;
  line-height: 1;
}
``` 
##ride-typography
```
// this mixin has not a {block}
// this mixin will output the current mixins with their defaults params
// ride-paragraph()
// ride-headings()
example:
// using
ride-typography()
// will output
h1 {
  font-size: 2em;
  line-height: 0.75;
}
h2 {
  font-size: 1.8em;
  line-height: 0.833333333333333;
}
h3 {
  font-size: 1.4em;
  line-height: 1.071428571428571;
}
h4 {
  font-size: 1.2em;
  line-height: 1.25;
}
h5 {
  font-size: 1em;
  line-height: 1.5;
}
h6 {
  font-size: 0.8em;
  line-height: 1.875;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0;
}
```