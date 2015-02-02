#ride links

This mixin has a **{block}**

*aliased to: ride-anchors*

Basic usage: 
```
  // used as a function
  ride-links($color, $light, $ratio, $class)
  // or used as a propery (the $class variable will be discarded)
  .my-selector
    ride-links: $color, $light, $ratio
```

Mixin params

* **$color** (required) is the base color for your links.
* **$light** (optional, default: false) A boolean. If set to true, your anchors on hover state will have a lighter color (the amount is specified by the *$ratio* variable).
* **$ratio** (optional, default: 21%) How much the color should be darker/lighter on a hover state.
* **$class** (optional, default 'a') This is the css selector

Real life example
```
+ride-links(#df4400, true, class: '.main-anchor')
  text-decoration none
//or
.main-anchor
  ride-links: #df4400, true
```

Yelds
```
.example-anchor{
  color:#df4400;
  text-decoration:none;
}
.example-anchor:hover{
  color:#ff611c
}
.example-anchor:active{
  color:#ff7133
}
.example-anchor:visited{
  color:#df4400
}
```