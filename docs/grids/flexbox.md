#ride-flex-grid

This mixin has not a **{block}**

This mixin will returs a set of placeholders, scoped by a css selector (if set, see below)

basic usage
```sass
// outside a selector
ride-flex-grid($columns, $gutter, $padding)
// inside a selector
.selector-name
  ride-flex-grid: $columns, $gutter, $padding
```

Mixin parameters

* $columns (required): the number of columns the grid will have

* $gutter (optional, default = 0): grid item gutter

* $padding (optional, default = 0): grid item padding

Each column placeholder will follow this naming pattern

[selector scope, if set] $flex-column-[column number]

Real life example:

```sass
$wrap
  ride-flex-grid: 12, .5em 1% 0, 1em
.item
  @extend $wrap $flex-column-6
  background-color:  #EAFCFF
.item-1
.item-4
  @extend $wrap $flex-column-12
.item-2
  @extend $wrap $flex-column-3
  height: 300px
.wrap
  @extend $wrap
```