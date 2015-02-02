#form-not-valid

*this mixin is aliased to form-invalid*

This mixin has a {block}

Basic usage
```
+form-not-valid()
  // your ruleset
// or
+form-invalid()
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