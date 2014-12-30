#form-out-range

This mixin has a {block}

Basic usage

```
+form-out-range()
  // your ruleset
```
  
Real life example
```
+form-out-range()
  color: red
```

Yelds
```
input[type='number']:out-of-range {
  color: #f00;
}
```