#ride-grid-12

This outputs a sixteen column grid.

This mixin has not a **{block}**

basic usage

```
ride-grid-16($gutter, $padding, $config)
```

Mixin parameters

**$gutter**  [optional, default: 0]: is the columns gutter (margin).

**$padding** [optional, default: 1em]: is the columns padding. 

**$config** (default: {}): is a javascript plain object, used for setting other parameters ([read this for reference](#/docs/grids/grid)).

Real life example (the parameters are the same used for this website)

```
ride-grid-16(0 2, 1.5em, {
  oocss: true
})
```

### oocss grid

same as ride-grid-16, but with the oocss flag set to true.

```
&
  ride-oocss-grid-16: $columns, $gutter, $padding, $placeholder 
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
  ride-ghost-grid-16: $columns, $gutter, $padding
```

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding