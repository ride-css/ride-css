# Flex grid system (we love grids, and we love flex too)

Ride css provides a simple but powerful but flex grid system.

## A column

Each grid is made of columns. Usually some people tends to design using a twelve or sixteen column grid.

With the **flex-col** mixin, you will be able to get your column with a single line of code.

This mixin is cached within your current media (so your code will be automatically DRY).

The mixin accepts several parameters

```sass
col($grid-cols, $col-size, $col-margin, $col-padding)
```

* $grid-cols (default: 12, optional): this parameter tells the mixin how many columns your design relies on. (8, 12, 16)

* $col-size (default: 12, optional): this parameter tells the mixin the occupancy of the current column (if you set $grid-cols to 12 and this parameter to 5, the total occupancy will be 12/5)

* $col-margin (default: 0, optional): this is the column gutter. You can use any valid unit you want, flex will do the magic for you.

* $col-padding (default: 0, optional): this is the column padding.

A simple example for you:

```sass
.col
  flex-col: 1, 1

.another-col
  flex-col: 1, 1

.another-col-but-uncached
  flex-col: 1, 1, 1em

@media (min-width: 768px)
  .col--sm
    flex-col: 2, 1
```

The code above will yeld this:

```css
.col,
.another-col {
  flex-basis: 100%;
}
.another-col-but-uncached {
  flex-basis: 100%;
  margin: 1em;
}
@media (min-width: 768px) {
  .col--sm {
    flex-basis: 50%;
  }
}
```

Nice, uh?

## push, pull

Similar to a traditional grid system, we can use a push/pull with flex. Note that this will behave differently
(the columns will be reordered instead of moving around the webview)

```sass
flex-pull($move-factor, $cached)
flex-push($move-factor, $cached)
```

* $move-factor (required, number): this tells the mixin how many column your element should move

* $cached (default: true, boolean): if set to false, your push/pull will not be cached

```sass
.my-pull
  pull: 4

.my-pull--cached
  pull: 4
```

will yeld to

```css
.my-pull,
.my-pull--cached {
  order: -4;
}
```
