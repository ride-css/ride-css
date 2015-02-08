#ride-column-grid

This mixin will help you to build your custom css grid system.

This mixin has not a {block}

Basic usage
```sass
ride-column-grid($column-count, $config)
// or
.my-column-grid
  ride-column-grid: $column-count
```

Mixin parameters

* **$column-count** (required): the number of columns your grid will have.
* **$config** (Hash, it is not enabled if you are using the mixin as a css property)
  * $config.**class** (optional, default: 'ride-columns'): the grid wrapper class, every direct child will be considered as a column

Real life example
```sass
.my-grid
  ride-column-grid: 6
```

Yelds
```css
.my-grid {
  -webkit-column-count: 6;
  -moz-column-count: 6;
  column-count: 6;
}
.my-grid > * {
  -webkit-page-break-inside: avoid;
  -moz-page-break-inside: avoid;
  -o-page-break-inside: avoid;
  page-break-inside: avoid;
  margin: 0;
  float: none;
}
```