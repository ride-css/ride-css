Ride css
========

Stylus mixin library

##Installing ride
Ride **requires** Stylus.js and (obviously) node.js installed

> [Install node.js](http://nodejs.org/ "Click here to go to node.js website")

> [Install stylus.js](http://learnboost.github.io/stylus//#get-styling-with-stylus "Click here to go to stylus.js website")

##Documentation
####How to include Ride in your .styl file
```

// do this and you're ready to code your beautiful webapp/website!
@require 'ride/*'

```
*the full doc is coming soon &copy;*
####Mixins list
The library is made of mixins. A mixin is a portion of code useful to be reused and it's dinamically generated.
This is the mixins list (Organized in folders)

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
    - ride-form-elements
  * ride-buttons.styl
    - button
    - button-bar
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
    - css-normalize
  * css-reset.styl
    - css-reset

  * ride-css3-proxies.styl 
    
    *since css3 support is not already optimal in Ride, you could install Nib. For installing it type*
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
    - ride-column
    - ride-float
  * ride-grid.styl
    - ride-column-grid
    - ride-grid
    - ride-grid-12
    - ride-grid-12-reset
    - ride-two-columns
    - ride-two-columns-reset
* typography/
  * anchors.styl
    - [ride-anchors](#ride-anchors)
  * ride-typography.styl
    - [headings](#headings)
    - [ride-headings](#ride-headings)
    - [ride-paragraph](#ride-paragraph)
    - [ride-typography](#ride-typography)

##Contributing
* Fork this repo
* Commit you changes
* Report bugs
* Drink beer and eat your veggies

##Todos
- [x] add basic mixins
- [ ] make the documentation
  - [x] write the mixins list tree
  - [ ] write how to use mixins
  - [ ] a website maybe?
- [ ] sleep at night

####Using the mixins
#####ride-anchors
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

#####headings
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

#####ride-headings
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

#####ride-paragraph
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
#####ride-typography
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