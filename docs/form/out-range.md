#form-out-range

This mixin has a {block}

Basic usage

```sass
+form-out-range()
  // your ruleset
```
  
Real life example
```sass
+form-out-range()
  color: red
```

Yelds
```css
input[type='number']:out-of-range {
  color: #f00;
}
```