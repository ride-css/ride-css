#color-shade

This mixin will return a brigher or darker shade of a given color.

```
$new-color = color-shade($color, $shade)
```

Mixin parameters:

**$color** (required): the color.

**$shade** (required): choosen from this list
  * 50 : 34% brighter
  * 100 : 21% brighter
  * 200 : 13% brighter
  * 300 : 8% brighter
  * 400 : 5% brighter
  * 500 : 0% brighter
  * 600 : 5% darker
  * 700 : 8% darker
  * 800 : 13% darker
  * 900 : 21% darker
  * 1000 : 34% darker

#set-color-shades

This mixin will return a set of brigher and darker shades of a given color.

```
$shade-list = set-color-shades($color)
```

Mixin parameters:

**$color** (required): the color.