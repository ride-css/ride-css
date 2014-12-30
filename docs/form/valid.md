#form-valid

This mixin has a {block}

Basic usage
```
+form-valid()
  // your ruleset
```

Real life example
```
+form-valid()
  border 1px solid green
```

Yelds
```
input:invalid,
textarea:invalid,
select:invalid {
  border: 1px solid #008000;
}
```