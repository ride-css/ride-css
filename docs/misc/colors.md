#colors

These variables are global. It's an implementation of mrmrs colors

```sass
aqua = #7FDBFF
black = #111111
blue = #0074D9
fuchsia = #F012BE
gray = #aaaaaa
green = #2ECC40
lime = #01FF70
maroon = #85144B
navy = #001F3F
olive = #3D9970
orange = #FF851B
purple = #B10DC9
red = #FF4136
silver = #dddddd
teal = #39CCCC
white = #ffffff
yellow = #FFDC00
```

#color-scheme

*this mixin has not a block*

Useful for setting a color-scheme (background-color and color).
If used outside of a css selector, the mixin will yeld a placeholder.

Basic usage

```sass
color-scheme($name, $background-color, $color)
// or
.my-selector
  color-scheme: $background-color, $color
```

Mixin parameters

* **$background-color** (rgba): the background-color
* **$color** (rgba): the color
* **$name** (required if the mixin is not used as a css property): this will be the name for the placeholder