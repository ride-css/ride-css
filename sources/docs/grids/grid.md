#ride-grid
This mixin will help you to build your custom css grid system.

This mixin has not a {block}

Basic usage

```
ride-grid($columns, $gutter, $padding, $config)
```

Mixin parameters.

**$columns** [required]: is the number of columns the grid will have (usually 12)

**$gutter**  [optional, default: 0]: is the columns gutter (margin).

**$padding** [optional, default: 0]: is the columns padding.

**$config** [optional, default: {}]: is a javascript plain object, used for setting other parameters

* *$config*.**column** (default: '.col'): this is the class name for each css column (eg .cl1, .cl2 etc).
* *$config*.**spanleft** (default: '.span-left'): this is the span left class name prefix (eg .span-left4, .span-left5).
* *$config*.**oocss** (default: false): the grid system will be fully rendered using the oocss pattern (see example below).
* *$config*.**placeholder** (default: false): if turned to *true*, the mixin will render only placeholders instead of css classes. Ideal if you are plannin to use an oocss design patter for your stylesheet.
* *$config*.**spanright** (default: '.span-right'): this is the right span column class prefix (eg .span-right6, .span-right7).
* *$config*.**prefix** (default: ''): this will add a prefix to columns, push, floats and row.
* *$config*.**row** (default: '.row'): this is a clearfix container for the columns.
* *$config*.**scope** (default: ''): this is the scope for the columns.
* *$config*.**width** (default: 100%): this is the base width every calculation will be made by (remember that you cannot have a width of 800px and a gutter in %).
* *$config*.**nospan** (default: false): if set to *true*, the mixin will not yeld ```span-left``` and ```span-right``` classes (or placeholders, is *$config.placeholder* is set to true)

Real life example

```
// actually these are the params used for this website grid system
ride-grid(12, 0 2, 1.5em, {
  oocss: true  
})
```

With some options

```
ride-grid(4, 1, 1.5em, {
  oocss: true,
  placeholder: true  
})
```

Actually, it will not render directly, but will allow you to use **@extend**.
example (assuming we are using the grid setup above):

```
$my-custom-placeholder-for-half-width-columns
  @extend $cl
  @extend $cl2
.half
  @extend $my-custom-placeholder-for-half-width-columns
.my-full-width-column
  @extend $cl
  @extend $cl4
.site-nav
  @extend $my-custom-placeholder-for-half-width-columns
```

### oocss grid

same as ride-grid, but with the oocss flag set to true.

```
&
  ride-oocss-grid: $columns, $gutter, $padding, $placeholder 
```

mixin parameters

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding
* **$placeholder** (optional, default = false): if set to true, the mixin will yeld a set of placeholders instead of css classes

### oocss ghost grid

same as oocss grid, this mixin will render a set of placeholders

```
&
  ride-ghost-grid: $columns, $gutter, $padding
```

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding