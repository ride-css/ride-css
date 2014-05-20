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

* css-templates
  * dialog
    - ride-dialog
  * form
    - form-elements
    - form-elements-readonly
    - form-in-range
    - form-not-valid
    - form-optional
    - form-out-range
    - form-required
    - form-valid
    - ride-form-elements
  * ride-buttons
    - button
    - button-bar
    - sliding-button
  * ride-media-queries
    - high-dpi
    - responsive-huge
    - responsive-normal
    - responsive-phone
    - responsive-small
    - responsive-smallest
    - responsive-tablet
* etc
  * css-normalize
    - css-normalize
  * css-reset
    - css-reset
  * ride-css3-proxies
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
  * ride-functions
    - get-lineheight
    - onePercent
    - parseInt
    - parseFloat
    - setUnit
  * ride-mixed-mixins
    - absolute
    - clearfix
    - dont-select
    - fixed
    - reset-ul
    - ride-body
    - tooltip
    - wrapper
* grids
  * ride-column
    - ride-column
    - ride-float
  * ride-grid
    - ride-column-grid
    - ride-grid
    - ride-grid-12
    - ride-grid-12-reset
    - ride-two-columns
    - ride-two-columns-reset
* typography
  * anchors
    - ride-anchors
  * ride-typography
    - headings
    - ride-headings
    - ride-paragraph
    - ride-typography

##Contributing
* Fork this repo
* Commit you changes
* Report bugs
* Drink beer and eat your veggies

##Todos
- [x] add basic mixins
- [ ] make the documentation
  - [x] make the mixins list tree
  - [ ] write how to use mixins
- [ ] sleep at night