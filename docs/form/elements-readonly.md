#form-elements-readonly

This mixin has a {block}

Basic usage
```
+form-elements-readonly()
  // my ruleset
```

Real life example
```
+form-elements-readonly()
  background-color #f2f2f2
  color #999
```

yelds
```
input:read-only,
textarea:read-only,
select:read-only {
  background-color: #f2f2f2;
  color: #999;
}
```
