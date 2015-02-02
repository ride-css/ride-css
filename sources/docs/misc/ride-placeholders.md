#ride-placeholders

This mixin will yeld a set of placeholders.

The list:

```
  $block
    display: block
  $border-box
    box-sizing: border-box
  $code-font
    font-family: monospace,serif
    font-size: 1em
  $font-100
    font-weight: 100
  $font-300
    font-weight: 300
  $font-400
    font-weight: 400
  $font-600
    font-weight: 600
  $font-700
    font-weight: 700
  $font-900
    font-weight: 900
  $inline
    display: inline
  $inline-block
    display: inline-block
  $none
    display: none
  $no-outline
    outline: 0
  $no-margin
    margin: 0
  $no-padding
    padding: 0
  $pointer
    cursor: pointer
  $table
    display: table
    $cell
      display: table-cell
    $row
      display: table-row
  $table-cell
    display: table-cell
  $table-row
    display: table-row
  // compound or more comples placeholders
  $above-the-fold
    ride-absolute-page: 0
  $below-the-fold
    ride-absolute-page: 1
    height: auto
  $button
    @extend $inline-block
    @extend $pointer
  $full-background
    background-size: cover
    background-position: center
    background-repeat: repeat-none
  $empty-block
    @extend $block
    content: ''
  $level-100
    z-index: 0
  $level-200
    z-index: 10
  $level-300
    z-index: 20
  $level-400
    z-index: 30
  $level-500
    z-index: 40
  $level-600
    z-index: 50
  $level-700
    z-index: 60
  $level-800
    z-index: 70
  $level-900
    z-index: 80
  $level-1000
    z-index: 80
  $modal-like
    ride-modal-panel: transparent
  $no-horizontal-margin
    margin-horizontal: 0
  $no-vertical-margin
    margin-vertical: 0
  $no-horizontal-padding
    padding-horizontal: 0
  $no-vertical-padding
    padding-vertical: 0
```