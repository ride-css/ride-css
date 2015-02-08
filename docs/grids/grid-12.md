#ride-grid-12

This outputs a twelve column grid.

This mixin has not a **{block}**

basic usage

```sass
ride-grid-12($gutter, $padding, $config)
```

Mixin parameters

**$gutter**  [optional, default: 0 1]: is the columns gutter (margin).

**$padding** [optional, default: 1em]: is the columns padding. 

**$config** (default: {}): is a javascript plain object, used for setting other parameters ([read this for reference](#/docs/grids/grid)).

Real life example (the parameters are the same used for this website)

```sass
ride-grid-12(0 2, 1.5em, {
  oocss: true
})
```

### oocss grid

same as ride-grid-12, but with the oocss flag set to true.

```sass
&
  ride-oocss-grid-12: $columns, $gutter, $padding, $placeholder 
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
  ride-ghost-grid-12: $columns, $gutter, $padding
```

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding