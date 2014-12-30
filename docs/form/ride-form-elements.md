#ride-form-elements

This mixin has a {block}

Basic usage
```
ride-form-elements($border, $padding)
```

Mixin parameters

* **$border** (optional, default set to 0 none): the border your form elements will have
* **$padding** (optional, default set to 0): the padding your form elements will have

Real life example
```
ride-form-elements(1px solid silver, 0 .5em)
```

Yelds
```
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