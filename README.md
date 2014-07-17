Ride css
========

Stylus mixin library for a faster frontend development. This could be a good alternative to more famous buildable css libraries.

Why walk when you can Ride?

##Installing ride
Ride **requires** Stylus.js and (obviously) node.js installed

> [Install node.js](http://nodejs.org/ "Click here to go to node.js website")

> Install stylus.js. Type ```npm install -g stylus``` in your terminal and you've done.

> Install nib (recommended for css3 agnostic deveolpment). Type ```npm install -g nib``` in your terminal and you've done.

> download Ride css or clone the repository
  ``` git clone https://github.com/OctoD/ride-css ```
  , include ride in your buildable "*.styl" file and you have done.

##Documentation
####How to include Ride in your .styl file
```
// do this and you're ready to code your beautiful webapp/website!
@require 'ride/*'
```

##You could be really helpful
* Fork this repo
* Commit you changes
* Report bugs
* Drink beer and eat your veggies
* Ask for new features, ask questions and let the project grows

####Mixins list

* **css-templates/**
  * *form.styl*
    - [form-elements](#form-elements)
    - [form-elements-readonly](#form-elements-readonly)
    - [form-in-range](#form-in-range)
    - [form-not-valid](#form-not-valid)
    - [form-optional](#form-optional)
    - [form-out-range](#form-out-range)
    - [form-required](#form-required)
    - [form-valid](#form-valid)
    - [placeholder](#placeholder)
    - [ride-form-elements](#ride-form-elements)
  * *ride-buttons.styl*
    - [button](#button)
    - [button-bar](#button-bar)
    - [menu-button](#menu-button)
    - [sliding-button](#sliding-button)
  * *ride-media-queries.styl*
    - [breakpoint](#breakpoint)
    - [high-dpi](#high-dpi)
    - [responsive-huge](#responsive-huge)
    - [responsive-normal](#responsive-normal)
    - [responsive-phone](#responsive-phone)
    - [responsive-small](#responsive-small)
    - [responsive-smallest](#responsive-smallest)
    - [responsive-tablet](#responsive-tablet)
* **etc/**
  * *css-normalize.styl*
    - [css-normalize](#css-normalize)
  * *css-reset.styl*
    - [css-reset](#css-reset)

  * **ride-css3-proxies.styl **
    *use them as normal css properties, the vendorization will be automatic. If you prefer or you need css gradients you could install NIB.js*
    - animation
    - animation-delay
    - animation-direction
    - animation-duration
    - animation-name
    - background-size
    - border-radius
    - box-shadow
    - box-sizing
    - column-count
    - column-gap
    - fill-mode
    - matrix
    - page-break-inside
    - perspective
    - play-state
    - rotate
    - rotateX
    - rotateY
    - rotateZ
    - scale
    - skew
    - skewX
    - skewY
    - tab-size
    - text-selection
    - transform
    - transform-origin
    - transition
    - transitions
    - translate
    - translateX
    - translateY
  * *ride-functions.styl*
    - [get-lineheight](#get-lineheight)
    - [onePercent](#onePercent)
    - [parseInt](#parseInt)
    - [parseFloat](#parseFloat)
    - [setUnit](#setUnit)
  * *ride-mixed-mixins.styl*
    - [absolute](#absolute)
    - [clearfix](#clearfix)
    - [dont-select](#dont-select)
    - [fixed](#fixed)
    - [reset-ul](#reset-ul)
    - [ride-body](#ride-body)
    - [tooltip](#tooltip)
    - [wrapper](#wrapper)
* **grids/**
  * *ride-column.styl*
    - [ride-column](#ride-column)
    - [ride-float](#ride-float)
  * *ride-grid.styl*
    - [ride-column-grid](#ride-column-grid)
    - [ride-grid](#ride-grid)
    - [ride-grid-12](#ride-grid-12)
    - [ride-grid-6](#ride-grid-6)
    - [ride-grid-4](#ride-grid-4)
* **typography/**
  * *anchors.styl*
    - [ride-anchors](#ride-anchors)
  * *ride-typography.styl*
    - [headings](#headings)
    - [ride-headings](#ride-headings)
    - [ride-paragraph](#ride-paragraph)
    - [ride-small](#ride-small)
    - [ride-typography](#ride-typography)

##Todos
- [x] add basic mixins
- [ ] basic documentation
  - [x] write the mixins list tree
  - [x] write how to use mixins
  - [ ] a website maybe?

####Using the mixins

#####**form mixins**
######form-elements
```
// this mixin has a {block}
// how to use it
+form-elements()
  border 1px solid #f2f2f2
  color #222
// will render in
input,
textarea,
select {
  border: 1px solid #f2f2f2;
  color: #222;
}

```
######form-elements-readonly
```
// this mixin has a {block}
// how to use it
+form-elements-readonly()
  background-color #f2f2f2
  color #999
// will render in
input:read-only,
textarea:read-only,
select:read-only {
  background-color: #f2f2f2;
  color: #999;
}
```
######form-in-range
```
// this mixin has a {block}
// how to use it
+form-in-range()
  color green
// will render in
input[type='number']:in-range {
  color: #008000;
}
```
######form-not-valid
```
// this mixin has a {block}
// how to use it
+form-not-valid()
  color red
// will render in
input:invalid,
textarea:invalid,
select:invalid {
  color: #f00;
}
```
######form-optional
```
// this mixin has a {block}
// how to use it
+form-optional()
  color blue
// will render in
input:optional,
textarea:optional,
select:optional {
  color: #00f;
}
```
######form-out-range
```
// this mixin has a {block}
// how to use it
+form-out-range()
  color red
// will render in
input[type='number']:out-of-range {
  color: #f00;
}
```
######form-required
```
// this mixin has a {block}
// how to use it
+form-required()
  font-weight bold
// will render in
input:required,
textarea:required,
select:required {
  font-weight: bold;
}
```
######form-valid
```
// this mixin has a {block}
// how to use it
+form-valid()
  border 1px solid green
// will render in
input:invalid,
textarea:invalid,
select:invalid {
  border: 1px solid #008000;
}
```
######placeholder
```
// this mixin has a {block}
// how to use it
+form-elements()
  +placeholder()
    color grey
// will render in
input::-webkit-placeholder,
textarea::-webkit-placeholder,
select::-webkit-placeholder {
  color: #808080;
}
input::-moz-placeholder,
textarea::-moz-placeholder,
select::-moz-placeholder {
  color: #808080;
}
input:-moz-placeholder,
textarea:-moz-placeholder,
select:-moz-placeholder {
  color: #808080;
}
input::-ms-placeholder,
textarea::-ms-placeholder,
select::-ms-placeholder {
  color: #808080;
}
```
######ride-form-elements
```
// this mixin has a {block}
// how to use it
ride-form-elements(1px solid silver, 0 .5em)
// will render in
input,
textarea,
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  padding: 0 0.5em;
}
select {
  padding: 0 0.425em;
}
```
#####**button mixins**
######button
```
// this mixin has not a {block}
.button
  button()
// will render in
.button {
  cursor: pointer;
  display: inline-block;
  line-height: 3;
  position: relative;
}
```
######button-bar
```
// this mixin has a {block}
button-bar()
// will render in
.actions {
  margin: 0;
  padding: 0;
  line-height: 0;
}
```
######menu-button
```
// this mixin has a {block}
// @params
// string className (default: '.hamburger'): the element selector
// string trigger Event (default: '.show-menu .hamburger'): when the element will be triggered to become a close button
menu-button()
// will render in
.hamburger {
  background-color: #fff;
  -webkit-border-radius: 0.25em;
  -moz-border-radius: 0.25em;
  border-radius: 0.25em;
  display: inline-block;
  height: 0.25em;
  -webkit-transition: ease all 0.4s;
  -moz-transition: ease all 0.4s;
  -o-transition: ease all 0.4s;
  transition: ease all 0.4s;
  width: 2em;
}
.hamburger:after,
.hamburger:before {
  background-color: #fff;
  content: "";
  display: block;
  height: 0.25em;
  position: relative;
}
.hamburger:before {
  margin-top: -0.5em;
  -webkit-transition: ease all 0.4s;
  -moz-transition: ease all 0.4s;
  -o-transition: ease all 0.4s;
  transition: ease all 0.4s;
}
.hamburger:after {
  margin-top: 0.5em;
  top: 0.25em;
  -webkit-transition: ease all 0.4s;
  -moz-transition: ease all 0.4s;
  -o-transition: ease all 0.4s;
  transition: ease all 0.4s;
}
.hamburger:after,
.hamburger:before {
  -webkit-border-radius: 0.25em;
  -moz-border-radius: 0.25em;
  border-radius: 0.25em;
}
.show-menu .hamburger {
  background-color: transparent;
}
.show-menu .hamburger:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: 0 50% 0;
  -moz-transform-origin: 0 50% 0;
  -ms-transform-origin: 0 50% 0;
  -o-transform-origin: 0 50% 0;
  transform-origin: 0 50% 0;
}
.show-menu .hamburger:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transform-origin: 25% 0 0;
  -moz-transform-origin: 25% 0 0;
  -ms-transform-origin: 25% 0 0;
  -o-transform-origin: 25% 0 0;
  transform-origin: 25% 0 0;
}
```
######sliding-button
```
// this mixin has a {block}
// @params
// string class: button's selector
// string direction (default: 'left'): this is where the :before pseudo will come from
// seconds transition (default: .4s)
+sliding-button('.sliding-button', 'top')
  background-color red
  color white
  &:hover
    color red
  &:before
    background-color #fff
// will render in
.sliding-button {
  background-color: #f00;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 3;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.sliding-button:hover {
  color: #f00;
}
.sliding-button:before {
  background-color: #fff;
}
.sliding-button:hover:before {
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.sliding-button:before {
  -webkit-transform: translateY(-100%);
  -moz-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  -o-transform: translateY(-100%);
  transform: translateY(-100%);
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  height: 100%;
  width: 100%;
  z-index: -1;
}
.sliding-button:before {
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
```

#####**misc mixins**

######css-normalize
this mixin will render as a css normalization
```
// this mixin has not a {block}
// using
css-normalize()
// will render in
/* css normalize by Nicolas Gallagher and Jonathan Neal 
 * RELEASED UNDER MIT LICENCE
 * https://github.com/necolas/normalize.css/ 
 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
a {
  background-color: transparent;
}
a:focus {
  outline: 0 dotted;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
hr {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
mark {
  background-color: #ff0;
  color: #000;
}
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}
pre {
  white-space: pre-wrap;
}
q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 0;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}
button,
input {
  line-height: normal;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  margin: 0;
}
```

######css-reset
```
// this mixin has not a {block}
// using
css-reset()
// the output will be like
/* css reset by meyerweb. It's free. Thanks meyerweb */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after,
content '' {
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

```

#####**media queries: breakpoints and more**
######breakpoint
This mixin is ideal if you are planning to design an agnostic device website
```
// this mixin has a {block}
// @params
// [width] min-device-width: the minimum device width
// [width] max-device-width: the maximum device width
// [orientation] orientation (optional): if set, an orientation will be added to the media query
// how to use it
+breakpoint(300px, 400px, portrait)
  // write your awesome stuff here!
// will render into
@media (min-device-width: 300px) and (max-device-width: 400px) and (orientation: portrait) {
  /*you will find your awesome stuff here!*/  
}
```

######high-dpi
```
// this mixin has a {block}
// using
+high-dpi()
  .test
    color red
// will render into
@media (min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2) {
  .test {
    color: #f00;
  }
}
```
######responsive-huge
```
// this mixin has a {block}
// using
+responsive-huge()
  .test
    color red
// will render into
@media only screen and (min-width: 1600px) {
  :root .huge-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
######responsive-normal
```
// this mixin has a {block}
// using
+responsive-normal()
  .test
    color red
// will render into
@media only screen and (min-width: 960px) and (max-width: 1599px) {
  :root .normal-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
######responsive-phone
```
// this mixin has a {block}
// using
+responsive-phone()
  .test
    color red
// will render into
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  body {
    font-size: 100%;
  }
  :root .phone-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
######responsive-small
```
// this mixin has a {block}
// using
+responsive-small()
  .test
    color red
// will render into
@media only screen and (min-width: 481px) and (max-width: 959px) {
  :root .small-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
######responsive-smallest
```
// this mixin has a {block}
// using
+responsive-smallest()
  .test
    color red
// will render into
@media only screen and (max-width: 480px) {
  :root .smallest-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```
######responsive-tablet
```
// this mixin has a {block}
// using
+responsive-tablet()
  .test
    color red
// will render into
@media only screen and (min-width: 321px) and (max-width: 1024px) {
  body {
    font-size: 100%;
  }
  :root .tablet-hide {
    display: none;
  }
  .test {
    color: #f00;
  }
}
```

#####**grid helpers**
######ride-column
this mixin is useful for making fast calculations about a column width
```
// this mixin has not a {block}
// @params
// width width -> the container width
// int/s gutter (default: 0) -> the container gutter
// int columnCount (default: 1) -> the number of columns the grid has
// int currentColumn (default: 1) -> the space occupied by this column
// string gutterType (default: 'margin', avaible: 'margin', 'both', 'both false') -> the gutter type (margin, margin+padding, width - margin)
// bool returnsWidth (default: true) -> shall this mixin return the column width or only the gutter?
// bool important (default: false) -> this mixin will returns the proprerties with the !important flag (false/true) 

// example:
// using
.test
  ride-column(100%, 0 1 2, 12, 4, padding: true)
// will output
.test {
  margin: 0 1% 2%;
  padding: 0 1% 2%;
  width: 29.333333333333336%;
}
```
######ride-float
this mixin is useful for making fast calculations about a column float
```
// this mixin has not a {block}
// @params
// width width -> the container width
// int/s gutter (default: 0) -> the container gutter
// int columnCount (default: 1) -> the number of columns the grid has
// int currentColumn (default: 1) -> the space occupied by this column
// bool addFloat (default: true) -> this flag will add the css "float" property
// string floatDirection (default: 'left') -> this flag will determine where the extra gutter will be added and the float direction 
ride-float(width, gutter, columnCount = 1, currentColumn = 1, gutterType = 'margin', addFloat = true, floatDirection = 'left')

// example:
// using
.test
  ride-float(100%, 0 2, 12, 4, floatDirection: 'right')
// will output
.test {
  margin-right: 35.333333333333336%;
  float: left;
}
```

#####**grid mixins**

######ride-column-grid
this mixin will create a column-count grid
```
// this mixin has not a {block}
// @params
// string class -> the wrapper
// int columnCount -> the number of columns
// string columnClass (default: '.cl') -> the css selector for the columns
// ride-column-grid(class, columnCount, columnClass = '.cl')
example:
// using
ride-column-grid('.my-grid', 6, 'article')
// the output will be like
.my-grid {
  -webkit-column-count: 6;
  -moz-column-count: 6;
  column-count: 6;
}
.my-grid article {
  -webkit-page-break-inside: avoid;
  -moz-page-break-inside: avoid;
  -o-page-break-inside: avoid;
  page-break-inside: avoid;
  margin: 0;
  float: none;
}
```

######ride-grid
this mixin will help you to build your custom css grids.
```
// this mixin has not a {block}
// @params
// [int] columns: the number of columns the grid will have
// [ints] gutter (default: 0): the columns gutter
// [ints] padding (default: 0): the columns padding
// hash config (default: {})
//   string config.column (default: '.cl') -> this is the prefix for each css column
//   string config.scope (default: '') -> this is the scope for the columns
//   string config.float (default: '.float') -> this is the float column class prefix
//   string config.push (default: '.push') -> this is the pushing column class prefix
//   string config.prefix (default: '') -> this will add a prefix to columns, push, floats and row
//   string config.row (default: '.row') -> this is the clearfix container for the columns

example:
// using
ride-grid(6, 0 0 2, 2, {
  column: '.test',
  prefix: 'ride-'
})
// will output
.ride-test1,
.ride-test2,
.ride-test3,
.ride-test4,
.ride-test5,
.ride-test6 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
.ride-test1 {
  width: 12.666666666666668%;
}
.ride-test2 {
  width: 29.333333333333336%;
}
.ride-test3 {
  width: 46%;
}
.ride-test4 {
  width: 62.66666666666667%;
}
.ride-test5 {
  width: 79.33333333333334%;
}
.ride-test6 {
  width: 96%;
}
.ride-float1 {
  margin-left: 12.666666666666668%;
}
.ride-float2 {
  margin-left: 29.333333333333336%;
}
.ride-float3 {
  margin-left: 46%;
}
.ride-float4 {
  margin-left: 62.66666666666667%;
}
.ride-float5 {
  margin-left: 79.33333333333334%;
}
.ride-push1 {
  margin-right: 12.666666666666668%;
}
.ride-push2 {
  margin-right: 29.333333333333336%;
}
.ride-push3 {
  margin-right: 46%;
}
.ride-push4 {
  margin-right: 62.66666666666667%;
}
.ride-push5 {
  margin-right: 79.33333333333334%;
}
.ride-test6 {
  float: none;
}
.ride-row:after,
.ride-row:before {
  clear: both;
  content: '';
  display: table;
}

```

######ride-grid-12
This is the basic Ride css twelve column grid
```
// this mixin has not a {block}
// @params
// int gutter (default: 0 2) -> this is the gutter each column will have 
// int padding (default: 0 2) -> this is the padding each column will have
// hash config (default: {}) -> a config object same as ride-grid's

// example:
// using
ride-grid-12(0 0 2, 2)
// ths output will be like
.cl1,
.cl2,
.cl3,
.cl4,
.cl5,
.cl6,
.cl7,
.cl8,
.cl9,
.cl10,
.cl11,
.cl12 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
.cl1 {
  width: 4.333333333333334%;
}
.cl2 {
  width: 12.666666666666668%;
}
.cl3 {
  width: 21%;
}
.cl4 {
  width: 29.333333333333336%;
}
.cl5 {
  width: 37.66666666666667%;
}
.cl6 {
  width: 46%;
}
.cl7 {
  width: 54.333333333333336%;
}
.cl8 {
  width: 62.66666666666667%;
}
.cl9 {
  width: 71%;
}
.cl10 {
  width: 79.33333333333334%;
}
.cl11 {
  width: 87.66666666666667%;
}
.cl12 {
  width: 96%;
}
.float1 {
  margin-left: 4.333333333333334%;
}
.float2 {
  margin-left: 12.666666666666668%;
}
.float3 {
  margin-left: 21%;
}
.float4 {
  margin-left: 29.333333333333336%;
}
.float5 {
  margin-left: 37.66666666666667%;
}
.float6 {
  margin-left: 46%;
}
.float7 {
  margin-left: 54.333333333333336%;
}
.float8 {
  margin-left: 62.66666666666667%;
}
.float9 {
  margin-left: 71%;
}
.float10 {
  margin-left: 79.33333333333334%;
}
.float11 {
  margin-left: 87.66666666666667%;
}
.push1 {
  margin-right: 4.333333333333334%;
}
.push2 {
  margin-right: 12.666666666666668%;
}
.push3 {
  margin-right: 21%;
}
.push4 {
  margin-right: 29.333333333333336%;
}
.push5 {
  margin-right: 37.66666666666667%;
}
.push6 {
  margin-right: 46%;
}
.push7 {
  margin-right: 54.333333333333336%;
}
.push8 {
  margin-right: 62.66666666666667%;
}
.push9 {
  margin-right: 71%;
}
.push10 {
  margin-right: 79.33333333333334%;
}
.push11 {
  margin-right: 87.66666666666667%;
}
.cl12 {
  float: none;
}
.row:after,
.row:before {
  clear: both;
  content: '';
  display: table;
}

```
#####ride-grid-6
Similar to the (ride-grid-12)[ride-grid-12] mixin, the ride-grid-6 is useful for tablet devices.
```
// this mixin has not a {block}
// @params: are the same of ride-grid-12 mixin

// example:
// using
ride-grid-6(0 0 2, 2)
// ths output will be likebody .sm-cl1,
body .sm-cl2,
body .sm-cl3,
body .sm-cl4,
body .sm-cl5,
body .sm-cl6 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
body .sm-cl1 {
  width: 12.666666666666668%;
}
body .sm-cl2 {
  width: 29.333333333333336%;
}
body .sm-cl3 {
  width: 46%;
}
body .sm-cl4 {
  width: 62.66666666666667%;
}
body .sm-cl5 {
  width: 79.33333333333334%;
}
body .sm-cl6 {
  width: 96%;
}
body .sm-float1 {
  margin-left: 12.666666666666668%;
}
body .sm-float2 {
  margin-left: 29.333333333333336%;
}
body .sm-float3 {
  margin-left: 46%;
}
body .sm-float4 {
  margin-left: 62.66666666666667%;
}
body .sm-float5 {
  margin-left: 79.33333333333334%;
}
body .sm-push1 {
  margin-right: 12.666666666666668%;
}
body .sm-push2 {
  margin-right: 29.333333333333336%;
}
body .sm-push3 {
  margin-right: 46%;
}
body .sm-push4 {
  margin-right: 62.66666666666667%;
}
body .sm-push5 {
  margin-right: 79.33333333333334%;
}
body .sm-cl6 {
  float: none;
}
body .row:after,
body .row:before {
  clear: both;
  content: '';
  display: table;
}

```
#####ride-grid-4
Similar to the (ride-grid-12)[ride-grid-12] mixin, the ride-grid-4 is useful for tablet smaller devices.
```
// this mixin has not a {block}
// @params: are the same of ride-grid-12 mixin

// example:
// using
ride-grid-4(0 0 2, 2)
// ths output will be like
body .smt-cl1,
body .smt-cl2,
body .smt-cl3,
body .smt-cl4 {
  float: left;
  margin: 0 0 2%;
  padding: 2%;
}
body .smt-cl1 {
  width: 21%;
}
body .smt-cl2 {
  width: 46%;
}
body .smt-cl3 {
  width: 71%;
}
body .smt-cl4 {
  width: 96%;
}
body .smt-float1 {
  margin-left: 21%;
}
body .smt-float2 {
  margin-left: 46%;
}
body .smt-float3 {
  margin-left: 71%;
}
body .smt-push1 {
  margin-right: 21%;
}
body .smt-push2 {
  margin-right: 46%;
}
body .smt-push3 {
  margin-right: 71%;
}
body .smt-cl4 {
  float: none;
}
body .row:after,
body .row:before {
  clear: both;
  content: '';
  display: table;
}
```

#####**typography mixins**

######ride-anchors
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

######headings
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

######ride-headings
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

######ride-paragraph
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
######ride-small
This mixin will add a class with a smaller font-size and regularly adapted line-height.
``` 
// this mixin has not a {block}
// @params
// [string] className (default: '.small'): this will be the css selector use to add the small font-size style
// [float] fontSize (default: (62.5/100)): this will be the font-size returned from this mixin
// how to use it:
ride-small()
// will render into:
.small {
  font-size: 0.625em;
  line-height: 1;
}
``` 
######ride-typography
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