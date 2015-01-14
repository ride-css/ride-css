#ride-column

This mixin is useful for making your custom grid system.

This mixin has not a {block}

Basic usage:

```
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

```
column-width = (($width/$column-count) * $current-column) - $left-gutter - $right-gutter
```

example:

```
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