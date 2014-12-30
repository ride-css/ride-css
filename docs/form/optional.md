#form-optional

This mixin has a {block}

Basic usage
```
+form-optional()
  // your ruleset
```

Real life example
```
+form-optional()
  color: blue
```

Yelds
```
input:optional,
textarea:optional,
select:optional {
  color: #00f;
}
```