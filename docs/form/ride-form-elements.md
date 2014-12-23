#ride-form-elements
this mixin has a {block}

basic usage

```
ride-form-elements($border, $padding)
```

default output

```
input,
textarea,
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 0 none;
}
```

real life example

```
ride-form-elements(1px solid silver, 0 .5em)
```

output

```css
input,
textarea,
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #c0c0c0;
  padding: 0 0.5em;
}
select {
  /*this padding is adjusted by a fixed perc.*/
  padding: 0 0.425em;
}
```