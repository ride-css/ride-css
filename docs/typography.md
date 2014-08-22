[back](https://github.com/octod/ride-css/)

#typography mixins

##ride-links (or ride-anchors)
this mixins has not a {block}
@params
- [color] color -> is the basic color for your anchors
- [bool] light (default: false)-> determines if the hover state color will be brighter (true) or darker (false)
- [percent] ratio (default: 21%)-> the basic percentual the color will be enlighted or darkened
- [string] class (default: 'a')-> the css selector. 

```
ride-links(red)
```

output

```css
a {
  color: #f00;
}
a:hover {
  color: #c90000;
}
a:active {
  color: #c50000;
}

```
or

```
ride-links(red, true, 45%, '.test-anchor')
```

output

```css
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

##ride-align
this mixin has not a {block}
this mixin could cache alignments
@params
- [string] classPrefix (default: 'align-') -> the class prefix for alignment

```
ride-align()
```

output

```css
.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.align-justify {
  text-align: justify;
}
ride-align('test-')
```

output

```css
.test-left {
  text-align: left;
}
.test-center {
  text-align: center;
}
.test-right {
  text-align: right;
}
.test-justify {
  text-align: justify;
}

```

##headings
this mixin has a {block}

```
+headings()
  color red
```

output

```css
h1, h2, h3, h4, h5, h6{
  color: red;
}
```

##ride-headings
this mixin has not a {block}

@params
- [number] fontMultiplier (default: 2) -> the h1 size multiplier (2 will means 2x the inherited font-size)
- [number] line-height (default: 1.5) -> the base line-height
- [number] multiplier (default: 0.2) -> each heading will subtract the multiplier and will have the line-height recalculated to keep the vertical rhytm ok

```
ride-headings()
```

output

```css
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
this mixin has a {block}

```
ride-paragraph()
```

output

```css
p {
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0;
}
```

another example

```
+ride-paragraph()
  font-size 1.2em
  line-height 2
```

output

```css
p {
  font-size: 1.2em;
  line-height: 2;
  margin: 0.8em 0;
}
```

##ride-small
This mixin will add a class with a smaller font-size and regularly adapted line-height.
this mixin has not a {block}

@params
- [string] className (default: 'small, .small'): this will be the css selector use to add the small font-size style
- [float] fontSize (default: (62.5/100)): this will be the font-size returned from this mixin

``` 
ride-small()
``` 

output

```css 
small,
.small {
  font-size: 0.625em;
  line-height: 1;
}
``` 
##ride-typography
this mixin has not a {block}
this mixin will output the current mixins with their defaults params

* ride-align()
* ride-paragraph()
* ride-headings()

```
ride-typography()
```

output

```css
.align-left {
  text-align: left;
}
.align-center {
  text-align: center;
}
.align-right {
  text-align: right;
}
.align-justify {
  text-align: justify;
}
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