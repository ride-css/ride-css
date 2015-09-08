# The grid system (we love grids)

Ride css provides a simple but powerful but flexible grid system.

## A column

Each grid is made of columns. Usually some people tends to design using a twelve or sixteen column grid.

With the **col** mixin, you will be able to get your column with a single line of code.

This mixin is cached within your current media (so your code will be automatically DRY).

The mixin accepts several parameters

```sass
col($grid-cols, $current-col, $col-margin, $display-margin)
```

* $grid-cols (default: 12, optional): this parameter tells the mixin how many columns your design relies on. (8, 12, 16)

* $current-col (default: 12, optional): this parameter tells the mixin the occupancy of the current column (if you set $grid-cols to 12 and this parameter to 5, the total occupancy will be 12/5)

* $col-margin (default: 0, optional): this is the column gutter. You can use any valid unit you want. If you use a unit different from percentage `(%)`, the width will use the css function `calc()`.

* $display-margin (default: true, optional): setting this flag to false, the gutter will be subtracted to the column width but will not be rendered.

Let's start with a simple example

```sass
[class*="navbar-"]
  float: left
  padding: 1em
.navbar
  col()
.navbar-logo
  col: 12, 4
.navbar-menu
  col: 12, 8
```

Once you build the code above, you'll get

```css
[class*="navbar-"] {
  float: left;
  padding: 1em;
}
.navbar,
.navbar-logo,
.navbar-menu {
  margin: 0;
}
.navbar {
  width: 100%;
}
.navbar-logo {
  width: 33.333333333333336%;
}
.navbar-menu {
  width: 66.66666666666667%;
}
```

As you can read above, both *.navbar*, *.navbar-logo* and *.navbar-menu* classes are merged together when they have common properties.

Now let's read another example (with mediaqueries)

```sass
[class*="navbar-"]
  float: left
  padding: 1em
.navbar
  col: 12
.navbar-logo
  col: 12
.navbar-menu
  col: 12

@media(min-width: 768px)
  .navbar-logo
    col: 12, 6
  .navbar-menu
    col: 12, 6

@media(min-width: 1024px)
  .navbar-logo
    col: 12, 4
  .navbar-menu
    col: 12, 8

@media(min-width: 1600px)
  .navbar-logo
    col: 12, 2
  .navbar-menu
    col: 12, 10
```

Once built the code above will look like.

```css
[class*="navbar-"] {
  float: left;
  padding: 1em;
}
.navbar,
.navbar-logo,
.navbar-menu {
  margin: 0;
}
.navbar,
.navbar-logo,
.navbar-menu {
  width: 100%;
}
@media (min-width: 768px) {
  .navbar-logo,
  .navbar-menu {
    margin: 0;
  }
  .navbar-logo,
  .navbar-menu {
    width: 50%;
  }
}
@media (min-width: 1024px) {
  .navbar-logo,
  .navbar-menu {
    margin: 0;
  }
  .navbar-logo {
    width: 33.333333333333336%;
  }
  .navbar-menu {
    width: 66.66666666666667%;
  }
}
@media (min-width: 1600px) {
  .navbar-logo,
  .navbar-menu {
    margin: 0;
  }
  .navbar-logo {
    width: 16.666666666666668%;
  }
  .navbar-menu {
    width: 83.33333333333334%;
  }
}
```

## columns offset AKA move to left or to right

Offsets are a nice way to move your columns left or right.

An offset is nothing more than some extra margin added to move you column left or right.

An **offset** mixin is handy in this case.

This mixin, like **col**, accepts several parameters.

```sass
        offset($direction, $grid-cols, $current-offset, $col-margin)
```

* $direction (default: left): this parameter will tell where the offset will be applied (left or right)

* $grid-cols (default: 12): Likewise in **col** mixin, this parameter tells the mixin the amount of columns your design is built upon.

* $current-offset (default: 0): This tells how many columns your element will be moved by (e.g. if you set $grid-cols to 12 and this to 5, your element will be moved by 12/5)

* $col-margin (default: 0): Usually this should be equal to grid columns gutter.

**Note**

There are two more specific mixins for offsets, called **offset-left** and **offset-right**, which set automatically the **$direction** parameter to *left* or *right*.

Let's start with some examples.

Extending the examples above

```sass
[class*="navbar-"]
  padding: 1em
.navbar
  col: 12
.navbar-logo
  col: 12, 2
.navbar-menu
  col: 12, 8
  offset: left, 12, 2
```

will yeld

```css
[class*="navbar-"] {
  padding: 1em;
}
.navbar,
.navbar-logo,
.navbar-menu {
  margin: 0;
}
.navbar {
  width: 100%;
}
.navbar-logo {
  width: 16.666666666666668%;
}
.navbar-menu {
  margin-left: 16.666666666666668%;
}
.navbar-menu {
  width: 66.66666666666667%;
}
```

And within media queries

```sass
[class*="navbar-"]
  float: left
  padding: 1em
.navbar
  col: 12
.navbar-logo
  col: 12
.navbar-menu
  col: 12

@media(min-width: 768px)
  .navbar-logo
    col: 12, 4
  .navbar-menu
    col: 12, 6
    offset: left, 12, 2

@media(min-width: 1024px)
  .navbar-logo
    col: 12, 3
  .navbar-menu
    col: 12, 6
    offset: left, 12, 3

@media(min-width: 1600px)
  .navbar-logo
    col: 12, 2
  .navbar-menu
    col: 12, 7
    offset: left, 12, 3
```

will be rendered like

```css
[class*="navbar-"] {
  float: left;
  padding: 1em;
}
.navbar,
.navbar-logo,
.navbar-menu {
  margin: 0;
}
.navbar,
.navbar-logo,
.navbar-menu {
  width: 100%;
}
@media (min-width: 768px) {
  .navbar-logo,
  .navbar-menu {
    margin: 0;
  }
  .navbar-logo {
    width: 33.333333333333336%;
  }
  .navbar-menu {
    margin-left: 16.666666666666668%;
  }
  .navbar-menu {
    width: 50%;
  }
}
@media (min-width: 1024px) {
  .navbar-logo,
  .navbar-menu {
    margin: 0;
  }
  .navbar-logo {
    width: 25%;
  }
  .navbar-menu {
    margin-left: 25%;
  }
  .navbar-menu {
    width: 50%;
  }
}
@media (min-width: 1600px) {
  .navbar-logo,
  .navbar-menu {
    margin: 0;
  }
  .navbar-logo {
    width: 16.666666666666668%;
  }
  .navbar-menu {
    margin-left: 25%;
  }
  .navbar-menu {
    width: 58.333333333333336%;
  }
}
```

**offset, offset-left and offset-right** mixins are cached to help you to keep your code DRYer.


## col-move, pull and push, AKA cheating

With these mixins you will be able to "cheat" about columns ordering. This is a raw version of the *flexbox model* order property.

**col-move** mixin accepts a list of parameters that will allow you to invert the order of columns.

```sass
        col-move($move-direction, $grid-cols, $move-offset, $cache-position)
```

* $move-direction (default: forward): this will tell the mixin if the current element should move *forward* or *backward*

* $grid-cols (default: 12): this is the number of columns your grid has

* $move-offset (default: 0): this tells the mixin how many column your element should move

* $cache-position (default: true): if set to false, caching will be prevented (but you should not turn it off :P )

**Note**

**pull** and **push** are shortcuts. The first will set automatically *$move-direction* to *backward*, while the second one will set it to *forward*.

A basic example

```sass
.aside
  col: 12, 4
  // you could use the "push" mixin
  // push: 12, 8
  col-move: forward, 12, 8
.main
  col: 12, 8
  // you could use the "pull" mixin
  // pull: 12, 4
  col-move: backward, 12, 4
```

Will be rendered like

```css
.aside,
.main {
  margin: 0;
}
.aside {
  width: 33.333333333333336%;
}
.aside {
  left: 66.66666666666667%;
}
.aside,
.main {
  position: relative;
}
.main {
  width: 66.66666666666667%;
}
.main {
  left: -33.333333333333336%;
}
```

## row AKA a clearfix!

Well, I think you should already know what a clearfix is. It helps you to mantain the vertical box model occupancy when an element's children use a *float* css property.

This mixin does not accept any parameter, but will be cached withing the current-media.

```sass
.col-row
  row()
```

will yeld

```css
.row:after,
.row:before {
  clear: both;
  content: '';
  display: table;
}
```

## grid. A swiss army knife for managing grids with ease.

Compared to the mixins above, this one is quite more complicated. (You'll need a Science degree to use it properly, I suppose.)

This mixin accepts quite the same parameters of the other above, but will let you more scaffold your layout pretty easily.

```sass
grid($grid-cols, $cols-margin, $cols-padding, $suffix, $display-as-placeholders)
```

* $grid-cols (default: 12) : this is the number of columns your grid has.

* $cols-margin (default: 0): this will tell the mixin to add some gutter to each column. You are free to use any valid unit there.

* $cols-padding (default: 0): this will automatically add some padding to your columns.

* $suffix (default: ''): If you write something there, each css class (or placeholder) of your grid will automatically get a suffix.

* $display-as-placeholders (default: false): If you set this parameter to true, the mixin will generate a set of placeholders instead of css classes (very useful for extending!)

*Note: if you are planning to use it at root level indentation, the mixin must be placed inside an **&** selector (read the first example below)*

Basic usage example

```sass
&
  grid()
```

This simple line of code will yeld this

```css
[class*="col"] {
  margin: 0;
  padding: 0;
}
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  margin: 0;
}
.col-1 {
  width: 8.333333333333334%;
}
.col-2 {
  width: 16.666666666666668%;
}
.col-3 {
  width: 25%;
}
.col-4 {
  width: 33.333333333333336%;
}
.col-5 {
  width: 41.66666666666667%;
}
.col-6 {
  width: 50%;
}
.col-7 {
  width: 58.333333333333336%;
}
.col-8 {
  width: 66.66666666666667%;
}
.col-9 {
  width: 75%;
}
.col-10 {
  width: 83.33333333333334%;
}
.col-11 {
  width: 91.66666666666667%;
}
.col-12 {
  width: 100%;
}
.offset-left-1 {
  margin-left: 8.333333333333334%;
}
.offset-left-2 {
  margin-left: 16.666666666666668%;
}
.offset-left-3 {
  margin-left: 25%;
}
.offset-left-4 {
  margin-left: 33.333333333333336%;
}
.offset-left-5 {
  margin-left: 41.66666666666667%;
}
.offset-left-6 {
  margin-left: 50%;
}
.offset-left-7 {
  margin-left: 58.333333333333336%;
}
.offset-left-8 {
  margin-left: 66.66666666666667%;
}
.offset-left-9 {
  margin-left: 75%;
}
.offset-left-10 {
  margin-left: 83.33333333333334%;
}
.offset-left-11 {
  margin-left: 91.66666666666667%;
}
.offset-left-0 {
  margin-left: 0%;
}
.offset-right-1 {
  margin-right: 8.333333333333334%;
}
.offset-right-2 {
  margin-right: 16.666666666666668%;
}
.offset-right-3 {
  margin-right: 25%;
}
.offset-right-4 {
  margin-right: 33.333333333333336%;
}
.offset-right-5 {
  margin-right: 41.66666666666667%;
}
.offset-right-6 {
  margin-right: 50%;
}
.offset-right-7 {
  margin-right: 58.333333333333336%;
}
.offset-right-8 {
  margin-right: 66.66666666666667%;
}
.offset-right-9 {
  margin-right: 75%;
}
.offset-right-10 {
  margin-right: 83.33333333333334%;
}
.offset-right-11 {
  margin-right: 91.66666666666667%;
}
.offset-right-0 {
  margin-right: 0%;
}
[class*="pull"],
[class*="push"] {
  position: relative;
}
.pull-1 {
  left: -8.333333333333334%;
}
.pull-2 {
  left: -16.666666666666668%;
}
.pull-3 {
  left: -25%;
}
.pull-4 {
  left: -33.333333333333336%;
}
.pull-5 {
  left: -41.66666666666667%;
}
.pull-6 {
  left: -50%;
}
.pull-7 {
  left: -58.333333333333336%;
}
.pull-8 {
  left: -66.66666666666667%;
}
.pull-9 {
  left: -75%;
}
.pull-10 {
  left: -83.33333333333334%;
}
.pull-11 {
  left: -91.66666666666667%;
}
.push-1 {
  left: 8.333333333333334%;
}
.push-2 {
  left: 16.666666666666668%;
}
.push-3 {
  left: 25%;
}
.push-4 {
  left: 33.333333333333336%;
}
.push-5 {
  left: 41.66666666666667%;
}
.push-6 {
  left: 50%;
}
.push-7 {
  left: 58.333333333333336%;
}
.push-8 {
  left: 66.66666666666667%;
}
.push-9 {
  left: 75%;
}
.push-10 {
  left: 83.33333333333334%;
}
.push-11 {
  left: 91.66666666666667%;
}
.pull-0 {
  left: 0%;
}
.pull-0,
.push-0 {
  position: relative;
}
.push-0 {
  left: 0%;
}
.row:after,
.row:before {
  clear: both;
  content: '';
  display: table;
}
```

Yeah, it reminds me of *bootstrap* grid system. Now let's add some custom parameters.

```sass
&
  grid(10, 0, 2em, 'awesome')
```

Will yeld this

```css
[class*="col-awesome"] {
  margin: 0;
  padding: 2em;
}
.col-awesome-1,
.col-awesome-2,
.col-awesome-3,
.col-awesome-4,
.col-awesome-5,
.col-awesome-6,
.col-awesome-7,
.col-awesome-8,
.col-awesome-9,
.col-awesome-10 {
  margin: 0;
}
.col-awesome-1 {
  width: 10%;
}
.col-awesome-2 {
  width: 20%;
}
.col-awesome-3 {
  width: 30%;
}
.col-awesome-4 {
  width: 40%;
}
.col-awesome-5 {
  width: 50%;
}
.col-awesome-6 {
  width: 60%;
}
.col-awesome-7 {
  width: 70%;
}
.col-awesome-8 {
  width: 80%;
}
.col-awesome-9 {
  width: 90%;
}
.col-awesome-10 {
  width: 100%;
}
.offset-left-awesome-1 {
  margin-left: 10%;
}
.offset-left-awesome-2 {
  margin-left: 20%;
}
.offset-left-awesome-3 {
  margin-left: 30%;
}
.offset-left-awesome-4 {
  margin-left: 40%;
}
.offset-left-awesome-5 {
  margin-left: 50%;
}
.offset-left-awesome-6 {
  margin-left: 60%;
}
.offset-left-awesome-7 {
  margin-left: 70%;
}
.offset-left-awesome-8 {
  margin-left: 80%;
}
.offset-left-awesome-9 {
  margin-left: 90%;
}
.offset-left-awesome-0 {
  margin-left: 0%;
}
.offset-right-awesome-1 {
  margin-right: 10%;
}
.offset-right-awesome-2 {
  margin-right: 20%;
}
.offset-right-awesome-3 {
  margin-right: 30%;
}
.offset-right-awesome-4 {
  margin-right: 40%;
}
.offset-right-awesome-5 {
  margin-right: 50%;
}
.offset-right-awesome-6 {
  margin-right: 60%;
}
.offset-right-awesome-7 {
  margin-right: 70%;
}
.offset-right-awesome-8 {
  margin-right: 80%;
}
.offset-right-awesome-9 {
  margin-right: 90%;
}
.offset-right-awesome-0 {
  margin-right: 0%;
}
[class*="pull-awesome"],
[class*="push-awesome"] {
  position: relative;
}
.pull-awesome-1 {
  left: -10%;
}
.pull-awesome-2 {
  left: -20%;
}
.pull-awesome-3 {
  left: -30%;
}
.pull-awesome-4 {
  left: -40%;
}
.pull-awesome-5 {
  left: -50%;
}
.pull-awesome-6 {
  left: -60%;
}
.pull-awesome-7 {
  left: -70%;
}
.pull-awesome-8 {
  left: -80%;
}
.pull-awesome-9 {
  left: -90%;
}
.push-awesome-1 {
  left: 10%;
}
.push-awesome-2 {
  left: 20%;
}
.push-awesome-3 {
  left: 30%;
}
.push-awesome-4 {
  left: 40%;
}
.push-awesome-5 {
  left: 50%;
}
.push-awesome-6 {
  left: 60%;
}
.push-awesome-7 {
  left: 70%;
}
.push-awesome-8 {
  left: 80%;
}
.push-awesome-9 {
  left: 90%;
}
.pull-awesome-0 {
  left: 0%;
}
.pull-awesome-0,
.push-awesome-0 {
  position: relative;
}
.push-awesome-0 {
  left: 0%;
}
.row:after,
.row:before {
  clear: both;
  content: '';
  display: table;
}
```

Now let's take it further. Let's write a mobile first grid system with four breakpoints!

```sass
&
  grid(12, 0, .9em, 'xs')

@media (min-width: 768px)
  grid(12, 0, 1em, 'sm')

@media (min-width: 1024px)  
  grid(12, 0, 1.1em, 'md')

@media (min-width: 1366px)  
  grid(12, 0, 1.2em, 'lg')
```

With only eleven lines, you'll get an awesome and responsive grid system! Awesome! Hurr durr!

```css
[class*="col-xs"] {
  margin: 0;
  padding: 0.9em;
}
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12 {
  margin: 0;
}
.col-xs-1 {
  width: 8.333333333333334%;
}
.col-xs-2 {
  width: 16.666666666666668%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-4 {
  width: 33.333333333333336%;
}
.col-xs-5 {
  width: 41.66666666666667%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-7 {
  width: 58.333333333333336%;
}
.col-xs-8 {
  width: 66.66666666666667%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-10 {
  width: 83.33333333333334%;
}
.col-xs-11 {
  width: 91.66666666666667%;
}
.col-xs-12 {
  width: 100%;
}
.offset-left-xs-1 {
  margin-left: 8.333333333333334%;
}
.offset-left-xs-2 {
  margin-left: 16.666666666666668%;
}
.offset-left-xs-3 {
  margin-left: 25%;
}
.offset-left-xs-4 {
  margin-left: 33.333333333333336%;
}
.offset-left-xs-5 {
  margin-left: 41.66666666666667%;
}
.offset-left-xs-6 {
  margin-left: 50%;
}
.offset-left-xs-7 {
  margin-left: 58.333333333333336%;
}
.offset-left-xs-8 {
  margin-left: 66.66666666666667%;
}
.offset-left-xs-9 {
  margin-left: 75%;
}
.offset-left-xs-10 {
  margin-left: 83.33333333333334%;
}
.offset-left-xs-11 {
  margin-left: 91.66666666666667%;
}
.offset-left-xs-0 {
  margin-left: 0%;
}
.offset-right-xs-1 {
  margin-right: 8.333333333333334%;
}
.offset-right-xs-2 {
  margin-right: 16.666666666666668%;
}
.offset-right-xs-3 {
  margin-right: 25%;
}
.offset-right-xs-4 {
  margin-right: 33.333333333333336%;
}
.offset-right-xs-5 {
  margin-right: 41.66666666666667%;
}
.offset-right-xs-6 {
  margin-right: 50%;
}
.offset-right-xs-7 {
  margin-right: 58.333333333333336%;
}
.offset-right-xs-8 {
  margin-right: 66.66666666666667%;
}
.offset-right-xs-9 {
  margin-right: 75%;
}
.offset-right-xs-10 {
  margin-right: 83.33333333333334%;
}
.offset-right-xs-11 {
  margin-right: 91.66666666666667%;
}
.offset-right-xs-0 {
  margin-right: 0%;
}
[class*="pull-xs"],
[class*="push-xs"] {
  position: relative;
}
.pull-xs-1 {
  left: -8.333333333333334%;
}
.pull-xs-2 {
  left: -16.666666666666668%;
}
.pull-xs-3 {
  left: -25%;
}
.pull-xs-4 {
  left: -33.333333333333336%;
}
.pull-xs-5 {
  left: -41.66666666666667%;
}
.pull-xs-6 {
  left: -50%;
}
.pull-xs-7 {
  left: -58.333333333333336%;
}
.pull-xs-8 {
  left: -66.66666666666667%;
}
.pull-xs-9 {
  left: -75%;
}
.pull-xs-10 {
  left: -83.33333333333334%;
}
.pull-xs-11 {
  left: -91.66666666666667%;
}
.push-xs-1 {
  left: 8.333333333333334%;
}
.push-xs-2 {
  left: 16.666666666666668%;
}
.push-xs-3 {
  left: 25%;
}
.push-xs-4 {
  left: 33.333333333333336%;
}
.push-xs-5 {
  left: 41.66666666666667%;
}
.push-xs-6 {
  left: 50%;
}
.push-xs-7 {
  left: 58.333333333333336%;
}
.push-xs-8 {
  left: 66.66666666666667%;
}
.push-xs-9 {
  left: 75%;
}
.push-xs-10 {
  left: 83.33333333333334%;
}
.push-xs-11 {
  left: 91.66666666666667%;
}
.pull-xs-0 {
  left: 0%;
}
.pull-xs-0,
.push-xs-0,
.pull-sm-0,
.push-sm-0,
.pull-md-0,
.push-md-0,
.pull-lg-0,
.push-lg-0 {
  position: relative;
}
.push-xs-0 {
  left: 0%;
}
.row:after,
.row:before {
  clear: both;
  content: '';
  display: table;
}
@media (min-width: 768px) {
  [class*="col-sm"] {
    margin: 0;
    padding: 1em;
  }
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12 {
    margin: 0;
  }
  .col-sm-1 {
    width: 8.333333333333334%;
  }
  .col-sm-2 {
    width: 16.666666666666668%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-4 {
    width: 33.333333333333336%;
  }
  .col-sm-5 {
    width: 41.66666666666667%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-7 {
    width: 58.333333333333336%;
  }
  .col-sm-8 {
    width: 66.66666666666667%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-10 {
    width: 83.33333333333334%;
  }
  .col-sm-11 {
    width: 91.66666666666667%;
  }
  .col-sm-12 {
    width: 100%;
  }
  .offset-left-sm-1 {
    margin-left: 8.333333333333334%;
  }
  .offset-left-sm-2 {
    margin-left: 16.666666666666668%;
  }
  .offset-left-sm-3 {
    margin-left: 25%;
  }
  .offset-left-sm-4 {
    margin-left: 33.333333333333336%;
  }
  .offset-left-sm-5 {
    margin-left: 41.66666666666667%;
  }
  .offset-left-sm-6 {
    margin-left: 50%;
  }
  .offset-left-sm-7 {
    margin-left: 58.333333333333336%;
  }
  .offset-left-sm-8 {
    margin-left: 66.66666666666667%;
  }
  .offset-left-sm-9 {
    margin-left: 75%;
  }
  .offset-left-sm-10 {
    margin-left: 83.33333333333334%;
  }
  .offset-left-sm-11 {
    margin-left: 91.66666666666667%;
  }
  .offset-left-sm-0 {
    margin-left: 0%;
  }
  .offset-right-sm-1 {
    margin-right: 8.333333333333334%;
  }
  .offset-right-sm-2 {
    margin-right: 16.666666666666668%;
  }
  .offset-right-sm-3 {
    margin-right: 25%;
  }
  .offset-right-sm-4 {
    margin-right: 33.333333333333336%;
  }
  .offset-right-sm-5 {
    margin-right: 41.66666666666667%;
  }
  .offset-right-sm-6 {
    margin-right: 50%;
  }
  .offset-right-sm-7 {
    margin-right: 58.333333333333336%;
  }
  .offset-right-sm-8 {
    margin-right: 66.66666666666667%;
  }
  .offset-right-sm-9 {
    margin-right: 75%;
  }
  .offset-right-sm-10 {
    margin-right: 83.33333333333334%;
  }
  .offset-right-sm-11 {
    margin-right: 91.66666666666667%;
  }
  .offset-right-sm-0 {
    margin-right: 0%;
  }
  [class*="pull-sm"],
  [class*="push-sm"] {
    position: relative;
  }
  .pull-sm-1 {
    left: -8.333333333333334%;
  }
  .pull-sm-2 {
    left: -16.666666666666668%;
  }
  .pull-sm-3 {
    left: -25%;
  }
  .pull-sm-4 {
    left: -33.333333333333336%;
  }
  .pull-sm-5 {
    left: -41.66666666666667%;
  }
  .pull-sm-6 {
    left: -50%;
  }
  .pull-sm-7 {
    left: -58.333333333333336%;
  }
  .pull-sm-8 {
    left: -66.66666666666667%;
  }
  .pull-sm-9 {
    left: -75%;
  }
  .pull-sm-10 {
    left: -83.33333333333334%;
  }
  .pull-sm-11 {
    left: -91.66666666666667%;
  }
  .push-sm-1 {
    left: 8.333333333333334%;
  }
  .push-sm-2 {
    left: 16.666666666666668%;
  }
  .push-sm-3 {
    left: 25%;
  }
  .push-sm-4 {
    left: 33.333333333333336%;
  }
  .push-sm-5 {
    left: 41.66666666666667%;
  }
  .push-sm-6 {
    left: 50%;
  }
  .push-sm-7 {
    left: 58.333333333333336%;
  }
  .push-sm-8 {
    left: 66.66666666666667%;
  }
  .push-sm-9 {
    left: 75%;
  }
  .push-sm-10 {
    left: 83.33333333333334%;
  }
  .push-sm-11 {
    left: 91.66666666666667%;
  }
  .pull-sm-0 {
    left: 0%;
  }
  .push-sm-0 {
    left: 0%;
  }
}
@media (min-width: 1024px) {
  [class*="col-md"] {
    margin: 0;
    padding: 1.1em;
  }
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12 {
    margin: 0;
  }
  .col-md-1 {
    width: 8.333333333333334%;
  }
  .col-md-2 {
    width: 16.666666666666668%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-4 {
    width: 33.333333333333336%;
  }
  .col-md-5 {
    width: 41.66666666666667%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-7 {
    width: 58.333333333333336%;
  }
  .col-md-8 {
    width: 66.66666666666667%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-10 {
    width: 83.33333333333334%;
  }
  .col-md-11 {
    width: 91.66666666666667%;
  }
  .col-md-12 {
    width: 100%;
  }
  .offset-left-md-1 {
    margin-left: 8.333333333333334%;
  }
  .offset-left-md-2 {
    margin-left: 16.666666666666668%;
  }
  .offset-left-md-3 {
    margin-left: 25%;
  }
  .offset-left-md-4 {
    margin-left: 33.333333333333336%;
  }
  .offset-left-md-5 {
    margin-left: 41.66666666666667%;
  }
  .offset-left-md-6 {
    margin-left: 50%;
  }
  .offset-left-md-7 {
    margin-left: 58.333333333333336%;
  }
  .offset-left-md-8 {
    margin-left: 66.66666666666667%;
  }
  .offset-left-md-9 {
    margin-left: 75%;
  }
  .offset-left-md-10 {
    margin-left: 83.33333333333334%;
  }
  .offset-left-md-11 {
    margin-left: 91.66666666666667%;
  }
  .offset-left-md-0 {
    margin-left: 0%;
  }
  .offset-right-md-1 {
    margin-right: 8.333333333333334%;
  }
  .offset-right-md-2 {
    margin-right: 16.666666666666668%;
  }
  .offset-right-md-3 {
    margin-right: 25%;
  }
  .offset-right-md-4 {
    margin-right: 33.333333333333336%;
  }
  .offset-right-md-5 {
    margin-right: 41.66666666666667%;
  }
  .offset-right-md-6 {
    margin-right: 50%;
  }
  .offset-right-md-7 {
    margin-right: 58.333333333333336%;
  }
  .offset-right-md-8 {
    margin-right: 66.66666666666667%;
  }
  .offset-right-md-9 {
    margin-right: 75%;
  }
  .offset-right-md-10 {
    margin-right: 83.33333333333334%;
  }
  .offset-right-md-11 {
    margin-right: 91.66666666666667%;
  }
  .offset-right-md-0 {
    margin-right: 0%;
  }
  [class*="pull-md"],
  [class*="push-md"] {
    position: relative;
  }
  .pull-md-1 {
    left: -8.333333333333334%;
  }
  .pull-md-2 {
    left: -16.666666666666668%;
  }
  .pull-md-3 {
    left: -25%;
  }
  .pull-md-4 {
    left: -33.333333333333336%;
  }
  .pull-md-5 {
    left: -41.66666666666667%;
  }
  .pull-md-6 {
    left: -50%;
  }
  .pull-md-7 {
    left: -58.333333333333336%;
  }
  .pull-md-8 {
    left: -66.66666666666667%;
  }
  .pull-md-9 {
    left: -75%;
  }
  .pull-md-10 {
    left: -83.33333333333334%;
  }
  .pull-md-11 {
    left: -91.66666666666667%;
  }
  .push-md-1 {
    left: 8.333333333333334%;
  }
  .push-md-2 {
    left: 16.666666666666668%;
  }
  .push-md-3 {
    left: 25%;
  }
  .push-md-4 {
    left: 33.333333333333336%;
  }
  .push-md-5 {
    left: 41.66666666666667%;
  }
  .push-md-6 {
    left: 50%;
  }
  .push-md-7 {
    left: 58.333333333333336%;
  }
  .push-md-8 {
    left: 66.66666666666667%;
  }
  .push-md-9 {
    left: 75%;
  }
  .push-md-10 {
    left: 83.33333333333334%;
  }
  .push-md-11 {
    left: 91.66666666666667%;
  }
  .pull-md-0 {
    left: 0%;
  }
  .push-md-0 {
    left: 0%;
  }
}
@media (min-width: 1366px) {
  [class*="col-lg"] {
    margin: 0;
    padding: 1.2em;
  }
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12 {
    margin: 0;
  }
  .col-lg-1 {
    width: 8.333333333333334%;
  }
  .col-lg-2 {
    width: 16.666666666666668%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-4 {
    width: 33.333333333333336%;
  }
  .col-lg-5 {
    width: 41.66666666666667%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-7 {
    width: 58.333333333333336%;
  }
  .col-lg-8 {
    width: 66.66666666666667%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-10 {
    width: 83.33333333333334%;
  }
  .col-lg-11 {
    width: 91.66666666666667%;
  }
  .col-lg-12 {
    width: 100%;
  }
  .offset-left-lg-1 {
    margin-left: 8.333333333333334%;
  }
  .offset-left-lg-2 {
    margin-left: 16.666666666666668%;
  }
  .offset-left-lg-3 {
    margin-left: 25%;
  }
  .offset-left-lg-4 {
    margin-left: 33.333333333333336%;
  }
  .offset-left-lg-5 {
    margin-left: 41.66666666666667%;
  }
  .offset-left-lg-6 {
    margin-left: 50%;
  }
  .offset-left-lg-7 {
    margin-left: 58.333333333333336%;
  }
  .offset-left-lg-8 {
    margin-left: 66.66666666666667%;
  }
  .offset-left-lg-9 {
    margin-left: 75%;
  }
  .offset-left-lg-10 {
    margin-left: 83.33333333333334%;
  }
  .offset-left-lg-11 {
    margin-left: 91.66666666666667%;
  }
  .offset-left-lg-0 {
    margin-left: 0%;
  }
  .offset-right-lg-1 {
    margin-right: 8.333333333333334%;
  }
  .offset-right-lg-2 {
    margin-right: 16.666666666666668%;
  }
  .offset-right-lg-3 {
    margin-right: 25%;
  }
  .offset-right-lg-4 {
    margin-right: 33.333333333333336%;
  }
  .offset-right-lg-5 {
    margin-right: 41.66666666666667%;
  }
  .offset-right-lg-6 {
    margin-right: 50%;
  }
  .offset-right-lg-7 {
    margin-right: 58.333333333333336%;
  }
  .offset-right-lg-8 {
    margin-right: 66.66666666666667%;
  }
  .offset-right-lg-9 {
    margin-right: 75%;
  }
  .offset-right-lg-10 {
    margin-right: 83.33333333333334%;
  }
  .offset-right-lg-11 {
    margin-right: 91.66666666666667%;
  }
  .offset-right-lg-0 {
    margin-right: 0%;
  }
  [class*="pull-lg"],
  [class*="push-lg"] {
    position: relative;
  }
  .pull-lg-1 {
    left: -8.333333333333334%;
  }
  .pull-lg-2 {
    left: -16.666666666666668%;
  }
  .pull-lg-3 {
    left: -25%;
  }
  .pull-lg-4 {
    left: -33.333333333333336%;
  }
  .pull-lg-5 {
    left: -41.66666666666667%;
  }
  .pull-lg-6 {
    left: -50%;
  }
  .pull-lg-7 {
    left: -58.333333333333336%;
  }
  .pull-lg-8 {
    left: -66.66666666666667%;
  }
  .pull-lg-9 {
    left: -75%;
  }
  .pull-lg-10 {
    left: -83.33333333333334%;
  }
  .pull-lg-11 {
    left: -91.66666666666667%;
  }
  .push-lg-1 {
    left: 8.333333333333334%;
  }
  .push-lg-2 {
    left: 16.666666666666668%;
  }
  .push-lg-3 {
    left: 25%;
  }
  .push-lg-4 {
    left: 33.333333333333336%;
  }
  .push-lg-5 {
    left: 41.66666666666667%;
  }
  .push-lg-6 {
    left: 50%;
  }
  .push-lg-7 {
    left: 58.333333333333336%;
  }
  .push-lg-8 {
    left: 66.66666666666667%;
  }
  .push-lg-9 {
    left: 75%;
  }
  .push-lg-10 {
    left: 83.33333333333334%;
  }
  .push-lg-11 {
    left: 91.66666666666667%;
  }
  .pull-lg-0 {
    left: 0%;
  }
  .push-lg-0 {
    left: 0%;
  }
}
```
