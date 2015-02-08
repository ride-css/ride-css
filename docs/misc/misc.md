#Miscellaneous mixins

##The good old clearfix

```sass
  .my-selector
    clearfix()
  //will yeld to
  .my-selector:after
  .my-selector:before{
    clear: both;
    content: '';
    display: table;
  }
```

##dont-select

This mixin will make the current element non selectable (wow, useful for your buttons or read-only/disabled inputs)

```sass
  .my-selector
    dont-select($cache)
    // or
    dont-select: $cache
```

Mixin parameters:

* **$cache** (optional, default = false): if set to true, the css proprierties outputted by this mixin will be cached

##full-size

This mixin will return a 100% height and width

```sass
  .my-selector
    full-size()
```

will yeld

```css
  .my-selector{
    height: 100%;
    width: 100%;
  }
```

##ride-absolute-page

This mixin is useful for making fullpage scrolling websites

```sass
  .my-page
    ride-absolute-page: $page-number
```

Mixin parameters:

* **$page-number** (required, number): the page number. 0 is the first page.

Real life example:

```sass
  .my-page-0
    ride-absolute-page: 0
  .my-page-1
    ride-absolute-page: 1
  .my-page-2
    ride-absolute-page: 2
```