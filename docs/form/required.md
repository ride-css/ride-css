#form-required

This mixin has a {block}

Basic usage
```
+form-required()
  // your ruleset
```

Real life example
```
+form-required()
  font-weight: bold
```

Yelds
```
input:required,
textarea:required,
select:required {
  font-weight: bold;
}
```