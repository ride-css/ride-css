#column

A simple column mixin for making your custom grid system.

This mixin has not a {block}

Basic usage:

```sass
.my-column-class
  column: $columns, $col-number
```

Mixin params

**$column-count** (required): the maximum columns of your grid (eg: 8, 12, 16)

**$current-column** (required): current column size. 


#ride-column

This mixin is useful for making your custom grid system.

This mixin has not a {block}

Basic usage:

```sass
.my-column-class
  ride-column: $width $column-count $current-column $gutter $padding
```

Mixin params

**$width** (required): the container width

**$column-count** (optional, default: 1): the maximum columns of your grid (eg: 8, 12, 16)

**$current-column** (optional, default: 1): current column size. 

**$gutter** (optional, default: 0): the container gutter

**$padding** (optional, default: 0): the container padding

How does it works?

```sass
column-width = (($width/$column-count) * $current-column) - $left-gutter - $right-gutter
```

example:

```sass
.test
  ride-column: 100% 10 2 (0 2) 1em
```

will output

```css
.test {
  margin: 0% 2%;
  padding: 1em;
  width: 21%;
}
.test{
  -webkit-box-sizing: border-box;  
  -moz-box-sizing: border-box;  
  box-sizing: border-box;  
}
```
