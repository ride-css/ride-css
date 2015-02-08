#form-required

This mixin has a {block}

Basic usage
```sass
+form-required()
  // your ruleset
```

Real life example
```sass
+form-required()
  font-weight: bold
```

Yelds
```css
input:required,
textarea:required,
select:required {
  font-weight: bold;
}
```