#ride-float

*This mixin is aliased to ride-span*

This mixin is useful for making your custom grid system.

This mixin has not a {block}

Basic usage:

```sass
.my-floating-class
  ride-float: $width $column-count $current-column $gutter $float-direction
```

Mixin params

**$width** (required): the container width

**$column-count** (optional, default: 1): the maximum columns of your grid (eg: 8, 12, 16)

**$current-column** (optional, default: 1): current column size. 

**$gutter** (optional, default: 0): the container gutter

**$float-direction** (optional, default: 'left'): where to add the extra gutter

How does it works?

```sass
column-float = (($width/$column-count) * $current-column) + $left-gutter + $right-gutter
```

example:

```sass
.test
  ride-float: 100% 10 2 (0 2) 'right'
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
There are two more specific mixins called **ride-span-left** and  **ride-span-right**, which take the same arguments as  *ride-span* except for **$float-direction**