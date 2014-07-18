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

#Mixin list
[Buttons](https://github.com/octod/ride-css/blob/development/docs/buttons.md)
[Form elements mixins](https://github.com/octod/ride-css/blob/development/docs/form-elements.md)
[Grid system and helpers](https://github.com/octod/ride-css/blob/development/docs/grids.md)
[Media queries](https://github.com/octod/ride-css/blob/development/docs/media-queries.md)
[Typography](https://github.com/octod/ride-css/blob/development/docs/typography.md)
[Various mixins](https://github.com/octod/ride-css/blob/development/docs/etc.md)