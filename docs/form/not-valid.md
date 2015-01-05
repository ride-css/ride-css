#form-not-valid

This mixin has a {block}

Basic usage
```
+form-not-valid()
  // your ruleset
```

Real life example
```
+form-not-valid()
  color: red
```

Yelds
```
input:invalid,
textarea:invalid,
select:invalid {
  color: #f00;
}
```