#css normalize

*Original version by Nicolas Gallagher and Jonathan Neal can be found here https://github.com/necolas/normalize.css/*

This mixin will return a css normalization. Usually it's the best way to make different browser's rendering the same.

It's **highly recommended** if you are planning to develop your css for **IE9+** or for **mobile devices**.

Basic usage

```
  css-normalize()
  //or
  &
    reset-type: 'normalize'
```

This mixin will also return automatically those placeholders (useful for using the @extend rule)

```
  $block
    display: block
  $bold
    font-weight: bold
  $code-font
    font-family: monospace,serif
    font-size: 1em
  $inline-block
    display: inline-block
  $none
    display: none
  $normal
    font-weight: 400
  $pointer
    cursor: pointer
  $table
    display: table
    $table-cell
      display: table-cell
    $table-row
      display: table-row
  $table-cell
    display: table-cell
  $table-row
    display: table-row
  $button
    @extend $inline-block
    @extend $pointer
  $full-background
    background-size: cover
    background-position: center
    background-repeat: repeat-none
```