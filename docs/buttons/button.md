#button

This mixin has not a {block}

Basic usage
  
```sass
.scope-for-the-button
  button()
```

default output

```css
.scope-for-the-button{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  display: inline-block;
  line-height: 3;
  padding: 0.5em 1em;
  position: relative;
  white-space: nowrap;
}
```

real life example

```sass
.button
  +button()
    padding 1em
  border 1px solid red
  border-radius .318em
  color @border[2]
  transition .2s
  &:hover
    border-color darken(@color, 13)
    color darken(@color, 13)
```