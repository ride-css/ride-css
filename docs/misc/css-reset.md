#css reset

*Author: Eric Meyer (meyerweb)*

This mixin will return a css reset.

Basic usage

```
  css-reset()
  //or
  &
    reset-type: 'reset'
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