#ride-grid-tablet

This outputs a twelve column grid, with a *md-* modifier (Could be handy for portrait orientation or smaller tablets).

This mixin has not a **{block}**

basic usage

```sass
ride-grid-tablet($gutter, $padding, $config)
```

Mixin parameters

**$gutter**  [optional, default: 0]: is the columns gutter (margin).

**$padding** [optional, default: 1em]: is the columns padding. 

**$config** (default: {}): is a javascript plain object, used for setting other parameters ([read this for reference](#/docs/grids/grid)).

Real life example (the parameters are the same used for this website)

```sass
ride-grid-tablet(0 2, 1.5em, {
  oocss: true
})
```

### oocss grid

same as ride-grid-tablet, but with the oocss flag set to true.

```sass
&
  ride-oocss-grid-tablet: $columns, $gutter, $padding, $placeholder 
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
  ride-ghost-grid-tablet: $columns, $gutter, $padding
```

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding