#ride-grid
This mixin will help you to build your custom css grid system.

This mixin has not a {block}

Basic usage

```sass
ride-grid($columns, $gutter, $padding, $config)
```

Mixin parameters.

**$columns** [required]: is the number of columns the grid will have (usually 12)

**$gutter**  [optional, default: 0]: is the columns gutter (margin).

**$padding** [optional, default: 0]: is the columns padding.

**$config** [optional, default: {}]: is a javascript plain object, used for setting other parameters

* *$config*.**column** (default: '.col'): this is the class name for each css column (eg .col-1, .col-2 etc).
* *$config*.**modifier** (default: ''): this will apply a modifier between .col, .offset, .push and .pull and their number (eg, if set to *xs-*, a col-12 will be renamed to *.col-xs-12*)
* *$config*.**offsetleft** (default: '.offset-left'): this is the offset left class name prefix (eg .offset-left-4, .offset-left-5).
* *$config*.**oocss** (default: false): the grid system will be fully rendered using the oocss pattern (see example below).
* *$config*.**placeholder** (default: false): if turned to *true*, the mixin will render only placeholders instead of css classes. Ideal if you are plannin to use an oocss design patter for your stylesheet.
* *$config*.**offsetright** (default: '.offset-right'): this is the right offset column class prefix (eg .offset-right-6, .offset-right-7).
* *$config*.**prefix** (default: ''): this will add a prefix to columns, push, floats and row.
* *$config*.**row** (default: '.row'): this is a clearfix container for the columns.
* *$config*.**scope** (default: ''): this is the scope for the columns.
* *$config*.**width** (default: 100%): this is the base width every calculation will be made by (remember that you cannot have a width of 800px and a gutter in %).
* *$config*.**nooffset** (default: false): if set to *true*, the mixin will not yeld ```offset-left``` and ```offset-right``` classes (or placeholders, is *$config.placeholder* is set to true)

Real life example

```sass
// actually these are the params used for this website grid system
ride-grid(12, 0 2, 1.5em, {
  oocss: true  
})
```

With some options

```sass
ride-grid(4, 1, 1.5em, {
  oocss: true,
  placeholder: true  
})
```

Actually, it will not render directly, but will allow you to use **@extend**.
example (assuming we are using the grid setup above):

```sass
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

```sass
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

```sass
&
  ride-ghost-grid: $columns, $gutter, $padding
```

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding