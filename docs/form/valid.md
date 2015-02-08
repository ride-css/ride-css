#form-valid

This mixin has a {block}

Basic usage
```sass
+form-valid()
  // your ruleset
```

Real life example
```sass
+form-valid()
  border 1px solid green
```

Yelds
```css
input:valid,
textarea:valid,
select:valid {
  border: 1px solid #008000;
}
```