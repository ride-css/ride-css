Ride css
========

Stylus mixin library

##Installing ride
Ride **requires** Stylus.js and (obviously) node.js installed

> [Install node.js](http://nodejs.org/ "Click here to go to node.js website")

> [Install stylus.js](http://learnboost.github.io/stylus//#get-styling-with-stylus "Click here to go to stylus.js website")

> download Ride css or clone the repository

##Documentation
####How to include Ride in your .styl file
```

// do this and you're ready to code your beautiful webapp/website!
@require 'ride/*'

```

##Contributing
* Fork this repo
* Commit you changes
* Report bugs
* Drink beer and eat your veggies

*the full doc is coming soon &copy;*
####Mixins list

* css-templates/
  * dialog.styl
    - ride-dialog
  * form.styl
    - form-elements
    - form-elements-readonly
    - form-in-range
    - form-not-valid
    - form-optional
    - form-out-range
    - form-required
    - form-valid
    - placeholder
    - ride-form-elements
  * ride-buttons.styl
    - button
    - button-bar
    - menu-button
    - sliding-button
  * ride-media-queries.styl
    - high-dpi
    - responsive-huge
    - responsive-normal
    - responsive-phone
    - responsive-small
    - responsive-smallest
    - responsive-tablet
* etc/
  * css-normalize.styl
    - [css-normalize](#css-normalize)
  * css-reset.styl
    - [css-reset](#css-reset)

  * ride-css3-proxies.styl 
    
    *since css3 support in Ride is not optimal at this moment, you could install Nib. For installing it type*
    ```npm install -g nib```
    
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
    - skewX
    - skewY
    - tab-size
    - text-selection
    - transform
    - transition
    - transitions
    - translate
    - translateX
    - translateY
  * ride-functions.styl
    - get-lineheight
    - onePercent
    - parseInt
    - parseFloat
    - setUnit
  * ride-mixed-mixins.styl
    - absolute
    - clearfix
    - dont-select
    - fixed
    - reset-ul
    - ride-body
    - tooltip
    - wrapper
* grids/
  * ride-column.styl
    - [ride-column](#ride-column)
    - [ride-float](#ride-float)
  * ride-grid.styl
    - [ride-column-grid](#ride-column-grid)
    - [ride-grid](#ride-grid)
    - [ride-grid-12](#ride-grid-12)
    - [ride-grid-12-small](#ride-grid-12-small)
    - [ride-grid-12-smallest](#ride-grid-12-smallest)
* typography/
  * anchors.styl
    - [ride-anchors](#ride-anchors)
  * ride-typography.styl
    - [headings](#headings)
    - [ride-headings](#ride-headings)
    - [ride-paragraph](#ride-paragraph)
    - [ride-typography](#ride-typography)

##Todos
- [x] add basic mixins
- [ ] make the documentation
  - [x] write the mixins list tree
  - [ ] write how to use mixins
  - [ ] a website maybe?
- [ ] sleep at night

####Using the mixins

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
this mixin is quite complicated, but it will help you to build your custom css grids.
If you want something more friendly user, you should choose the ride-grid-12/6/4 mixins
```
// this mixin has not a {block}
// @params
// hash options (default: {})
//      string options.gridClass (default: '.ride-grid') -> this is the css selector that the grid will have
//      string options.columnClass (default: '.cl') -> this is the prefix for each css column
//      int options.columns (default: 12) -> this is the number of columns the mixin will render
//      string options.columnScope (default: '') -> this is the scope for the columns
//      string options.floatClass (default: '.float') -> this is the float column class prefix
//      string options.floatScope (default: 'body') -> this is the scope for the float column class prefix
//      int options.gridGutter (default: 0) -> this is the grid margin (or padding, see the option below)
//      string options.gridGutterType (default: 'padding') -> this is the type of gutter for the grid wrapper
//      int options.gutter (default: 0 2) -> this is the gutter for the columns
//      string options.gutterType (default: 'margin') -> this is the gutter type for the columns
//      bool options.padding (default: false) -> if true, the columns will also have a padding (equal to margin)
//      string options.pushClass (default: '.push') -> this is the pushing column class prefix
//      string options.rowClass (default: '.row') -> this is the clearfix container for the columns
//      int options.rowGutter (default: 0) -> this is the gutter for the row
//      string options.rowGutterType (default: 'margin') -> this is the gutter type for the row
//      width options.width (default: 100%) -> this is the width for the grid wrapper. Notice that if you are going to use a different unit from '%', the columns width will be rendered using that unit

example:
// using
ride-grid({
  columns: 6,
  gridClass: '.test',
  columnClass: '.span',
})
// will output
.test {
  margin: 0%;
  width: 100%;
}
.span1 {
  width: 12.666666666666668%;
}
.span2 {
  width: 29.333333333333336%;
}
.span3 {
  width: 46%;
}
.span4 {
  width: 62.66666666666667%;
}
.span5 {
  width: 79.33333333333334%;
}
.span6 {
  width: 96%;
}
body .float1 {
  margin-left: 18.666666666666668%;
}
body .float2 {
  margin-left: 35.333333333333336%;
}
body .float3 {
  margin-left: 52%;
}
body .float4 {
  margin-left: 68.66666666666667%;
}
body .float5 {
  margin-left: 85.33333333333334%;
}
body .push1 {
  margin-right: 18.666666666666668%;
}
body .push2 {
  margin-right: 35.333333333333336%;
}
body .push3 {
  margin-right: 52%;
}
body .push4 {
  margin-right: 68.66666666666667%;
}
body .push5 {
  margin-right: 85.33333333333334%;
}
[class*="span"],
[class*="float"] {
  float: left;
}
[class*="span"] {
  margin: 0% 2%;
}
.span6 {
  float: none;
}
.row:after,
.test:after,
.row:before,
.test:before {
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
// int gridGutter (default: 0 2) -> this is the grid gutter
// size gridWidth (default: 100%) -> this is the gridwidth. Note that if you use a different Unit(px, em etc) 
// the columns width and gutter will be calculated with that Unit  
// bool padding (default: false) -> if set to true, each column will also have a padding (measuring the same of column gutter)  
// string gutterType (default: 'margin') -> this is the column gutter type 

// example:
// using
ride-grid-12(padding: true)
// ths output will be like
.ride-grid-12 {
  margin: 0%;
  width: 100%;
}
.cl1 {
  width: 0.333333333333334%;
}
.cl2 {
  width: 8.666666666666668%;
}
.cl3 {
  width: 17%;
}
.cl4 {
  width: 25.333333333333336%;
}
.cl5 {
  width: 33.66666666666667%;
}
.cl6 {
  width: 42%;
}
.cl7 {
  width: 50.333333333333336%;
}
.cl8 {
  width: 58.66666666666667%;
}
.cl9 {
  width: 67%;
}
.cl10 {
  width: 75.33333333333334%;
}
.cl11 {
  width: 83.66666666666667%;
}
.cl12 {
  width: 92%;
}
body .float1 {
  margin-left: 10.333333333333334%;
}
body .float2 {
  margin-left: 18.666666666666668%;
}
body .float3 {
  margin-left: 27%;
}
body .float4 {
  margin-left: 35.333333333333336%;
}
body .float5 {
  margin-left: 43.66666666666667%;
}
body .float6 {
  margin-left: 52%;
}
body .float7 {
  margin-left: 60.333333333333336%;
}
body .float8 {
  margin-left: 68.66666666666667%;
}
body .float9 {
  margin-left: 77%;
}
body .float10 {
  margin-left: 85.33333333333334%;
}
body .float11 {
  margin-left: 93.66666666666667%;
}
body .push1 {
  margin-right: 10.333333333333334%;
}
body .push2 {
  margin-right: 18.666666666666668%;
}
body .push3 {
  margin-right: 27%;
}
body .push4 {
  margin-right: 35.333333333333336%;
}
body .push5 {
  margin-right: 43.66666666666667%;
}
body .push6 {
  margin-right: 52%;
}
body .push7 {
  margin-right: 60.333333333333336%;
}
body .push8 {
  margin-right: 68.66666666666667%;
}
body .push9 {
  margin-right: 77%;
}
body .push10 {
  margin-right: 85.33333333333334%;
}
body .push11 {
  margin-right: 93.66666666666667%;
}
[class*="cl"],
[class*="float"] {
  float: left;
}
[class*="cl"] {
  margin: 0% 2%;
  padding: 0% 2%;
}
.cl12 {
  float: none;
}
.row:after,
.ride-grid-12:after,
.row:before,
.ride-grid-12:before {
  clear: both;
  content: '';
  display: table;
} 
```
#####ride-grid-12-small
Similar to the (ride-grid-12)[ride-grid-12] mixin, the ride-grid-12-small is useful for tablet smaller devices.
```
// this mixin has not a {block}
// @params
// int gutter (default: 0 2) -> this is the gutter each column will have 
// int gridGutter (default: 0 2) -> this is the grid gutter
// size gridWidth (default: 100%) -> this is the gridwidth. Note that if you use a different Unit(px, em etc) 
// the columns width and gutter will be calculated with that Unit  
// bool padding (default: false) -> if set to true, each column will also have a padding (measuring the same of column gutter)  
// string gutterType (default: 'margin') -> this is the column gutter type 

// example:
// using
ride-grid-12-small()
// ths output will be like
.ride-grid-12 {
  margin: 0;
  width: 100%;
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
html body .sm-float1 {
  margin-left: 18.666666666666668%;
}
html body .sm-float2 {
  margin-left: 35.333333333333336%;
}
html body .sm-float3 {
  margin-left: 52%;
}
html body .sm-float4 {
  margin-left: 68.66666666666667%;
}
html body .sm-float5 {
  margin-left: 85.33333333333334%;
}
html body .sm-push1 {
  margin-right: 18.666666666666668%;
}
html body .sm-push2 {
  margin-right: 35.333333333333336%;
}
html body .sm-push3 {
  margin-right: 52%;
}
html body .sm-push4 {
  margin-right: 68.66666666666667%;
}
html body .sm-push5 {
  margin-right: 85.33333333333334%;
}
body [class*="sm-cl"],
body [class*="sm-float"] {
  float: left;
}
body [class*="sm-cl"] {
  margin: 0 2%;
}
.sm-cl6 {
  float: none;
}
.row:after,
.ride-grid-12:after,
.row:before,
.ride-grid-12:before {
  clear: both;
  content: '';
  display: table;
}

```
#####ride-grid-12-smallest
Similar to the (ride-grid-12)[ride-grid-12] mixin, the ride-grid-12-smallest is useful for tablet smaller devices.
```
// this mixin has not a {block}
// @params
// int gutter (default: 0 2) -> this is the gutter each column will have 
// int gridGutter (default: 0 2) -> this is the grid gutter
// size gridWidth (default: 100%) -> this is the gridwidth. Note that if you use a different Unit(px, em etc) 
// the columns width and gutter will be calculated with that Unit  
// bool padding (default: false) -> if set to true, each column will also have a padding (measuring the same of column gutter)  
// string gutterType (default: 'margin') -> this is the column gutter type 

// example:
// using
ride-grid-12-smallest()
// ths output will be like
.ride-grid-12 {
  margin: 0;
  width: 100%;
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
html body .smt-float1 {
  margin-left: 27%;
}
html body .smt-float2 {
  margin-left: 52%;
}
html body .smt-float3 {
  margin-left: 77%;
}
html body .smt-push1 {
  margin-right: 27%;
}
html body .smt-push2 {
  margin-right: 52%;
}
html body .smt-push3 {
  margin-right: 77%;
}
body [class*="smt-cl"],
body [class*="smt-float"] {
  float: left;
}
body [class*="smt-cl"] {
  margin: 0 2%;
}
.smt-cl4 {
  float: none;
}
.row:after,
.ride-grid-12:after,
.row:before,
.ride-grid-12:before {
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
// this mixin has a {block}
// @params
// number fontMultiplier (default: 2) -> the h1 size multiplier (2 will means 2x the inherited font-size)
// number line-height (default: 1.5) -> the base line-height
// number multiplier (default: 0.2) -> each heading will subtract the multiplier and will have the line-height recalculated to keep the vertical rhytm ok
// heading()
example:
// using
+ride-headings()
  color red
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
  color: #f00;
}
```

######ride-paragraph
```
// this mixin has a {block}
// @params
// font-size font-size (default: 1em) -> the font-size the paragraph will have (suggested: 1em)
// number line-height (default: 1.5) -> the line-height the paragraph will have (suggested: 1.5)
// margin margin (default: .5em 0) -> the margin the paragraph will have (suggested: .5em 0)
// ride-paragraph(font-size = 1em, line-height = 1.5, margin = .5em 0)
example:
// using
ride-paragraph()
// will output
p {
  font-size: 1em;
  line-height: 1.5;
  margin: 0.5em 0;
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