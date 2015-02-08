#ride-grid-4

This outputs a six column grid (Could be useful for mobile phones).

This mixin has not a **{block}**

basic usage

```sass
ride-grid-4($gutter, $padding, $config)
```

Mixin parameters

**$gutter**  [optional, default: 0 0 2]: is the columns gutter (margin).

**$padding** [optional, default: 1em]: is the columns padding. 

**$config** (default: {}): is a javascript plain object, used for setting other parameters ([read this for reference](#/docs/grids/grid)).

Real life example (the parameters are the same used for this website)

```sass
ride-grid-4(0 2, 1.5em, {
  oocss: true
})
```

### oocss grid

same as ride-grid-4, but with the oocss flag set to true.

```sass
&
  ride-oocss-grid-4: $columns, $gutter, $padding, $placeholder 
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
  ride-ghost-grid-4: $columns, $gutter, $padding
```

* **$columns** (required): the number of columns
* **$gutter** (required): grid column gutter
* **$padding** (required): grid column padding